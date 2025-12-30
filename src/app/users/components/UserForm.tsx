"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUsers } from "../hooks/useUsers";

export const UserForm = ({ user }: { user?: any }) => {
  const router = useRouter();
  const [form, setForm] = useState(
    user || { firstName: "", lastName: "", email: "" }
  );

  useEffect(() => {
    if (user) {
      setForm(user);
    }
  }, [user]);

  const { createUser, updateUser } = useUsers();

  const submit = async () => {
    if (!user) {
      await createUser(form);
    } else {
      await updateUser(form);
    }
    router.push("/users");
  };

  return (
    <div>
      <div className="space-y-4 max-w-md">
        {["firstName", "lastName", "email"].map((f) => (
          <input
            key={f}
            placeholder={f}
            value={form[f]}
            onChange={(e) => setForm({ ...form, [f]: e.target.value })}
            className="w-full border p-2 rounded"
          />
        ))}

        <button
          onClick={submit}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded"
        >
          {user ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
};
