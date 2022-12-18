import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import IPaginationOption from 'src/common/interface/pagination-option';
import { Repository } from 'typeorm';
import { Customer } from './customers.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) { }

  async create(): Promise<Customer> {
    return;
  }

  async search(keyword: string, paginationOps: IPaginationOption): Promise<Customer[]> {
    return this.customersRepository
      .createQueryBuilder('customer')
      .where(`customer.name ilike '${keyword}%'`)
      .limit(paginationOps.offset)
      .skip(paginationOps.firstIdx)
      .getMany();
  }
}
