export interface IMemento {
  getState(): string;

  getDate(): string;
}

class Memento implements IMemento {
  private readonly state: string = 'Initial state';

  private readonly date: string;

  constructor(state: string) {
    this.state = state || 'Initial state';
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }


  public getState(): string {
    return this.state;
  }

  public getDate(): string {
    return this.date;
  }
}

export class Originator {
  private state: string | undefined;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator: Initial State: ${state}`);
  }

  public update(): void {
    console.log(`Originator: Changing State from: ${this.state}`);
    this.state = this.generateRandomString();
    console.log(`Originator: Changed State to: ${this.state}`);
  }

  private generateRandomString(length: number = 10): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  public save(): Memento {
    return new Memento(this.state as any);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator: Restored state to: ${this.state}`);
  }
}

export class Pacient {
  private mementos: Memento[] = [];

  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    console.log('\nPacient: Saving Originator\'s state...');
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }
    const memento = this.mementos.pop();

    console.log(`Caretaker: Restoring state to: ${memento?.getState()}`);
    this.originator.restore(memento as any);
  }

  public showHistory(): void {
    console.log('Caretaker: Here\'s the list of mementos:');
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}