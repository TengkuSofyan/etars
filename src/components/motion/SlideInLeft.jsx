import React from "react";
import { motion } from "motion/react";

const leftVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.25 } },
  hidden: { x: -75, opacity: 0 },
};

export default function SlideInLeft({
  children,
  className = "",
  once = true,
  amount = 0.2,
  ...rest
}) {
  return (
    <motion.div
      className={className}
      variants={leftVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
