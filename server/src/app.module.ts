import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST_URL,
      port: Number(process.env.TYPEORM_HOST_PORT),
      username: 'root',
      password: 'example',
      database: 'test',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}'
      ],
      synchronize: true,
    }), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
