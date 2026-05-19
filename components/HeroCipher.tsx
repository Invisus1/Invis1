"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Decorative oversized monospace numerals tucked into the bottom-right
 * of the hero. Parallax-scrolls and on mount ticks a digit reveal.
 */
export function HeroCipher({ digits = "0723" }: { digits?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    const chars = el.querySelectorAll<HTMLElement>(".hc-c");
    gsap.set(chars, { opacity: 0, yPercent: 60 });
    gsap.to(chars, {
      opacity: 0.5,
      yPercent: 0,
      duration: 1.4,
      ease: "expo.out",
      stagger: 0.08,
      delay: 0.3,
    });

    gsap.to(el, {
      yPercent: -25,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
    });
  }, []);

  return (
    <div className="hero__cipher" ref={ref} aria-hidden>
      {Array.from(digits).map((d, i) => (
        <span key={i} className="hc-c" style={{ display: "inline-block" }}>
          {d}
        </span>
      ))}
    </div>
  );
}
