import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { OrderSession } from './orderSession.entity';


@Injectable()
export class OrderSessionsService {
  constructor(
    //@InjectRepository(User)
   // private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<OrderSession[]> {
    return OrderSession.find();
  }

  findOne(id: number): Promise<OrderSession> {
    return OrderSession.findOneBy({id:id});
  }

  filterByUserId(userId:number):Promise<OrderSession[]>{
      return OrderSession.find({where:{userId:userId}});
  }

  filterBySessionId(sessionId:string):Promise<OrderSession>{
    return OrderSession.findOneBy({sessionId:sessionId});
}

  async create(orderSession:OrderSession):Promise<OrderSession>{
    const orderSessionCreated= await OrderSession.create(orderSession).save();
    return orderSessionCreated;
  }

  async remove(id: number): Promise<void> {
    await OrderSession.delete(id);
  }
}