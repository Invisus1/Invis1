import Link from "next/link";
import { NAV_ITEMS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="eyebrow">Call this number — hear what your patients will hear</div>
          <a
            href={PHONE_HREF}
            className="phone phone--m"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            {PHONE_DISPLAY}
          </a>
          <ul className="footer__links">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/book">Book</Link>
            </li>
          </ul>
          <div className="footer__copy">© 2026 Formidable Functions.ai</div>
        </div>
      </div>
    </footer>
  );
}
