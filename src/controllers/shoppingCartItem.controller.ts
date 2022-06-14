import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ShoppingCartItemService } from 'src/data/entities/shoppingCartItem/shoppingCartItem.service';
import { ShoppingCartItem } from 'src/data/entities/shoppingCartItem/shoppingCartItem.entity'; 

@Controller()
export class ShoppingCartItemController {
  constructor(private shoppingCartItemService:ShoppingCartItemService ) {}

  @Post('api/shoppingCartItem/add')
  async create(@Body() shoppingCartItem: ShoppingCartItem): Promise<ShoppingCartItem> {
    return await this.shoppingCartItemService.create(shoppingCartItem);
  }

  @Get('api/shoppingCartItem/:orderSessionId')
  async getShoppingCartItems(@Param('orderSessionId') orderSessionId:number): Promise<ShoppingCartItem[]> {
    return await this.shoppingCartItemService.filterBySessionOrderId(orderSessionId);
  }
}
