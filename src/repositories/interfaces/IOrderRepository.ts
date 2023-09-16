import { IRepository } from './IRepository';
import { Order } from '../../models/Order';

export interface IOrderRepository extends IRepository<Order> {
}
