import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './data/entities/user/user.entity';
import { userController } from './controllers/users.controller';
import { usersService } from './data/entities/user/users.service';
import { usersModule } from './data/entities/user/users.module';
import { UserHttpModule } from './data/entities/user/users-http.module';
import { ProductController } from './controllers/product.controller';
import { ProductCategoryController } from './controllers/productCategory.controller';
import { ProductsService } from './data/entities/product/product.service';
import { ProductCategoriesService } from './data/entities/productCategory/productCategory.service';
import { Product } from './data/entities/product/product.entity';
import { ProductCategory } from './data/entities/productCategory/productCategory.entity';
import { ProductModule } from './data/entities/product/product.module';
import { ProductCategoryModule } from './data/entities/productCategory/productCategory.module';
import { OrderSessionsService } from './data/entities/orderSession/orderSession.service';
import { ShoppingCartItemService } from './data/entities/shoppingCartItem/shoppingCartItem.service';
import { OrderSessionController } from './controllers/orderSession.controller';
import { ShoppingCartItemController } from './controllers/shoppingCartItem.controller';
import { OrderSession } from './data/entities/orderSession/orderSession.entity';
import { ShoppingCartItem } from './data/entities/shoppingCartItem/shoppingCartItem.entity';
import { OrderSessionModule } from './data/entities/orderSession/orderSession.Module';
import { ShoppingCartItemModule } from './data/entities/shoppingCartItem/shoppingCartItem.Module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1224',
      database: 'mdclonetestdb',
      entities: [User,Product,ProductCategory,OrderSession,ShoppingCartItem],
      synchronize: true,
    }),
    usersModule,
    ProductModule,
    ProductCategoryModule,
    OrderSessionModule,
    ShoppingCartItemModule,
    TypeOrmModule.forFeature([User,Product,ProductCategory,OrderSession,ShoppingCartItem])
  ],
  controllers: [AppController,userController,ProductController,ProductCategoryController,OrderSessionController,ShoppingCartItemController],
  
  providers: [AppService,usersService,ProductsService,ProductCategoriesService,OrderSessionsService,ShoppingCartItemService],
})
export class AppModule {}
