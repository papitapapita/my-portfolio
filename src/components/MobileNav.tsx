"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { linkButtons } from "@/lib/nav-links";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-accent cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 text-center">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Jonathan<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="mt-32 flex flex-col place-items-center gap-8 hover">
          {linkButtons.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={() => setOpen(false)}
              className={`${
                link.path === pathname &&
                "border-b-2 border-accent text-accent"
              } capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
