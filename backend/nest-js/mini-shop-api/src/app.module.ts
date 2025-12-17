import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env'] }),
    TypeOrmModule.forRoot({
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT! || 1234,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      type: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
    CategoryModule,
    ProductModule,
    OrderModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
