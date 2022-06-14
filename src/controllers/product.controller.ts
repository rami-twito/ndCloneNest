import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../app.service';
import { ProductsService } from '../data/entities/product/product.service';
import { Product } from '../data/entities/product/product.entity';

@Controller()
export class ProductController {
  constructor(private productsService:ProductsService ) {}

  @Get('api/products')
  async getProducts(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Get('api/productsByCategoryId/:categoryId')
  async getProductsByCategoryId(@Param('categoryId') categoryId:number): Promise<Product[]> {
    return await this.productsService.filterByCategoryId(categoryId);
  }
}
