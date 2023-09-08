import { IOrderService } from '../services/interfaces/IOrderService';

export class OrderController {
  constructor(private readonly orderService: IOrderService) {
  }
}