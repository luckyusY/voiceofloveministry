"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    // No backend yet — gracefully acknowledge interest on the client.
    // Wire this up to your mailing list (Mailchimp, Resend, etc.) at launch.
    setStatus("done");
    setEmail("");
  }

  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <header className={styles.topbar}>
        <div className={styles.brandMark}>
          <Dove />
          <span className={styles.brandName}>Voice of Love</span>
        </div>
        <span className={styles.estd}>Ministry · Est. 2026</span>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>
          <span className={styles.pulse} /> A new home is on the way
        </p>

        <h1 className={styles.title}>
          <span className={styles.line}>Carrying</span>
          <span className={`${styles.line} ${styles.accent}`}>hope &amp; love</span>
          <span className={styles.line}>to where it&apos;s needed.</span>
        </h1>

        <p className={styles.lede}>
          Voice of Love Ministry is a non-profit walking alongside communities
          with compassion, dignity, and practical care. Our full website is
          being lovingly built — be the first to know when we open our doors.
        </p>

        {status === "idle" ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email address"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Notify me
              <Arrow />
            </button>
          </form>
        ) : (
          <p className={styles.thanks}>
            <Check /> Thank you — we&apos;ll reach out the moment we launch.
          </p>
        )}

        <ul className={styles.pillars}>
          <li>
            <span className={styles.pillarNum}>01</span>
            <span className={styles.pillarText}>Relief &amp; outreach</span>
          </li>
          <li>
            <span className={styles.pillarNum}>02</span>
            <span className={styles.pillarText}>Education &amp; mentorship</span>
          </li>
          <li>
            <span className={styles.pillarNum}>03</span>
            <span className={styles.pillarText}>Community &amp; faith</span>
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Voice of Love Ministry</span>
        <nav className={styles.social}>
          <a href="#" aria-label="Email us">Contact</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
        </nav>
      </footer>
    </main>
  );
}

function Dove() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path
        d="M3 13c4 1 7-1 9-5 1 3 3 4 6 4-1 4-5 7-9 7-3 0-6-2-6-6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 8c2-3 5-4 8-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
