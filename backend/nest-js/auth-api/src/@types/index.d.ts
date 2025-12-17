import { User } from "src/users/user.entity";


declare global {
  interface Request {
    user?: User;
  }
}
