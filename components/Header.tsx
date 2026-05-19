"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  // Slide-in on mount
  useEffect(() => {
    if (!navRef.current || prefersReducedMotion()) return;
    gsap.from(navRef.current, { y: -64, opacity: 0, duration: 0.8, ease: "power3.out" });
  }, []);

  // Background swap on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      navRef.current.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header ref={navRef} className="nav">
      <div className="container nav__inner">
        <Link href="/" className="brand" aria-label="Formidable Functions.ai home">
          <span className="brand__mark" aria-hidden />
          <span>FORMIDABLE&nbsp;FUNCTIONS.AI</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav__link ${isActive(item.href) ? "is-active" : ""}`}
              data-cursor="hover"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book" className="nav__cta" data-cursor="hover">
            Book a Call →
          </Link>
        </nav>

        <button
          className="nav__menu-btn"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Menu"
        >
          <span className="bars" aria-hidden>
            <span />
            <span />
            <span />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/book">Book a Call →</Link>
        <a href={PHONE_HREF} className="mono" style={{ color: "var(--fg)" }}>
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}
