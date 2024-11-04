import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "Disciplinas" })
export class Disciplinas {
    @PrimaryGeneratedColumn({ name: 'DIS_ID' })
    id: number;

    @Column({ name:"DIS_NOME" })
    nome: string;

    @Column({ name:"DIS_BIBLIOGRAFIA" })
    bibliografia: string;
}
