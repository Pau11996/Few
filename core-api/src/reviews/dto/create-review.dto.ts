import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../products/entities/product.entity';
import { IsString, Length } from 'class-validator';

export class Review {
  @ApiProperty({
    example: 'The best wallet',
    description: 'Reviews text',
  })
  @IsString({ message: 'Must be string' })
  @Length(0, 200, {
    message: 'Password lenght must be from 4 to 16 characters',
  })
  readonly text: string;

  @ApiProperty({
    example: 'file_path.jpg',
    description: 'Reviews photos',
  })
  readonly images: string[];

  @ApiProperty({
    example: 'RT2304',
    description: 'Review products',
  })
  readonly products: Product[];
}
