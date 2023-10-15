import { Message, MessageSender } from '../Message';

export default class TextMessage extends Message {
  constructor(content: string, sender: MessageSender) {
    super(content, sender);
  }

  send() {
    this.sender.send(this.content);
  }
}
