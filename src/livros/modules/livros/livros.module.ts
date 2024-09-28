import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { livro } from 'src/common/database/entities/livro';
import { LivrosController } from 'src/livros/controllers/livros/livros.controller';
import { LivrosService } from 'src/livros/services/livros/livros.service';

@Module({
  imports: [TypeOrmModule.forFeature([livro])],
  controllers: [LivrosController],
  providers: [LivrosService],
  exports: [LivrosService],
})
export class LivrosModule {}
