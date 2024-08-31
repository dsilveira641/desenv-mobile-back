import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/common/database/entities/users';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async findByEmail(userEmail: string): Promise<User> {        
        return await this.userRepository.findOne({
            where: { email: userEmail }
        }); 
    }    
    
    async findAll(): Promise<User[]> {
        return this.userRepository.find({
            select: ['nome', 'email', 'senha']
        });
    }
}
