import { INotifier } from './notifier.interface';

export default class NotifierDecorator implements INotifier {
  protected component: INotifier;

  constructor(component: INotifier) {
    this.component = component;
  }

  notify(message: string): void {
    return this.component.notify(message);
  }

}