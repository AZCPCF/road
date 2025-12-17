import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from 'src/category/category.entity';
import { Product } from './product.entity';

import { CreateProductDto } from './dto/create-product.dto';
import { ProductQueryDto } from './dto/product-query.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getAll(query: ProductQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    const qb = this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category');

    if (query.search) {
      qb.andWhere(
        '(product.title ILIKE :search OR product.description ILIKE :search)',
        { search: `%${query.search}%` },
      );
    }

    if (query.minPrice) qb.andWhere('product.price >= :minPrice', { minPrice: query.minPrice });
    if (query.maxPrice) qb.andWhere('product.price <= :maxPrice', { maxPrice: query.maxPrice });
    if (query.categoryId) qb.andWhere('product.categoryId = :categoryId', { categoryId: query.categoryId });

    qb.skip((page - 1) * limit).take(limit);

    const [data, total] = await qb.getManyAndCount();

    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  async getById(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['category'],
    });

    if (!product) throw new NotFoundException('Product Not Found');

    return product;
  }

  private async getCategoryById(id: string): Promise<Category> {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) throw new BadRequestException('Category Not Found');
    return category;
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const category = await this.getCategoryById(dto.categoryId);
    const product = this.productRepository.create({ ...dto, category });
    return this.productRepository.save(product);
  }

  async updateById(id: string, dto: UpdateProductDto): Promise<Product> {
    const product = await this.getById(id);

    const category = dto.categoryId
      ? await this.getCategoryById(dto.categoryId)
      : product.category;

    Object.assign(product, dto, { category });

    return this.productRepository.save(product);
  }

  async updateCategoryById(id: string, dto: UpdateProductCategoryDto): Promise<Product> {
    const product = await this.getById(id);
    product.category = await this.getCategoryById(dto.categoryId);
    return this.productRepository.save(product);
  }

  async deleteById(id: string): Promise<Product> {
    const product = await this.getById(id);
    return this.productRepository.remove(product);
  }
}
