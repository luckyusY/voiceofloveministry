import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import s from "../ui.module.css";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Caring for children and young people, worship and the Word, families of faith, and compassionate outreach across the United States and East Africa.",
};

const PROGRAMS = [
  {
    tag: "Children & Youth",
    title: "Caring for children and young people",
    text: "Children are at the heart of our mission. We walk with them through teaching, mentorship, music, and practical care — helping them grow up knowing they are seen, valued, and deeply loved by God.",
    img: "/images/youth.jpg",
  },
  {
    tag: "Word & Worship",
    title: "Sharing love through the Word and music",
    text: "Through preaching, song, and prayer we lift up God's name and invite every heart — young and old — into His love.",
    img: "/images/band.jpg",
  },
  {
    tag: "Family of Faith",
    title: "Building a family that prays together",
    text: "A community where every child and family is welcomed, encouraged, and held up in prayer, season after season.",
    img: "/images/congregation.jpg",
  },
  {
    tag: "Compassion in Action",
    title: "Standing with those in need",
    text: "We bring practical help — encouragement, provision, and presence — to vulnerable children and families across East Africa.",
    img: "/images/outreach-women.jpg",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <Header />

      <section className={s.pageHeader}>
        <div className={s.container}>
          <div className={s.pageHeaderInner}>
            <div className={s.crumb}>
              <Link href="/">Home</Link> <span>/</span> <span>What We Do</span>
            </div>
            <span className={s.kicker}>What we do</span>
            <h1 className={s.pageTitle}>
              Sharing God&rsquo;s love with{" "}
              <em className={s.italicAccent}>children</em> and communities.
            </h1>
            <p className={s.pageLede}>
              From caring for children and young people to worship, family, and
              compassionate outreach — everything we do flows from one belief:
              love is the greatest voice of all.
            </p>
          </div>
        </div>
      </section>

      <main>
        {/* CHILDREN FOCUS */}
        <section className={s.section}>
          <div className={s.container}>
            <div className={s.split}>
              <Reveal className={s.splitMedia}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/children.jpg" alt="Children at a Voice of Love gathering" loading="lazy" />
              </Reveal>
              <Reveal delay={100}>
                <span className={s.kicker}>Our heart for children</span>
                <h2 className={s.h2}>
                  Every child deserves to know they are{" "}
                  <em className={s.italicAccent}>loved.</em>
                </h2>
                <p className={s.lead}>
                  Caring for children and young people is the centre of our
                  mission. We teach, mentor, sing with, and stand beside them —
                  helping each child grow in faith, hope, and dignity.
                </p>
                <p className={s.lead}>
                  Across Uganda, Rwanda, and Kenya, your support helps us bring
                  encouragement and practical care to children who need it most.
                </p>
                <p style={{ marginTop: "1.6rem" }}>
                  <Link href="/donate" className={s.btnPrimary}>
                    Help a child today
                  </Link>
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CHILDREN GALLERY */}
        <section className={s.section} style={{ paddingTop: 0 }}>
          <div className={s.container}>
            <Reveal className={`${s.head} ${s.center}`} style={{ margin: "0 auto 2.4rem" }}>
              <span className={`${s.kicker} ${s.kickerCenter}`}>On the ground</span>
              <h2 className={s.h2}>Reaching children across East Africa</h2>
              <p className={`${s.lead} ${s.center}`}>
                Gathering children and young people for teaching, song, and
                encouragement in Uganda, Rwanda, and Kenya.
              </p>
            </Reveal>
            <div className={s.gallery}>
              {[
                ["/images/children-outreach-1.jpg", "Children gathered at a community outreach"],
                ["/images/children-outreach-2.jpg", "Young people at a Voice of Love gathering"],
                ["/images/children-outreach-3.jpg", "Sharing hope with children in East Africa"],
              ].map(([src, cap], i) => (
                <Reveal as="figure" className={s.galleryItem} key={src} delay={i * 70}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={cap} loading="lazy" />
                  <figcaption className={s.galleryCap}>{cap}</figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className={s.section} style={{ background: "var(--bg-alt)" }}>
          <div className={s.container}>
            <Reveal className={`${s.head} ${s.center}`} style={{ margin: "0 auto 2.8rem" }}>
              <span className={`${s.kicker} ${s.kickerCenter}`}>Our work</span>
              <h2 className={s.h2}>Four ways we share love</h2>
            </Reveal>
            <div className={s.grid4}>
              {PROGRAMS.map((p, i) => (
                <Reveal as="article" className={s.card} key={p.tag} delay={i * 70}>
                  <div className={s.cardMedia}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.tag} loading="lazy" />
                  </div>
                  <div className={s.cardBody}>
                    <span className={s.cardTag}>{p.tag}</span>
                    <h3 className={s.h3}>{p.title}</h3>
                    <p>{p.text}</p>
                    <Link href="/donate" className={s.textLink}>
                      Support this
                    </Link>
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
                When we love a child, we let God&rsquo;s voice be heard — and a
                whole future begins to change.
              </blockquote>
              <figcaption>
                <Link href="/donate" className={s.btnPrimary} style={{ marginTop: "1.5rem" }}>
                  Donate now
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
