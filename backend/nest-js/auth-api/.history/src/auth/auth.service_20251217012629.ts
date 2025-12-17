import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'node_modules/bcryptjs';
import { UserPayload } from 'src/users/user.entity';
import { UsersService } from '../users/users.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn({
    username,
    password,
  }: AuthDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);

    if (await bcrypt.compare(password, user?.password)) {
      throw new UnauthorizedException();
    }
    const payload: UserPayload = {
      sub: user.id,
      username: user.username,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async signUp({ username, password }: AuthDto) {}
}
