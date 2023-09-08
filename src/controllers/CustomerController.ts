import { ICustomerService } from '../services/interfaces/ICustomerService';

export class CustomerController {
  constructor(private readonly customerService: ICustomerService) {
  }

}