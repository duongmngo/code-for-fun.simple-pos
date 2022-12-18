import { Args, Query, Resolver } from '@nestjs/graphql';
import { Customer } from './customers.entity';
import { CustomersService } from './customers.service';

@Resolver('Customer')
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Query('findCustomers')
  async findCustomers(
    @Args('search') search: string,
  ): Promise<Customer[]> {
    return this.customersService.search(search, {offset: 30, firstIdx: 0});
  }
}
