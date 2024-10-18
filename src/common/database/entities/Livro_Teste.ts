import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('livros_teste')
export class LivroTeste {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "titulo", type: 'text' })
    titulo: string;
    
    @Column({ name: "autor", type: 'text' })
    autor: string;
    
    @Column({ name: "ano", type: 'int4' })
    ano: number;

    @Column({ type: 'bool', default: true })
    disponivel: boolean;

    @Column({ type: 'int4' })
    quantidade: number;

    @Column({ type: 'bytea', nullable: true})
    imagem: Buffer;

    @CreateDateColumn({ type: 'timestamp' })
    criado_em: Date;
}
