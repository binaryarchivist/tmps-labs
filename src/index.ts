import { GameObject } from './prototype';

import { GameCharacterBuilder, GameCharacter } from './builder';

import { ClassFactory, IClass } from './factory';

const spinner: GameObject = new GameObject('Spinner !', [0, 0]);
spinner.describe();

const anotherSpinner: GameObject = spinner.clone();
anotherSpinner.describe();

const classFactory: ClassFactory = new ClassFactory();
const wizard: IClass = classFactory.createCharacter('Wizard');

const gameCharBuilder: GameCharacterBuilder = new GameCharacterBuilder('Cornel', wizard);
const gameChar: GameCharacter = gameCharBuilder.build();
gameChar.describe();

gameCharBuilder.setWeapon('Atiesh, Greatstaff of the Guardian');
gameChar.describe();

gameCharBuilder.setArmor('the Frostfire Regalia');
gameChar.describe();
gameChar.attack();

const warrior: IClass = classFactory.createCharacter('Warrior');
gameCharBuilder.setWeapon('Thunderfury, Blessed Blade of the Windseeker\n');
gameCharBuilder.setClass(warrior);
gameCharBuilder.setArmor('the Dreadnaught Battlegear');

gameChar.describe();
gameChar.attack();
