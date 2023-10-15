import * as fs from 'fs';

import config from '../../database/config';

import { IOrderRepository } from './IOrderRepository';

import { Order } from '../../models/Order';


export class OrderRepository implements IOrderRepository {
  private orders: Order[] = config?.db?.orders || [];

  findAll(): Order[] {
    return this.orders;
  }

  save(order: Order): Order {
    fs.writeFileSync('src/facade/database/db.json', JSON.stringify(
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