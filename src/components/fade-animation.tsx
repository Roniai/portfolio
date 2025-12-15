"use client";
import { Edirection } from "@/lib/types";
import { motion } from "framer-motion";
import * as React from "react";

export function FadeAnimation({
  direction,
  children,
  className = "",
  staggerChildren = 0.1,
  delay = 0.6,
}: {
  direction: Edirection;
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delay?: number;
}) {
  const variants: any = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { type: "spring", delay: delay },
    },
    hidden: {
      opacity: 0,
      y: direction === "down" ? -18 : direction === "up" ? 18 : 0,
      x: direction === "left" ? -18 : direction === "right" ? 18 : 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      /** @todo: no animation on scroll up */
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={variants}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
