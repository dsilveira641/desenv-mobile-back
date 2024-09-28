import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Emprestimo } from 'src/common/database/entities/emprestimo';
import { livro } from 'src/common/database/entities/livro';
import { User } from 'src/common/database/entities/users';
import { EmprestimosController } from 'src/emprestimo/controllers/emprestimos/emprestimos.controller';
import { EmprestimosService } from 'src/emprestimo/services/emprestimos/emprestimos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Emprestimo, livro, User])],
  controllers: [EmprestimosController],
  providers: [EmprestimosService],
  exports: [EmprestimosService],
})
export class EmprestimosModule {}
