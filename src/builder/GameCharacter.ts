import { Logger, LogLevel } from '../logger';
import { IClass } from '../factory';

export default class GameCharacter {
  name: string;
  class: IClass;
  weapon?: string;
  armor?: string;
  trinkets?: [string, string];

  private logger: Logger;

  constructor(name: string, className: IClass) {
    this.name = name;
    this.class = className;
    this.logger = Logger.getInstance();
  }

  describe(): void {
    this.logger.setLogLevel(LogLevel.INFO);
    this.logger.info(`
    My name is ${this.name} and I am a ${this.class.className} !
    ${this.weapon ? `Be careful as I am equipped with ${this.weapon}` : ''}
    ${this.armor ? this.weapon ? `And protected by ${this.armor}!` : `I am protected by ${this.armor}!` : ''}
    ${this.trinkets ? `Don't forget that I am powered by ${this.trinkets.map(trinket => trinket)}`  : ''}
    `);
  }

  attack(): void {
    this.class.attack();
  }
}