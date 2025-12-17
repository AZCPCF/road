import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';
import { User } from 'src/user/user.entity';
import { In, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getAll(user: User): Promise<Order[]> {
    return await this.orderRepository.findBy({ user });
  }

  async getById(user: User, id: string): Promise<Order> {
    const [order] = await this.orderRepository.find({
      take: 1,
      where: { id },
      relations: { user: true, products: true },
    });
    if (user.id != order.user.id) {
      throw new UnauthorizedException();
    }
    return order;
  }

  async create(user: User, createOrderDto: CreateOrderDto): Promise<Order> {
    const products = await this.productRepository.findBy({
      id: In(createOrderDto.productIds),
    });

    if (products.length !== createOrderDto.productIds.length) {
      throw new BadRequestException('Some products not found');
    }

    const totalPrice = products.reduce((sum, p) => sum + +p.price, 0);

    const order = this.orderRepository.create({
      products,
      createdAt: new Date(),
      totalPrice,
      user,
    });

    return await this.orderRepository.save(order);
  }

  async updateById(
    user: User,
    id: string,
    updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    const products = await this.productRepository.findBy({
      id: In(updateOrderDto.productIds),
    });

    if (products.length !== updateOrderDto.productIds.length) {
      throw new BadRequestException('Some products not found');
    }

    const totalPrice = products.reduce((sum, p) => sum + +p.price, 0);

    const order = await this.getById(user, id);
    order.totalPrice += totalPrice;
    order.products = [...order.products, ...products];
    return await this.orderRepository.save(order);
  }
}
