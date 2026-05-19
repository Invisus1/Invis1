"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

/**
 * Pill button with a soft magnetic pull on hover and a gradient
 * spotlight tracking the cursor inside the pill.
 */
export function MagneticButton({ href, children, variant = "primary", className = "", external = false }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const moveX = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--mx", `${(x / r.width) * 100}%`);
      el.style.setProperty("--my", `${(y / r.height) * 100}%`);
      const dx = (x - r.width / 2) * 0.18;
      const dy = (y - r.height / 2) * 0.22;
      moveX(dx);
      moveY(dy);
    };
    const onLeave = () => {
      moveX(0);
      moveY(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const cls = `btn btn--${variant} ${className}`;
  const inner = (
    <>
      {children}
      <span className="arrow">→</span>
    </>
  );

  if (external) {
    return (
      <a ref={ref} href={href} className={cls} data-cursor="hover">
        {inner}
      </a>
    );
  }

  return (
    <Link ref={ref as unknown as React.RefObject<HTMLAnchorElement>} href={href} className={cls} data-cursor="hover">
      {inner}
    </Link>
  );
}
