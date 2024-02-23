import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { ProductCreatedEvent } from "../events/product-created.event";
import { ProductUpdatedEvent } from "../events/product-updated.event";
import { ProductDeletedEvent } from "../events/product-deleted.event";
import { Events } from "../events/events.enum";

@Injectable() 
export class ProductEventsListener {
    @OnEvent(Events.ProductCreated)
    handleProductCreatedEvent(event: ProductCreatedEvent): void {
        console.log('Created product:')
        console.log(event)
    }

    @OnEvent(Events.ProductUpdated)
    handleProductUpdatedEvent(event: ProductUpdatedEvent): void { 
        console.log('Update product')
        console.log('Before:')
        console.log({ id: event.id, title: event.title, price: event.price })
        console.log('After:')
        console.log({ id: event.id, title: event.newTitle, price: event.newPrice })
    }

    @OnEvent(Events.ProductDeleted)
    handleProductDeletedEvent(event: ProductDeletedEvent): void {
        console.log('Deleted product:')
        console.log(event)
    }
}