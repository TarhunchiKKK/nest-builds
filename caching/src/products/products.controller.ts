import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./entities/product.entity";
import { CacheInterceptor } from "@nestjs/cache-manager";

@Controller('products')
@UseInterceptors(CacheInterceptor)
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    findAll(): Product[] {
        return this.productsService.findAll()
    }
}