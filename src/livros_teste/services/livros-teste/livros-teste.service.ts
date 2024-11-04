import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LivroTeste } from 'src/common/database/entities/Livro_Teste';
import { UpdateLivroDto } from 'src/livros_teste/dto/update-livro/update-livro';
import { Repository } from 'typeorm';

@Injectable()
export class LivrosTesteService {
    constructor(
        @InjectRepository(LivroTeste)
        private readonly livroRepository: Repository<LivroTeste>
    ) {}
    // TODO
    // async create(createLivroDto: CreateLivroDto): Promise<LivroTeste[]> {
    //     const livro = this.livroRepository.create(createLivroDto);
    //     return await this.livroRepository.save(livro);
    // }

    async findAll(limit: number, offset: number): Promise<LivroTeste[]> {
        return await this.livroRepository.find({
            take: limit,
            skip: offset
        });
    }

    async findOne(id: number): Promise<LivroTeste> {
        const livro = await this.livroRepository.findOne({ where: { id } });
        if (!livro) {
            throw new NotFoundException(`Livro com ID ${id} não encontrado.`);
        }
        return livro;
    }

    async update(id: number, updateLivroDto: UpdateLivroDto): Promise<LivroTeste> {
        const livro = await this.findOne(id);
        Object.assign(livro, updateLivroDto);
        return this.livroRepository.save(livro);
    }

    async remove(id: number): Promise<void> {
        const livro = await this.findOne(id);
        await this.livroRepository.remove(livro);
    }
}
