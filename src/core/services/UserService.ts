import { IUserCoreRepository } from "../repositories/IUserCoreRepository";
import { Post, User } from "../entities/User";

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

  createPost(post: Post) {
    return this.user.createPost(post);
  }
}
