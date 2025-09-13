"use client";

import { Button } from "./ui/button";
import { TransitionLink } from "./TransitionLink";
import { usePathname } from "next/navigation";
import { linkButtons } from "@/lib/nav-links";

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex place-items-center gap-8 hover">
      {linkButtons.map((link, index) => (
        <TransitionLink
          href={link.path}
          key={index}
          className={`${
            link.path === pathname &&
            "border-b-2 border-accent text-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </TransitionLink>
      ))}
      <Button asChild>
        <a
          href="https://www.linkedin.com/in/jonathan-olivos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire me
        </a>
      </Button>
    </nav>
  );
}
