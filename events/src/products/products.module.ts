import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { ProductEventsListener } from "./listeners/product-events.listener";

@Module({
    imports: [],
    controllers: [ProductsController],
    providers: [ProductsService, ProductEventsListener]
})
export class ProductsModule {}