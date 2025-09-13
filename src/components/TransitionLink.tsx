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
  const { startNavigation, animationPhase } = useNavigation();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();

    if (animationPhase !== "idle") {
      return;
    }

    startNavigation();

    // Small delay to ensure transition starts before navigation
    setTimeout(() => {
      router.push(href);
    }, 600);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
