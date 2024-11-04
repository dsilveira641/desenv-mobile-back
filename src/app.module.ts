import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './common/database/database.module';
import { UsersModule } from './users/modules/users.module';
import { LivrosModule } from './livros/modules/livros/livros.module';
import { EmprestimosModule } from './emprestimo/modules/emprestimos/emprestimos.module';
import { DisciplinasModule } from './disciplinas/modules/disciplinas/disciplinas.module';
import { DisciplinasService } from './disciplinas/services/disciplinas/disciplinas.service';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UsersModule,
    LivrosModule,
    EmprestimosModule,
    DisciplinasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
