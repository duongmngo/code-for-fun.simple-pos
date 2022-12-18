import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IS_DEV_MODE } from './common/config';
import { Customer } from './customers/customers.entity';
import { CustomersModule } from './customers/customers.module';
import { OrderItem } from './orders/order-items.entity';
import { Order } from './orders/orders.entity';
import { OrdersModule } from './orders/orders.module';
import { Product } from './products/products.entity';
import { ProductsModule } from './products/products.module';
import { PromotionCode } from './promotion-code/promotion-code.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Product, Order, Customer, PromotionCode, OrderItem],      
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: IS_DEV_MODE,
    }),
    ProductsModule,
    OrdersModule,
    CustomersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
