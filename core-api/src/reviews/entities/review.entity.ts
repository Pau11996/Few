import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Review {
  @ApiProperty({ example: '1', description: 'Review id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'The best wallet',
    description: 'Reviews text',
  })
  @Column()
  text: string;

  @ApiProperty({
    example: 'file_path.jpg',
    description: 'Reviews photos',
  })
  @Column({ type: 'simple-array' })
  images: string[];

  @ApiProperty({ example: 'Paul', description: 'User how wrote this review' })
  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  @ApiProperty({
    example: 'RT2304',
    description: 'Review products',
  })
  @ManyToMany(() => Product, (product) => product.reviews)
  products: Product[];
}
