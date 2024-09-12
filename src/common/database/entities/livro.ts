import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class livro {
    @PrimaryGeneratedColumn({ name: 'LIV_Id' })
    id: number

    @Column({ name: 'LIV_Titulo' })
    titulo: string

    @Column({ name: 'LIV_Autor' })
    autor: string

    @Column({ name: "LIV_AnoPublicacao", type: 'timestamptz' })
    dataPublicacao: Date;

    @Column({ name: "LIV_Disponivel" })
    disponivel: boolean

    @Column({ name: "LIV_Quantidade", default: 1 })
    quantidade: number
}
