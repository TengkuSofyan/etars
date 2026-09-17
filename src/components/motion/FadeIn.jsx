import React from "react";
import { motion } from "motion/react";

export default function FadeIn({
  children,
  className = "",
  duration = 1,
  delay = 0.25,
  once = false,
  amount = 0.2,
  ...rest
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration, delay }}
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
