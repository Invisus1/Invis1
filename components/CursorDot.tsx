"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function CursorDot() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.25, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.25, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      el.classList.add("is-active");
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor='hover']");
      el.classList.toggle("is-hover", Boolean(interactive));
    };
    const onLeave = () => el.classList.remove("is-active");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={ref} className="cursor-dot" aria-hidden />;
}
