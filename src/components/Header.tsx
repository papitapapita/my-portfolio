import { Nav } from "./Nav";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="container flex justify-around mx-auto p-8">
        <Link href="/">
          <h1 className="text-4xl font-medium">
            Luke<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex">
          <Nav />
        </div>

        <div className="xl:hidden flex">mobile navbar</div>
      </div>
    </header>
  );
}
