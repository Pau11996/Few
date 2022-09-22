import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { Category } from '../../categories/entities/category.entity';

export class CreateProductDto {
  @ApiProperty({
    example: 'Leather wallet "Thunder"',
    description: 'Description this thing',
  })
  @IsString({ message: 'Must be string' })
  readonly title: string;

  @ApiProperty({ example: '120', description: 'Product price' })
  readonly price: number;

  @ApiProperty({
    example: 'RT2304',
    description: 'Product vendor code',
  })
  @IsString({ message: 'Must be string' })
  @Length(4, 16, {
    message: 'vendor_code lenght must be from 4 to 16 characters',
  })
  readonly vendor_code: string;

  @ApiProperty({
    example: 'file_path.jpg',
    description: 'Product photos',
  })
  readonly images: string[];

  @ApiProperty({
    example: 'admin',
    description: 'users role',
  })
  @Length(0, 1000, {
    message: 'Description lenght must be from 0 to 1000 characters',
  })
  readonly description: string;

  @ApiProperty({ example: 'ava.png', description: 'users avatar in profile' })
  @ApiProperty({
    example: 'Bugs',
    description: 'Categories which include this product',
  })
  categories: Category[];
}
