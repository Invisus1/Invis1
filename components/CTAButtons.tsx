import { PHONE_HREF } from "@/lib/constants";
import { MagneticButton } from "./MagneticButton";

export function CTAButtons() {
  return (
    <div className="cta-row">
      <MagneticButton href={PHONE_HREF} variant="primary" external>
        Call the demo
      </MagneticButton>
      <MagneticButton href="/book" variant="ghost">
        Book a discovery call
      </MagneticButton>
    </div>
  );
}
