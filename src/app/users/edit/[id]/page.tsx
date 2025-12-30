"use client";
import { useEffect, useState } from "react";
import { UserForm } from "../../components/UserForm";
import { useUsers } from "../../hooks/useUsers";
import { useParams } from "next/navigation";

const Edit = () => {
  const { id } = useParams();
  const { user, getUserById } = useUsers();

  useEffect(() => {
    getUserById(Number(id));
  }, [id, getUserById]);

  return (
    <div className="items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">Edit User</h1>
      <UserForm user={user} />
    </div>
  );
};

export default Edit;
