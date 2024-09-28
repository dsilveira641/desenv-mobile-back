import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Disciplinas1727291825356 implements MigrationInterface {

    private tableName = "disciplinas";

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: this.tableName,
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
