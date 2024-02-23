import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { EventEmitter2, EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [EventEmitterModule.forRoot(), ProductsModule],
})
export class AppModule {}
