"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const PROGRAMS = [
  {
    tag: "Word & Worship",
    title: "Spreading God's love through words, actions, and music",
    text: "We carry the message of love through preaching, song, and everyday acts of kindness.",
    tint: "rose",
  },
  {
    tag: "Family of Faith",
    title: "Building a family that supports and prays for one another",
    text: "A community where every person is welcomed, encouraged, and held up in prayer.",
    tint: "blue",
  },
  {
    tag: "Forgiveness & Truth",
    title: "Inspiring people to live in forgiveness, kindness, and truth",
    text: "We help hearts heal and grow through God's Word, mercy, and honest living.",
    tint: "gold",
  },
  {
    tag: "Compassion in Action",
    title: "Serving communities with compassion and unity",
    text: "Standing with the vulnerable — bringing practical help where it's needed most.",
    tint: "green",
  },
];

const STATS = [
  { n: "10K+", label: "Hearts reached with the message of love" },
  { n: "25+", label: "Communities served together" },
  { n: "12", label: "Nations touched by the ministry" },
  { n: "100%", label: "Driven by faith, hope, and love" },
];

const VALUES = ["Love", "Faith", "Unity", "Service", "Truth"];

const STORIES = [
  {
    cat: "Testimony",
    date: "Recent",
    title: "“Love gave me a family when I had none.”",
    tint: "rose",
  },
  {
    cat: "Outreach",
    date: "This season",
    title: "Bringing hope and provision to families in need",
    tint: "green",
  },
  {
    cat: "Worship",
    date: "Ongoing",
    title: "How music is carrying God's love across nations",
    tint: "blue",
  },
];

export default function Home() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DonationModule />
        <ImpactBand />
        <Programs />
        <ValuesStrip />
        <Stories />
        <DeclarationBand />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["What We Do", "#programs"],
    ["Who We Are", "#about"],
    ["Our Values", "#values"],
    ["Stories", "#stories"],
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.topbar}>
        <span>The Voice of Love Family — speaking love to every nation</span>
        <a href="#donate">Give monthly &rsaquo;</a>
      </div>
      <div className={styles.navInner}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark}>
            <Dove />
          </span>
          <span className={styles.brandText}>
            Voice of Love<em>Family</em>
          </span>
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#donate" className={styles.donateBtn} onClick={() => setOpen(false)}>
            Donate
          </a>
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

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.heroMedia} aria-hidden="true">
        <div className={styles.heroPattern} />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <span className={styles.heroFlag}>A community built on God&rsquo;s love</span>
          <h1 className={styles.heroTitle}>
            Speaking God&rsquo;s love to every heart, home, and nation.
          </h1>
          <p className={styles.heroText}>
            Love is the greatest voice that can heal hearts, restore hope, and
            unite people across all nations. Stand with us as we live, speak, and
            share this love.
          </p>
          <div className={styles.heroCtas}>
            <a href="#donate" className={styles.btnRed}>
              Donate now
            </a>
            <a href="#about" className={styles.btnOutlineLight}>
              Learn about us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DONATION MODULE ---------------- */
function DonationModule() {
  const [freq, setFreq] = useState<"once" | "monthly">("monthly");
  const [amount, setAmount] = useState<number | "other">(50);
  const amounts = [25, 50, 100, 250];

  return (
    <section id="donate" className={styles.donate}>
      <div className={styles.container}>
        <div className={styles.donateGrid}>
          <div className={styles.donateLead} data-reveal>
            <span className={styles.kicker}>Stand with us</span>
            <h2 className={styles.h2}>Your gift lets the voice of love reach further.</h2>
            <p className={styles.lead}>
              We depend on the generosity of people who believe love can change
              the world. Every gift helps us serve communities, support families
              of faith, and carry hope where it&rsquo;s needed most.
            </p>
          </div>

          <div className={styles.donateCard} data-reveal>
            <div className={styles.freqToggle}>
              <button
                className={freq === "once" ? styles.freqActive : ""}
                onClick={() => setFreq("once")}
              >
                Give once
              </button>
              <button
                className={freq === "monthly" ? styles.freqActive : ""}
                onClick={() => setFreq("monthly")}
              >
                Give monthly
              </button>
            </div>

            <div className={styles.amountGrid}>
              {amounts.map((a) => (
                <button
                  key={a}
                  className={`${styles.amountBtn} ${amount === a ? styles.amountActive : ""}`}
                  onClick={() => setAmount(a)}
                >
                  ${a}
                </button>
              ))}
              <button
                className={`${styles.amountBtn} ${amount === "other" ? styles.amountActive : ""}`}
                onClick={() => setAmount("other")}
              >
                Other
              </button>
            </div>

            <p className={styles.donateImpact}>
              {freq === "monthly"
                ? "A monthly gift gives steady support to families and outreach all year."
                : "A one-time gift makes an immediate difference where it's needed most."}
            </p>

            <a href="#donate" className={styles.btnRedFull}>
              {amount === "other" ? "Continue" : `Donate $${amount}`}
              {freq === "monthly" ? " / month" : ""}
            </a>
            <p className={styles.donateNote}>
              Secure giving — payment setup coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- IMPACT BAND ---------------- */
function ImpactBand() {
  return (
    <section className={styles.impact}>
      <div className={styles.container}>
        <div className={styles.impactGrid}>
          {STATS.map((s) => (
            <div className={styles.stat} key={s.label} data-reveal>
              <span className={styles.statNum}>{s.n}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROGRAMS ---------------- */
function Programs() {
  return (
    <section id="programs" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHead} data-reveal>
          <span className={styles.kicker}>What we do</span>
          <h2 className={styles.h2}>How we share God&rsquo;s love</h2>
          <p className={styles.lead}>
            Our mission is to spread love through words, actions, and service —
            building a family of faith that lifts up every person.
          </p>
        </div>
        <div className={styles.programGrid}>
          {PROGRAMS.map((p) => (
            <article className={styles.programCard} key={p.tag} data-reveal>
              <div className={`${styles.programMedia} ${styles[p.tint]}`} aria-hidden="true">
                <Dove />
              </div>
              <div className={styles.programBody}>
                <span className={styles.programTag}>{p.tag}</span>
                <h3 className={styles.programTitle}>{p.title}</h3>
                <p>{p.text}</p>
                <a href="#donate" className={styles.textLink}>
                  Support this <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT + VALUES ---------------- */
function ValuesStrip() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div data-reveal>
            <span className={styles.kicker}>Who we are</span>
            <h2 className={styles.h2}>A family carrying the message of God&rsquo;s love.</h2>
            <p className={styles.lead}>
              The Voice of Love Family is a community built on the message of
              God&rsquo;s love. We believe love is the greatest voice that can heal
              hearts, restore hope, and unite people across all nations.
            </p>
            <p className={styles.aboutVision}>
              <strong>Our vision:</strong> to let the voice of love be heard in every
              heart, every home, and every nation — bringing light where there is
              darkness and peace where there is pain.
            </p>
          </div>
          <div id="values" className={styles.valuesPanel} data-reveal>
            <h3 className={styles.valuesTitle}>Our core values</h3>
            <ul className={styles.valuesList}>
              {VALUES.map((v, i) => (
                <li key={v}>
                  <span className={styles.valueIndex}>{String(i + 1).padStart(2, "0")}</span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORIES ---------------- */
function Stories() {
  return (
    <section id="stories" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeadRow} data-reveal>
          <div>
            <span className={styles.kicker}>Latest</span>
            <h2 className={styles.h2}>Stories of love at work</h2>
          </div>
          <a href="#stories" className={styles.btnOutline}>
            View all stories
          </a>
        </div>
        <div className={styles.storyGrid}>
          {STORIES.map((s) => (
            <article className={styles.storyCard} key={s.title} data-reveal>
              <div className={`${styles.storyMedia} ${styles[s.tint]}`} aria-hidden="true">
                <Dove />
              </div>
              <div className={styles.storyBody}>
                <span className={styles.storyMeta}>
                  {s.cat} &middot; {s.date}
                </span>
                <h3 className={styles.storyTitle}>{s.title}</h3>
                <a href="#stories" className={styles.textLink}>
                  Read more <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DECLARATION ---------------- */
function DeclarationBand() {
  return (
    <section className={styles.declaration}>
      <div className={styles.container}>
        <figure data-reveal>
          <Quote />
          <blockquote>
            We are the Voice of Love Family — a generation chosen to speak
            God&rsquo;s love, to bring hope to the hopeless, and to unite the world
            through the power of love.
          </blockquote>
          <figcaption>Our Declaration</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------------- NEWSLETTER ---------------- */
function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  }
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.newsInner}>
          <div>
            <h2 className={styles.h2White}>Join the family</h2>
            <p>Get updates, prayer, and ways to get involved in your inbox.</p>
          </div>
          {done ? (
            <p className={styles.thanks}>
              <Check /> Thank you — welcome to the family.
            </p>
          ) : (
            <form className={styles.newsForm} onSubmit={submit}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
              />
              <button type="submit" className={styles.btnRed}>
                Sign up
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const cols = [
    ["What We Do", ["Word & Worship", "Family of Faith", "Forgiveness & Truth", "Compassion in Action"]],
    ["Who We Are", ["Our Story", "Our Vision", "Our Values", "Our Declaration"]],
    ["Get Involved", ["Donate", "Give Monthly", "Volunteer", "Pray With Us"]],
  ] as const;
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <a href="#top" className={styles.brand}>
              <span className={styles.brandMark}>
                <Dove />
              </span>
              <span className={styles.brandText}>
                Voice of Love<em>Family</em>
              </span>
            </a>
            <p>
              A generation chosen to speak God&rsquo;s love and unite the world
              through the power of love.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="YouTube">YouTube</a>
            </div>
          </div>
          {cols.map(([head, items]) => (
            <div className={styles.footerCol} key={head}>
              <h4>{head}</h4>
              {items.map((it) => (
                <a href="#" key={it}>
                  {it}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} The Voice of Love Family. All rights reserved.</span>
          <span>Speaking love to every heart, home, and nation.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- REVEAL HOOK ---------------- */
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------------- ICONS ---------------- */
function Dove() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path d="M3 13c4 1 7-1 9-5 1 3 3 4 6 4-1 4-5 7-9 7-3 0-6-2-6-6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 8c2-3 5-4 8-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    <svg viewBox="0 0 48 36" width="44" height="33" fill="currentColor" aria-hidden="true">
      <path d="M0 36V20C0 9 7 1 19 0l2 6C13 8 9 12 9 18h8v18H0Zm27 0V20C27 9 34 1 46 0l2 6c-8 2-12 6-12 12h8v18H27Z" />
    </svg>
  );
}
