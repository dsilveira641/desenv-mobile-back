import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Emprestimo1726019357843 implements MigrationInterface {
    private tableName = "emprestimo";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.tableName,
                columns: [
                    {
                        name: 'EMP_Id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'EMP_LivroId',
                        type: 'int',
                    },
                    {
                        name: 'EMP_UsuarioId',
                        type:'int'
                    },
                    {
                        name: 'EMP_DataEmprestimo',
                        type: 'date'
                    },
                    {
                        name: 'EMP_DataDevolucao',
                        type: 'date',
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ['EMP_LivroId'],
                        referencedTableName: 'livro',
                        referencedColumnNames: ['LIV_Id'],
                        onDelete: 'CASCADE'
                    },
                    {
                        columnNames: ['EMP_UsuarioId'],
                        referencedTableName: 'usuario',
                        referencedColumnNames: ['USR_Id'],
                        onDelete: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('emprestimo');
    }

}
