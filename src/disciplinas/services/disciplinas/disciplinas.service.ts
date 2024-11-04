import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Disciplinas } from 'src/common/database/entities/Disciplinas';
import { Repository } from 'typeorm';

@Injectable()
export class DisciplinasService {
    constructor(
        @InjectRepository(Disciplinas)
        private readonly disciplinaRepository: Repository<Disciplinas>
    ) {}

    findAll(): Promise<Disciplinas[]> {
        return this.disciplinaRepository.find();
    }

    findById(id: number): Promise<Disciplinas> {
        return this.disciplinaRepository.findOne({ where: { id }});
    }

    async create(disciplina: Disciplinas): Promise<Disciplinas> {
        return await this.disciplinaRepository.save(disciplina);
    }

    async updateById(id: number, data: Disciplinas): Promise<Disciplinas> {
        const disciplina = await this.findById(id);
        this.disciplinaRepository.merge(disciplina, data);
        return this.disciplinaRepository.save(disciplina);
    }

    async remove(id: number): Promise<void> {
        await this.disciplinaRepository.delete(id);
    }
}
