import { IsNotEmpty, MinLength } from 'class-validator';

export class UpdateCategoryDto {
  @IsNotEmpty()
  @MinLength(4)
  name: string;
}
