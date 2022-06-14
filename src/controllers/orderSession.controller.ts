import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from '../app.service';
import { OrderSessionsService } from 'src/data/entities/orderSession/orderSession.service'; 
import { OrderSession } from 'src/data/entities/orderSession/orderSession.entity'; 

@Controller()
export class OrderSessionController {
  constructor(private orderSessionsService:OrderSessionsService ) {}

  @Post('api/shoppingCart/add')
  async create(@Body() orderSession: OrderSession): Promise<OrderSession> {
    return await this.orderSessionsService.create(orderSession);
  }

  @Get('api/shoppingCart/:sessionId')
  async getBySessionId(@Param('sessionId') sessionId): Promise<OrderSession> {
    return await this.orderSessionsService.filterBySessionId(sessionId);
  }

  
}
