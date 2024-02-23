import { Injectable } from "@nestjs/common";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsService {
    private products: Product[] = [
        {
            id: 1,
            title: 'Clothes',
            price: 100
        },
        {
            id: 2,
            title: 'Pen',
            price: 30
        },
        {
            id: 3,
            title: 'Car',
            price: 140
        }
    ]

    findAll(): Product[] {
        console.log('Find all in products service')
        return this.products
    }
}