"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { NavigationContextType } from "@/types/NavigationContextType";

const NavigationContext = createContext<
  NavigationContextType | undefined
>(undefined);

export function NavigationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [animationPhase, setAnimationPhase] =
    useState<NavigationContextType["animationPhase"]>("idle");

  const startNavigation = () => {
    setIsNavigating(true);
    setAnimationPhase("stairs-up");
  };

  const endNavigation = () => {
    setIsNavigating(false);
    setAnimationPhase("idle");
  };

  return (
    <NavigationContext.Provider
      value={{
        isNavigating,
        animationPhase,
        startNavigation,
        endNavigation,
        setAnimationPhase,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error(
      "useNavigation must be used within a NavigationProvider"
    );
  }
  return context;
}
