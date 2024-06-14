import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {
    constructor (
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
      ){}

      getGoodbye (): string {
        return 'Goodbye!';

      }

      saveProducto(producto:Producto): Promise <Producto>{
         return this.productoRepository.save(producto);
    }

    find(id: number): Promise<Producto>{
        return this.productoRepository.findOneBy({id});

    }



    }
