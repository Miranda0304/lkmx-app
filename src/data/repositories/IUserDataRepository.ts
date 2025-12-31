import { Post, User } from "../../core/entities/User";

export interface IUserDataRepository {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  create(user: User): Promise<User>;
  update(id: number, user: Partial<User>): Promise<User>;
  createPost(post: Post): Promise<Post>;
}
