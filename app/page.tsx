import { Reveal } from "@/components/Reveal";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { PhoneNumber } from "@/components/PhoneNumber";
import { Waveform } from "@/components/Waveform";
import { NumberedRow } from "@/components/NumberedRow";
import { CTAButtons } from "@/components/CTAButtons";
import { MagneticButton } from "@/components/MagneticButton";
import { StatCounter } from "@/components/StatCounter";
import { Hairline } from "@/components/Hairline";
import { PricingTier } from "@/components/PricingTier";
import { HeroCipher } from "@/components/HeroCipher";
import { Marquee } from "@/components/Marquee";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <HeroCipher digits="0723" />
        <div className="container">
          <Reveal>
            <div className="hero__eyebrow eyebrow">
              <span className="dot" aria-hidden />
              Live AI agent · Available now
            </div>
          </Reveal>

          <AnimatedHeadline
            as="h1"
            className="display display-xl hero__headline"
            splitBy="word"
            stagger={0.08}
          >
            Your AI front desk that never sleeps.
          </AnimatedHeadline>

          <Reveal delay={140}>
            <p className="hero__sub">
              Every new patient inquiry answered in under 30 seconds. Every appointment
              booked automatically. 24/7 — while you&apos;re treating patients, after hours,
              and on weekends.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="hero__phone-block">
              <div className="hero__phone-caption">
                Call this number — hear what your patients will hear
              </div>
              <PhoneNumber size="xl" />
              <Waveform bars={32} />
              <div className="hero__cta-row">
                <MagneticButton href="/book" variant="primary">
                  Book a 15-minute call
                </MagneticButton>
                <span className="hero__cta-note">
                  No deck. No demo software. A 15-min conversation.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline />

      {/* ---------- PROBLEM ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              01 — The problem
            </div>
            <AnimatedHeadline as="h2" className="section-title" splitBy="word">
              Your competitors are picking up your phone.
            </AnimatedHeadline>
          </Reveal>

          <div className="stats-grid">
            <StatCounter value={78} unit="%" label="of patients book the first clinic that answers." />
            <StatCounter value={47} unit="hrs" label="average time between voicemail left and callback returned." />
            <StatCounter value={40} unit="%" label="of after-hours callers never call back. Ever." />
          </div>

          <Reveal delay={200}>
            <p
              style={{
                marginTop: 56,
                maxWidth: "60ch",
                color: "var(--fg-muted)",
                fontSize: "var(--t-body-l)",
                lineHeight: 1.5,
              }}
            >
              Independent clinics lose six figures a year to a phone that goes to voicemail.
              <span style={{ color: "var(--fg)" }}> We fix that.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <Hairline />

      {/* ---------- MARQUEE ---------- */}
      <Marquee
        items={[
          "VAPI native voice",
          "Sub-300ms latency",
          "Real interruption handling",
          "Jane · Cliniko · ChiroTouch",
          "GoHighLevel · Twilio",
          "24/7 coverage",
        ]}
      />

      <Hairline />

      {/* ---------- FOUR ENGINES ---------- */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>
                02 — The system
              </div>
              <AnimatedHeadline as="h2" className="section-title" splitBy="word">
                Four engines. One revenue system.
              </AnimatedHeadline>
              <p
                style={{
                  marginTop: 24,
                  color: "var(--fg-muted)",
                  fontSize: "var(--t-body-l)",
                  maxWidth: "32ch",
                }}
              >
                The 1% Revenue Engine plugs into your clinic in under 14 days.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="num-list" role="list">
              <NumberedRow num="01">
                <strong>Booking Engine</strong> — 24/7 AI voice agent that answers every
                call, qualifies patients, and books appointments directly into your calendar.
              </NumberedRow>
              <NumberedRow num="02">
                <strong>Conversion Engine</strong> — automated SMS sequences that turn
                website inquiries and missed calls into booked appointments.
              </NumberedRow>
              <NumberedRow num="03">
                <strong>Attention Engine</strong> — AI-powered content system that auto-
                generates clinic-specific posts weekly and publishes to your socials.
              </NumberedRow>
              <NumberedRow num="04">
                <strong>Proof Engine</strong> — real-time dashboard plus automated weekly
                reports showing new patients, appointments booked, and revenue recovered.
              </NumberedRow>
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline />

      {/* ---------- WEDGE ---------- */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>
                03 — The difference
              </div>
              <AnimatedHeadline as="h2" className="section-title" splitBy="word">
                You can hear it on the call.
              </AnimatedHeadline>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="prose">
              <p>
                Most AI agencies hand you a generic native phone agent and a templated
                playbook. <strong>You can tell within 10 seconds.</strong>
              </p>
              <p>
                We build on VAPI — real conversation handling, custom voices, and the
                interruption logic that lets a patient cut in mid-sentence the way they
                do with a human receptionist.
              </p>
              <p>
                The voice quality is the differentiator. Pick up the phone and judge it
                yourself.
              </p>
              <div className="tech-strip" aria-label="Stack">
                <span>VAPI</span>
                <span>Twilio</span>
                <span>GHL</span>
                <span>Calendly / Jane / Cliniko</span>
                <span>OpenAI / Anthropic</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline />

      {/* ---------- DEMO ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              04 — The demo
            </div>
            <AnimatedHeadline as="h2" className="section-title" splitBy="word">
              Hear it for yourself.
            </AnimatedHeadline>
          </Reveal>

          <Reveal delay={100}>
            <div className="demo-card" style={{ marginTop: 56 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div className="eyebrow">Tap to call · 24/7 · Free</div>
                <PhoneNumber size="xl" />
                <Waveform bars={36} />
              </div>

              <div className="num-list" role="list" style={{ borderTop: "none" }}>
                <NumberedRow num="01">
                  Tell it you have knee pain and want to book a consultation.
                </NumberedRow>
                <NumberedRow num="02">Try interrupting it mid-sentence.</NumberedRow>
                <NumberedRow num="03">
                  Ask it a question it shouldn&apos;t be able to answer.
                </NumberedRow>
              </div>

              <p
                style={{
                  color: "var(--fg-muted)",
                  fontSize: "var(--t-body-l)",
                  maxWidth: "44ch",
                }}
              >
                Most patients can&apos;t tell it&apos;s not a person.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline />

      {/* ---------- PRICING ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 56, display: "flex", flexDirection: "column", gap: 24 }}>
              <div className="eyebrow">05 — Pricing</div>
              <AnimatedHeadline as="h2" className="section-title" splitBy="word">
                Three tiers. Month-to-month. No contracts.
              </AnimatedHeadline>
            </div>
          </Reveal>

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

          <Reveal delay={200}>
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

      {/* ---------- PROOF ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 24 }}>
              <div className="eyebrow">06 — Proof (in progress)</div>
              <AnimatedHeadline as="h2" className="section-title" splitBy="word">
                Built for independent PT and chiro clinics across North America.
              </AnimatedHeadline>
              <p style={{ color: "var(--fg-muted)", fontSize: "var(--t-body-l)", maxWidth: "60ch" }}>
                We&apos;re onboarding our first cohort now. Real numbers will live here as soon
                as they exist — not before.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
              }}
            >
              {[1, 2, 3].map((i) => (
                <div key={i} className="card" style={{ minHeight: 280 }}>
                  <div className="eyebrow">Case study #{String(i).padStart(2, "0")}</div>
                  <div className="placeholder" style={{ flex: 1, minHeight: 120 }}>
                    Reserved · clinic numbers land here Q3
                  </div>
                  <div
                    style={{ color: "var(--fg-dim)", fontSize: 13, fontFamily: "var(--f-mono)" }}
                  >
                    Solo-location PT or chiro · pull-quote + before/after metrics
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline />

      {/* ---------- FINAL CTA ---------- */}
      <section className="final-cta">
        <div className="container">
          <AnimatedHeadline as="h2" className="section-title" splitBy="word">
            Stop losing patients to voicemail.
          </AnimatedHeadline>
          <Reveal delay={100}>
            <CTAButtons />
          </Reveal>
        </div>
      </section>
    </>
  );
}
