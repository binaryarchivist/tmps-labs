import { Order } from '../models/Order';

export interface IOrderService {
  save(product: Readonly<Order>): Order;

  findAll(): Order[] | undefined;
}