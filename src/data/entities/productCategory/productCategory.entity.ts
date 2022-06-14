import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToMany  } from "typeorm";
import { Product } from "../product/product.entity";

@Entity()
export class ProductCategory extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string;

    @OneToMany(type=> Product,product=>product.productCategory)
   products:Product[]
}