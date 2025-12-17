import {
  IsNotEmpty,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(4)
  username: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
