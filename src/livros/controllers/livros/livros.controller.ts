import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { livro } from 'src/common/database/entities/livro';
import { LivrosService } from 'src/livros/services/livros/livros.service';

@ApiTags("Livros")
@Controller('livros')
export class LivrosController {
  private readonly logger = new Logger(LivrosController.name);
  constructor(private readonly service: LivrosService) {}

  @Get()
  @ApiOperation({ summary: 'Busca todos os livros' })
  findAll(): Promise<livro[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca livro por Id' })
  findOne(@Param('id') id: number): Promise<livro> {
    return this.service.findById(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo livro' })
  @ApiResponse({ status: 201, description: 'Livro criado com sucesso' })
  async create(@Body() livro: livro) {
    return await this.service.create(livro);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza livro por Id' })
  update(@Param('id') id: number, @Body() livro: livro) {
    return this.service.updatebyId(+id, livro);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta livro por Id' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
