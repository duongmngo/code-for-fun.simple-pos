import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customers.entity';
import { CustomersResolver } from './customers.resolver';
import { CustomersService } from './customers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [],
  providers: [CustomersService, CustomersResolver],
})
export class CustomersModule {}
