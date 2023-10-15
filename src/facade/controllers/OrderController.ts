import { IOrderService } from '../services/IOrderService';
import { Order } from '../models/Order';

export class OrderController {
  constructor(private readonly orderService: IOrderService) {
  }

  findAll(): Order[] | undefined {
    return this.orderService.findAll();
  }

  save(order: Order): Order {
    return this.orderService.save(order);
  }
}