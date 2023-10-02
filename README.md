# Topic: *Creational Design Patterns*
## Author: *Nastas Corneliu*
------
## Objectives:
&ensp; &ensp; __1. Study and understand the Creational Design Patterns.__

&ensp; &ensp; __2. Choose a domain, define its main classes/models/entities and choose the appropriate instantiation mechanisms.__

&ensp; &ensp; __3. Use some creational design patterns for object instantiation in a sample project.__

## Some Theory:
&ensp; &ensp; Creational design patterns are a category of design patterns that focus on the process of object creation. They provide a way to create objects in a flexible and controlled manner, while decoupling the client code from the specifics of object creation. Creational design patterns address common problems encountered in object creation, such as how to create objects with different initialization parameters, how to create objects based on certain conditions, or how to ensure that only a single instance of an object is created. There are several creational design patterns that have their own strengths and weaknesses. Each of it is best suited for solving specific problems related to object creation. By using creational design patterns, developers can improve the flexibility, maintainability, and scalability of their code.

&ensp; &ensp; Some examples of this kind of design patterns are:

* Singleton
* Builder
* Prototype
* Factory Method

## Main tasks:
&ensp; &ensp; __1. Choose an OO programming language and a suitable IDE or Editor (No frameworks/libs/engines allowed).__

&ensp; &ensp; __2. Select a domain area for the sample project.__

&ensp; &ensp; __3. Define the main involved classes and think about what instantiation mechanisms are needed.__

&ensp; &ensp; __4. Based on the previous point, implement at least 2 creational design patterns in your project.__

## Implementation:

### Singleton 
* Restricts the instantiation of a class and ensures that only one instance of the class exists. In my case I chose to implement a `Logger` class that logs various information. We define logger as propriety and get its instance if there is any and use it to log information.

### Prototype
* The Prototype Pattern is a creational design pattern that allows an object to copy itself. By returning a new instance with same proprieties we essentially "clone" the current instance.

### Factory
* The Factory Pattern takes care of object creation and delivers the newly constructed instances ready for use, abstracting the object creation complexities from the consumer.
  * I've implemented the Factory class following these steps:
    * Implementing a `IClass` interface which will be the glue between all the classes in Factory.
    * Implement concrete classes under `IClass` interface: `Warrior` and `Wizard`
    * Finally define the Factory class that returns a specific class based on type passed to it.

### Builder
* The Builder Pattern is a creational design pattern that lets us construct complex objects step by step. It's a great way to avoid constructor "pollution" and re-instantiating everything.
  * It was implemented by first creating a `GameCharacter` class with different proprieties
  * We need an interface for the Builder and that's where `ICharacterBuilder` comes into play, basically define methods for assigning character props.
  * Last but not least part: the `GameCharacterBuilder` which implements the above interface.


## Conclusion

During this laboratory work I've had some fun building interesting classes that might be actual real world examples and got to study about these design patterns in great detail.
