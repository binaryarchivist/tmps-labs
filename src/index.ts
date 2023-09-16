import { ProductRepository } from './repositories/ProductRepository';
import { ProductService } from './services/ProductService';
import { ProductController } from './controllers/ProductController';
import { Product } from './models/Product';

const productRepository: ProductRepository = new ProductRepository();
const productService: ProductService = new ProductService(productRepository);
const productController: ProductController = new ProductController(productService);

const prod: Product = productController.save(new Product('Tes2fat', 123));
console.log(productController.findByName('Test'));