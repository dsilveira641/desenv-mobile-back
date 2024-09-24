import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Alunos1726848833251 implements MigrationInterface {

    private tableName = "alunos";

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                {
                    name: "ALU_Id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                    isNullable: false
                },
                {
                    name: "ALU_Nome",
                    type: "varchar",
                    length: "100",
                    isNullable: false 
                },
                {
                    name: "ALU_DataNascimento",
                    type: "date",
                    isNullable: false
                },
                {
                    name: "ALU_CPF",
                    type: "varchar",
                    length: "11",
                    isNullable: false 
                },
                {
                    name: "ALU_ResponsavelNome",
                    type: "varchar",
                    length: "100",
                    isNullable: false 
                },
                {
                    name: "ALU_ResponsavelCPF",
                    type: "varchar",
                    length: "11",
                    isNullable: false 
                },
                {
                    name: "ALU_ResponsavelFone",
                    type: "varchar",
                    length: "12",
                    isNullable: false 
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("DROP TABLE " + this.tableName);
    }

}
