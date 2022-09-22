import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Category {
  @ApiProperty({ example: '1', description: 'Category id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Wallets',
    description: 'Categories title',
  })
  @Column({ unique: true, nullable: false })
  title: string;

  @ApiProperty({
    example: 'file_path.jpg',
    description: 'Category photo',
  })
  @Column()
  images: string;

  @ApiProperty({
    example: 'Category which include bags ',
    description: 'Category description',
  })
  @Column()
  description: string;

  @ApiProperty({
    example: 'Leather wallet "Thunder"',
    description: 'Category products',
  })
  @ManyToMany(() => Product, (product) => product.categories, {
    nullable: true,
  })
  products: Product[];
}
