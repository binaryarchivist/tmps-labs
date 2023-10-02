import { Logger, LogLevel } from '../logger';

interface ICloneable {
  clone(): ICloneable;
}

export default class GameObject implements ICloneable {
  private logger: Logger;
  constructor(private sprite: string, private position: [number, number]) {
    this.logger = Logger.getInstance();
  }

  clone(): GameObject {
    return new GameObject(this.sprite, this.position);
  }

  describe(): void {
    this.logger.setLogLevel(LogLevel.INFO);
    this.logger.info(`Sprite: ${this.sprite}, Position: ${this.position}`);
  }
}