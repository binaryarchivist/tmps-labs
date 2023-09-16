import { Product } from '../../models/Product';

export interface IProductService {
  save(product: Readonly<Product>): Product;

  findByName(name: string): Product | undefined;

  validate(product: Readonly<Product>): boolean;
}