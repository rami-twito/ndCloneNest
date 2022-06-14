import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany  } from "typeorm";
import { ProductCategory } from "../productCategory/productCategory.entity";
import { ShoppingCartItem } from "../shoppingCartItem/shoppingCartItem.entity";

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string;

    @Column({ nullable: true })
    productCategoryId:number;


    @Column('decimal')
    price:number;

    @ManyToOne(type => ProductCategory, productCategory => productCategory.products)
    productCategory:ProductCategory

    @OneToMany(type => ShoppingCartItem, shoppingCart => shoppingCart.product)
    shoppingCartItems:ShoppingCartItem[];


   
}