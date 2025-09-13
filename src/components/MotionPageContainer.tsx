import { motion } from "framer-motion";

export function MotionPageContainer({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.2, ease: "easeIn" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
