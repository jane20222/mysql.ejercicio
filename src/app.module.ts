import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlConfig, sqliteConfig } from './config/db';


@Module({
  imports: [TypeOrmModule.forRoot(mysqlConfig),ProductoModule],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
