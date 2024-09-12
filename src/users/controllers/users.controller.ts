import { Body, Controller, Delete, Get, Logger, Param, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from 'src/common/database/entities/users';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('api/users')
export class UsersController {
    private readonly logger = new Logger(UsersController.name);
    constructor(private readonly userService: UsersService) {}

    @Get()
    @ApiOperation({ summary: "Busca todos os usuários" })
    findAll(): Promise<User[]> {
        try {
            return this.userService.findAll();
        }
        catch (error) {
            this.logger.error("Problemas com o usuário!");
        }
    }

    @Get(':id')
    @ApiOperation({ summary: "Busca usuário por id" })
    findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findById(+id);
    }

    @Post()
    @ApiOperation({ summary: "Cria um novo usuário" })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.'})
    @ApiResponse({ status: 400, description: 'Parâmetros inválidos.' })
    async create(@Body() user: CreateUserDto) {
        try {
            await this.userService.create(user);
            return { message: 'Usuário criado com sucesso', data: user };
        } catch (error) {
            this.logger.error("Falha em criar usuário", error.stack);
            throw error;
        }
    }

    @Delete(':id')
    @ApiOperation({ summary: "Deleta usuário por id" })
    async remove(@Param('id') id: string): Promise<string> {
        try {
            await this.userService.remove(+id);
            return "Usuário removido com sucesso";
        }
        catch (error) {
            this.logger.error(`Falha em deletar usuário`, error.stack);
            throw error;
        }
    }
}
