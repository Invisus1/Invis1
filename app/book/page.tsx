import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { NumberedRow } from "@/components/NumberedRow";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Hairline } from "@/components/Hairline";

export const metadata: Metadata = {
  title: "Book a call — Formidable Functions.ai",
};

export default function BookPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Book a call
            </div>
          </Reveal>
          <AnimatedHeadline
            as="h1"
            className="display display-l hero__headline"
            splitBy="word"
          >
            15 minutes. No deck. No sales script.
          </AnimatedHeadline>
          <Reveal delay={140}>
            <p className="hero__sub" style={{ marginTop: 32 }}>
              We listen to one of your existing patient calls. We tell you exactly what
              the leak is. You leave the call with a one-page audit whether you sign or not.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <CalendlyEmbed url="https://calendly.com/formidablefunctions-ai/30min" />
          </Reveal>
        </div>
      </section>

      <Hairline />

      <section className="section">
        <div className="container split">
          <Reveal>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>
                What you&apos;ll get
              </div>
              <AnimatedHeadline as="h2" className="section-title" splitBy="word">
                From a 15-minute call.
              </AnimatedHeadline>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="num-list">
              <NumberedRow num="01">
                <strong>One-page audit.</strong> Where the leak is, how big it is in
                dollars, what to fix first.
              </NumberedRow>
              <NumberedRow num="02">
                <strong>Voice sample.</strong> A 60-second clip of the agent answering a
                call as if it were your clinic.
              </NumberedRow>
              <NumberedRow num="03">
                <strong>No follow-up unless you ask.</strong> If you say &ldquo;not now,&rdquo; we
                don&apos;t email you for six weeks. Promise.
              </NumberedRow>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
