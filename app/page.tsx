import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import NewsletterForm from "./components/NewsletterForm";
import s from "./ui.module.css";

const PROGRAMS = [
  { tag: "Children & Youth", title: "Time, care, and guidance for children", text: "We teach, listen, sing, and spend time with children so they know they matter to God and to us.", img: "/images/children-gathering.jpg" },
  { tag: "Word & Worship", title: "Faith shared in words and song", text: "We gather to pray, read God's Word, and worship together in ways that welcome every generation.", img: "/images/band.jpg" },
  { tag: "Family of Faith", title: "A church family that stays close", text: "We make room for people to belong, pray for one another, and carry burdens together.", img: "/images/congregation.jpg" },
  { tag: "Practical Care", title: "Help for everyday needs", text: "When a child or family needs practical support, we respond with what we have and remain present.", img: "/images/outreach-women.jpg" },
];

const COUNTRIES = [
  { name: "United States", role: "Headquarters", img: "/images/audience.jpg" },
  { name: "Uganda", role: "Main operations", img: "/images/teaching.jpg" },
  { name: "Rwanda", role: "Outreach", img: "/images/outreach-women.jpg" },
  { name: "Kenya", role: "Outreach", img: "/images/field.jpg" },
];

const STATS = [
  { n: "Children", label: "Known by name, never a number" },
  { n: "4", label: "Countries held together as one family" },
  { n: "Faith", label: "Shared in word, song, and prayer" },
  { n: "Care", label: "That shows up — and keeps coming back" },
];

const STORIES = [
  { cat: "Children", date: "Outreach", title: "A day of teaching, singing, and time together", img: "/images/children-outreach.jpg" },
  { cat: "Church Family", date: "Community", title: "Why prayer and belonging matter in difficult seasons", img: "/images/congregation.jpg" },
  { cat: "Worship", date: "Music", title: "Making room for every generation to worship", img: "/images/worship-raise.jpg" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className={s.hero}>
          <div className={s.container}>
            <div className={s.heroContent}>
              <span className={s.flag}>Faith you can see, not just hear</span>
              <h1 className={s.heroTitle}>
                Let God&rsquo;s <em className={s.italicAccent}>love</em> be something
                people can feel.
              </h1>
              <p className={s.heroText}>
                We walk with children and families across the United States and
                East Africa — teaching, worshipping, praying, and showing up with
                real help when it&rsquo;s needed.
              </p>
              <div className={s.heroCtas}>
                <Link href="/donate" className={s.btnPrimary}>
                  Donate now <Arrow />
                </Link>
                <Link href="/about" className={s.btnOutline}>
                  Meet the ministry
                </Link>
              </div>
            </div>
          </div>
          <div className={s.heroFrame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero-worship.jpg" alt="The Voice of Love Ministry worship gathering" />
          </div>
        </section>

        {/* IMPACT */}
        <section className={s.impact}>
          <div className={s.container}>
            <div className={s.impactGrid}>
              {STATS.map((st) => (
                <Reveal className={s.stat} key={st.label}>
                  <span className={s.statNum}>{st.n}</span>
                  <span className={s.statLabel}>{st.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className={s.section}>
          <div className={s.container}>
            <Reveal className={s.head}>
              <span className={s.kicker}>What we do</span>
              <h2 className={s.h2}>What our ministry looks like in practice</h2>
              <p className={s.lead}>
                We believe words matter most when our actions agree with them.
                This is how we put our faith to work.
              </p>
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
                      Help this work <Arrow />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CHILDREN MISSION */}
        <section className={s.section} style={{ paddingTop: 0 }}>
          <div className={s.container}>
            <div className={s.split}>
              <Reveal>
                <span className={s.kicker}>Why children come first</span>
                <h2 className={s.h2}>
                  A child should never have to wonder whether they{" "}
                  <em className={s.italicAccent}>matter.</em>
                </h2>
                <p className={s.lead}>
                  We spend time with children in Uganda, Rwanda, and Kenya. We
                  listen to them, teach God's Word, sing together, offer guidance,
                  and help with practical needs when we can.
                </p>
                <p className={s.lead}>
                  A gift helps us return, build trust, and keep that care going.
                </p>
                <p style={{ marginTop: "1.6rem" }}>
                  <Link href="/donate" className={s.btnPrimary}>
                    Help a child <Arrow />
                  </Link>
                </p>
              </Reveal>
              <Reveal className={s.splitMedia} delay={100}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/children-group.jpg" alt="Children supported by The Voice of Love Ministry" loading="lazy" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* GIVE TEASER */}
        <section className={s.give}>
          <div className={s.container}>
            <div className={s.giveGrid}>
              <Reveal>
                <span className={s.kicker}>Give with us</span>
                <h2 className={s.h2}>
                  Help us be there, and keep <em className={s.italicAccent}>coming back.</em>
                </h2>
                <p className={s.lead}>
                  Your support keeps the gatherings going — the teaching, the
                  worship, the visits, and the practical help families count on.
                </p>
                <div className={s.heroCtas}>
                  <Link href="/donate" className={s.btnPrimary}>
                    Give today <Arrow />
                  </Link>
                  <Link href="/donate" className={s.btnGhost}>
                    Ways to give
                  </Link>
                </div>
              </Reveal>
              <Reveal className={s.giveCard} delay={100}>
                <span className={s.cardTag}>Choose a gift</span>
                <h3 className={s.h3}>Start with what feels right</h3>
                <div className={s.quickAmounts}>
                  <Link href="/donate">$20</Link>
                  <Link href="/donate">$50</Link>
                  <Link href="/donate">$100</Link>
                </div>
                <Link href="/donate" className={`${s.btnPrimary} ${s.btnFull}`}>
                  Continue to donate <Arrow />
                </Link>
                <p className={s.payNote}>
                  <Lock /> Secure giving via Stripe &amp; PayPal
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WHERE WE WORK */}
        <section className={s.section}>
          <div className={s.container}>
            <Reveal className={s.headRow}>
              <div>
                <span className={s.kicker}>Where we work</span>
                <h2 className={s.h2}>Rooted in four countries</h2>
              </div>
              <Link href="/where-we-work" className={s.btnOutline}>
                Explore our regions
              </Link>
            </Reveal>
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
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT TEASER */}
        <section className={s.section} style={{ paddingTop: 0 }}>
          <div className={s.container}>
            <div className={s.split}>
              <Reveal className={s.splitMedia}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/team.jpg" alt="The Voice of Love team" loading="lazy" />
              </Reveal>
              <Reveal delay={100}>
                <span className={s.kicker}>The people behind the work</span>
                <h2 className={s.h2}>One ministry, shaped by faith and service.</h2>
                <p className={s.lead}>
                  We are pastors, worshippers, volunteers, friends, and partners
                  who believe the love of God should be visible in the way we
                  treat people.
                </p>
                <div className={s.chips}>
                  {["Love", "Faith", "Unity", "Service", "Truth"].map((v) => (
                    <span className={s.chip} key={v}>{v}</span>
                  ))}
                </div>
                <p style={{ marginTop: "1.6rem" }}>
                  <Link href="/about" className={s.btnDark}>
                    Read our story <Arrow />
                  </Link>
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* STORIES */}
        <section id="stories" className={s.section} style={{ paddingTop: 0 }}>
          <div className={s.container}>
            <Reveal className={s.headRow}>
              <div>
                <span className={s.kicker}>From our community</span>
                <h2 className={s.h2}>Stories from the field</h2>
              </div>
            </Reveal>
            <div className={s.grid3}>
              {STORIES.map((st, i) => (
                <Reveal as="article" className={s.card} key={st.title} delay={i * 70}>
                  <div className={s.cardMedia}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={st.img} alt={st.cat} loading="lazy" />
                  </div>
                  <div className={s.cardBody}>
                    <span className={s.cardTag}>{st.cat} · {st.date}</span>
                    <h3 className={s.h3}>{st.title}</h3>
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
              <Quote />
              <blockquote>
                We want our words, our worship, and the way we care for people to
                tell the same story: God loves them, and they are not alone.
              </blockquote>
              <figcaption>Our Declaration</figcaption>
            </Reveal>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className={s.newsletter}>
          <div className={s.container}>
            <div className={s.newsInner}>
              <div>
                <h2 className={s.h2} style={{ color: "#fff" }}>Stay close to the work</h2>
                <p>Receive ministry news, prayer needs, and simple ways to take part.</p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
function Lock() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
