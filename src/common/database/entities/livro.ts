import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Livros' })
export class livro {
  @PrimaryGeneratedColumn({ name: 'LIV_ID' })
  id: number;

  @Column({ name: 'LIV_TITULO', type: 'text' })
  titulo: string;

  @Column({ name: 'LIV_AUTOR', type: 'text' })
  autor: string;

  @Column({ name: 'LIV_ANO', type: 'int4' })
  ano: number;

  @Column({ name: 'LIV_DISPONIVEL', type: 'bool', default: true })
  disponivel: boolean;

  @Column({ name: 'LIV_QUANTIDADE', type: 'int4' })
  quantidade: number;

  @Column({ name: 'LIV_IMAGEM', type: 'bytea', nullable: true })
  imagem: Buffer;

  @CreateDateColumn({ name: 'criado_em', type: 'timestamp' })
  criado_em: Date;
}
