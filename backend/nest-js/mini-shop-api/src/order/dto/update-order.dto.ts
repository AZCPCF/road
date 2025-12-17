import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateOrderDto {
  @IsArray()
  @IsUUID('all', { each: true })
  @IsNotEmpty()
  productIds: string[];
}
