import Link from "next/link";
import { CustomButton } from "./users/components/CustomButton";

export default function Home() {
  return (
    <main className="pt-4">
      <div className="grid grid-cols-1 grid-rows-2 gap-2">
        <p
          className=" rounded-3xl overflow-hidden p-4
          bg-linear-to-br from-gray-800 via-gray-500 to-gray-800 
          border border-black 
          hover:scale-105 hover:contrast-150 transition-transform 
          flex flex-col cursor-crosshair"
        >
          <span className="text-2xl">Welcome to my first app in NextJs.</span>
          <br />
          <span>
            I implement the architecture CLEAN for this project, the ideal it
            would be a Monorepo.
          </span>
          <span>But i considered CLEAN has more use of typescript.</span>
          <span>
            External dependencies: Prisma, Axios, Pg, Tailwindcss, Jest.
          </span>
          <span>
            I would have liked to implement zod or other dependencies to improve
            the app.
          </span>
        </p>
        <CustomButton text="Go to Users" />
      </div>
    </main>
  );
}
