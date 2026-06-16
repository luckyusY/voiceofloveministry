import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import s from "../ui.module.css";

export const metadata: Metadata = {
  title: "Where We Work",
  description:
    "From our headquarters in the United States to outreach across Uganda, Rwanda, and Kenya — one family carrying the voice of love across two continents.",
};

const COUNTRIES = [
  {
    name: "United States",
    role: "Headquarters",
    img: "/images/audience.jpg",
    text: "Our home base — where worship, leadership, and our global vision are nurtured. From here we gather as a family, raise support, and send love to the nations.",
  },
  {
    name: "Uganda",
    role: "Main operations",
    img: "/images/teaching.jpg",
    text: "The heart of our outreach on the ground. We gather communities, teach, encourage, and walk alongside families through every season of life.",
  },
  {
    name: "Rwanda",
    role: "Outreach",
    img: "/images/outreach-women.jpg",
    text: "Walking with communities through relief, encouragement, and the message of love — standing especially with women and families.",
  },
  {
    name: "Kenya",
    role: "Outreach",
    img: "/images/field.jpg",
    text: "Sharing hope, provision, and faith with families and young people, carrying the voice of love into new communities.",
  },
];

export default function WhereWeWorkPage() {
  return (
    <>
      <Header />

      <section className={s.pageHeader}>
        <div className={s.container}>
          <div className={s.pageHeaderInner}>
            <div className={s.crumb}>
              <Link href="/">Home</Link> <span>/</span> <span>Where We Work</span>
            </div>
            <span className={s.kicker}>Where we work</span>
            <h1 className={s.pageTitle}>
              One family across <em className={s.italicAccent}>two continents.</em>
            </h1>
            <p className={s.pageLede}>
              From our headquarters in the United States to our outreach across East
              Africa, the voice of love is carried by one family with one heart —
              in worship, in service, and in love.
            </p>
          </div>
        </div>
      </section>

      <main>
        <section className={s.section}>
          <div className={s.container}>
            <div className={s.grid4}>
              {COUNTRIES.map((c, i) => (
                <Reveal as="article" className={s.card} key={c.name} delay={i * 70}>
                  <div className={s.mediaWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.img} alt={c.name} loading="lazy" />
                    <span className={s.roleBadge}>{c.role}</span>
                  </div>
                  <div className={s.cardBody}>
                    <h3 className={s.h3}>{c.name}</h3>
                    <p style={{ marginTop: ".5rem" }}>{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={s.declaration} style={{ background: "var(--slate)" }}>
          <div className={s.container}>
            <Reveal as="figure">
              <blockquote>
                Wherever there is a heart waiting for hope, the voice of love can
                be heard. Help us reach further.
              </blockquote>
              <figcaption>
                <Link href="/donate" className={s.btnPrimary} style={{ marginTop: "1.5rem" }}>
                  Support the mission
                </Link>
              </figcaption>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
