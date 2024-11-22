import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class Emprestimo1732301895825 implements MigrationInterface {
    private tableName = 'emprestimo';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn(this.tableName, 'EMP_LivroId')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            this.tableName,
            new TableColumn({
                name: 'EMP_LivroId',
                type: 'int'
            })
        )

        await queryRunner.createForeignKey(
            this.tableName,
            new TableForeignKey({
              columnNames: ['EMP_LivroId'],
              referencedTableName: 'livro',
              referencedColumnNames: ['LIV_Id'],
              onDelete: 'CASCADE',
            })
        );
    }

}
