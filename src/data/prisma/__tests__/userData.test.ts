import { UserRepository } from "@/data/prisma/UserData";
import { prisma } from "@/lib/prisma";

jest.mock("@/lib/prisma");

describe("UserRepository", () => {
  const repo = new UserRepository();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("findAll()", () => {
    it("should return mapped active users with postsCount", async () => {
      (prisma.user.findMany as jest.Mock).mockResolvedValue([
        {
          id: 1,
          firstName: "Jesus",
          lastName: "Miranda",
          email: "jesus@test.com",
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          _count: { posts: 5 },
        },
      ]);

      const result = await repo.findAll();

      expect(prisma.user.findMany).toHaveBeenCalledWith({
        where: { isActive: true },
        include: { _count: { select: { posts: true } } },
      });

      expect(result).toEqual([
        {
          id: 1,
          firstName: "Jesus",
          lastName: "Miranda",
          email: "jesus@test.com",
          isActive: true,
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
          postsCount: 5,
        },
      ]);
    });
  });

  describe("findById()", () => {
    it("should return user by id", async () => {
      const user = { id: 1, firstName: "Jesus" };
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(user);

      const result = await repo.findById(1);

      expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(result).toBe(user);
    });
  });

  describe("create()", () => {
    it("should create a user", async () => {
      const user = { firstName: "Jane", email: "jane@test.com" };
      (prisma.user.create as jest.Mock).mockResolvedValue(user);

      const result = await repo.create(user as any);

      expect(prisma.user.create).toHaveBeenCalledWith({ data: user });
      expect(result).toBe(user);
    });
  });

  describe("update()", () => {
    it("should update user", async () => {
      const user = { firstName: "Updated" };
      (prisma.user.update as jest.Mock).mockResolvedValue(user);

      const result = await repo.update(1, user);

      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: user,
      });

      expect(result).toBe(user);
    });
  });

  describe("createPost()", () => {
    it("should create post for user", async () => {
      const post = {
        title: "Hello LKMX Team",
        content: "My first post test!!!!",
        authorId: 1,
      };

      (prisma.post.create as jest.Mock).mockResolvedValue(post);

      const result = await repo.createPost(post as any);

      expect(prisma.post.create).toHaveBeenCalledWith({
        data: post,
      });

      expect(result).toBe(post);
    });
  });
});
