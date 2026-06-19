import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import s from "../ui.module.css";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "The Voice of Love Ministry is a community built on the message of God's love — our story, vision, mission, and values.",
};

const MISSION = [
  "To spread God's love through words, actions, and music.",
  "To build a family of faith that supports and prays for one another.",
  "To inspire people to live in forgiveness, kindness, and truth.",
  "To serve communities with compassion and unity.",
];

const VALUES = [
  ["Love", "The heart of everything we do."],
  ["Faith", "Trusting in God's power and promises."],
  ["Unity", "Standing together as one family in Christ."],
  ["Service", "Giving our time and hearts to help others."],
  ["Truth", "Speaking and living honestly through God's Word."],
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
              A family carrying the message of God&rsquo;s <em className={s.italicAccent}>love.</em>
            </h1>
            <p className={s.pageLede}>
              The Voice of Love Ministry is a community built on the belief that love
              is the greatest voice — one that can heal hearts, restore hope, and
              unite people across all nations.
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
                <h2 className={s.h2}>Living, speaking, and sharing divine love.</h2>
                <p className={s.lead}>
                  We believe that love is the greatest voice that can heal hearts,
                  restore hope, and unite people across all nations. Our purpose is
                  to live, speak, and share this divine love through faith,
                  compassion, and service.
                </p>
                <p style={{ marginTop: "1.1rem", color: "var(--ink-soft)" }}>
                  <strong style={{ color: "var(--ink)" }}>Our vision:</strong> to let
                  the voice of love be heard in every heart, every home, and every
                  nation — bringing light where there is darkness and peace where
                  there is pain.
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
              <h2 className={s.h2}>What we set out to do</h2>
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
              <span className={s.kicker}>Our core values</span>
              <h2 className={s.h2}>Five values at the heart of our family</h2>
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
                We are The Voice of Love Ministry — a generation chosen to speak
                God&rsquo;s love, to bring hope to the hopeless, and to unite the
                world through the power of love.
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
                <h2 className={s.h2} style={{ color: "#fff" }}>Stand with the mission</h2>
                <p>Help the voice of love reach further across two continents.</p>
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
