import { useNavigation } from "@/contexts/NavigationContext";
import { reverse } from "dns";
import { delay, motion } from "framer-motion";
import { Dhurjati } from "next/font/google";

function reverseIndex(index: number) {
  const totalSteps = 6;
  return totalSteps - index - 1;
}

export function Stairs() {
  const { animationPhase, setAnimationPhase } = useNavigation();

  const getStairsVariants = () => {
    return {
      initial: {
        top: "0%",
      },
      stairsUp: {
        top: "100%",
      },
      stairsDown: {
        top: ["100%", "0%"],
      },
    };
  };

  const getAnimationProps = (index: number) => {
    const baseDelay = reverseIndex(index) * 0.1;
    switch (animationPhase) {
      case "stairs-up":
        return {
          initial: "initial",
          animate: "stairsUp",
          transition: {
            duration: 0.4,
            ease: "easeInOut",
            delay: baseDelay,
          },
          onAnimationComplete: () => {
            if (index === 0) {
              setAnimationPhase("transition");
            }
          },
        };
      case "stairs-down":
        return {
          initial: "stairsUp",
          animate: "stairsDown",
          transition: {
            duration: 0.4,
            ease: "easeInOut",
            delay: index * 0.1,
          },
          onAnimationComplete: () => {
            if (index === 5) {
              setAnimationPhase("idle");
            }
          },
        };
      default:
        return {
          initial: "initial",
          animate: "initial",
          transition: { duration: 0 },
        };
    }
  };

  if (animationPhase === "idle") {
    return null;
  }

  return (
    <>
      {[...Array(6)].map((_, index) => {
        const animationProps = getAnimationProps(index);

        return (
          <motion.div
            key={index}
            variants={getStairsVariants()}
            {...animationProps}
            className="h-full w-full bg-accent relative"
          />
        );
      })}
    </>
  );
}
