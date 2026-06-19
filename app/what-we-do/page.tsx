import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import s from "../ui.module.css";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "See how Voice of Love Ministry walks with children through care, teaching, worship, mentorship, and compassionate outreach across East Africa.",
};

const PROGRAMS = [
  {
    tag: "Care & Mentorship",
    title: "Walking beside every child",
    text: "We listen, encourage, and build trusted relationships that help children grow with confidence, dignity, and hope.",
    img: "/images/children-community.jpg",
  },
  {
    tag: "Teaching & Faith",
    title: "Helping faith take root",
    text: "Through age-appropriate teaching, prayer, and conversation, children discover that they are known and loved by God.",
    img: "/images/children-gathering.jpg",
  },
  {
    tag: "Music & Worship",
    title: "Giving young voices room to rise",
    text: "Song and worship bring children together, nurture their gifts, and give them joyful ways to express their faith.",
    img: "/images/band.jpg",
  },
  {
    tag: "Practical Support",
    title: "Meeting needs with compassion",
    text: "We stand with vulnerable children and families through practical care, encouragement, and a dependable ministry presence.",
    img: "/images/children-circle.jpg",
  },
];

const MOMENTS = [
  {
    src: "/images/children-outreach.jpg",
    alt: "Voice of Love Ministry meeting children at a community outreach",
    caption: "Showing up with love",
    className: s.storyPhotoWide,
  },
  {
    src: "/images/children-community.jpg",
    alt: "Children gathered together during a Voice of Love Ministry visit",
    caption: "Gathering as one community",
    className: "",
  },
  {
    src: "/images/children-circle.jpg",
    alt: "Children listening during an outreach gathering",
    caption: "Listening, learning, and growing",
    className: "",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <Header />
      <main>
        <section className={s.workHero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/children-group.jpg" alt="Children supported by Voice of Love Ministry" className={s.workHeroImage} />
          <div className={s.workHeroVeil} />
          <div className={`${s.container} ${s.workHeroInner}`}>
            <div className={s.workHeroContent}>
              <div className={s.crumb}>
                <Link href="/">Home</Link> <span>/</span> <span>What We Do</span>
              </div>
              <span className={s.kicker}>Our heart in action</span>
              <h1 className={s.workHeroTitle}>We help children know they are seen, valued, and loved.</h1>
              <p>
                Through care, teaching, mentorship, worship, and practical support,
                we walk beside children and their communities across East Africa.
              </p>
              <Link href="/donate" className={s.btnPrimary}>Help a child today</Link>
            </div>
          </div>
        </section>

        <section className={s.workIntro}>
          <div className={s.container}>
            <div className={s.workIntroGrid}>
              <Reveal className={s.workIntroCopy}>
                <span className={s.kicker}>Children are our mission</span>
                <h2 className={s.h2}>
                  Love becomes real when a child can{" "}
                  <em className={s.italicAccent}>feel it.</em>
                </h2>
                <p className={s.lead}>
                  We do more than visit. We build relationships with children,
                  listen to their stories, share God&rsquo;s Word, sing together,
                  and keep showing up with care.
                </p>
                <p className={s.lead}>
                  Each gathering is a chance for a child to be encouraged, to
                  belong, and to imagine a future shaped by faith and hope.
                </p>
                <div className={s.workValues} aria-label="Our approach">
                  <span>Faith</span><span>Dignity</span><span>Belonging</span><span>Hope</span>
                </div>
              </Reveal>
              <Reveal className={s.workIntroMedia} delay={100}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/children-gathering.jpg" alt="Children gathered for teaching and encouragement" loading="lazy" />
                <p>Every gathering begins by meeting children where they are.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={s.workStories}>
          <div className={s.container}>
            <Reveal className={s.workSectionHead}>
              <div>
                <span className={s.kicker}>From the field</span>
                <h2 className={s.h2}>Love, present in every moment</h2>
              </div>
              <p>
                These are the children and communities we have the privilege of
                serving. Their faces are the reason this work matters.
              </p>
            </Reveal>
            <div className={s.storyPhotos}>
              {MOMENTS.map((moment, index) => (
                <Reveal as="figure" className={`${s.storyPhoto} ${moment.className}`} key={moment.src} delay={index * 70}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={moment.src} alt={moment.alt} loading="lazy" />
                  <figcaption>{moment.caption}</figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={s.workPrograms}>
          <div className={s.container}>
            <Reveal className={`${s.head} ${s.center}`} style={{ margin: "0 auto 2.8rem" }}>
              <span className={`${s.kicker} ${s.kickerCenter}`}>How we serve</span>
              <h2 className={s.h2}>Care for the whole child</h2>
              <p className={`${s.lead} ${s.center}`}>
                Our work nurtures faith, confidence, creativity, and practical
                wellbeing so children can grow in every part of life.
              </p>
            </Reveal>
            <div className={s.workProgramGrid}>
              {PROGRAMS.map((program, index) => (
                <Reveal as="article" className={s.workProgram} key={program.tag} delay={index * 70}>
                  <div className={s.workProgramMedia}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={program.img} alt="" loading="lazy" />
                  </div>
                  <div className={s.workProgramBody}>
                    <span className={s.cardTag}>{program.tag}</span>
                    <h3 className={s.h3}>{program.title}</h3>
                    <p>{program.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={s.workCta}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/children-community.jpg" alt="" className={s.workCtaImage} />
          <div className={s.workCtaVeil} />
          <div className={s.container}>
            <Reveal className={s.workCtaContent}>
              <span className={s.kicker}>Stand with a child</span>
              <h2>Help us keep showing up with love.</h2>
              <p>
                Your generosity helps create more moments of care, teaching,
                worship, and hope for children who need them.
              </p>
              <Link href="/donate" className={s.btnPrimary}>Give today</Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
