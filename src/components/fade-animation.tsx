"use client";
import { Edirection } from "@/lib/types";
import { motion, useAnimation, useInView } from "framer-motion";
import * as React from "react";
import { useEffect, useRef } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.2 });

  const variants: any = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { type: "spring", delay },
    },
    hidden: {
      opacity: 0,
      y: direction === "down" ? -18 : direction === "up" ? 18 : 0,
      x: direction === "left" ? -18 : direction === "right" ? 18 : 0,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();

      // Reset only when moving back above the component
      // distance between top component and top viewport > screen height
      if (rect.top > window.innerHeight) {
        controls.set("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className={className}
      variants={{
        visible: {
          transition: {
            staggerChildren,
          },
        },
      }}
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
