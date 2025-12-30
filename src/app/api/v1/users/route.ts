import { NextRequest, NextResponse } from "next/server";
import { UserRepository } from "@/data/prisma/UserData";
import { UserService } from "@/core/services/UserService";

const repo = new UserRepository();
const service = new UserService(repo);

export const GET = async () => {
  const users = await service.getAllUsers();
  return NextResponse.json(users);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const user = await service.createUser(body);
  return NextResponse.json(user);
};
