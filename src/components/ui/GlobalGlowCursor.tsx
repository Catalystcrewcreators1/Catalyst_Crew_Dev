"use client";
import dynamic from "next/dynamic";

const GlowCursor = dynamic(() => import("@/components/ui/GlowCursor"), {
  ssr: false,
});

export function GlobalGlowCursor() {
  return (
    <GlowCursor
      color="#e63946"
      secondaryColor="#ff6b6b"
      trailLength={35}
      trailWidth={6}
      trailTaper={0.85}
      followSpeed={0.18}
      glowIntensity={2.2}
      glowSpread={1.4}
      hotspot={0.6}
      brightness={1.3}
      opacity={0.9}
      pulseSpeed={1.0}
      noiseStrength={0.03}
      idleFade
      idleTimeout={800}
      fadeDuration={1000}
      blendMode="screen"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
      }}
    >
      {null}
    </GlowCursor>
  );
}
