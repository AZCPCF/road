import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { type UserRequest } from 'src/types/user-req.interface';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
@UseGuards(AuthGuard('jwt'))
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getAll(@Req() req: UserRequest): Promise<Order[]> {
    return this.orderService.getAll(req.user);
  }

  @Get(':id')
  getById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Req() req: UserRequest,
  ): Promise<Order> {
    return this.orderService.getById(req.user, id);
  }

  @Post()
  create(
    @Req() req: UserRequest,
    @Body() createOrderDto: CreateOrderDto,
  ): Promise<Order> {
    return this.orderService.create(req.user, createOrderDto);
  }

  @Put(':id')
  updateById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateOrderDto: UpdateOrderDto,
    @Req() req: UserRequest,
  ): Promise<Order> {
    return this.orderService.updateById(req.user, id, updateOrderDto);
  }
}
