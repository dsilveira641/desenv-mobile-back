import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { livro } from "./livro";
import { User } from "./users";

@Entity({ name: 'emprestimo' })
export class emprestimo {
    @PrimaryGeneratedColumn({ name: "EMP_Id" })
    id: number;

    @ManyToOne(() => livro, (livro) => livro.id)
    livro: livro

    @ManyToOne(() => User, (usuario) => usuario.id)
    usuario: User

    @Column({ name: 'EMP_DataEmprestimo', type: 'date' })
    dataEmprestimo: Date;

    @Column({ name: 'EMP_DataDevolucao', type: 'date', nullable: true })
    dataDevolucao: Date;
}
