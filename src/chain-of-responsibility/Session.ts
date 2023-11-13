import { createResponse } from './utils';
import Jwt from './Jwt';

class Middleware {
  protected jwt: Jwt = new Jwt();

  async run(event: any, context: any, next: any) {
    throw new Error('run method must be implemented');
  }
}

class SessionMiddleware extends Middleware {
  constructor() {
    super();
  }

  async run(event: any, context: any, next: any) {
    const token = event.headers.Authorization;

    if (!token.split(' ')[1]) {
      throw createResponse(403, {}, 'You have to be authenticated, in order to access this resource');
    }

    try {
      const decoded = await this.jwt
        .checkToken(token.split(' ')[1]);

      event.user = {
        ...decoded
      };

      return next(event, context);
    } catch (err) {
      throw createResponse(401, {}, 'Your session has expired');
    }
  }
}

class AppAdminMiddleware extends Middleware {
  async run(event: any, context: any, next: any) {
    if (event.user.role !== 'APPADM') {
      throw createResponse(403, {}, 'You lack privileges to access this resource');
    }
    return next(event, context);
  }
}

export { SessionMiddleware, AppAdminMiddleware };
