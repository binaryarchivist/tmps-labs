import { Product } from '../../models/Product';
import { IRepository } from './IRepository';

export interface IProductRepository extends IRepository<Product> {
  findByName(name: string): Product | undefined;
}
