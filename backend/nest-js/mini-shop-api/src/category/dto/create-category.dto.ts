import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @MinLength(4)
  name: string;
}
