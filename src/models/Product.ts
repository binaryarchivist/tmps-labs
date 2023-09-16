export class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  display(): void {
    console.log(`Product: ${this.name}, Price: ${this.price}`);
  }
}