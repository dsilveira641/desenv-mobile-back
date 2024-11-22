import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Livros1732298167908 implements MigrationInterface {
    private tableName = 'Livros';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: this.tableName,
            columns: [
              {
                name: 'LIV_ID',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'LIV_TITUTLO',
                type: 'varchar',
              },
              {
                name: 'LIV_AUTOR',
                type: 'varchar',
              },
              {
                name: 'LIV_ANOPUBLICACAO',
                type: 'int',
              },
              {
                name: 'LIV_DISPONIVEL',
                type: 'boolean',
              },
              {
                name: 'LIV_QUANTIDADE',
                type: 'int',
                default: 1,
              },
              {
                name: 'LIV_IMAGEM', 
                type: 'bytea', 
                isNullable: true,
              },
            ],
          }),
        );
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DROP TABLE ' + this.tableName);
    }
}
