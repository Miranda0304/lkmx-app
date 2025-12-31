"use client";
import {
  createUserService,
  getUserByIdService,
  getUsersService,
  updateUserService,
} from "@/app/services/UserServices";
import { User } from "@/core/entities/User";

import { useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const getUsers = async () => {
    const response = await getUsersService();
    setUsers(response);
  };

  const createUser = async (user: User) => {
    const response = await createUserService(user);
    return response;
  };

  const getUserById = async (id: number) => {
    const response = await getUserByIdService(id);
    setUser(response);
  };

  const updateUser = async (user: User) => {
    const response = await updateUserService(user);
    return response;
  };

  return { users, user, getUsers, createUser, getUserById, updateUser };
};
