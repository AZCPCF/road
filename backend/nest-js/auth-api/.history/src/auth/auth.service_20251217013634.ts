import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'node_modules/bcryptjs';
import { User, UserPayload } from 'src/users/user.entity';
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
    console.log(user);
    console.log(password);
    console.log(bcrypt.compareSync(password, user.password));
    if (!(await bcrypt.compare(password, user?.password))) {
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
  async signUp(authDto: AuthDto) {
    const userFromDB = await this.usersService.findOne(authDto.username);
    if (userFromDB) {
      throw new BadRequestException('this username is in used');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(authDto.password, salt);
    const user: AuthDto = {
      username: authDto.username,
      password: hashedPassword,
    };
    return await this.usersService.create(user);
  }
}
