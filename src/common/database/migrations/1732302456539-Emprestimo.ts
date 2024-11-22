/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class Emprestimo1732302456539 implements MigrationInterface {
    private tableName = "emprestimo";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            this.tableName,
            new TableColumn({
                name: 'EMP_LivroId',
                type: 'int',
                isNullable: true
            })
        );

        await queryRunner.query(`UPDATE "${this.tableName}" SET "EMP_LivroId" = 1`);
        await queryRunner.changeColumn(
            this.tableName,
            "EMP_LivroId",
            new TableColumn({
              name: "EMP_LivroId",
              type: "int",
              isNullable: false,
            }),
          );
      
          // Adiciona a chave estrangeira
          await queryRunner.createForeignKey(
            this.tableName,
            new TableForeignKey({
              columnNames: ["EMP_LivroId"],
              referencedTableName: "Livros",
              referencedColumnNames: ["LIV_ID"],
              onDelete: "CASCADE",
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable(this.tableName);
        const foreignKey = table?.foreignKeys.find(
            fk => fk.columnNames.indexOf("EMP_LivroId") !== -1,
        );
        if (foreignKey) {
            await queryRunner.dropForeignKey(this.tableName, foreignKey);
        }

        // Remove a coluna
        await queryRunner.dropColumn(this.tableName, "EMP_LivroId");
    }

}
