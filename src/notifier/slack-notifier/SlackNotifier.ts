import NotifierDecorator from '../NotifierDecorator';

export default class SlackNotifier extends NotifierDecorator {
  notify(message: string) {
    return `Slack Notification: ${message} \n${super.notify(message)}`
  }
}