import { IUserCoreRepository } from "../repositories/IUserCoreRepository";
import { User } from "../entities/User";

export class UserService {
  constructor(private user: IUserCoreRepository) {}

  getAllUsers() {
    return this.user.findAll();
  }

  getUserById(id: number) {
    return this.user.findById(id);
  }

  createUser(user: User) {
    return this.user.create(user);
  }

  updateUser(user: Partial<User>) {
    if (!user.id) return;
    return this.user.update(user.id, user);
  }
}
