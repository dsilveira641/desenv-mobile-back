import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LivroTeste } from 'src/common/database/entities/Livro_Teste';
import { CreateLivroDto } from 'src/livros/dto/create-livro.dto';
import { UpdateLivroDto } from 'src/livros_teste/dto/update-livro/update-livro';
import { LivrosTesteService } from 'src/livros_teste/services/livros-teste/livros-teste.service';

@Controller('livros-teste')
@ApiTags("Livros teste")
export class LivrosTesteController {
    constructor(private readonly service: LivrosTesteService) {}

//   @Post()
//   async create(@Body() createLivroDto: CreateLivroDto): Promise<LivroTeste> {
//     return await this.service.create(createLivroDto);
//   }

  @Get()
  async findAll(): Promise<LivroTeste[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<LivroTeste> {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateLivroDto: UpdateLivroDto): Promise<LivroTeste> {
    return await this.service.update(id, updateLivroDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.service.remove(id);
  }
}
