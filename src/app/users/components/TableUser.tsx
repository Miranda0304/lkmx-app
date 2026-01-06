import { User } from "@/core/entities/User";
import Link from "next/link";

export const TableUser = ({ users }: { users: User[] }) => {
  return (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">ID</th>
          <th className="border border-gray-300 p-2">First Name</th>
          <th className="border border-gray-300 p-2">Last Name</th>
          <th className="border border-gray-300 p-2">Email</th>
          <th className="border border-gray-300 p-2">Status</th>
          <th className="border border-gray-300 p-2">Total Posts</th>
          <th className="border border-gray-300 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((u: User) => (
            <tr key={u.id}>
              <td className="border p-2">{u.id}</td>
              <td className="border p-2">{u.firstName}</td>
              <td className="border p-2">{u.lastName}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">
                {u.isActive ? "Active" : "Inactive"}
              </td>
              <td className="border p-2 text-center">{u.postsCount ?? 0}</td>
              <td className="border p-2 gap-4 flex">
                <Link href={`/users/edit/${u.id}`}>Edit</Link>
                <Link href={`/users/${u.id}/posts`}>Create Post</Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
