import { Module } from '@nestjs/common';
import { usersModule } from './users.module';
import { usersService } from './users.service';
import { userController } from '../../../controllers/users.controller';


@Module({
  imports: [usersModule],
  providers: [usersService],
  controllers: [userController]
})
export class UserHttpModule {}
