"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNavigation } from "@/contexts/NavigationContext";

export function TransitionPage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const { isNavigating, endNavigation } = useNavigation();

  useEffect(() => {
    endNavigation();
  }, [pathname, endNavigation]);

  return (
    <>
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            key="transition-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-screen w-screen bg-background pointer-events-none z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
