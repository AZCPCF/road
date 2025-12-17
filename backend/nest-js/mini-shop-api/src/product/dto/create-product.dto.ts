import { IsNotEmpty, IsNumberString, IsUUID, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @MinLength(4)
  title: string;

  @IsNotEmpty()
  @IsNumberString()
  price: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsUUID()
  categoryId: string;
}
