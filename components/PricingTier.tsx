"use client";

import { useEffect, useRef } from "react";
import { MagneticButton } from "./MagneticButton";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
  includes?: string;
};

export function PricingTier({ name, price, features, featured = false, includes }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    if (!prefersReducedMotion()) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      }, el);

      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        el.style.setProperty("--mx", `${x}%`);
        el.style.setProperty("--my", `${y}%`);
      };
      el.addEventListener("mousemove", onMove);
      return () => {
        ctx.revert();
        el.removeEventListener("mousemove", onMove);
      };
    }
  }, []);

  return (
    <div ref={cardRef} className={`card ${featured ? "card--featured" : ""}`}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div className="tier__name">{name}</div>
        <div className="tier__price">
          {price}
          <span className="per">/ month</span>
        </div>
      </div>
      <div className="tier__divider" />
      {includes && <div className="tier__includes">{includes}</div>}
      <ul className="tier__features">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <div style={{ marginTop: "auto", paddingTop: 12 }}>
        <MagneticButton
          href="/book"
          variant={featured ? "primary" : "ghost"}
          className="w-full"
        >
          <span style={{ flex: 1, textAlign: "center" }}>Get started</span>
        </MagneticButton>
      </div>
    </div>
  );
}
