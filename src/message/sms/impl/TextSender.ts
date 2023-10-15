import { MessageSender } from '../../Message';

export default class TextSender extends MessageSender {
  send(message: string): void {
    console.log(`Sending SMS with the message: ${message}`)
  }
}
