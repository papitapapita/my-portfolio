"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { linkButtons } from "@/lib/nav-links";

export function Nav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex place-items-center gap-8 hover">
      {linkButtons.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname &&
            "border-b-2 border-accent text-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
      <Button>Hire me</Button>
    </nav>
  );
}
