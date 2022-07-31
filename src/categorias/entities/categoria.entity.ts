import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  codigo: string;

  @Column({ length: 200 })
  titulo: string;

  @Column({ default: true })
  status: number;
}
