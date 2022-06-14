import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ShoppingCartItem } from './shoppingCartItem.entity';

@Injectable()
export class ShoppingCartItemService {
  constructor(
    //@InjectRepository(User)
   // private usersRepository: Repository<User>,
  ) {}

  async create(shoppingCartItem:ShoppingCartItem):Promise<ShoppingCartItem>{
    const shoppingCartItemCreated= await ShoppingCartItem.create(shoppingCartItem).save();
    return shoppingCartItemCreated;
  }

  filterBySessionOrderId(sessionOrderId:number):Promise<ShoppingCartItem[]>{
    return ShoppingCartItem.find({where:{orderSessionId:sessionOrderId}});
}

  findOne(id: number): Promise<ShoppingCartItem> {
    return ShoppingCartItem.findOneBy({id:id});
  }

  async remove(id: string): Promise<void> {
    await ShoppingCartItem.delete(id);
  }
}