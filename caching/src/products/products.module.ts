import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { RedisClientOptions } from "redis";
import * as redisStore from 'cache-manager-redis-store'


@Module({
    // imports: [CacheModule.register({
    //     ttl: 5000
    // })],
    imports: [CacheModule.register<RedisClientOptions>({
        store: redisStore,
        host: 'localhost',
        port: 6379
    })],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}