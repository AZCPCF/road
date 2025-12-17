//jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AccessTokenPayload } from './types/access-token-payload.type';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'lpifjsdfipj',
    });
  }

  async validate({ id }: AccessTokenPayload) {
    const user = await this.userRepository.findOneBy({ id });
    if (user) {
      const { password, ...safeUser } = user;
      return safeUser;
    }
    throw new UnauthorizedException();
  }
}
