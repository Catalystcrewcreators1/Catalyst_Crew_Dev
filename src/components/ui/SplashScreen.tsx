"use client";

import React, { useState, useEffect } from "react";
import { KiwiLoader } from "./KiwiLoader";

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

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-cream transition-opacity duration-500 ease-in-out">
      <KiwiLoader />
    </div>
  );
}
