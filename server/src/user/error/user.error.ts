import { AlreadyExistError } from "src/error/domain.error";

export class UsernameAlreadyExistError extends AlreadyExistError {
    name: string;
    message: string;
    stack?: string;

    constructor(username: string) {
        super();
        this.message = `Could not create new user: ${username} is already exist`
    }
}