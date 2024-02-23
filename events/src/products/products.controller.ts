import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./entities/product.entity";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    create(@Body() createProductDto: CreateProductDto): Product {
        return this.productsService.create(createProductDto)
    }

    @Get()
    findAll(): Product[] {
        return this.productsService.findAll()
    }

    @Get(':id')
    findOne(@Query('id') id: number): Product {
        return this.productsService.findOne(id)
    }

    @Put(':id')
    update(@Param('id') id: number, updateproductDto: UpdateProductDto): Product {
        return this.productsService.update(id, updateproductDto)
    }

    @Delete(':id')
    delete(id: number): void {
        this.productsService.delete(id)
    }
}