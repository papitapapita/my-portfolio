export interface NavigationContextType {
  isNavigating: boolean;
  animationPhase: "idle" | "stairs-up" | "transition" | "stairs-down";
  startNavigation: () => void;
  endNavigation: () => void;
  setAnimationPhase: (
    phase: NavigationContextType["animationPhase"]
  ) => void;
}
