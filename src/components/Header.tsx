import { MobileNav } from "./MobileNav";
import { Nav } from "./Nav";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="container flex justify-between mx-auto py-8">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Jonathan<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex">
          <Nav />
        </div>

        <div className="xl:hidden flex">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
