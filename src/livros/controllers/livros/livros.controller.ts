import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { livro } from 'src/common/database/entities/livro';
import { LivrosService } from 'src/livros/services/livros/livros.service';

@ApiTags('Livros')
@Controller('livros')
export class LivrosController {
  private readonly logger = new Logger(LivrosController.name);
  constructor(private readonly service: LivrosService) {}

  @Get()
  @ApiOperation({ summary: 'Busca todos os livros' })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Número máximo de registros a retornar',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    type: Number,
    description: 'Quantidade de registros a pular',
  })
  findAll(
    @Query('limit') limit: number = 5,
    @Query('offset') offset: number = 0,
  ): Promise<livro[]> {
    return this.service.findAll(limit, offset);
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
