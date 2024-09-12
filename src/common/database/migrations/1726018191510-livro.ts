import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Livro1726018191510 implements MigrationInterface {
    private tableName = "livro"
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.tableName,
                columns: [
                    {
                        name: 'LIV_Id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'LIV_Titulo',
                        type: 'varchar'
                    },
                    {
                        name: "LIV_Autor",
                        type: 'varchar'
                    },
                    {
                        name: 'LIV_AnoPublicacao',
                        type: 'int'
                    },
                    {
                        name: 'LIV_Disponivel',
                        type: 'boolean'
                    },
                    {
                        name: 'LIV_Quantidade',
                        type: 'int',
                        default: 1
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("DROP TABLE " + this.tableName);
    }

}
