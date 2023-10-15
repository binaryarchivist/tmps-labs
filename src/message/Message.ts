export abstract class Message {
  protected content: string;
  protected sender: MessageSender;

  protected constructor(content: string, sender: MessageSender) {
    this.content = content;
    this.sender = sender;
  }

  abstract send(): void;
}

export abstract class MessageSender {
  abstract send(message: string): void;
}
