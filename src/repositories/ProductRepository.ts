import * as fs from 'fs';

import { IProductRepository } from './interfaces/IProductRepository';
import { Product } from '../models/Product';

import config from '../database/config';

export class ProductRepository implements IProductRepository {

  private products: Product[] = config?.db?.products || [];

  findAll(): Product[] {
    return this.products;
  }

  findByName(name: string): Product | undefined {
    return this.products?.find(prod => prod.name === name);
  }

  save(product: Product): Product {
    fs.writeFileSync('src/database/db.json', JSON.stringify(
      {
        products: [...this.products, product]
      },
      null,
      '\t'),
    );
    this.products = [...this.products, product];
    return product;
  }
}