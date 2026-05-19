"use client";

import { ReactNode, useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  value: number;
  unit: string;
  label: ReactNode;
  duration?: number;
};

export function StatCounter({ value, unit, label, duration = 1.6 }: Props) {
  const numRef = useRef<HTMLSpanElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = numRef.current;
    const wrap = wrapRef.current;
    if (!el || !wrap) return;
    if (prefersReducedMotion()) {
      el.textContent = String(value);
      return;
    }

    const counter = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrap,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: wrap, start: "top 88%", once: true },
        }
      );
      gsap.to(counter, {
        v: value,
        duration,
        ease: "power3.out",
        snap: { v: 1 },
        scrollTrigger: { trigger: wrap, start: "top 88%", once: true },
        onUpdate: () => {
          el.textContent = Math.round(counter.v).toString();
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, [value, duration]);

  return (
    <div ref={wrapRef} className="stat" style={{ opacity: 0 }}>
      <div className="stat__num">
        <span ref={numRef}>0</span>
        <span className="unit">{unit}</span>
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
}
