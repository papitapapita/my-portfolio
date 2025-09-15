"use client";

import { Button } from "../ui/button";
import { TransitionLink } from "./TransitionLink";
import { usePathname } from "next/navigation";
import { linkButtons } from "@/data/navLinks";
import clsx from "clsx";

export function Nav() {
  const pathname = usePathname();
  return (
    <nav
      className="flex place-items-center gap-8 hover"
      aria-label="Main navigation"
    >
      {linkButtons.map((link) =>
        link.external ? (
          <Button asChild key={link.path}>
            <a
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="capitalize"
            >
              {link.name}
            </a>
          </Button>
        ) : (
          <TransitionLink
            href={link.path}
            key={link.path}
            className={clsx(
              "capitalize font-medium hover:text-accent transition-all",
              link.path === pathname &&
                "border-b-2 border-accent text-accent"
            )}
          >
            {link.name}
          </TransitionLink>
        )
      )}
    </nav>
  );
}
