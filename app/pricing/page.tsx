import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { CTAButtons } from "@/components/CTAButtons";
import { NumberedRow } from "@/components/NumberedRow";
import { PricingTier } from "@/components/PricingTier";
import { Hairline } from "@/components/Hairline";

export const metadata: Metadata = {
  title: "Pricing — Formidable Functions.ai",
};

export default function PricingPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Pricing
            </div>
          </Reveal>
          <AnimatedHeadline
            as="h1"
            className="display display-l hero__headline"
            splitBy="word"
          >
            Three tiers. Pick the one that pays for itself fastest.
          </AnimatedHeadline>
          <Reveal delay={140}>
            <p className="hero__sub" style={{ marginTop: 32 }}>
              Average new patient lifetime value at a single-location PT clinic is
              $1,800. One recovered patient covers Core for the month.
            </p>
          </Reveal>
        </div>
      </section>

      <Hairline />

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            <PricingTier
              name="Revenue Engine Core"
              price="$1,500"
              features={[
                "Booking Engine — 24/7 AI voice agent",
                "Conversion Engine — SMS lead-to-booking sequences",
                "Automated appointment booking",
                "Proof Engine — real-time ROI dashboard",
                "Automated weekly ROI reports",
                "Dedicated phone number",
              ]}
            />
            <PricingTier
              featured
              name="Revenue Engine Pro"
              price="$2,400"
              includes="Everything in Core, plus:"
              features={[
                "Attention Engine — auto-generated clinic content, weekly",
                "Auto-publishing to your social channels",
                "Outbound dormant patient reactivation (up to 500/mo)",
              ]}
            />
            <PricingTier
              name="Revenue Engine Black"
              price="$4,000"
              includes="Everything in Pro, plus:"
              features={[
                "Managed Meta ad campaigns",
                "Up to $15,000/mo ad budget managed",
                "Weekly ad performance reports",
                "Creative refresh every 30 days",
              ]}
            />
          </div>

          <Reveal delay={120}>
            <p
              style={{
                marginTop: 40,
                fontFamily: "var(--f-mono)",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--fg-dim)",
                textAlign: "center",
              }}
            >
              All plans month-to-month · 30-day cancellation · No long-term contracts
            </p>
          </Reveal>
        </div>
      </section>

      <Hairline />

      <section className="section">
        <div className="container split">
          <Reveal>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>
                Common questions
              </div>
              <AnimatedHeadline as="h2" className="section-title" splitBy="word">
                No fine print.
              </AnimatedHeadline>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="num-list">
              <NumberedRow num="01">
                <strong>What&apos;s the contract?</strong> Month-to-month. 30-day notice.
                That&apos;s it.
              </NumberedRow>
              <NumberedRow num="02">
                <strong>Setup fee?</strong> None. Onboarding is included. You pay your
                first month when the agent goes live, not when we start work.
              </NumberedRow>
              <NumberedRow num="03">
                <strong>What if it doesn&apos;t work?</strong> Cancel. We don&apos;t lock you in.
                We&apos;d rather lose a bad fit than fight a refund.
              </NumberedRow>
              <NumberedRow num="04">
                <strong>Do you take a cut of revenue?</strong> No. Flat monthly fee. The
                upside is yours.
              </NumberedRow>
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline />

      <section className="final-cta">
        <div className="container">
          <AnimatedHeadline as="h2" className="section-title" splitBy="word">
            Try it before you pick a tier.
          </AnimatedHeadline>
          <Reveal delay={100}>
            <CTAButtons />
          </Reveal>
        </div>
      </section>
    </>
  );
}
