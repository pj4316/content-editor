import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserServiceImpl } from './service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserServiceImpl],
  exports: []
})
export class UserModule {}
