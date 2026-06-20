import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import s from "../ui.module.css";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "See how The Voice of Love Ministry serves children through teaching, worship, mentorship, visits, and practical support in East Africa.",
};

const PROGRAMS = [
  {
    tag: "Care & Mentorship",
    title: "Care that begins with listening",
    text: "We learn children's names, hear what they are facing, and offer guidance through relationships built over time.",
    img: "/images/children-community.jpg",
  },
  {
    tag: "Teaching & Faith",
    title: "Teaching children about God",
    text: "We read the Bible, pray, answer questions, and help children understand their faith in language that makes sense to them.",
    img: "/images/children-gathering.jpg",
  },
  {
    tag: "Music & Worship",
    title: "Singing and worshipping together",
    text: "Music gives children a joyful way to take part, learn, and use the gifts God has given them.",
    img: "/images/band.jpg",
  },
  {
    tag: "Practical Support",
    title: "Practical help when it is needed",
    text: "We support children and families with useful help, personal visits, and prayer during difficult times.",
    img: "/images/children-circle.jpg",
  },
];

const MOMENTS = [
  {
    src: "/images/children-outreach.jpg",
    alt: "The Voice of Love Ministry meeting children at a community outreach",
    caption: "Time together at a community visit",
    className: s.storyPhotoWide,
  },
  {
    src: "/images/children-community.jpg",
    alt: "Children gathered during a visit from The Voice of Love Ministry",
    caption: "Children gathered for the day",
    className: "",
  },
  {
    src: "/images/children-circle.jpg",
    alt: "Children listening during an outreach gathering",
    caption: "A teaching session outdoors",
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
          <img src="/images/children-group.jpg" alt="Children supported by The Voice of Love Ministry" className={s.workHeroImage} />
          <div className={s.workHeroVeil} />
          <div className={`${s.container} ${s.workHeroInner}`}>
            <div className={s.workHeroContent}>
              <div className={s.crumb}>
                <Link href="/">Home</Link> <span>/</span> <span>What We Do</span>
              </div>
              <span className={s.kicker}>What we do</span>
              <h1 className={s.workHeroTitle}>Children need care that lasts beyond one visit.</h1>
              <p>
                We spend time with children, teach God's Word, sing and pray
                together, and help with practical needs in their communities.
              </p>
              <Link href="/donate" className={s.btnPrimary}>Help a child today</Link>
            </div>
          </div>
        </section>

        <section className={s.workIntro}>
          <div className={s.container}>
            <div className={s.workIntroGrid}>
              <Reveal className={s.workIntroCopy}>
                <span className={s.kicker}>Why we keep returning</span>
                <h2 className={s.h2}>
                  Trust takes <em className={s.italicAccent}>time.</em>
                </h2>
                <p className={s.lead}>
                  Children notice who remembers them and who comes back. That is
                  why we want our work to grow through steady relationships, not
                  one-day appearances.
                </p>
                <p className={s.lead}>
                  At each gathering we make room for questions, prayer, play,
                  music, and honest conversation. We want children to feel safe,
                  included, and free to take part.
                </p>
                <div className={s.workValues} aria-label="Our approach">
                  <span>Faith</span><span>Dignity</span><span>Belonging</span><span>Care</span>
                </div>
              </Reveal>
              <Reveal className={s.workIntroMedia} delay={100}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/children-gathering.jpg" alt="Children gathered for teaching and encouragement" loading="lazy" />
                <p>Ministry starts by listening before we speak.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={s.workStories}>
          <div className={s.container}>
            <Reveal className={s.workSectionHead}>
              <div>
                <span className={s.kicker}>From the field</span>
                <h2 className={s.h2}>A closer look at the work</h2>
              </div>
              <p>
                These photographs come from time spent with the children we
                serve. The work is personal because every child is a person, not
                a number.
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

        <section className={s.section}>
          <div className={s.container}>
            <Reveal className={`${s.head} ${s.center}`} style={{ margin: "0 auto 2.6rem" }}>
              <span className={`${s.kicker} ${s.kickerCenter}`}>See it in action</span>
              <h2 className={s.h2}>Moments from our outreach</h2>
              <p className={`${s.lead} ${s.center}`}>
                Short clips from time spent with children and communities in East
                Africa.
              </p>
            </Reveal>
            <div className={s.videoRow}>
              <Reveal as="figure" className={s.videoCard}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="https://res.cloudinary.com/dzbu1g1b8/video/upload/so_2/voice-of-love/children-outreach-1.jpg"
                >
                  <source
                    src="https://res.cloudinary.com/dzbu1g1b8/video/upload/q_auto/voice-of-love/children-outreach-1.mp4"
                    type="video/mp4"
                  />
                </video>
                <figcaption className={s.videoCap}>Gathering with children</figcaption>
              </Reveal>
              <Reveal as="figure" className={s.videoCard} delay={90}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="https://res.cloudinary.com/dzbu1g1b8/video/upload/so_2/voice-of-love/children-outreach-2.jpg"
                >
                  <source
                    src="https://res.cloudinary.com/dzbu1g1b8/video/upload/q_auto/voice-of-love/children-outreach-2.mp4"
                    type="video/mp4"
                  />
                </video>
                <figcaption className={s.videoCap}>Worship and encouragement</figcaption>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={s.workPrograms}>
          <div className={s.container}>
            <Reveal className={`${s.head} ${s.center}`} style={{ margin: "0 auto 2.8rem" }}>
              <span className={`${s.kicker} ${s.kickerCenter}`}>How we serve</span>
              <h2 className={s.h2}>Four parts of our work</h2>
              <p className={`${s.lead} ${s.center}`}>
                Teaching, worship, mentorship, and practical help belong
                together. A child's spiritual and everyday needs are connected.
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
              <span className={s.kicker}>Help us return</span>
              <h2>Support the next visit and the one after that.</h2>
              <p>
                Your gift helps cover gatherings, teaching materials, travel,
                worship, and practical support for children and families.
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
