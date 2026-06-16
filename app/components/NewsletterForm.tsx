"use client";

import { useState } from "react";
import styles from "../ui.module.css";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    // Wire to a mailing-list provider (Mailchimp/Resend) when ready.
    setDone(true);
    setEmail("");
  }

  if (done) {
    return (
      <p className={styles.thanks}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Thank you — welcome to the family.
      </p>
    );
  }

  return (
    <form className={styles.newsForm} onSubmit={submit}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        aria-label="Email address"
      />
      <button type="submit" className={styles.btnPrimary}>
        Sign up
      </button>
    </form>
  );
}
