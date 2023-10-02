import { IClass } from './class.types';
import { Logger, LogLevel } from '../logger';

export default class Warrior implements IClass {
  className: string;
  logger: Logger;

  constructor() {
    this.className = 'Warrior';
    this.logger = Logger.getInstance();
  }

  attack(): void {
    this.logger.setLogLevel(LogLevel.WARN);
    this.logger.warn(`Take a knee, peasant.`);
  }
}