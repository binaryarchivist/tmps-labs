import { IObserver } from './Observer';

export interface ISubject {
  subscribe(observer: IObserver): void;

  unsubscribe(observer: IObserver): void;

  notify(): void;
}

export class Newsletter implements ISubject {

  private observers: IObserver[] = [];
  state: string[] = [];

  public subscribe(observer: IObserver): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer is already subscribed.');
    }

    console.log('Subject: Subscribed a new observer.');
    this.observers.push(observer);
  }

  public unsubscribe(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log(`Subject: Observer doesn't exist` );
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: Observer unsubscribed.');
  }
  public notify(): void {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public release(topic: string[]): void {
    this.state = topic;

    console.log(`Subject: News coming in about: ${this.state}`);
    this.notify();
    this.state = [];
  }
}