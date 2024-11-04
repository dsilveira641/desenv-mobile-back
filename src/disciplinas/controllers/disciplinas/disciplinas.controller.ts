import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Disciplinas } from 'src/common/database/entities/Disciplinas';
import { DisciplinasService } from 'src/disciplinas/services/disciplinas/disciplinas.service';

@ApiTags("Disciplinas")
@Controller('disciplinas')
export class DisciplinasController {
    constructor(
        private readonly service: DisciplinasService
    ) {}

    @Get()
    @ApiOperation({ summary: "Retorna todas as disciplinas cadastrados"})
    findAll(): Promise<Disciplinas[]> {
        return this.service.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Busca disciplina por Id' })
    findOne(@Param('id') id: number): Promise<Disciplinas> {
        return this.service.findById(+id);
    }

    @Post()
    @ApiOperation({ summary: 'Cria um novo disciplina' })
    @ApiResponse({ status: 201, description: 'disciplina criado com sucesso' })
    async create(@Body() disciplina: Disciplinas) {
        return await this.service.create(disciplina);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualiza disciplina por Id' })
    update(@Param('id') id: number, @Body() disciplina: Disciplinas) {
        return this.service.updateById(+id, disciplina);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deleta disciplina por Id' })
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}
