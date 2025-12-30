import { NextRequest, NextResponse } from "next/server";
import { UserRepository } from "@/data/prisma/UserData";
import { UserService } from "@/core/services/UserService";
import { User } from "@/core/entities/User";

const repo = new UserRepository();
const service = new UserService(repo);

export const GET = async (
  _: any,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const users = await service.getUserById(Number(id));
  return NextResponse.json(users);
};

export const PUT = async (req: NextRequest) => {
  const body: User = await req.json();
  const user = await service.updateUser(body);
  return NextResponse.json(user);
};
