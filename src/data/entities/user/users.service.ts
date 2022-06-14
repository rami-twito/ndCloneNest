import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class usersService {
  constructor(
    //@InjectRepository(User)
   // private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return User.find();
  }

  findOne(id: number): Promise<User> {
    return User.findOneBy({id:id});
  }

  async remove(id: string): Promise<void> {
    await User.delete(id);
  }
}