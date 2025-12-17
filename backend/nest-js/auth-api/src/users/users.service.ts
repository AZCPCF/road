import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthDto } from 'src/auth/dto/auth.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ username });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
  async create({ username, password }: AuthDto): Promise<User> {
    const user = this.userRepository.create({ username, password });
    return await this.userRepository.save(user);
  }
}
