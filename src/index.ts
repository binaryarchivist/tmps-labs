import { ErrorAdapter, ThirdPartyError } from './error/ErrorAdapter';
import { INotifier } from './notifier/notifier.interface';
import Notifier from './notifier/Notifier';
import { SlackNotifier } from './notifier/slack-notifier';
import { EmailNotifier } from './notifier/email-notifier';
import { EmailMessage, EmailSender, TextMessage, TextSender } from './message';
import { OrderRepository } from './facade/repository/impl/OrderRepository';
import { OrderService } from './facade/services/impl/OrderService';
import { OrderController } from './facade/controllers/OrderController';


// ADAPTER
try {
  throw new ThirdPartyError('Resource not found', 404);
} catch (error) {
  const adaptedError = ErrorAdapter.adapt(error);
  console.error(adaptedError);
}

// DECORATOR
const clientNotification = (notifier: INotifier): void => {
  console.log(notifier.notify('Hello'));
  console.log('\n');
};

const notifier = new Notifier();
clientNotification(notifier);

const emailNotifier = new EmailNotifier(notifier);
clientNotification(emailNotifier);

const slackNotifier = new SlackNotifier(emailNotifier);
clientNotification(slackNotifier);


// BRIDGE
const smsSender = new TextSender();
const mailSender = new EmailSender();

const textMessage = new TextMessage('Hello via SMS!', smsSender);
textMessage.send();

const emailMessage = new EmailMessage('Hello via Mail!', mailSender);
emailMessage.send();


// FACADE ( REPOSITORY )
const orderRepository: OrderRepository = new OrderRepository();
const orderService: OrderService = new OrderService(orderRepository);
const orderController: OrderController = new OrderController(orderService);

orderController.save({ name: 'Test', price: 100 });
console.log(orderController.findAll());