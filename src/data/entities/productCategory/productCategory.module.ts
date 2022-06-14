import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductCategoriesService } from "./productCategory.service";

import { ProductCategoryController } from "src/controllers/productCategory.controller"; 


@Module(
    {
        imports:[],
        providers: [ProductCategoriesService],
        controllers: [ProductCategoryController],
    }
)

export class ProductCategoryModule{};