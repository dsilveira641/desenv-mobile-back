import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivroTeste } from 'src/common/database/entities/Livro_Teste';
import { LivrosTesteController } from 'src/livros_teste/controllers/livros-teste/livros-teste.controller';
import { LivrosTesteService } from 'src/livros_teste/services/livros-teste/livros-teste.service';

@Module({
    imports: [TypeOrmModule.forFeature([LivroTeste])],
    controllers: [LivrosTesteController],
    providers: [LivrosTesteService],
    exports: [LivrosTesteService]
})
export class LivrosTesteModule {}
