import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Product } from 'src/product/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Product]), AuthModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
