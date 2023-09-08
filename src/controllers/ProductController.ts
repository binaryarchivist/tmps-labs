import { IProductService } from '../services/interfaces/IProductService';

export class ProductController {
  constructor(private readonly productService: IProductService) {
  }
}