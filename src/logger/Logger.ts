import { LogLevel } from './logger.types';

export default class Logger {
  private static instance: Logger;
  private logLevel: LogLevel = LogLevel.INFO;

  constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  public debug(message: string): void {
    if (this.logLevel <= LogLevel.DEBUG) {
      console.debug(`DEBUG: ${message}`);
    }
  }

  public info(message: string): void {
    if (this.logLevel <= LogLevel.INFO) {
      console.info(`INFO: ${message}`);
    }
  }

  public warn(message: string): void {
    if (this.logLevel <= LogLevel.WARN) {
      console.warn(`WARN: ${message}`);
    }
  }

  public error(message: string): void {
    if (this.logLevel <= LogLevel.ERROR) {
      console.error(`ERROR: ${message}`);
    }
  }
}

