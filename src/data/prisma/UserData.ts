import { prisma } from "@/lib/prisma";
import { User } from "@/core/entities/User";
import { IUserDataRepository } from "@/data/repositories/IUserDataRepository";

export class UserRepository implements IUserDataRepository {
  findAll(): Promise<User[]> {
    return prisma.user.findMany();
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
}
