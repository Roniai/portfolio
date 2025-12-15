"use client";

import { useEffect, useState } from "react";
import { SplashScreen } from "@/components/splash-screen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const SPLASH_DURATION = 6500;
  const FADE_DURATION = 800;

  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, SPLASH_DURATION);

    const removeTimer = setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION + FADE_DURATION);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {/* CHILDREN IS ALREADY RENDERED */}
      {children}

      {/* SPLASH ON OVERLAY */}
      {showSplash && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center
            bg-background transition-opacity ease-in-out
            ${fadeOut ? "opacity-0" : "opacity-100"}
          `}
          style={{ transitionDuration: `${FADE_DURATION}ms` }}
        >
          <SplashScreen />
        </div>
      )}
    </>
  );
}
