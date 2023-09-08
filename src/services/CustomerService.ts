import { ICustomerService } from './interfaces/ICustomerService';
import { ICustomerRepository } from '../repositories/interfaces/ICustomerRepository';

export class CustomerService implements ICustomerService {
  constructor(private readonly customerRepository: ICustomerRepository) {
  }

}