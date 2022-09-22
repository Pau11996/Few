import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../products/entities/product.entity';
import { IsString, Length } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Wallets',
    description: 'Categories title',
  })
  @IsString({ message: 'Must be string' })
  @Length(2, 16, { message: 'Title lenght must be from 2 to 16 characters' })
  readonly title: string;

  @ApiProperty({
    example: 'file_path.jpg',
    description: 'Category photo',
  })
  readonly images: string;

  @ApiProperty({
    example: 'Category which include bags ',
    description: 'Category description',
  })
  @IsString({ message: 'Must be string' })
  @Length(0, 500, {
    message: 'Description lenght must be from 0 to 500 characters',
  })
  readonly description: string;

  @ApiProperty({
    example: 'Leather wallet "Thunder"',
    description: 'Category products',
  })
  readonly products: Product[];
}
