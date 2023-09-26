import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../domain/user.entity';
import { CreateUserDto } from '../controller/dto/createUserDto';
import { UsernameAlreadyExistError } from '../error/user.error';

interface UserService {
    getUsers(): Promise<User[]>,
    createUser(createUserDto: CreateUserDto): Promise<User>
}

export class UserServiceImpl implements UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    async getUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = await this.userRepository.findOne({where: [{username: createUserDto.username}]})

        if(user !== undefined) {
            throw new UsernameAlreadyExistError(createUserDto.username)
        }
        
        const newUser = this.userRepository.create(createUserDto)

        return this.userRepository.save(newUser);
    }
}