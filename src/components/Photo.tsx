"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Photo() {
  return (
    <div className="relative border">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="h-[298px] w-[298px] xl:h-[498px] xl:w-[498px] mix-blend-lighten"
        >
          <Image
            src="file.svg"
            alt="Profile Photo"
            quality={100}
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
