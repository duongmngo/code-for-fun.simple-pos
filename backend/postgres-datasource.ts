import { DataSource } from 'typeorm';

export const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'simplepos',
  entities: ['src/**/**.entity.ts'],
  migrations: ['migration/**/*.ts'],
});
