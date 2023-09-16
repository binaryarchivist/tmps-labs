import { IProductService } from './interfaces/IProductService';
import { IProductRepository } from '../repositories/interfaces/IProductRepository';
import { Product } from '../models/Product';

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