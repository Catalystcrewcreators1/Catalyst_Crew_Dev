"use client";

import React, { useState, useEffect } from "react";
import { KiwiLoader } from "./KiwiLoader";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const hideSplash = () => {
      // Ensure the loader stays for at least 1000ms to avoid flashing,
      // but only hides when the page is fully loaded.
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      hideSplash();
    } else {
      window.addEventListener("load", hideSplash);
      return () => {
        window.removeEventListener("load", hideSplash);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-cream"
        >
          <KiwiLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
