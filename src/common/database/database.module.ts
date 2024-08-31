import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        }),
        TypeOrmModule.forRoot({
        type: process.env.TYPEORM_CONNECTION,
        host: process.env.TYPEORM_HOST,
        port: process.env.TYPEORM_PORT,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        entities: [`${__dirname}/entities/{.ts,*.js}`],
        migrations: [`${__dirname}/migrations/{.ts,*.js}`],

        // NÃO ALTERAR PARA TRUE OS VALORES ENTRE ESSES COMENTÁRIOS
        synchronize: false,
        migrationsRun: false
        // NÃO ALTERAR PARA TRUE OS VALORES ENTRE ESSES COMENTÁRIOS
    } as TypeOrmModuleOptions),
    ]
})
export class DatabaseModule {}
