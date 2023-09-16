import fs from 'fs';

import { ICustomerRepository } from './interfaces/ICustomerRepository';
import { Customer } from '../models/Customer';

import config from '../database/config';

export class CustomerRepository implements ICustomerRepository {
  private customers: Customer[] = config?.db?.customers || [];


  save(customer: Customer): Customer {
    fs.writeFileSync('src/database/db.json', JSON.stringify(
      {
        customers: [...this.customers, customer]
      },
      null,
      '\t'),
    );
    this.customers = [...this.customers, customer];
    return customer;
  }
}