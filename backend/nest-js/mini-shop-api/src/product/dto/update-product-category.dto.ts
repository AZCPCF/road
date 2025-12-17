import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateProductCategoryDto {
  @IsNotEmpty()
  @IsUUID()
  categoryId: string;
}
