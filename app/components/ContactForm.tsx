"use client";

import { useState } from "react";
import styles from "../ui.module.css";

export default function ContactForm() {
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire to an email service (Resend / Formspree) when ready.
    setDone(true);
  }

  if (done) {
    return (
      <p className={styles.thanks} style={{ color: "var(--red)" }}>
        Thank you — your message has been received. We&rsquo;ll be in touch soon.
      </p>
    );
  }

  return (
    <form className={styles.contactForm} onSubmit={submit}>
      <label>
        <span>Name</span>
        <input type="text" required placeholder="Your name" />
      </label>
      <label>
        <span>Email</span>
        <input type="email" required placeholder="you@example.com" />
      </label>
      <label>
        <span>Message</span>
        <textarea rows={5} required placeholder="How can we help?" />
      </label>
      <button type="submit" className={`${styles.btnPrimary} ${styles.btnFull}`}>
        Send message
      </button>
    </form>
  );
}
