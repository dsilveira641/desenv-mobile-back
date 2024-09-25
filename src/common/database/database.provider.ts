import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

dotenv.config();

export const dataSourceOptions: any = {
    url: process.env.TYPEORM_URL,
    entities: [`${__dirname}/entities/{.ts,*.js}`],
    migrations: [`${__dirname}/migrations/{.ts,*.js}`],
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: false,
    migrationsRun: false
} 

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;