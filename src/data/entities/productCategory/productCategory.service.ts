import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './productCategory.entity';

@Injectable()
export class ProductCategoriesService {
  constructor(
    //@InjectRepository(User)
   // private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<ProductCategory[]> {
    return ProductCategory.find();
  }

  findOne(id: number): Promise<ProductCategory> {
    return ProductCategory.findOneBy({id:id});
  }

  async remove(id: string): Promise<void> {
    await ProductCategory.delete(id);
  }
}