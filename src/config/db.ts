import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Producto } from 'src/entities/producto.entity';


export const mysqlConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nest-user',
  password: 'nest-password',
  database: 'nest-db',
  entities: [Producto],
  synchronize: true,
};

export const sqliteConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'nest-db',
  entities: [Producto],
  synchronize: true,
};
