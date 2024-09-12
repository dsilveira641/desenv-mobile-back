import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Emprestimo } from 'src/common/database/entities/emprestimo';
import { EmprestimosService } from 'src/emprestimo/services/emprestimos/emprestimos.service';

@Controller('emprestimos')
export class EmprestimosController {
    constructor(private readonly service: EmprestimosService) {}

    @Post('alugar/:usuarioId/:livroId')
    @ApiOperation({ summary: "Alugar livro"})
    async alugar(@Param('usuarioId') usuarioId: number, @Param('livroId') livroId: number) {
        return this.service.alugarLivro(+usuarioId, +livroId);
    }

    @Post('devolver/:usuarioId/:livroId')
    @ApiOperation({ summary: "Devolver livro"})
    async devolver(@Param('usuarioId') usuarioId: number, @Param('livroId') livroId: number) {
        return this.service.devolverLivro(+usuarioId, +livroId);
    }

    @Get()
    @ApiOperation({ summary: "Retorna todos os empréstimos" })
    findAll(): Promise<Emprestimo[]> {
        return this.service.findAll();
    }
}
