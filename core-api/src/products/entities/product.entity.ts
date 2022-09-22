import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Review } from '../../reviews/entities/review.entity';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class Product {
  @ApiProperty({ example: '1', description: 'Product id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Leather wallet "Thunder"',
    description: 'Description this thing',
  })
  @Column({ unique: true })
  title: string;

  @ApiProperty({ example: '120', description: 'Product price' })
  @Column({ type: 'int' })
  price: number;

  @ApiProperty({
    example: 'RT2304',
    description: 'Product vendor code',
  })
  @Column({ nullable: true, unique: true })
  vendor_code: string;

  @ApiProperty({
    example: 'file_path.jpg',
    description: 'Product photos',
  })
  @Column({ type: 'simple-array' })
  images: string[];

  @ApiProperty({
    example: 'admin',
    description: 'users role',
  })
  @Column({ length: 1000 })
  description: string;

  @ApiProperty({
    example: 'This is a best wallet',
    description: 'Users reviews',
  })
  @ManyToMany(() => Review, (review) => review.products, { nullable: true })
  @JoinTable()
  reviews: Review[];

  @ApiProperty({
    example: 'Bugs',
    description: 'Categories which include this product',
  })
  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable()
  categories: Category[];
}
