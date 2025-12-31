"use client";
import { useParams, useRouter } from "next/navigation";
import { usePost } from "../../hooks/usePost";
import { BackButton } from "../../components/BackButton";

export default function CreatePostPage() {
  const { id } = useParams();
  const { createPost, form, setForm } = usePost();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost(Number(id), form.title, form.content);
    router.push("/users");
  };

  return (
    <form className="p-6 space-y-4 max-w-xl">
      <h1 className="text-xl font-bold">Create Post</h1>

      <input
        className="border p-2 w-full"
        placeholder="Title"
        required
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        className="border p-2 w-full h-32"
        placeholder="Content"
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <div className="gap-2 flex">
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded"
        >
          Save Post
        </button>
        <BackButton />
      </div>
    </form>
  );
}
