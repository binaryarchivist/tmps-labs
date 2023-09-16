import { IRepository } from './IRepository';
import { Customer } from '../../models/Customer';

export interface ICustomerRepository extends Omit<IRepository<Customer>, 'findAll'> {
}