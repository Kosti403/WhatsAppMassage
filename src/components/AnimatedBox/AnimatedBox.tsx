import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedBoxProps {
  children: ReactNode;
}

export const AnimatedBox: React.FC<AnimatedBoxProps> = ({ children }) => {
  return (
    <motion.div
      className="box"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
