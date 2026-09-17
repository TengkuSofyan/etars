import React from "react";
// components/motion/SlideInRight.jsx
import { motion } from "motion/react";

const rightVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.25 } },
  hidden: { x: 75, opacity: 0 },
};

export default function SlideInRight({
  children,
  className = "",
  once = true,
  amount = 0.2,
  ...rest
}) {
  return (
    <motion.div
      className={className}
      variants={rightVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
