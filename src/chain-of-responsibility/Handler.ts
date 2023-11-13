import { AppAdminMiddleware, SessionMiddleware } from './Session';

export class Handler {
  private sessionMiddleware: SessionMiddleware;
  private appAdminMiddleware: AppAdminMiddleware;

  constructor() {
    this.sessionMiddleware = new SessionMiddleware();
    this.appAdminMiddleware = new AppAdminMiddleware();
  }

  public async getUser(event: any, context: any) {
    return {
      user: event.user,
    };
  }

  public withMiddlewares(fn: any) {
    return async (event: any, context: any) => {
      try {
        await this.sessionMiddleware.run(event, context, async (event: any, context: any) => {
          await this.appAdminMiddleware.run(event, context, async () => {});
        });
      } catch (error) {
        return error;
      }

      return fn(event, context);
    };
  }
}
