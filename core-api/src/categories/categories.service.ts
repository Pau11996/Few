import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(dto: CreateCategoryDto) {
    const user = await this.categoriesRepository.create(dto);
    return this.categoriesRepository.save(user);
  }

  async getAll() {
    return await this.categoriesRepository.find();
  }

  async getOne(id) {
    return await this.categoriesRepository.findOne({ where: { id } });
  }

  async updateOne(categoryDto: CreateCategoryDto, id: string) {
    await this.categoriesRepository.update(id, categoryDto);
    return HttpStatus.CREATED;
  }
}
