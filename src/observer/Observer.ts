import { ISubject, Newsletter } from './Subject';

export interface IObserver {
  update(subject: ISubject): void;
}

export class Citizen {
  private readonly name: string;
  private readonly interestedTopics: string[] = [];

  constructor(name: string, interestedTopics: string[]) {
    this.name = name;
    this.interestedTopics = interestedTopics;
  }
  public update(subject: ISubject): void {
    if (subject instanceof Newsletter) {
      const matchesInterest = this.interestedTopics.some(element => {
        return subject.state.includes(element);
      })

      if (matchesInterest) {
        console.log(`Citizen ${this.name}: Reacted to the event about ${subject.state}.`);
      }
    }
  }
}