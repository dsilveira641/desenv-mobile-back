import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './users';
import { livro } from './livro';

@Entity({ name: 'emprestimo' })
export class Emprestimo {
  @PrimaryGeneratedColumn({ name: 'EMP_Id' })
  id: number;

  @ManyToOne(() => livro, (livro) => livro.id)
  @JoinColumn({ name: 'EMP_LivroId' })
  livro: livro;

  @ManyToOne(() => User, (usuario) => usuario.id)
  @JoinColumn({ name: 'EMP_UsuarioId' })
  usuario: User;

  @Column({ name: 'EMP_DataEmprestimo', type: 'date' })
  dataEmprestimo: Date;

  @Column({ name: 'EMP_DataDevolucao', type: 'date', nullable: true })
  dataDevolucao: Date;

  @Column({ name: 'EMP_ISLOCATED', type: 'boolean' })
  locado: boolean;
}
