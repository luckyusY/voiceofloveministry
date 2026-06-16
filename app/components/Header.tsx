"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../ui.module.css";

const LINKS: [string, string][] = [
  ["Who We Are", "/about"],
  ["What We Do", "/#programs"],
  ["Where We Work", "/where-we-work"],
  ["Stories", "/#stories"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.topbarWrap}>
        <div className={styles.topbar}>
          <span>Speaking God&rsquo;s love to every heart, home &amp; nation</span>
          <Link href="/donate">Give monthly &rsaquo;</Link>
        </div>
      </div>

      <div className={styles.navInner}>
        <Link href="/" className={styles.brand} aria-label="The Voice of Love — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="" className={styles.brandLogo} />
          <span className={styles.brandText}>
            Voice of Love<em>Family</em>
          </span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {LINKS.map(([label, href]) => {
            const active = href.startsWith("/#")
              ? false
              : pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={active ? styles.navActive : ""}
              >
                {label}
              </Link>
            );
          })}
          <Link href="/donate" className={styles.donateBtn}>
            <HeartIcon /> Donate
          </Link>
        </nav>

        <button
          className={styles.burger}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span data-open={open} />
        </button>
      </div>
    </header>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M12 20s-7-4.6-7-10.1A3.9 3.9 0 0 1 12 7a3.9 3.9 0 0 1 7 2.9C19 15.4 12 20 12 20Z" />
    </svg>
  );
}
