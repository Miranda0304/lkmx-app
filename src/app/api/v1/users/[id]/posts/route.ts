import { NextRequest, NextResponse } from "next/server";
import { UserRepository } from "@/data/prisma/UserData";
import { UserService } from "@/core/services/UserService";
import { Post } from "@/core/entities/User";

const repo = new UserRepository();
const service = new UserService(repo);

export const POST = async (req: NextRequest) => {
  const body: Post = await req.json();
  const user = await service.createPost(body);
  return NextResponse.json(user);
};
