import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductCategoryController } from "src/controllers/productCategory.controller"; 
import { ProductCategoriesService } from "../productCategory/productCategory.service";
import { ShoppingCartItemService } from "./shoppingCartItem.service";


@Module(
    {
        imports:[],
        providers: [ShoppingCartItemService,ProductCategoriesService],
        controllers: [ProductCategoryController],
    }
)

export class ShoppingCartItemModule{};