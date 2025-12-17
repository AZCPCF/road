import { User } from 'src/auth/user.entity';

declare global {
  interface Request {
    user?: User;
  }
}
