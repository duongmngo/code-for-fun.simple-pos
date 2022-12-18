import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderInput, Product } from 'src/graphql.schema';
import { ProductsService } from 'src/products/products.service';
import { Repository } from 'typeorm';
import CheckoutHelper from './checkout.helper';
import { OrderItem } from './order-items.entity';
import { Order } from './orders.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    private readonly productsService: ProductsService,
  ) { }

  async checkOut(orderInput: OrderInput): Promise<Order> {
    Logger.log(`checkout ${JSON.stringify(orderInput)}`);
    const newOrder = new Order();
    newOrder.items = []
    const cc: CheckoutHelper = new CheckoutHelper();
    const { items } = orderInput;
    for (let item of items) {
      const product = await this.productsService.findById(item.productId)
      cc.add(product, item.qty);
      const newOrderItem = new OrderItem();
      newOrderItem.product = product;
      // Track the price when checkout in order detail
      newOrderItem.checkoutPrice = newOrderItem.product.retailPrice;
      newOrderItem.qty = item.qty;
      newOrder.items.push(newOrderItem);
    }

    if (orderInput.customerId) {
      // newOrder.customer
    }
    
    newOrder.totalPrice = cc.total();
    const createdOrder = await this.ordersRepository.save(newOrder);
    Logger.log(`createdOrder: ${JSON.stringify(createdOrder)}`);
    return createdOrder
  }

  async calcualteTotalPrice(orderInput: OrderInput): Promise<number> {
    const cc: CheckoutHelper = new CheckoutHelper();
    const { items } = orderInput;
    for (let item of items) {
      const product = await this.productsService.findById(item.productId)
      cc.add(product, item.qty);
    }
    return cc.total();
  }

}
