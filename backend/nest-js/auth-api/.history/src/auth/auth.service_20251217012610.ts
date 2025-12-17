import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from 'src/users/user.entity';
import bcrypt from 'node_modules/bcryptjs';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(authDto: AuthDto): Promise<{ access_token: string }> {
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
  async signUp(authDto: AuthDto) {}
}
