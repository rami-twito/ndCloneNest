import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import { usersService } from '../data/entities/user/users.service';
import { User } from '../data/entities/user/user.entity';

@Controller()
export class userController {
  constructor(private usersService:usersService ) {}

  @Get('/users')
  async getUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}
