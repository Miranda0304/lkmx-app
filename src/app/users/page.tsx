"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useUsers } from "./hooks/useUsers";
import { TableUser } from "./components/TableUser";

const UsersPage = () => {
  const { users, getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <Link href="/" className="text-blue-500 mb-4 inline-block">
        Back
      </Link>
      <br />
      <Link href="/users/create" className="text-blue-500 mb-4 inline-block">
        Create User
      </Link>
      <TableUser users={users} />
    </div>
  );
};

export default UsersPage;
