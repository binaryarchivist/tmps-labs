import { IClass } from './class.types';
import { Logger, LogLevel } from '../logger';

export default class Wizard implements IClass {
  className: string;
  logger: Logger;

  constructor() {
    this.className = 'Wizard';
    this.logger = Logger.getInstance();
  }

  attack(): void {
    this.logger.setLogLevel(LogLevel.WARN);
    this.logger.warn('Fire in the hole!')
  }
}