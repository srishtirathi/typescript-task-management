import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'srishtirathi',
  password: null,
  database: 'taskmanagement',
  autoLoadEntities: true,
  synchronize: true,
};
