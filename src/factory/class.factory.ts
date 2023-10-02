import Warrior from './Warrior';
import { IClass } from './class.types';
import Wizard from './Wizard';
import { Logger, LogLevel } from '../logger';

export default class ClassFactory {
  private logger: Logger;

  constructor() {
    this.logger = Logger.getInstance();
  }
  createCharacter(type: string): IClass {
    this.logger.setLogLevel(LogLevel.ERROR);
    switch (type) {
      case 'Warrior': return new Warrior();
      case 'Wizard': return new Wizard();
      default: this.logger.error('You must choose a valid class wise one.')
    }
  }
}