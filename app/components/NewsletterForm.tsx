"use client";

import { useState } from "react";
import styles from "../ui.module.css";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
  }

  if (done) {
    return <p className={styles.thanks}>Thank you. Welcome to the family.</p>;
  }

  return (
    <form className={styles.newsForm} onSubmit={submit}>
      <input type="text" required placeholder="First name*" aria-label="First name" />
      <input type="email" required placeholder="Email*" aria-label="Email address" />
      <div className={styles.phoneField}>
        <span>+250</span>
        <input type="tel" placeholder="Mobile" aria-label="Mobile number" />
      </div>
      <button type="submit" className={styles.btnPrimary}>
        Sign up
      </button>
    </form>
  );
}
