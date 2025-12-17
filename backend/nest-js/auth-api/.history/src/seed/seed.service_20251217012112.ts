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
      users = users.map((item) => {
        item.password = bcrypt.genSaltSync(10);
      });
      await this.userRepo.save(users);
      console.log('Seed completed');
    }
  }
}
