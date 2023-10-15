import { MessageSender } from '../../Message';

export default class EmailSender extends MessageSender {
  send(message: string): void {
    console.log(`Sending email with the message: ${message}`);
  }
}
