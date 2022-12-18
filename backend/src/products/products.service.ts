import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import IPaginationOption from 'src/common/interface/pagination-option';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) { }

  async create(): Promise<Product> {
    return;
  }

  async findAll(paginationOps: IPaginationOption): Promise<Product[]> {
    return this.productsRepository
      .createQueryBuilder('product')
      .limit(paginationOps.offset)
      .skip(paginationOps.firstIdx)
      .getMany();
  }

  async findById(id: string): Promise<Product> {
    return this.productsRepository.findOneBy({ id });
  }
}
