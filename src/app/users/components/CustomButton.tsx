import Link from "next/link";

export const CustomButton = ({ href, text }: { href?: string, text?: string }) => {
  return (
    <Link
      href={href || "/users"}
      className="inline-flex items-center justify-center rounded-xl
            bg-linear-to-br from-gray-400 via-teal-800 to-black px-6 py-3
            hover:scale-105 hover:contrast-150 border border-gray-500"
    >
      {text || "Back"}
    </Link>
  );
};
