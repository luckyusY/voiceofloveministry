"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../ui.module.css";

const STORAGE_KEY = "vol_donate_popup_dismissed";

export default function DonatePopup() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Never on the donate page itself.
    if (pathname?.startsWith("/donate")) return;
    // Show once per visitor.
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }
    const t = setTimeout(() => setShow(true), 12000);
    return () => clearTimeout(t);
  }, [pathname]);

  function dismiss() {
    setShow(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!show) return null;

  return (
    <aside className={styles.popup} role="complementary" aria-label="Support the mission">
      <button className={styles.popupClose} aria-label="Close" onClick={dismiss}>
        ×
      </button>
      <span className={styles.kicker}>Support the work</span>
      <h3 className={styles.h3}>Help us return</h3>
      <p className={styles.popupText}>
        Your gift supports children's gatherings, teaching, worship, and
        practical care.
      </p>
      <div className={styles.quickAmounts}>
        <Link href="/donate" onClick={dismiss}>$20</Link>
        <Link href="/donate" onClick={dismiss}>$50</Link>
        <Link href="/donate" onClick={dismiss}>$100</Link>
      </div>
      <Link
        href="/donate"
        className={`${styles.btnPrimary} ${styles.btnFull}`}
        onClick={dismiss}
      >
        Donate now
      </Link>
    </aside>
  );
}
