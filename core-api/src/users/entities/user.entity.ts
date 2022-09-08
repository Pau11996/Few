import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

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
}
