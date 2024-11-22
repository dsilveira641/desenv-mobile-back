import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class Livros1732300748389 implements MigrationInterface {
    private tableName = "Livros";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn(this.tableName, 'LIV_TITUTLO', 'LIV_TITULO');
        await queryRunner.addColumn(this.tableName,
            new TableColumn({
                name: "criado_em",
                type: "timestamptz",                
            })
        );
        await queryRunner.addColumn(this.tableName,
            new TableColumn({
                name: "LIV_ANO",
                type: "int",                
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn(this.tableName, 'LIV_TITULO', 'LIV_TITUTLO');
        await queryRunner.dropColumn(this.tableName, "criado_em");
        await queryRunner.dropColumn(this.tableName, "LIV_ANO");
    }

}
