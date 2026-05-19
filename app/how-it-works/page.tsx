import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { CTAButtons } from "@/components/CTAButtons";
import { Hairline } from "@/components/Hairline";

export const metadata: Metadata = {
  title: "How it works — Formidable Functions.ai",
};

const STEPS = [
  {
    num: "01",
    title: "Discovery — 15 minutes",
    body: "We listen to one of your existing patient calls (with permission), pull your top objections, and identify the leak in your front-desk funnel. You leave the call with a one-page audit.",
  },
  {
    num: "02",
    title: "Voice clone & script mirroring — days 1–4",
    body: "We mirror your intake script word-for-word. Your clinic's phrasing, your scheduler's tone, your insurance copy. The agent should sound like the person who already works for you.",
  },
  {
    num: "03",
    title: "Calendar + EMR wiring — days 5–8",
    body: "Direct integration with Jane, Cliniko, ChiroTouch, or whatever you run. Real-time availability. No double-bookings. No spreadsheet hand-offs.",
  },
  {
    num: "04",
    title: "Soft launch — days 9–11",
    body: "After-hours only first. We watch every call, fix every miss, and tune the agent against your real patients before it touches business hours.",
  },
  {
    num: "05",
    title: "Full launch — day 14",
    body: "24/7 coverage. SMS Conversion Engine live. First batch of dormant-patient reactivation calls queued. Proof Engine dashboard active and weekly ROI reports scheduled.",
  },
  {
    num: "06",
    title: "Ongoing — every month",
    body: "ROI report on the first of the month: new patients, appointments booked, revenue recovered. We tune the agent against the prior month's calls. You stay focused on treating patients.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              How it works
            </div>
          </Reveal>
          <AnimatedHeadline
            as="h1"
            className="display display-l hero__headline"
            splitBy="word"
          >
            From cold install to booked patients in 14 days.
          </AnimatedHeadline>
          <Reveal delay={140}>
            <p className="hero__sub" style={{ marginTop: 32 }}>
              No sprawling onboarding doc. No 90-day implementation. We mirror your
              intake script, plug into your calendar, and your phone is answering by
              the end of week two.
            </p>
          </Reveal>
        </div>
      </section>

      <Hairline />

      <section className="section">
        <div className="container">
          {STEPS.map((s) => (
            <Reveal key={s.num}>
              <div className="step">
                <div className="step__num">{s.num}</div>
                <div>
                  <div className="step__title">{s.title}</div>
                  <div className="step__body">{s.body}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Hairline />

      <section className="section">
        <div className="container split">
          <Reveal>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>
                Under the hood
              </div>
              <AnimatedHeadline as="h2" className="section-title" splitBy="word">
                Built on the stack the generic agencies skip.
              </AnimatedHeadline>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="prose">
              <p>
                Most agencies bolt a native phone agent onto a CRM and call it AI. The
                voice quality is robotic, the interruption handling doesn&apos;t exist, and
                patients hang up.
              </p>
              <p>
                We use VAPI for voice — the same infrastructure powering production
                voice agents at scale. Real-time interrupt handling. Custom voice
                cloning. Sub-300ms turn-taking.
              </p>
              <div className="terminal" aria-label="Stack">
                <div>
                  <span className="prompt">stack/</span>{" "}
                  <span className="out">voice</span> vapi · custom voice clone · sub-300ms latency
                </div>
                <div>
                  <span className="prompt">stack/</span>{" "}
                  <span className="out">sms</span> twilio · two-way · 24/7
                </div>
                <div>
                  <span className="prompt">stack/</span>{" "}
                  <span className="out">calendar</span> jane · cliniko · chirotouch · google · outlook
                </div>
                <div>
                  <span className="prompt">stack/</span>{" "}
                  <span className="out">crm</span> gohighlevel · zapier passthrough
                </div>
                <div>
                  <span className="prompt">stack/</span>{" "}
                  <span className="out">model</span> gpt-4o · claude-3.5-sonnet (fallback)
                </div>
                <div>
                  <span className="prompt">stack/</span>{" "}
                  <span className="out">reporting</span> looker studio · monthly pdf
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline />

      <section className="final-cta">
        <div className="container">
          <AnimatedHeadline as="h2" className="section-title" splitBy="word">
            Hear it before you book it.
          </AnimatedHeadline>
          <Reveal delay={100}>
            <CTAButtons />
          </Reveal>
        </div>
      </section>
    </>
  );
}
