# Topic: *Structural Design Patterns*
## Author: *Nastas Corneliu*
------
## Objectives:
&ensp; &ensp; __1. Study and understand the Structural Design Patterns.__

&ensp; &ensp; __2. As a continuation of the previous laboratory work, think about the functionalities that your system will need to provide to the user.__

&ensp; &ensp; __3. Implement some additional functionalities, or create a new project using structural design patterns.__

## Theoretical background:
&ensp; &ensp; Structural design patterns are a category of design patterns that focus on the composition of classes and objects to form larger structures and systems. They provide a way to organize objects and classes in a way that is both flexible and efficient, while allowing for the reuse and modification of existing code. Structural design patterns address common problems encountered in the composition of classes and objects, such as how to create new objects that inherit functionality from existing objects, how to create objects that share functionality without duplicating code, or how to define relationships between objects in a flexible and extensible way.

&ensp; &ensp; Some examples of from this category of design patterns are:

* Adapter
* Bridge
* Composite
* Decorator
* Facade
* Flyweight
* Proxy

## Main tasks:
&ensp; &ensp; __1. By creating a new project, or extending your last one (Lab work Nr2), implement at least 2 structural design patterns in your project:__
* The implemented design pattern should help to perform the tasks involved in your system.
* The object creation mechanisms/patterns can now be buried into the functionalities instead of using them into the client.
* There should only be one client for the whole system.

&ensp; &ensp; __2. Keep your files grouped (into packages/directories) by their responsibilities (an example project structure):__
* client
* domain
  * factories
  * builder
  * models
* utilities
* data(if applies)

&ensp; &ensp; __3. Document your work in a separate markdown file according to the requirements presented below (the structure can be extended of course):__
* Topic of the laboratory work
* Author
* Introduction/Theory/Motivation
* Implementation & Explanation (you can include code snippets as well)
  * Indicate the location of the code snippet
  * Emphasize the main idea and motivate the usage of the pattern
* Results/Screenshots/Conclusions

## Implementation

### Adapter
The Adapter Design Pattern is a structural design pattern that allows two incompatible interfaces to work together. This pattern involves a single class called Adapter which joins functionalities of independent or incompatible interfaces.

When integrating third-party libraries or external services into your application, it's common to encounter data structures or error formats that don't match the needs of your application.

In my case:

* ThirdPartyError: Represents errors from external library
* AppError: Represents the errors format in my application

#### Adapter Implementation
```typescript
export class ThirdPartyError {
  public message: string;
  public code: number;
  constructor(message, code) {
    this.message = message;
    this.code = code;
  }
}

export class AppError {
  public message: string;
  public errorCode: number;
  public statusCode: number;

  constructor(message: string, errorCode: number, statusCode: number) {
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}

export class ErrorAdapter {
  static adapt(error: ThirdPartyError | AppError): AppError {
    if (error instanceof ThirdPartyError) {
      let statusCode;

      switch (error.code) {
        case 404:
          statusCode = 404;
          break;
        case 500:
          statusCode = 500;
          break;
        default:
          statusCode = 400;
      }

      return new AppError(error.message, error.code, statusCode);
    }
    return error;
  }
}
```

This way we've adapted the errors to our needs.

### Bridge

The Bridge pattern is a structural design pattern that aims to decouple an abstraction from its implementation, allowing the two to vary independently. This is achieved by splitting the responsibilities into two separate hierarchies - the abstraction and the implementation.

In my case `Message` is the abstraction while `MessageSender` is its implementation.

#### Structure
1. **Abstraction (`Message`)**: This abstract class defines the abstraction's structure and maintains a reference to an object of type `MessageSender`.
2. **ConcreteAbstraction (`TextMessage`, `EmailMessage`)**: These classes extend the `Message` abstraction and implement the `send` method.
3. **Implementor (`MessageSender`)**: This abstract class defines the structure for the concrete implementations.
4. **ConcreteImplementor (`TextSender`, `EmailSender`)**: These classes extend the `MessageSender` and provide concrete implementations.

#### Benefits
1. Flexible
2. Single Responsibility
3. Separation of concern: Decouples abstract classes from its concrete implementation

### Facade

The Facade pattern is a structural design pattern that provides a simplified interface to a complex subsystem. It doesn't suppress the subsystem; instead, it provides a simplified API over a set of interfaces, making the subsystem easier to use.

In my implementation `OrderRepository` can be seen as a Facade that simplifies the interaction with the database for the purpose of saving and retrieving orders.

#### Structure
1. **Facade (`OrderRepository`)**: Offers simplified methods to deal with the underlying complex operations of reading and writing orders to a database.
2. **Sub-system Interfaces (`IRepository`, `IOrderRepository`)**: Set of interfaces defining the operations that the facade uses.

#### Benefits
1. Simplification
2. Separation of Concerns, also Dependency Inversion principle can be applied here and Single Responsibility.
3. Reusability

### Decorator

The Decorator pattern is a structural design pattern that allows you to dynamically add new behaviors or responsibilities to objects without altering their code. This is achieved by creating a set of decorator classes that are used to wrap concrete components.

In my case the `INotifier` interface represents a component that can send notifications.

The `Notifier` class implements this interface and provides basic implementation of `notify` method.

The `NotifierDecorator` and its subclasses: `EmailNotifier` and `SlackNotifier` act as decorators enhancing the `Notifier` class


#### Structure
1. **Component (`INotifier`)**: This defines the interface for objects that can have responsibilities added to them dynamically.
2. **ConcreteComponent (`Notifier`)**: This is the main object to which new responsibilities can be added.
3. **Decorator (`NotifierDecorator`)**: Maintains a reference to a Component object and defines an interface that conforms to the Component's interface.
4. **ConcreteDecorator (`SlackNotifier`, `EmailNotifier`)**: These extend the base `NotifierDecorator` to add new functionalities.


#### Benefits
1. Flexible
2. Extensible
3. Composition is better than inheritance (in my honest opinion)


