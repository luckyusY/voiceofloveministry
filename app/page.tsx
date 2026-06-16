"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const VALUES = [
  { name: "Love", meaning: "The heart of everything we do.", icon: Heart },
  { name: "Faith", meaning: "Trusting in God's power and promises.", icon: Flame },
  { name: "Unity", meaning: "Standing together as one family in Christ.", icon: Hands },
  { name: "Service", meaning: "Giving our time and hearts to help others.", icon: Hand },
  { name: "Truth", meaning: "Speaking and living honestly through God's Word.", icon: Book },
];

const MISSION = [
  "To spread God's love through words, actions, and music.",
  "To build a family of faith that supports and prays for one another.",
  "To inspire people to live in forgiveness, kindness, and truth.",
  "To serve communities with compassion and unity.",
];

export default function Home() {
  useReveal();

  return (
    <>
      <Nav />

      <main>
        {/* ---------- HERO ---------- */}
        <header id="top" className={styles.hero}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>
              <span className={styles.pulse} /> A community built on God&rsquo;s love
            </p>
            <h1 className={styles.heroTitle}>
              <span className={styles.line}>The Voice of</span>
              <span className={`${styles.line} ${styles.accent}`}>Love Family</span>
            </h1>
            <p className={styles.heroLede}>
              Love is the greatest voice that can heal hearts, restore hope, and
              unite people across all nations. We live, speak, and share this
              divine love through faith, compassion, and service.
            </p>
            <div className={styles.heroCtas}>
              <a href="#support" className={styles.btnPrimary}>
                Donate <Arrow />
              </a>
              <a href="#who" className={styles.btnGhost}>
                Discover our story
              </a>
            </div>
          </div>
          <a href="#who" className={styles.scrollHint} aria-label="Scroll down">
            <span />
          </a>
        </header>

        {/* ---------- WHO WE ARE ---------- */}
        <section id="who" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.split}>
              <div className={styles.splitLead} data-reveal>
                <SectionTag n="01" label="Who We Are" />
                <h2 className={styles.h2}>
                  A family carrying the message of God&rsquo;s love.
                </h2>
              </div>
              <div className={styles.splitBody} data-reveal>
                <p className={styles.lead}>
                  The Voice of Love Family is a community built on the message of
                  God&rsquo;s love. We believe that love is the greatest voice
                  that can heal hearts, restore hope, and unite people across all
                  nations.
                </p>
                <p>
                  Our purpose is to live, speak, and share this divine love
                  through faith, compassion, and service — letting that voice be
                  heard in every heart, every home, and every nation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- VISION ---------- */}
        <section id="vision" className={styles.visionBand}>
          <div className={styles.glowSoft} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.visionInner} data-reveal>
              <SectionTag n="02" label="Our Vision" light />
              <p className={styles.visionQuote}>
                To let the voice of love be heard in every heart, every home, and
                every nation — bringing{" "}
                <em className={styles.accentText}>light where there is darkness</em>{" "}
                and <em className={styles.accentText}>peace where there is pain.</em>
              </p>
            </div>
          </div>
        </section>

        {/* ---------- MISSION ---------- */}
        <section id="mission" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.center} data-reveal>
              <SectionTag n="03" label="Our Mission" center />
              <h2 className={styles.h2}>What we set out to do.</h2>
            </div>
            <div className={styles.missionGrid}>
              {MISSION.map((m, i) => (
                <div className={styles.missionCard} data-reveal key={i}>
                  <span className={styles.missionNum}>{String(i + 1).padStart(2, "0")}</span>
                  <p>{m}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CORE VALUES ---------- */}
        <section id="values" className={styles.valuesBand}>
          <div className={styles.container}>
            <div className={styles.center} data-reveal>
              <SectionTag n="04" label="Our Core Values" light center />
              <h2 className={`${styles.h2} ${styles.h2Light}`}>
                Five values at the heart of our family.
              </h2>
            </div>
            <div className={styles.valuesGrid}>
              {VALUES.map(({ name, meaning, icon: Icon }) => (
                <div className={styles.valueCard} data-reveal key={name}>
                  <span className={styles.valueIcon}>
                    <Icon />
                  </span>
                  <h3 className={styles.valueName}>{name}</h3>
                  <p className={styles.valueMeaning}>{meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- MESSAGE ---------- */}
        <section id="message" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.messageInner} data-reveal>
              <SectionTag n="05" label="Our Message" center />
              <p className={styles.messageBig}>
                The Voice of Love is not just a sound — it is a way of living.
              </p>
              <p className={styles.messageSub}>
                It is the Spirit of God speaking through love, calling people to
                peace, forgiveness, and new life. When we love, we allow
                God&rsquo;s voice to be heard through us.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- DECLARATION ---------- */}
        <section className={styles.declaration}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.container}>
            <figure className={styles.declarationInner} data-reveal>
              <Quote />
              <blockquote>
                We are the Voice of Love Family — a generation chosen to speak
                God&rsquo;s love, to bring hope to the hopeless, and to{" "}
                <span className={styles.accent}>unite the world</span> through the
                power of love.
              </blockquote>
              <figcaption>— Our Declaration</figcaption>
            </figure>
          </div>
        </section>

        {/* ---------- SUPPORT / DONATE ---------- */}
        <section id="support" className={styles.support}>
          <div className={styles.container}>
            <div className={styles.supportGrid}>
              <div data-reveal>
                <SectionTag n="06" label="Stand With Us" />
                <h2 className={styles.h2}>Help the voice of love reach further.</h2>
                <p className={styles.lead}>
                  We depend on the generosity of people who believe love can
                  change the world. Your gift helps us serve communities, support
                  families of faith, and carry hope where it&rsquo;s needed most.
                </p>
                <div className={styles.heroCtas}>
                  <a href="#support" className={styles.btnPrimary}>
                    Donate now <Arrow />
                  </a>
                  <a href="#contact" className={styles.btnDark}>
                    Other ways to give
                  </a>
                </div>
              </div>

              <div className={styles.newsletter} data-reveal>
                <h3 className={styles.newsTitle}>Stay connected</h3>
                <p className={styles.newsText}>
                  Join our family list for updates, prayer, and ways to get
                  involved.
                </p>
                <NotifyForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ============ COMPONENTS ============ */

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Who We Are", "#who"],
    ["Vision", "#vision"],
    ["Mission", "#mission"],
    ["Values", "#values"],
    ["Message", "#message"],
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={styles.navInner}>
        <a href="#top" className={styles.brand}>
          <Dove />
          <span>
            Voice of Love <em>Family</em>
          </span>
        </a>

        <div className={`${styles.navLinks} ${open ? styles.navLinksOpen : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#support" className={styles.navDonate} onClick={() => setOpen(false)}>
            Donate
          </a>
        </div>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span data-open={open} />
        </button>
      </div>
    </nav>
  );
}

function NotifyForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    // No backend yet — wire to a mailing-list provider (Mailchimp/Resend) later.
    setDone(true);
    setEmail("");
  }

  if (done) {
    return (
      <p className={styles.thanks}>
        <Check /> Thank you — welcome to the family. We&rsquo;ll be in touch.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        aria-label="Email address"
        className={styles.input}
      />
      <button type="submit" className={styles.btnPrimary}>
        Join <Arrow />
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <a href="#top" className={styles.brand}>
              <Dove />
              <span>
                Voice of Love <em>Family</em>
              </span>
            </a>
            <p className={styles.footerTagline}>
              A generation chosen to speak God&rsquo;s love and unite the world
              through the power of love.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>Explore</h4>
            <a href="#who">Who We Are</a>
            <a href="#vision">Our Vision</a>
            <a href="#mission">Our Mission</a>
            <a href="#values">Core Values</a>
          </div>
          <div className={styles.footerCol}>
            <h4>Connect</h4>
            <a href="#support">Donate</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} The Voice of Love Family</span>
          <span>Speaking love to every heart, home, and nation.</span>
        </div>
      </div>
    </footer>
  );
}

function SectionTag({
  n,
  label,
  light,
  center,
}: {
  n: string;
  label: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <p
      className={`${styles.tag} ${light ? styles.tagLight : ""} ${
        center ? styles.tagCenter : ""
      }`}
    >
      <span className={styles.tagNum}>{n}</span>
      {label}
    </p>
  );
}

/* ---- scroll reveal ---- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add(styles.revealed));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---- icons ---- */
function Dove() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path d="M3 13c4 1 7-1 9-5 1 3 3 4 6 4-1 4-5 7-9 7-3 0-6-2-6-6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
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
function Quote() {
  return (
    <svg viewBox="0 0 48 36" width="48" height="36" fill="currentColor" aria-hidden="true">
      <path d="M0 36V20C0 9 7 1 19 0l2 6C13 8 9 12 9 18h8v18H0Zm27 0V20C27 9 34 1 46 0l2 6c-8 2-12 6-12 12h8v18H27Z" />
    </svg>
  );
}
function Heart() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function Flame() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path d="M12 3c1 4 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5-1-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function Hands() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path d="M12 21c5-3 8-6 8-10a3.5 3.5 0 0 0-6-2.5L12 10l-2-1.5A3.5 3.5 0 0 0 4 11c0 4 3 7 8 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function Hand() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V10m0 0V4.5a1.5 1.5 0 0 1 3 0V10m0 0V6a1.5 1.5 0 0 1 3 0v7a6 6 0 0 1-6 6h-1a5 5 0 0 1-4-2l-3-4a1.6 1.6 0 0 1 2.4-2L7 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Book() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path d="M4 5c2-1 5-1 8 0 3-1 6-1 8 0v13c-2-1-5-1-8 0-3-1-6-1-8 0V5Zm8 0v13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
