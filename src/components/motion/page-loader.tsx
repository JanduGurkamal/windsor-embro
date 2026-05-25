"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "windsor-visited";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem(SESSION_KEY);
    const isCoarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    if (visited || isCoarse) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0a0a] pointer-events-auto"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <p className="label-luxury mb-4 text-[#a8a29e]">Windsor Embro</p>
            <motion.h1
              className="font-display text-3xl font-semibold tracking-tight text-[#fafaf8] sm:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Crafted to endure.
            </motion.h1>
          </motion.div>
          <motion.div
            className="absolute bottom-12 h-px w-32 bg-[#c4b5a0]/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
