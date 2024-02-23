import { Injectable } from "@nestjs/common";
import { Product } from "./entities/product.entity";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductCreatedEvent } from "./events/product-created.event";
import { Events } from "./events/events.enum";
import { ProductUpdatedEvent } from "./events/product-updated.event";
import { ProductDeletedEvent } from "./events/product-deleted.event";

@Injectable()
export class ProductsService {
    private products: Product[] = [
        {
            id: 1,
            title: 'Car',
            price: 100
        },
        {
            id: 2,
            title: 'Laptop',
            price: 60
        },
        {
            id: 3,
            title: 'Potato',
            price: 8
        }
    ]

    constructor(private eventEmitter: EventEmitter2) {}

    create(createProductDto: CreateProductDto): Product {
        const product: Product = { 
            id: this.products.length, 
            ...createProductDto 
        }
        this.products.push(product)

        const productCreatedEvent: ProductCreatedEvent = { ...createProductDto }
        this.eventEmitter.emit(Events.ProductCreated, productCreatedEvent)

        return product
    }

    findAll(): Product[] {
        return this.products
    }

    findOne(id: number): Product {
        return this.products.find(product => product.id === id)
    }

    update(id: number, updateProductDto: UpdateProductDto): Product {
        const product: Product = this.products.find(product => product.id === id)
        const productUpdatedEvent: ProductUpdatedEvent = { 
            ...product,
            newTitle: updateProductDto.title,
            newPrice: updateProductDto.price    
        }
        product.title = updateProductDto.title
        productUpdatedEvent.price = updateProductDto.price
        this.eventEmitter.emit(Events.ProductUpdated, productUpdatedEvent)
        return product
    }

    delete(id: number): void {
        const product: Product = this.products.find(p => p.id === id)
        const productDeletedEvent: ProductDeletedEvent = { ...product }
        this.eventEmitter.emit(Events.ProductDeleted, productDeletedEvent)
    }
}