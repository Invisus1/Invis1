"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * The drifting radial glow behind every page. Slowly tracks the
 * cursor and lazily oscillates so the static black canvas feels
 * alive without distracting from the type.
 */
export function SiteBackdrop() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    // Idle drift — a slow figure-eight using two tweens.
    const idle = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } });
    idle.to(el, { x: 60, y: 40, duration: 9 });
    idle.to(el, { x: -40, y: 20, duration: 7 });

    // Cursor follow — soft, lagged.
    const moveX = gsap.quickTo(el, "x", { duration: 1.6, ease: "power2.out" });
    const moveY = gsap.quickTo(el, "y", { duration: 1.6, ease: "power2.out" });

    const onMove = (e: MouseEvent) => {
      idle.pause();
      const x = (e.clientX / window.innerWidth - 0.5) * 220;
      const y = (e.clientY / window.innerHeight - 0.5) * 160;
      moveX(x);
      moveY(y);
    };
    const onLeave = () => idle.play();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      idle.kill();
    };
  }, []);

  return (
    <div className="site-backdrop" aria-hidden>
      <div ref={glowRef} className="site-backdrop__glow" />
      <div className="site-backdrop__grain" />
    </div>
  );
}
