import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import s from "../ui.module.css";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Meet The Voice of Love Ministry and learn how we serve children, families, and communities through faith, worship, and practical care.",
};

const MISSION = [
  "Teach God's Word in ways that children and families can carry into daily life.",
  "Build a church family where people are known, supported, and prayed for.",
  "Use music and worship to bring generations together in faith.",
  "Respond to practical needs with care, honesty, and respect.",
];

const VALUES = [
  ["Love", "We treat every person as someone deeply loved by God."],
  ["Faith", "We pray, trust God, and let His Word guide our decisions."],
  ["Unity", "We work across cultures and countries without losing sight of one another."],
  ["Service", "We give our time, attention, and resources where they are needed."],
  ["Truth", "We speak plainly, keep our word, and handle every gift responsibly."],
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className={s.pageHeader}>
        <div className={s.container}>
          <div className={s.pageHeaderInner}>
            <div className={s.crumb}>
              <Link href="/">Home</Link> <span>/</span> <span>Who We Are</span>
            </div>
            <span className={s.kicker}>Who we are</span>
            <h1 className={s.pageTitle}>
              We want people to experience God&rsquo;s <em className={s.italicAccent}>love.</em>
            </h1>
            <p className={s.pageLede}>
              We are a Christian ministry serving children, families, and
              communities through teaching, worship, prayer, and practical care.
            </p>
          </div>
        </div>
      </section>

      <main>
        {/* STORY + VISION */}
        <section className={s.section}>
          <div className={s.container}>
            <div className={s.split}>
              <Reveal className={s.splitMedia}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/leaders.jpg" alt="The Voice of Love leadership" loading="lazy" />
              </Reveal>
              <Reveal delay={100}>
                <span className={s.kicker}>Our story</span>
                <h2 className={s.h2}>Our faith should be visible in how we live.</h2>
                <p className={s.lead}>
                  The Voice of Love Ministry began with a simple conviction:
                  preaching about God's love is not enough. People should meet
                  that love in the way we welcome them, pray with them, teach
                  their children, and help when life is hard.
                </p>
                <p style={{ marginTop: "1.1rem", color: "var(--ink-soft)" }}>
                  <strong style={{ color: "var(--ink)" }}>Our vision:</strong> to
                  grow a faithful ministry that knows people personally, serves
                  them well, and points them to Christ.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className={s.section} style={{ background: "var(--bg-alt)" }}>
          <div className={s.container}>
            <Reveal className={s.head}>
              <span className={s.kicker}>Our mission</span>
              <h2 className={s.h2}>The work we have committed to</h2>
            </Reveal>
            <div className={s.grid4}>
              {MISSION.map((m, i) => (
                <Reveal className={s.card} key={m} delay={i * 70}>
                  <div className={s.cardBody}>
                    <span className={s.statNum} style={{ color: "var(--red)", fontSize: "2.2rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p style={{ marginTop: ".6rem", fontSize: "1.02rem", color: "var(--ink)" }}>{m}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className={s.section}>
          <div className={s.container}>
            <Reveal className={s.head}>
              <span className={s.kicker}>What guides us</span>
              <h2 className={s.h2}>The standards we want to live by</h2>
            </Reveal>
            <div className={s.grid3}>
              {VALUES.map(([name, meaning], i) => (
                <Reveal className={s.card} key={name} delay={i * 60}>
                  <div className={s.cardBody}>
                    <span className={s.cardTag}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 className={s.h3}>{name}</h3>
                    <p>{meaning}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DECLARATION */}
        <section className={s.declaration}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/congregation.jpg" alt="" className={s.declarationBg} />
          <div className={s.declarationVeil} />
          <div className={s.container}>
            <Reveal as="figure">
              <blockquote>
                May people recognize God's love not only in what we say, but in
                the patience, honesty, and care we show them.
              </blockquote>
              <figcaption>Our Declaration</figcaption>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className={s.newsletter}>
          <div className={s.container}>
            <div className={s.newsInner}>
              <div>
                <h2 className={s.h2} style={{ color: "#fff" }}>Take part in the work</h2>
                <p>Your gift helps us serve children and families with consistency.</p>
              </div>
              <Link href="/donate" className={s.btnPrimary}>
                Donate now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
