import { IsNumberString, IsOptional, IsUUID, MinLength } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @MinLength(4)
  title: string;

  @IsOptional()
  @IsNumberString()
  price: string;

  @IsOptional()
  description: string;

  @IsOptional()
  @IsUUID()
  categoryId: string;
}
