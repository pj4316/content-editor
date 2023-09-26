import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserServiceImpl } from '../service/user.service';
import { UserDto } from './dto/userDto';
import { CreateUserDto } from './dto/createUserDto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserServiceImpl) {}

  @Get()
  async getUsers(): Promise<UserDto[]> {
    const users = await this.userService.getUsers();

    return users.map(user => new UserDto(user))
  }

  @Post()
  async createUser(@Body() request: CreateUserDto): Promise<UserDto> {
    const user = await this.userService.createUser(request)
    return new UserDto(user);
  }
}
