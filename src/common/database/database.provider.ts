import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const dataSourceOptions: any = {
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [`${__dirname}/entities/{.ts,*.js}`],
  migrations: [`${__dirname}/migrations/{.ts,*.js}`],
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: false,
  migrationsRun: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
