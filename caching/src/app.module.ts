import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { PersonsModule } from './persons/persons.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [PersonsModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
