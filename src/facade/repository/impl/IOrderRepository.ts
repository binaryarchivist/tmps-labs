import { Order } from '../../models/Order';
import { IRepository } from '../IRepository';

export interface IOrderRepository extends IRepository<Order> {
}