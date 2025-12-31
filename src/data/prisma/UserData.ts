import { prisma } from "@/lib/prisma";
import { Post, User } from "@/core/entities/User";
import { IUserDataRepository } from "@/data/repositories/IUserDataRepository";

export class UserRepository implements IUserDataRepository {
  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany({
      where: { isActive: true },
      include: { _count: { select: { posts: true } } },
    });

    return users.map((u) => ({
      id: u.id,
      firstName: u.firstName,
      lastName: u.lastName,
      email: u.email,
      isActive: u.isActive,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
      postsCount: u._count.posts,
    }));
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
