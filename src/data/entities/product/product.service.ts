import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    //@InjectRepository(User)
   // private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<Product[]> {
    return Product.find();
  }

  findOne(id: number): Promise<Product> {
    return Product.findOneBy({id:id});
  }

  filterByCategoryId(categoryId:number):Promise<Product[]>{
      return Product.find({where:{productCategoryId:categoryId}});
  }

  async remove(id: string): Promise<void> {
    await Product.delete(id);
  }
}