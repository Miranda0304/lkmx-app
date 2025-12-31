import { prisma } from "@/lib/prisma";
import { Post, User } from "@/core/entities/User";
import { IUserDataRepository } from "@/data/repositories/IUserDataRepository";

export class UserRepository implements IUserDataRepository {
  findAll(): Promise<User[]> {
    return prisma.user.findMany({
      where: { isActive: true },
    });
  }

  findById(id: number): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  create(user: User): Promise<User> {
    return prisma.user.create({ data: user });
  }

  update(id: number, user: Partial<User>): Promise<User> {
    return prisma.user.update({ where: { id }, data: user });
  }

  createPost(post: Post): Promise<Post> {
    return prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        authorId: post.authorId,
      },
    });
  }
}
