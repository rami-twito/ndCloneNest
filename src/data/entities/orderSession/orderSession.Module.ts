import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderSessionsService } from "./orderSession.service";

import { OrderSessionController } from "src/controllers/orderSession.controller";

@Module(
    {
        imports:[],
        providers: [OrderSessionsService],
        controllers: [OrderSessionController],
    }
)

export class OrderSessionModule{};