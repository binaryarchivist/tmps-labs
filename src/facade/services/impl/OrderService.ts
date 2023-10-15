import { IOrderRepository } from '../../repository/impl/IOrderRepository';
import { IOrderService } from '../IOrderService';
import { Order } from '../../models/Order';

export class OrderService implements IOrderService {
  constructor(private readonly orderRepository: IOrderRepository) {
  }

  findAll(): Order[] | undefined {
    return this.orderRepository.findAll();
  }

  save(order: Readonly<Order>): Order {
    return this.orderRepository.save(order);
  }
}