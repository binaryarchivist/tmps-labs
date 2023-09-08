import { IProductService } from './interfaces/IProductService';
import { IProductRepository } from '../repositories/interfaces/IProductRepository';

export class ProductService implements IProductService {
  constructor(private readonly productRepository: IProductRepository) {
  }
  
}