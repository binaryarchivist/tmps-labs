"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorAdapter_1 = require("./error/ErrorAdapter");
var Notifier_1 = require("./notifier/Notifier");
var slack_notifier_1 = require("./notifier/slack-notifier");
var email_notifier_1 = require("./notifier/email-notifier");
var message_1 = require("./message");
var OrderRepository_1 = require("./facade/repository/impl/OrderRepository");
var OrderService_1 = require("./facade/services/impl/OrderService");
var OrderController_1 = require("./facade/controllers/OrderController");
// ADAPTER
try {
    // Some code that throws a ThirdPartyError
    throw new ErrorAdapter_1.ThirdPartyError('Resource not found', 404);
}
catch (error) {
    var adaptedError = ErrorAdapter_1.ErrorAdapter.adapt(error);
    console.error(adaptedError);
}
// DECORATOR
var clientNotification = function (notifier) {
    console.log(notifier.notify('Hello'));
    console.log('\n');
};
var notifier = new Notifier_1.default();
clientNotification(notifier);
var emailNotifier = new email_notifier_1.EmailNotifier(notifier);
clientNotification(emailNotifier);
var slackNotifier = new slack_notifier_1.SlackNotifier(emailNotifier);
clientNotification(slackNotifier);
// BRIDGE
var smsSender = new message_1.TextSender();
var mailSender = new message_1.EmailSender();
var textMessage = new message_1.TextMessage('Hello via SMS!', smsSender);
textMessage.send();
var emailMessage = new message_1.EmailMessage('Hello via Mail!', mailSender);
emailMessage.send();
var orderRepository = new OrderRepository_1.OrderRepository();
var orderService = new OrderService_1.OrderService(orderRepository);
var orderController = new OrderController_1.OrderController(orderService);
orderController.save({ name: 'Test', price: 100 });
console.log(orderController.findAll());
