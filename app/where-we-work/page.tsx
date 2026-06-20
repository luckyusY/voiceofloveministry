import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import s from "../ui.module.css";

export const metadata: Metadata = {
  title: "Where We Work",
  description:
    "The Voice of Love Ministry serves from the United States and works alongside communities in Uganda, Rwanda, and Kenya.",
};

const COUNTRIES = [
  {
    name: "United States",
    role: "Headquarters",
    img: "/images/audience.jpg",
    text: "Our United States base supports ministry leadership, worship, fundraising, and the relationships that make our work in East Africa possible.",
  },
  {
    name: "Uganda",
    role: "Main operations",
    img: "/images/teaching.jpg",
    text: "Uganda is the centre of our work in East Africa. Here we gather with children and families for teaching, worship, prayer, and practical support.",
  },
  {
    name: "Rwanda",
    role: "Outreach",
    img: "/images/outreach-women.jpg",
    text: "In Rwanda, we spend time with local communities and support outreach focused on women, children, and families.",
  },
  {
    name: "Kenya",
    role: "Outreach",
    img: "/images/field.jpg",
    text: "Our work in Kenya is growing through relationships with families and young people, with an emphasis on faith and practical care.",
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
              Local relationships across <em className={s.italicAccent}>four countries.</em>
            </h1>
            <p className={s.pageLede}>
              Our ministry is connected across distance, but the work is always
              personal. It happens through people who know their communities and
              choose to serve them faithfully.
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
                Strong ministry begins with trust. Help us keep building the
                relationships that make lasting care possible.
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
