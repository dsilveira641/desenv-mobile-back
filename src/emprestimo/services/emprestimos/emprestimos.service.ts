import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Emprestimo } from 'src/common/database/entities/emprestimo';
import { livro } from 'src/common/database/entities/livro';
import { User } from 'src/common/database/entities/users';
import { Repository } from 'typeorm';

@Injectable()
export class EmprestimosService {
  private readonly logger = new Logger();
  constructor(
    @InjectRepository(Emprestimo)
    private readonly emprestimoRepository: Repository<Emprestimo>,
    @InjectRepository(livro)
    private readonly livroRepository: Repository<livro>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async alugarLivro(usuarioId: number, livroId: number): Promise<Emprestimo> {
    
    const livro = await this.livroRepository.findOne({
      where: { id: livroId },
    });
    if (!livro || livro.quantidade < 1) {
      throw new BadRequestException('Livro indisponível para aluguel');
    }

    const usuario = await this.userRepository.findOne({
      where: { id: usuarioId },
    });
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const emprestimoExistente = await this.emprestimoRepository.findOne({
      where: {
        livro: { id: livroId },
        usuario: { id: usuarioId },
        dataDevolucao: null,
      },
    });
    if (emprestimoExistente) {
      throw new BadRequestException('O usuário já alugou esse livro');
    }

    // Atualiza os livros
    livro.quantidade -= 1;
    await this.livroRepository.save(livro);

    const emprestimo = new Emprestimo();
    emprestimo.livro = livro;
    emprestimo.usuario = usuario;
    emprestimo.dataEmprestimo = new Date();

    return this.emprestimoRepository.save(emprestimo);
  }

  async devolverLivro(usuarioId: number, livroId: number): Promise<Emprestimo> {
    const emprestimo = await this.emprestimoRepository.findOne({
      where: {
        livro: { id: livroId },
        usuario: { id: usuarioId },
        dataDevolucao: null,
      },
      relations: ['livro'],
    });

    if (!emprestimo) {
      throw new BadRequestException(
        'O usuário não alugou este livrou ou já devolveu',
      );
    }

    // Atualiza a data de devolução dom a data atual
    emprestimo.dataDevolucao = new Date();
    await this.emprestimoRepository.save(emprestimo);

    const livro = emprestimo.livro;
    livro.quantidade += 1;
    await this.livroRepository.save(livro);

    return emprestimo;
  }

  async findAll(): Promise<any[]> {
    const emprestimos = await this.emprestimoRepository.find({
      relations: ['livro', 'usuario'],
      select: {
        id: true,
        dataEmprestimo: true,
        dataDevolucao: true,
        livro: {
          titulo: true,
          autor: true,
        },
        usuario: {
          nome: true,
        },
      },
    });

    return emprestimos.map((emprestimo) => ({
      id: emprestimo.id,
      dataEmprestimo: emprestimo.dataEmprestimo,
      dataDevolucao: emprestimo.dataDevolucao,
      livroTitulo: emprestimo.livro.titulo,
      livroAutor: emprestimo.livro.autor,
      usuarioNome: emprestimo.usuario.nome,
    }));
  }
}
