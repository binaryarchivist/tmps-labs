import { IProductService } from '../services/interfaces/IProductService';
import { Product } from '../models/Product';

export class ProductController {
  constructor(private readonly productService: IProductService) {
  }

  findByName(name: Readonly<string>): Product | undefined {
    return this.productService.findByName(name);
  }

  save(product: Product): Product {
    return this.productService.save(product);
  }
}