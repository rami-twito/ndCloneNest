import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsService } from "./product.service";
import { Product } from "./product.entity";
import { ProductController } from "src/controllers/product.controller";  


@Module(
    {
        imports:[],
        providers: [ProductsService],
        controllers: [ProductController],
    }
)

export class ProductModule{};