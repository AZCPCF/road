import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ProductQueryDto } from './dto/product-query.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('product')
@UseGuards(AuthGuard("jwt"))
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll(@Query() productQueryDto: ProductQueryDto) {
    console.log(productQueryDto);
    return this.productService.getAll(productQueryDto);
  }

  @Get(':id')
  getById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Product> {
    return this.productService.getById(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  updateById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateById(id, updateProductDto);
  }

  @Patch(':id/category')
  updateCategoryById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateProductCategoryDto: UpdateProductCategoryDto,
  ): Promise<Product> {
    return this.productService.updateCategoryById(id, updateProductCategoryDto);
  }

  @Delete(':id')
  deleteById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Product> {
    return this.productService.deleteById(id);
  }
}
