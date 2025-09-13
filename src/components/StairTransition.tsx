"use client";

import { motion } from "framer-motion";
import { useNavigation } from "@/contexts/NavigationContext";
import { Stairs } from "./Stairs";

export function StairTransition() {
  const { animationPhase } = useNavigation();

  // Don't render anything during idle phase
  if (animationPhase === "idle") {
    return null;
  }

  return (
    <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40">
      <div className="h-full w-full flex">
        <Stairs />
      </div>

      {/* Green background that appears during transition phase */}
      {animationPhase === "transition" && (
        <motion.div
          className="h-screen w-screen fixed bg-accent top-0 pointer-events-none z-30"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        />
      )}
    </div>
  );
}
