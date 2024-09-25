import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Professores1727290445927 implements MigrationInterface {

    private tableName = "professores";

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                {
                    name: "PRO_Id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                    isNullable: false 
                },
                {
                    name: "PRO_Nome",
                    type: "varchar",
                    length: "100",
                    isNullable: false 
                },
                {
                    name: "PRO_Certificados",
                    type: "varchar",
                    length: "255",
                    isNullable: true 
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("DROP TABLE" + this.tableName);
    }

}
