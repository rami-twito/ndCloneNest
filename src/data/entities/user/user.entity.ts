import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToMany  } from "typeorm";
import { OrderSession } from "../orderSession/orderSession.entity";
import { ShoppingCartItem } from "../shoppingCartItem/shoppingCartItem.entity";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    first_name:string;

    @Column()
    last_name:string;

    //@OneToMany(type=> ShoppingCart,shoppingCart=>shoppingCart.user)
   //shoppingCarts:ShoppingCart[]

   @OneToMany(type=> OrderSession,orderSession=>orderSession.user)
   orderSessions:OrderSession[]
}