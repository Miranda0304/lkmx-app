"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUsers } from "../hooks/useUsers";
import { CustomButton } from "./CustomButton";

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
        {user && (
          <div>
            <input
              type="checkbox"
              checked={form["isActive"]}
              onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
            />{" "}
            Active
          </div>
        )}
        <div className="gap-2 flex">
          <button
            onClick={submit}
            className="inline-flex items-center justify-center rounded-xl
            bg-linear-to-br from-gray-600 via-teal-950 to-black px-6 py-3
            hover:scale-105 hover:contrast-150 border border-gray-500 cursor-pointer"
          >
            {user ? "Update" : "Create"}
          </button>
          <CustomButton />
        </div>
      </div>
    </div>
  );
};
