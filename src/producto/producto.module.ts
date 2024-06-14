import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoController } from './controller/producto.controller';
import { ProductoService } from './services/producto.service';
import { Producto } from 'src/entities/producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Producto])],
    providers:[ProductoService],
    controllers:[ProductoController]
})
export class ProductoModule {}
