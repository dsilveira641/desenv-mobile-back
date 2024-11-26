import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Emprestimo } from 'src/common/database/entities/emprestimo';
import { EmprestimosService } from 'src/emprestimo/services/emprestimos/emprestimos.service';

@ApiTags('Emprestimos')
@Controller('emprestimos')
export class EmprestimosController {
  constructor(private readonly service: EmprestimosService) {}

  @Post('alugar/:usuarioId/:livroId')
  @ApiOperation({ summary: 'Alugar livro' })
  @ApiResponse({
    status: 200,
    description: 'Livro alugado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário ou livro não encontrado',
  })
  async alugar(
    @Param('usuarioId') usuarioId: number,
    @Param('livroId') livroId: number,
  ) {
    return this.service.alugarLivro(+usuarioId, +livroId);
  }

  @Post('devolver/:usuarioId/:livroId')
  @ApiOperation({ summary: 'Devolver livro' })
  async devolver(
    @Param('usuarioId') usuarioId: number,
    @Param('livroId') livroId: number,
  ) {
    return this.service.devolverLivro(+usuarioId, +livroId);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todos os empréstimos ativos' })
  findAll(): Promise<Emprestimo[]> {
    return this.service.findAllActives();
  }

  @Get('historico')
  @ApiOperation({ summary: 'Retorna histórico de empréstimos' })
  getAll(): Promise<Emprestimo[]> {
    return this.service.historic();
  }
}
