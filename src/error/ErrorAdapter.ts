// An adapter can be used to adapt a different structure to the application needs.
// This can be demonstrated when we are getting a specific error format from a library but our application has another

export class ThirdPartyError {
  public message: string;
  public code: number;
  constructor(message, code) {
    this.message = message;
    this.code = code;
  }
}

export class AppError {
  public message: string;
  public errorCode: number;
  public statusCode: number;
  constructor(message, errorCode, statusCode) {
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}

export class ErrorAdapter {
  static adapt(error) {
    if (error instanceof ThirdPartyError) {
      let statusCode;

      switch (error.code) {
        case 404:
          statusCode = 404;
          break;
        case 500:
          statusCode = 500;
          break;
        default:
          statusCode = 400;
      }

      return new AppError(error.message, error.code, statusCode);
    }
      return error;
  }
}
