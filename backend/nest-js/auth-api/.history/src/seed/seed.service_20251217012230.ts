import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { User } from '../users/user.entity';
import bcrypt from 'bcryptjs';
@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async run() {
    const users: Omit<User, 'id'>[] = [
      {
        username: 'testUser',
        password: 'testPassword',
      },
    ];
    const usersFromDB = await this.userRepo.findBy({
      username: In(users.map((item) => item.username)),
    });
    if (!usersFromDB.length) {
      const users_s = users.map((item) => {
        const salt = bcrypt.genSaltSync(10);
        return { ...item, password: bcrypt.hash(item.password, salt) };
      });
      await this.userRepo.save(users_s);
      console.log('Seed completed');
    }
  }
}
