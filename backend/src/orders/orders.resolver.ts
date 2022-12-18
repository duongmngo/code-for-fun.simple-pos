import { Logger } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderInput } from 'src/graphql.schema';
import { Order } from './orders.entity';
import { OrdersService } from './orders.service';

@Resolver('Order')
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query('calculateTotalPrice')
  async calculateTotalPrice(
    @Args('orderInput') orderInput: OrderInput,
  ): Promise<number> {
    return this.ordersService.calcualteTotalPrice(orderInput);    
  }

  @Mutation('checkout')
  async checkout(
    @Args('orderInput') orderInput: OrderInput,
  ): Promise<Order> {
    return this.ordersService.checkOut(orderInput);
  }
}
