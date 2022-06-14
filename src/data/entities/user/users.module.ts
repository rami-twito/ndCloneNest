import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {usersService} from './users.service';
import { User } from "./user.entity";
import { userController } from "src/controllers/users.controller";
import { userProviders } from "./user.provider";

@Module(
    {
        imports:[],
        providers: [usersService],
  controllers: [userController],
    }
)

export class usersModule{};