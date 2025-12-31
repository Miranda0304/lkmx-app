import Link from "next/link";

export default function Home() {
  return (
    <div className="inherit min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-3 content-center text-center">
      <p>Welcome to my first app in NextJs.</p>
      <p>I implement the architecture CLEAN for this project, the ideal it would be a Monorepo</p>
      <p>But i considered CLEAN has more use of typescript.</p>

      <p>External dependencies: Prisma, Axios, Pg, Tailwindcss</p>

      
      <br />
      <div>
        <main >
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
        </main>
      </div>
    </div>
  );
}
