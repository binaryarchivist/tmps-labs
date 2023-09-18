# Topic: *SOLID Principles*
## Author: *Nastas Corneliu*

------
## Objectives:
&ensp; &ensp; __1. Study and understand the SOLID Principles.__

&ensp; &ensp; __2. Choose a domain, define its main classes/models/entities and choose the appropriate instantiation mechanisms.__

&ensp; &ensp;__3. Create a sample project that respects SOLID Principles.__

## Theory:
&ensp; &ensp; SOLID is a set of five object-oriented design principles intended to make software designs more maintainable, flexible, and easy to understand. The acronym stands for Single Responsibility Principle, Open-Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion Principle. Each principle addresses a specific aspect of software design, such as the organization of responsibilities, the handling of dependencies, and the design of interfaces. By following these principles, software developers can create more modular, testable, and reusable code that is easier to modify and extend over time. These principles are widely accepted and adopted in the software development community and can be applied to any object-oriented programming language.

## Main tasks:
&ensp; &ensp; __1. Choose an OO programming language and a suitable IDE or Editor (No frameworks/libs/engines allowed).__

&ensp; &ensp; __2. Select a domain area for the sample project.__

&ensp; &ensp; __3. Define the main involved classes and think about what instantiation mechanisms are needed.__

&ensp; &ensp; __4. Respect SOLID Principles in your project.__

## Implementation:
### SOLID Principles:
&ensp; &ensp; __1. Single Responsibility Principle:__ Each class has a single responsibility. For example OrderService only deals with order-related logic.

#### Implementation

```typescript
export class ProductService implements IProductService {
  constructor(private readonly productRepository: IProductRepository) {
  }

  save(product: Readonly<Product>): Product {
    const isValid: boolean = this.validate(product);
    if (!isValid) {
      throw new Error('Product already exists');
    }

    return this.productRepository.save(product);
  }

  findByName(name: string): Product | undefined {
    return this.productRepository.findByName(name);
  }

  validate(product: Readonly<Product>): boolean {
    const { name } = product;
    const productAlreadyExists = this.findByName(name);

    return !productAlreadyExists;
  }
}
```

In the ProductService class we will find all the logic related of the Products


&ensp; &ensp; __2. Open/Closed Principle:.__ 

Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
The best example where we can show the OCP principle is when classes will depend on specific interfaces instead of something more concrete.

In my example I have a IRepository interface which later was extended to accommodate the IProductRepository.
```typescript
export interface IRepository<T> {
  findAll(): T[];

  save(record: T): T;
}
```

```typescript
export interface IProductRepository extends IRepository<Product> {
  findByName(name: string): Product | undefined;
}

```
#### Implementation

&ensp; &ensp; __3. Liskov Substitution Principle:__ For example all Repository classes have their own interfaces, so basically any subclass of given interface should be able to replace that class.

```typescript
export interface IRepository<T> {
  findAll(): T[];

  save(record: T): T;
}


export interface IProductRepository extends IRepository<Product> {
  findByName(name: string): Product | undefined;
}

export class ProductRepository implements IProductRepository {...}

export class ProductService implements IProductService {
  constructor(private readonly productRepository: IProductRepository) {
  }
}

const productRepository: ProductRepository = new ProductRepository();
const productService: ProductService = new ProductService(productRepository);
const productController: ProductController = new ProductController(productService);

console.log(productController.findByName('Tes2fat')); // { name: 'Tes2fat', price: 123 }


```
&ensp; &ensp; __4. Interface Segregation Principle:__ Each service and repository have their own interfaces ensuring they don't have to implement methods they aren't going to use.
&ensp; &ensp; __5. Dependency Inversion Principle:__ High-level modules (like services) depend on abstractions (like interfaces), not on low-level modules (like repositories).
