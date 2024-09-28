import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/common/database/entities/users';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(userEmail: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { email: userEmail },
    });
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { id: id },
    });
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      select: ['id', 'nome', 'email', 'senha'],
    });
  }

  async create(data: CreateUserDto) {
    try {
      const user = this.userRepository.create(data);
      if (!user.tipo) {
        user.tipo = 'Aluno';
      }
      return await this.userRepository.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email já cadastrado', error.message);
      }
      throw error;
    }
  }

  async updateById(id: number, data: User): Promise<User> {
    const user = await this.findById(id);
    this.userRepository.merge(user, data);
    return await this.userRepository.save(user);
  }

  async remove(id: number): Promise<string> {
    try {
      await this.userRepository.delete(id);
      return 'Usuário removido com sucesso';
    } catch (error) {
      throw error;
    }
  }
}
