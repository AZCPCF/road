import { IsStrongPassword } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @IsStrongPassword()
  password: string;
}

export interface UserPayload {
  sub: string;
  username: string;
}
