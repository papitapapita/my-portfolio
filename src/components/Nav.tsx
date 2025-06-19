"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkButton {
  name: string;
  path: string;
}

const linkButtons: LinkButton[] = [
  { name: "Home", path: "/" },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export function Nav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex place-items-center gap-4 hover">
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
      <Button className="bg-accent ">Hire me</Button>
    </nav>
  );
}
