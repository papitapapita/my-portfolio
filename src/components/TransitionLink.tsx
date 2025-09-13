"use client";

import Link from "next/link";
import { useNavigation } from "@/contexts/NavigationContext";
import { useRouter } from "next/navigation";
import { TransitionLinkProps } from "@/types/TransitionLinkProps";

export function TransitionLink({
  href,
  children,
  className,
  onClick,
}: TransitionLinkProps) {
  const { startNavigation } = useNavigation();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
    startNavigation();

    // Small delay to ensure transition starts before navigation
    setTimeout(() => {
      router.push(href);
    }, 50);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
