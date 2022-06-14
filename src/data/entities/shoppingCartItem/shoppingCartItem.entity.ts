import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, ManyToOne  } from "typeorm";
import { OrderSession } from "../orderSession/orderSession.entity";
import { Product } from "../product/product.entity";
import { User } from "../user/user.entity";

@Entity()
export class ShoppingCartItem extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    //@Column({nullable:true})
    //userId:number;

    @Column({nullable:true})
    productId:number;

    @Column({nullable:true})
    orderSessionId:number;

   // @ManyToOne(type => User, user => user.shoppingCarts)
    //user:User;

    @ManyToOne(type => Product, product => product.shoppingCartItems)
    product:Product;

    @ManyToOne(type => OrderSession, orderSession => orderSession.shoppingCartItems)
    orderSession:OrderSession;
}