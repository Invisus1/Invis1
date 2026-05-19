"use client";

import { ReactNode, useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
  splitBy?: "word" | "char";
  stagger?: number;
};

/**
 * Renders text split into wrapped spans for a clip-mask reveal.
 * The wrap spans get overflow:hidden, and the inner spans translate
 * up from below on scroll.
 */
export function AnimatedHeadline({
  children,
  className = "",
  as = "h1",
  delay = 0,
  splitBy = "word",
  stagger = 0.06,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inners = el.querySelectorAll<HTMLElement>(".ah-inner");
    if (prefersReducedMotion()) {
      gsap.set(inners, { yPercent: 0 });
      return;
    }
    gsap.set(inners, { yPercent: 110 });
    const ctx = gsap.context(() => {
      gsap.to(inners, {
        yPercent: 0,
        duration: 1.05,
        ease: "expo.out",
        stagger,
        delay: delay / 1000,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, [delay, stagger]);

  const tokens =
    splitBy === "word"
      ? children.split(/(\s+)/)
      : Array.from(children);

  const Tag = as as keyof JSX.IntrinsicElements;
  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className}>
      {tokens.map((tok, i) => {
        if (/^\s+$/.test(tok)) return <span key={i}>{tok}</span>;
        return (
          <span
            key={i}
            className="ah-wrap"
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", lineHeight: "1.05" }}
          >
            <span className="ah-inner" style={{ display: "inline-block", willChange: "transform" }}>
              {tok}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
