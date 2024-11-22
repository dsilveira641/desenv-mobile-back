import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { livro } from 'src/common/database/entities/livro';
import { Repository } from 'typeorm';

@Injectable()
export class LivrosService {
  constructor(
    @InjectRepository(livro)
    private readonly livroRepository: Repository<livro>,
  ) {}

  findAll(limit: number, offset: number): Promise<livro[]> {
    return this.livroRepository.find({
      take: limit,
      skip: offset,
      select: {
        id: true,
        titulo: true,
        autor: true,
        disponivel: true,
        quantidade: true,
        ano: true,
      },
    });
  }

  findById(id: number): Promise<livro> {
    return this.livroRepository.findOne({ where: { id } });
  }

  async create(livro: livro): Promise<livro> {
    return await this.livroRepository.save(livro);
  }

  async updatebyId(id: number, data: livro): Promise<livro> {
    const livro = await this.findById(id);
    this.livroRepository.merge(livro, data);
    return await this.livroRepository.save(livro);
  }

  async remove(id: number): Promise<string> {
    try {
      await this.livroRepository.delete(id);
      return 'Livro removido com sucesso !';
    } catch (error) {
      throw error;
    }
  }
}
