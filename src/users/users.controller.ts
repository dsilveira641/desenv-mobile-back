import { Controller, Get, Logger } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { User } from 'src/common/database/entities/users';

@Controller('api/users')
export class UsersController {
    private readonly logger = new Logger(UsersController.name);
    constructor(private readonly userService: UsersService) {}

    @Get()
    findAll(): Promise<User[]> {
        try {
            return this.userService.findAll();
        }
        catch (error) {
            this.logger.error("Problemas com o usuário");
        }
    }
}
