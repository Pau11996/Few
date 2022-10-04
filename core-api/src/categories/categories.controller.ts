import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
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

  @ApiOperation({ summary: 'category creation' })
  @ApiResponse({ status: 201, type: Category })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/categories')
  create(@Body() categoryDto: CreateCategoryDto) {
    return this.categoriesService.create(categoryDto);
  }

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, type: Category })
  @Get('/categories')
  getAll() {
    return this.categoriesService.getAll();
  }

  @ApiOperation({ summary: 'Get one category' })
  @ApiResponse({ status: 200, type: Category })
  @Get('/categories/:id')
  getOne(@Param('id') id: string) {
    return this.categoriesService.getOne(id);
  }

  @ApiOperation({ summary: 'Change Category Info' })
  @ApiResponse({ status: 201, type: [Category] })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Put('/categories/:id')
  updateOne(@Body() categoryDto: CreateCategoryDto, @Param('id') id: string) {
    return this.categoriesService.updateOne(categoryDto, id);
  }
}
