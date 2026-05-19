"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function Marquee({ items, speed = 28 }: { items: string[]; speed?: number }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const tween = gsap.to(el, {
      xPercent: -50,
      ease: "none",
      duration: speed,
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, [speed]);

  const content = (
    <div className="marquee__track" ref={trackRef}>
      {items.concat(items).map((it, i) => (
        <span key={i}>{it}</span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden>
      {content}
    </div>
  );
}
