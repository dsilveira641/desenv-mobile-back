import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Professores {
    @PrimaryGeneratedColumn({ name: 'PRO_Id'})
    id: number

    @Column({ name:"PRO_Nome" })
    nome: string

    @Column({ name:"PRO_Certificados" })
    certificados: string
}
