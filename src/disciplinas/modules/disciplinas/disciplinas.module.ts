import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disciplinas } from 'src/common/database/entities/Disciplinas';
import { DisciplinasController } from 'src/disciplinas/controllers/disciplinas/disciplinas.controller';
import { DisciplinasService } from 'src/disciplinas/services/disciplinas/disciplinas.service';

@Module({
    imports: [TypeOrmModule.forFeature([Disciplinas])],
    controllers: [DisciplinasController],
    providers: [DisciplinasService],
    exports: [DisciplinasService]
})
export class DisciplinasModule {}
