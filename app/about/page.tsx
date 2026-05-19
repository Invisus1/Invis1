import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { CTAButtons } from "@/components/CTAButtons";
import { NumberedRow } from "@/components/NumberedRow";
import { Hairline } from "@/components/Hairline";

export const metadata: Metadata = {
  title: "About — Formidable Functions.ai",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              About
            </div>
          </Reveal>
          <AnimatedHeadline
            as="h1"
            className="display display-l hero__headline"
            splitBy="word"
          >
            One operator. One product. One clinic vertical.
          </AnimatedHeadline>
        </div>
      </section>

      <Hairline />

      <section className="section">
        <div className="container split">
          <Reveal>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>
                Founder
              </div>
              <AnimatedHeadline as="h2" className="section-title" splitBy="word">
                Daniel Deng
              </AnimatedHeadline>
              <div className="tech-strip" style={{ marginTop: 24 }}>
                <span>Solo founder</span>
                <span>Builder, not marketer</span>
                <span>North America</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="prose">
              <p>
                Formidable Functions.ai is a one-person agency by design. You&apos;ll have
                my cell number. You&apos;ll talk to me, not an account manager.
              </p>
              <p>
                I built this after watching independent PT and chiro clinics — the kind
                with one location, one owner, one front desk — lose patients to chains
                that just answer their phone faster.
              </p>
              <p>
                <strong>The product is narrow on purpose.</strong> One vertical. One
                outcome: every new patient call answered, every dormant patient
                reactivated, every dollar tracked.
              </p>
              <p>
                If you want a generalist agency that does logos and Instagram, this
                isn&apos;t it. If you want a phone that books patients while you&apos;re treating
                them, keep reading.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline />

      <section className="section">
        <div className="container split">
          <Reveal>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>
                Principles
              </div>
              <AnimatedHeadline as="h2" className="section-title" splitBy="word">
                How we work.
              </AnimatedHeadline>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="num-list">
              <NumberedRow num="01">
                <strong>Specificity over adjectives.</strong> Numbers, names, dates. If
                we can&apos;t put a number on it, we don&apos;t put it on the site.
              </NumberedRow>
              <NumberedRow num="02">
                <strong>Demo before deck.</strong> The phone number is the pitch. If
                you can&apos;t trust the voice on the call, nothing in a slide deck will fix it.
              </NumberedRow>
              <NumberedRow num="03">
                <strong>Builders, not marketers.</strong> We ship code, not campaigns.
                The marketing layer (Meta ads in Black tier) is bolted onto a working
                front desk — never the other way around.
              </NumberedRow>
              <NumberedRow num="04">
                <strong>Month-to-month, always.</strong> If the system doesn&apos;t pay for
                itself by month two, you shouldn&apos;t be paying us in month three.
              </NumberedRow>
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline />

      <section className="final-cta">
        <div className="container">
          <AnimatedHeadline as="h2" className="section-title" splitBy="word">
            Easiest way to vet us: call the number.
          </AnimatedHeadline>
          <Reveal delay={100}>
            <CTAButtons />
          </Reveal>
        </div>
      </section>
    </>
  );
}
