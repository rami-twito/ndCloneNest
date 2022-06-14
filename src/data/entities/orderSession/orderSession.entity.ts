import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany  } from "typeorm";
import { Product } from "../product/product.entity";
import { ShoppingCartItem } from "../shoppingCartItem/shoppingCartItem.entity";
import { User } from "../user/user.entity";

@Entity()
export class OrderSession extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    userId:number;

   @Column()
   sessionId:string;

    @ManyToOne(type => User, user => user.orderSessions)
    user:User;

    @OneToMany(type => ShoppingCartItem, shoppingCart => shoppingCart.orderSession)
    shoppingCartItems:ShoppingCartItem[];
}