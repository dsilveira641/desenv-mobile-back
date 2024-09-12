import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './common/database/database.module'
import { UsersModule } from './users/modules/users.module';
import { LivrosService } from './servies/livros/livros.service';
import { LivrosService } from './livros/services/livros/livros.service';
import { LivrosController } from './livros/controllers/livros/livros.controller';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
