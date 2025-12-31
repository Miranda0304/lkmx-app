import Link from "next/link";

export const BackButton = () => {
  return (
    <Link
      href="/users"
      className="py-2 inline-flex items-center justify-center px-6 rounded-sm bg-indigo-600 hover:bg-indigo-500 text-white transition"
    >
      Back
    </Link>
  );
};
