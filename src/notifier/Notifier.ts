import { INotifier } from './notifier.interface';

export default class Notifier implements INotifier {
  notify(message) {
    return `Notification: ${message}`;
  }
}
