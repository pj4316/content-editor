import { User } from "src/user/domain/user.entity";

export class UserDto {
    id: number;
    username: string;
    email: string;

    constructor(user: User) {
        this.id = user.id
        this.username = user.username
        this.email = user.email
    }
}