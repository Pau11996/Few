import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('Products')
@Controller('api')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'product creation' })
  @ApiResponse({ status: 201, type: Product })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/products')
  create(@Body() productDto: CreateProductDto) {
    return this.productsService.create(productDto);
  }

  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, type: Product })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Get('/products')
  getAll() {
    return this.productsService.getAll();
  }
}
