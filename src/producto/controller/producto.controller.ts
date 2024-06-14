import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Producto } from 'src/entities/producto.entity';
import { ProductoService } from '../services/producto.service';


@Controller('custom')
export class ProductoController {
  constructor(private service: ProductoService) {}

  @Get('hello')
  hello(): string {
    return 'Hello World another time!';
  }

  @Post('goodbye')
  goodbye(): string {
    return this.service.getGoodbye();
  }

  @Post('producto')
  async createProducto(@Body() body: Producto): Promise<Producto> {
    const producto = new Producto();

    producto.marca = body.marca;
    producto. categoria = body.categoria;
    producto. descripcion = body.descripcion;
    producto. disponibilidad = body. disponibilidad;
    producto. sku = body. sku;
    producto. origen = body.origen;
    producto.rutfabricacion=body.rutfabricacion;
    producto.Eliminacion =body.Eliminacion;
    producto. precio = body.precio;

   
    const createdProducto: Producto = await this.service.saveProducto(producto);
    return createdProducto;
  }

  @Get('producto/:id')
  async findProducto(@Param() params: any): Promise<Producto> {
    return await this.service.find(params.id);
  }
}
