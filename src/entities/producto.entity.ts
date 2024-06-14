import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marca: string;

  @Column()
  categoria: string; // 'categoria' en minúscula para seguir convenciones de nomenclatura de TypeScript

  @Column()
  descripcion: string; // 'descripcion' en minúscula para seguir convenciones de nomenclatura de TypeScript

  @Column()
  disponibilidad: string; // 'disponibilidad' en minúscula para seguir convenciones de nomenclatura de TypeScript

  @Column()
  sku: number; 

  @Column()
  origen: string;

  @Column()
  rutfabricacion:string;

  @Column()
  Eliminacion:string;

  @Column({ default: true })
  precio: boolean;

  
}
