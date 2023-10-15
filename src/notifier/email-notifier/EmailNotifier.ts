import NotifierDecorator from '../NotifierDecorator';

export default class EmailNotifier extends NotifierDecorator {
  notify(message: string) {
    return `Email Notification: ${message} \n${super.notify(message)}`
  }
}