import GameCharacter from './GameCharacter';
import { IClass } from '../factory';

interface ICharacterBuilder {
  setWeapon(weapon: string): void;
  setArmor(armor: string): void;
  setTrinkets([trinketOne, trinketTwo]: [string, string]): void;
  setClass(classProps: IClass): void;
  build(): GameCharacter;
}

export default class GameCharacterBuilder implements ICharacterBuilder {
  private readonly char: GameCharacter;

  constructor(name: string, classProps: IClass) {
    this.char = new GameCharacter(name, classProps);
  }

  build(): GameCharacter {
    return this.char;
  }

  setArmor(armor: string): void {
    this.char.armor = armor;
  }

  setTrinkets([trinketOne, trinketTwo]: [string, string]): void {
    this.char.trinkets = [trinketOne, trinketTwo];
  }

  setWeapon(weapon: string): void {
    this.char.weapon = weapon;
  }

  setClass(classProps: IClass) {
    this.char.class = classProps;
  }
}