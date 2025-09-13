"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNavigation } from "@/contexts/NavigationContext";

export function TransitionPage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const { animationPhase, setAnimationPhase } = useNavigation();

  useEffect(() => {
    // When pathname changes and we're in transition phase, start stairs down animation
    if (animationPhase === "transition") {
      // Small delay to ensure the new page content is ready
      const timer = setTimeout(() => {
        setAnimationPhase("stairs-down");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname, animationPhase, setAnimationPhase]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: animationPhase === "transition" ? 0 : 1,
        }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: animationPhase === "stairs-down" ? 0.6 : 0, // Delay appearance until stairs are mostly down
        }}
        className={
          animationPhase === "transition" ? "invisible" : "visible"
        }
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
