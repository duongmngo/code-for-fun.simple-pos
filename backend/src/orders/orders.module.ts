import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from 'src/products/products.module';
import { Order } from './orders.entity';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';

@Module({
  imports: [ProductsModule, TypeOrmModule.forFeature([Order])],
  controllers: [],
  providers: [OrdersService, OrdersResolver],
})
export class OrdersModule { }
