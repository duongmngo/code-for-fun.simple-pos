import { Args, Query, Resolver } from '@nestjs/graphql';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@Resolver('Product')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) { }

  @Query('products')
  async getProducts(
    @Args('firstIdx') firstIdx: number,
    @Args('offset') offset: number,
  ): Promise<Product[]> {
    console.log(`Load products: ${JSON.stringify({ firstIdx, offset })}`);
    return this.productsService.findAll({ firstIdx, offset });
  }
}
