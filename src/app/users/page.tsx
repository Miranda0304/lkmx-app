"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useUsers } from "./hooks/useUsers";
import { TableUser } from "./components/TableUser";
import { CustomButton } from "./components/CustomButton";

const UsersPage = () => {
  const { users, getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <CustomButton href="/" />
      <br />
      <CustomButton href="/users/create" text="Create User" />
      <TableUser users={users} />
    </div>
  );
};

export default UsersPage;
