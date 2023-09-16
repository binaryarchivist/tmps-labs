import fs from 'fs';

import { IOrderRepository } from './interfaces/IOrderRepository';
import { Order } from '../models/Order';

import config from '../database/config';

export class OrderRepository implements IOrderRepository {
  private orders: Order[] = config?.db?.orders || [];

  findAll(): Order[] {
    return this.orders;
  }

  save(order: Order): Order {
    fs.writeFileSync('src/database/db.json', JSON.stringify(
      {
        orders: [...this.orders, order]
      },
      null,
      '\t'
      ),
    );
    this.orders = [...this.orders, order];
    return order;
  }
}