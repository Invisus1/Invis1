import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { CTAButtons } from "@/components/CTAButtons";
import { NumberedRow } from "@/components/NumberedRow";
import { PhoneNumber } from "@/components/PhoneNumber";
import { Waveform } from "@/components/Waveform";
import { Hairline } from "@/components/Hairline";

export const metadata: Metadata = {
  title: "Demo — Formidable Functions.ai",
};

export default function DemoPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Live demo
            </div>
          </Reveal>
          <AnimatedHeadline
            as="h1"
            className="display display-xl hero__headline"
            splitBy="word"
          >
            Pick up your phone. Judge for yourself.
          </AnimatedHeadline>
          <Reveal delay={140}>
            <p className="hero__sub" style={{ marginTop: 32 }}>
              The number below routes to the same voice agent we install for clinics.
              Same model. Same voice quality. Same booking flow. No demo software, no
              sandbox — the agent is live, right now.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="demo-card">
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div
                  className="eyebrow"
                  style={{ display: "inline-flex", gap: 12, alignItems: "center" }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#6BE08F",
                      display: "inline-block",
                    }}
                  />
                  Live agent · Available now
                </div>
                <PhoneNumber size="xl" />
                <Waveform bars={40} />
              </div>

              <div>
                <div className="eyebrow" style={{ marginBottom: 16 }}>
                  Try these
                </div>
                <div className="num-list" role="list" style={{ borderTop: "none" }}>
                  <NumberedRow num="01">
                    <strong>Book a real appointment.</strong> Tell it you have knee pain
                    and want to book a consultation. Watch it confirm a time slot.
                  </NumberedRow>
                  <NumberedRow num="02">
                    <strong>Interrupt it mid-sentence.</strong> Most generic AI agents
                    can&apos;t handle this. Ours expects it.
                  </NumberedRow>
                  <NumberedRow num="03">
                    <strong>Try to break it.</strong> Ask about something off-script.
                    Insurance edge case. A condition you don&apos;t treat. See how it routes.
                  </NumberedRow>
                  <NumberedRow num="04">
                    <strong>Speak fast. Speak slow. Mumble.</strong> Real patients do.
                    The agent should keep up.
                  </NumberedRow>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p
              style={{
                marginTop: 56,
                fontSize: "var(--t-body-l)",
                color: "var(--fg-muted)",
                textAlign: "center",
                maxWidth: "44ch",
                marginInline: "auto",
              }}
            >
              Most patients can&apos;t tell it&apos;s not a person.
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
                What you&apos;ll notice
              </div>
              <AnimatedHeadline as="h2" className="section-title" splitBy="word">
                The three tells.
              </AnimatedHeadline>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="num-list">
              <NumberedRow num="01">
                <strong>Latency.</strong> Generic agents pause for 1.5–2 seconds before
                replying. Ours answers in under 300ms.
              </NumberedRow>
              <NumberedRow num="02">
                <strong>Interruptions.</strong> Cut it off. It stops. It listens. Then
                it adapts. Most agents either talk over you or freeze.
              </NumberedRow>
              <NumberedRow num="03">
                <strong>Voice.</strong> Native phone agents from generic platforms sound
                flat and synthetic. We use VAPI custom voices.
              </NumberedRow>
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline />

      <section className="final-cta">
        <div className="container">
          <AnimatedHeadline as="h2" className="section-title" splitBy="word">
            Heard enough?
          </AnimatedHeadline>
          <Reveal delay={100}>
            <CTAButtons />
          </Reveal>
        </div>
      </section>
    </>
  );
}
