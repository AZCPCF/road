import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'node_modules/bcryptjs';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { AccessTokenPayload } from './types/access-token-payload.type';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signin({
    username,
    password,
  }: AuthDto): Promise<{ access_token: string }> {
    const user = await this.userRepository.findOneBy({ username })!;
    const isMatch = await bcrypt.compare(password, user?.password!);
    if (user && isMatch) {
      const payload: AccessTokenPayload = {
        id: user.id,
        username: user.username,
      };
      return { access_token: this.jwtService.sign(payload) };
    }
    throw new UnauthorizedException();
  }

  async signup({
    username,
    password,
  }: AuthDto): Promise<{ access_token: string }> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.userRepository.create({
      username,
      password: hashedPassword,
    });
    try {
      await this.userRepository.save(user);
      return this.signin({ username, password });
    } catch (error) {
      if (error.code == 23505) {
        throw new ConflictException('Username is already in user');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
