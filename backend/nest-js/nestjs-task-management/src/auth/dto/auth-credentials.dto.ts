import {
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsStrongPassword(
    {},
    {
      message:
        'password min length is 8 characters (1 uppercase , 1 lowercase , 1 symbol and 1 number)',
    },
  )
  password: string;
}
