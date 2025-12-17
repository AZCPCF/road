import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    SeedModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 1234,
      username: 'postgres',
      password: 'postgres',
      database: 'auth-api-db',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
