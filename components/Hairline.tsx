"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function Hairline() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { scaleX: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.to(el, {
        scaleX: 1,
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 95%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);
  return <div ref={ref} className="hairline" aria-hidden />;
}
