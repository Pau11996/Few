import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(productDto: CreateProductDto) {
    const product = await this.productsRepository.create(productDto);
    return this.productsRepository.save(product);
  }

  async getAll() {
    return await this.productsRepository.find();
  }
}
