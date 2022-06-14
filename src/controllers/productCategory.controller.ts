import { Controller, Get } from '@nestjs/common';
import { ProductCategoriesService } from '../data/entities/productCategory/productCategory.service';
import { ProductCategory } from '../data/entities/productCategory/productCategory.entity';

@Controller()
export class ProductCategoryController {
  constructor(private productCategoriesService:ProductCategoriesService ) {}

  @Get('api/productCategories')
  async getUsers(): Promise<ProductCategory[]> {
    return await this.productCategoriesService.findAll();
  }
}
