import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Disciplinas1727291825356 implements MigrationInterface {

    private tableName = "disciplinas";

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                {
                    name: "DIS_ID",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                    isNullable: false 
                },
                {
                    name: "DIS_NOME",
                    type: "varchar",
                    length: "100",
                    isNullable: false 
                },
                {
                    name: "DIS_BIBLIOGRAFIA",
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
