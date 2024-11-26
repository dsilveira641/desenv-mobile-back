import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class Emprestimo1732631894173 implements MigrationInterface {
  private tableName = 'emprestimo';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'EMP_ISLOCATED',
        type: 'boolean',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, 'EMP_ISLOCATED');
  }
}
