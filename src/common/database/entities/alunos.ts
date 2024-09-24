import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class alunos {
    @PrimaryGeneratedColumn({ name: 'ALU_Id'})
    id: number

    @Column({ name:"ALU_Nome" })
    nome: string

    @Column({ name: "ALU_DataNascimento", type: "timestamptz" })
    dataNascimento: Date;

    @Column({ name:"ALU_CPF" })
    cpf: string
    
    @Column({ name:"ALU_ResponsavelNome" })
    responsavelNome: string

    @Column({ name:"ALU_ResponsavelCPF" })
    responsavelCPF: string

    @Column({ name:"ALU_ResponsavelFone" })
    responsavelFone: string
}
