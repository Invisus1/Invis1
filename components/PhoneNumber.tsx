"use client";

import { useEffect, useRef } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  size?: "xl" | "l" | "m";
  className?: string;
};

export function PhoneNumber({ size = "l", className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const chars = el.querySelectorAll<HTMLElement>(".ph-c");
    gsap.set(chars, { yPercent: 110, opacity: 0 });
    const ctx = gsap.context(() => {
      gsap.to(chars, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.025,
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <a
      ref={ref}
      href={PHONE_HREF}
      className={`phone phone--${size} ${className}`}
      aria-label={`Call ${PHONE_DISPLAY}`}
    >
      {Array.from(PHONE_DISPLAY).map((c, i) => (
        <span
          key={i}
          className="ph-c"
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {c}
        </span>
      ))}
    </a>
  );
}
