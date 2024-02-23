import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { PersonsService } from "./persons.service";
import { PersonsController } from "./persons.controller";
import { RedisClientOptions } from "redis";
import * as redisStore from 'cache-manager-redis-store';

@Module({
    // imports: [CacheModule.register()],
    imports: [CacheModule.register<RedisClientOptions>({
        store: redisStore,
        socket: {
            host: 'localhost',
            port: 6379
        }
    })],
    controllers: [PersonsController],
    providers: [PersonsService]
})
export class PersonsModule {}