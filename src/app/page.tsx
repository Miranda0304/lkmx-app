import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex gap-2">
        <Link
          href="/users"
          className="
            inline-flex items-center justify-center
            px-6 py-3
            rounded-xl
            bg-indigo-600
            hover:bg-indigo-500
            text-white font-semibold
            transition
          "
        >
          Go to Users
        </Link>
        <Link
          href="/posts"
          className="
            inline-flex items-center justify-center
            px-6 py-3
            rounded-xl
            bg-indigo-600
            hover:bg-indigo-500
            text-white font-semibold
            transition
          "
        >
          Go to Post
        </Link>
      </main>
    </div>
  );
}
