import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@ApiTags('Categories')
@Controller('api')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'User creation' })
  @ApiResponse({ status: 201, type: Category })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/categories')
  create(@Body() categoryDto: CreateCategoryDto) {
    return this.categoriesService.create(categoryDto);
  }
}
