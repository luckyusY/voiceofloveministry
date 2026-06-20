"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import s from "../ui.module.css";

const AMOUNTS = [20, 50, 100, 250, 500];

const IMPACT: Record<number, string> = {
  20: "goes toward teaching materials and children's activities.",
  50: "helps cover a children's gathering or community visit.",
  100: "supports travel, teaching, worship, and practical care.",
  250: "helps the ministry plan and carry out a larger outreach visit.",
  500: "supports ongoing work with children and families across our locations.",
};

const DESIGNATIONS = [
  "Where most needed",
  "Children & Families",
  "Worship & Music",
];

const FAQS = [
  {
    q: "Is my donation secure?",
    a: "Yes. Payments are processed by industry-leading providers (Stripe and PayPal) using bank-level encryption. The Voice of Love Ministry never sees or stores your card details.",
  },
  {
    q: "Can I give monthly?",
    a: "Yes. Monthly gifts give us a steadier budget for visits, teaching, worship, and practical support. You can change or cancel your gift at any time.",
  },
  {
    q: "Is my gift tax-deductible?",
    a: "Donations made through our United States headquarters are tax-deductible to the extent allowed by law. You will receive a receipt by email for your records.",
  },
  {
    q: "Where does my money go?",
    a: "Your gift supports children's ministry, teaching, worship, community visits, and practical care. You can choose a specific area or let us use it where it is most needed.",
  },
  {
    q: "How do I cancel or change a monthly gift?",
    a: "Use the link in your confirmation email, or contact us and we will help you make the change.",
  },
];

export default function DonatePage() {
  const [freq, setFreq] = useState<"once" | "monthly">("monthly");
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState("");
  const [designation, setDesignation] = useState(DESIGNATIONS[0]);
  const [coverFees, setCoverFees] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const base = custom ? Math.max(0, parseFloat(custom) || 0) : amount;
  const fee = coverFees ? Math.round(base * 0.029 + 0.3) : 0;
  const total = base + fee;
  const impactLine = !custom && IMPACT[amount];

  function notReady(method: string) {
    alert(
      `${method} checkout is being set up.\n\nYour selection: $${total.toFixed(
        0
      )} ${freq === "monthly" ? "per month" : "one-time"} → ${designation}.\n\nSecure payments via Stripe & PayPal are coming soon.`
    );
  }

  return (
    <>
      <Header />

      {/* PAGE HEADER */}
      <section className={s.pageHeader}>
        <div className={s.container}>
          <div className={s.pageHeaderInner}>
            <div className={s.crumb}>
              <Link href="/">Home</Link> <span>/</span> <span>Donate</span>
            </div>
            <span className={s.kicker}>Give to the work</span>
            <h1 className={s.pageTitle}>
              Help us stay present in a child&rsquo;s <em className={s.italicAccent}>life.</em>
            </h1>
            <p className={s.pageLede}>
              Your gift keeps us present in children&rsquo;s lives — the teaching,
              the worship, the visits, and the everyday care families rely on.
              Choose an amount below, and where you&rsquo;d like it to go.
            </p>
          </div>
        </div>
      </section>

      <main>
        {/* DONATION FLOW */}
        <section className={s.section}>
          <div className={s.container}>
            <div className={s.donateLayout}>
              {/* FORM */}
              <Reveal className={s.formCard}>
                {/* Step 1 — frequency */}
                <div className={s.step}>
                  <div className={s.stepHead}>
                    <span className={s.stepNum}>1</span>
                    <span className={s.stepTitle}>Choose a frequency</span>
                  </div>
                  <div className={s.freqToggle}>
                    <button
                      className={freq === "once" ? s.freqActive : ""}
                      onClick={() => setFreq("once")}
                    >
                      Give once
                    </button>
                    <button
                      className={freq === "monthly" ? s.freqActive : ""}
                      onClick={() => setFreq("monthly")}
                    >
                      <span className={s.recommend}>Steady support</span>
                      Give monthly
                    </button>
                  </div>
                </div>

                {/* Step 2 — amount */}
                <div className={s.step}>
                  <div className={s.stepHead}>
                    <span className={s.stepNum}>2</span>
                    <span className={s.stepTitle}>Choose an amount</span>
                  </div>
                  <div className={s.amountGrid}>
                    {AMOUNTS.map((a) => (
                      <button
                        key={a}
                        className={`${s.amountBtn} ${
                          !custom && amount === a ? s.amountActive : ""
                        }`}
                        onClick={() => {
                          setAmount(a);
                          setCustom("");
                        }}
                      >
                        ${a}
                      </button>
                    ))}
                    <label className={s.customWrap}>
                      <span>$</span>
                      <input
                        type="number"
                        min="1"
                        placeholder="Other"
                        value={custom}
                        onChange={(e) => setCustom(e.target.value)}
                        aria-label="Custom amount"
                      />
                    </label>
                  </div>
                  {impactLine && (
                    <p className={s.impactNote}>
                      <strong>${amount}</strong> {impactLine}
                    </p>
                  )}
                </div>

                {/* Step 3 — designation */}
                <div className={s.step}>
                  <div className={s.stepHead}>
                    <span className={s.stepNum}>3</span>
                    <span className={s.stepTitle}>Direct your gift</span>
                  </div>
                  <div className={s.designGrid}>
                    {DESIGNATIONS.map((d) => (
                      <button
                        key={d}
                        className={`${s.designBtn} ${
                          designation === d ? s.designActive : ""
                        }`}
                        onClick={() => setDesignation(d)}
                      >
                        <span className={s.designDot} />
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4 — payment */}
                <div className={s.step}>
                  <div className={s.stepHead}>
                    <span className={s.stepNum}>4</span>
                    <span className={s.stepTitle}>Choose how to pay</span>
                  </div>
                  <div className={s.payMethods}>
                    <button
                      className={`${s.payBtn} ${s.payStripe}`}
                      onClick={() => notReady("Card (Stripe)")}
                    >
                      <CardIcon /> Donate ${total.toFixed(0)}
                      {freq === "monthly" ? " / month" : ""} with card
                    </button>
                    <div className={s.payDivider}>or</div>
                    <button
                      className={`${s.payBtn} ${s.payPaypal}`}
                      onClick={() => notReady("PayPal")}
                    >
                      <i>
                        <b>Pay</b>
                        <b>Pal</b>
                      </i>
                    </button>
                  </div>
                  <div className={s.cardLogos}>
                    <span className={s.cardLogo}>VISA</span>
                    <span className={s.cardLogo}>Mastercard</span>
                    <span className={s.cardLogo}>AMEX</span>
                    <span className={s.cardLogo}>Apple&nbsp;Pay</span>
                    <span className={s.cardLogo}>Google&nbsp;Pay</span>
                  </div>
                  <p className={s.payNote}>
                    <Lock /> Secure checkout via Stripe &amp; PayPal — coming soon.
                  </p>
                </div>
              </Reveal>

              {/* SUMMARY */}
              <Reveal className={s.summary} delay={100}>
                <h3>Your gift</h3>
                <div className={s.sumRow}>
                  <span>Frequency</span>
                  <span>{freq === "monthly" ? "Monthly" : "One-time"}</span>
                </div>
                <div className={s.sumRow}>
                  <span>Designation</span>
                  <span>{designation}</span>
                </div>
                <div className={s.sumRow}>
                  <span>Gift amount</span>
                  <span>${base.toFixed(0)}</span>
                </div>
                {coverFees && (
                  <div className={s.sumRow}>
                    <span>Transaction fees</span>
                    <span>${fee.toFixed(0)}</span>
                  </div>
                )}
                <div className={s.sumTotal}>
                  <div>
                    <strong>${total.toFixed(0)}</strong>{" "}
                    <em>{freq === "monthly" ? "/ month" : "one-time"}</em>
                  </div>
                </div>

                <label className={s.feeRow}>
                  <input
                    type="checkbox"
                    checked={coverFees}
                    onChange={(e) => setCoverFees(e.target.checked)}
                  />
                  <span>
                    Add the transaction fee so the ministry receives the full
                    amount of my gift.
                  </span>
                </label>

                <div className={s.trust}>
                  <span className={s.trustItem}>
                    <Lock /> Bank-level encryption
                  </span>
                  <span className={s.trustItem}>
                    <Check /> Tax-deductible (US) with email receipt
                  </span>
                  <span className={s.trustItem}>
                    <Heart /> Cancel or change monthly gifts anytime
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WHERE YOUR GIFT GOES */}
        <section className={s.section} style={{ background: "var(--bg-alt)", paddingTop: "clamp(3rem,7vh,5rem)" }}>
          <div className={s.container}>
            <Reveal className={`${s.head} ${s.center}`} style={{ margin: "0 auto 2.8rem" }}>
              <span className={`${s.kicker} ${s.kickerCenter}`}>How funds are used</span>
              <h2 className={s.h2}>Where your gift goes</h2>
              <p className={`${s.lead} ${s.center}`}>
                We handle every gift with care. Most of it goes straight to the
                children, families, and communities we serve — here&rsquo;s the
                breakdown.
              </p>
            </Reveal>
            <div className={s.alloc}>
              {[
                ["75%", "Programs & outreach", 75],
                ["12%", "Worship & ministry", 12],
                ["8%", "Family support", 8],
                ["5%", "Operations", 5],
              ].map(([pct, label, w]) => (
                <Reveal className={s.allocItem} key={label as string}>
                  <div className={s.allocBar}>
                    <i style={{ width: `${w}%` }} />
                  </div>
                  <div className={s.allocPct}>{pct}</div>
                  <div className={s.allocLabel}>{label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER WAYS TO GIVE */}
        <section className={s.section}>
          <div className={s.container}>
            <Reveal className={s.head}>
              <span className={s.kicker}>More ways to help</span>
              <h2 className={s.h2}>Other ways to give</h2>
            </Reveal>
            <div className={s.ways}>
              {[
                ["Give each month", "A regular gift helps us plan visits and ministry activities with a dependable budget.", <Calendar key="c" />],
                ["Give by bank transfer", "Contact us for the account details if you prefer to send your gift directly.", <Bank key="b" />],
                ["Support an outreach", "Help cover a children's gathering, worship event, community visit, or practical need.", <Globe key="g" />],
              ].map(([title, text, icon]) => (
                <Reveal className={s.wayCard} key={title as string}>
                  <span className={s.wayIcon}>{icon as React.ReactNode}</span>
                  <h3 className={s.h3}>{title as string}</h3>
                  <p style={{ marginTop: ".5rem", color: "var(--ink-soft)" }}>{text as string}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={s.section} style={{ background: "var(--bg-alt)" }}>
          <div className={s.container}>
            <Reveal className={`${s.head} ${s.center}`} style={{ margin: "0 auto 2.4rem" }}>
              <span className={`${s.kicker} ${s.kickerCenter}`}>Good to know</span>
              <h2 className={s.h2}>Donation questions</h2>
            </Reveal>
            <div className={s.faqList}>
              {FAQS.map((f, i) => (
                <div
                  className={`${s.faqItem} ${openFaq === i ? s.faqOpen : ""}`}
                  key={f.q}
                >
                  <button
                    className={s.faqQ}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {f.q} <Plus />
                  </button>
                  <div className={s.faqA}>
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className={s.declaration} style={{ background: "var(--slate)" }}>
          <div className={s.container}>
            <Reveal as="figure">
              <Heart big />
              <blockquote>
                Thank you for trusting us with your gift. We will use it carefully
                and keep the children and families we serve at the centre.
              </blockquote>
              <figcaption>Thank you for standing with us</figcaption>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ---- icons ---- */
function Lock() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function Check() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Heart({ big }: { big?: boolean }) {
  const sz = big ? 40 : 16;
  return (
    <svg viewBox="0 0 24 24" width={sz} height={sz} fill="currentColor" aria-hidden="true" style={big ? { opacity: 0.6, marginBottom: "1rem" } : undefined}>
      <path d="M12 20s-7-4.6-7-10.1A3.9 3.9 0 0 1 12 7a3.9 3.9 0 0 1 7 2.9C19 15.4 12 20 12 20Z" />
    </svg>
  );
}
function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
function Calendar() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function Bank() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path d="M4 10h16M5 10v8m5-8v8m4-8v8m5-8v8M3 20h18M12 3 4 8h16l-8-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function Globe() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function Plus() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
