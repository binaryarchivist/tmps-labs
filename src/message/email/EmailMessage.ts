import { Message, MessageSender } from '../Message';

export default class EmailMessage extends Message {
  content: string;
  sender: MessageSender;

  constructor(content: string, sender: MessageSender) {
    super(content, sender);
  }

  send() {
    this.sender.send(`Email: ${this.content}`);
  }
}
