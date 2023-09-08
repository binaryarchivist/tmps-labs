import { IOrderService } from './interfaces/IOrderService';
import { IOrderRepository } from '../repositories/interfaces/IOrderRepository';

export class OrderService implements IOrderService {
  constructor(private readonly orderRepository: IOrderRepository) {
  }

}