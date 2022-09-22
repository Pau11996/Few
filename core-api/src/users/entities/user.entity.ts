import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Review } from '../../reviews/entities/review.entity';

export enum UserRole {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  SELLER = 'seller',
}

@Entity()
export class User {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '123@mail.ru', description: 'Uniq email' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: 'qaz', description: 'complex password' })
  @Column()
  password: string;

  @ApiProperty({
    example: 'admin',
    description: 'users role',
  })
  @Column({ nullable: false, default: UserRole.CUSTOMER })
  role: UserRole;

  @ApiProperty({
    example: 'admin',
    description: 'users role',
  })
  @Column({ nullable: true })
  avatar: string;

  @ApiProperty({ example: 'Users reviews', description: 'Product price' })
  @ManyToOne(() => Review, (review) => review.user)
  reviews: Review[];
}
