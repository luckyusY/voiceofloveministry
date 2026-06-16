import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import NewsletterForm from "./components/NewsletterForm";
import s from "./ui.module.css";

const PROGRAMS = [
  { tag: "Word & Worship", title: "Love through words, actions & music", text: "We carry the message of love through preaching, song, and everyday kindness.", img: "/images/band.jpg" },
  { tag: "Family of Faith", title: "A family that prays for one another", text: "A community where every person is welcomed, encouraged, and held in prayer.", img: "/images/youth.jpg" },
  { tag: "Forgiveness & Truth", title: "Living in forgiveness & truth", text: "We help hearts heal and grow through God's Word, mercy, and honest living.", img: "/images/preaching.jpg" },
  { tag: "Compassion in Action", title: "Serving with compassion & unity", text: "Standing with the vulnerable — bringing practical help where it's needed most.", img: "/images/outreach-women.jpg" },
];

const COUNTRIES = [
  { name: "United States", role: "Headquarters", img: "/images/audience.jpg" },
  { name: "Uganda", role: "Main operations", img: "/images/teaching.jpg" },
  { name: "Rwanda", role: "Outreach", img: "/images/outreach-women.jpg" },
  { name: "Kenya", role: "Outreach", img: "/images/field.jpg" },
];

const STATS = [
  { n: "10K+", label: "Hearts reached with the message of love" },
  { n: "4", label: "Nations across two continents" },
  { n: "25+", label: "Communities served together" },
  { n: "100%", label: "Driven by faith, hope & love" },
];

const STORIES = [
  { cat: "Testimony", date: "Recent", title: "“Love gave me a family when I had none.”", img: "/images/congregation.jpg" },
  { cat: "Our Team", date: "On the ground", title: "The people carrying the vision across nations", img: "/images/leaders.jpg" },
  { cat: "Worship", date: "Ongoing", title: "How music is carrying God's love across nations", img: "/images/worship-raise.jpg" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className={s.hero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-worship.jpg" alt="" className={s.heroImg} />
          <div className={s.heroOverlay} />
          <div className={s.container}>
            <div className={s.heroContent}>
              <span className={s.flag}>A community built on God&rsquo;s love</span>
              <h1 className={s.heroTitle}>
                The voice of <em className={s.italicAccent}>love</em>, heard in
                every nation.
              </h1>
              <p className={s.heroText}>
                Love is the greatest voice that can heal hearts, restore hope, and
                unite people across all nations. Stand with us as we live, speak,
                and share this love — from the United States to East Africa.
              </p>
              <div className={s.heroCtas}>
                <Link href="/donate" className={s.btnPrimary}>
                  Donate now <Arrow />
                </Link>
                <Link href="/about" className={s.btnOutlineLight}>
                  Discover our story
                </Link>
              </div>
            </div>
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
              <h2 className={s.h2}>How we share God&rsquo;s love</h2>
              <p className={s.lead}>
                Our mission is to spread love through words, actions, and service —
                building a family of faith that lifts up every person.
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
                      Support this <Arrow />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GIVE TEASER */}
        <section className={s.give}>
          <div className={s.container}>
            <div className={s.giveGrid}>
              <Reveal>
                <span className={s.kicker}>Be the voice of love</span>
                <h2 className={s.h2}>
                  Your gift helps love reach <em className={s.italicAccent}>further.</em>
                </h2>
                <p className={s.lead}>
                  We depend on people who believe love can change the world. Every
                  gift supports worship, families of faith, and compassionate relief
                  across two continents.
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
                <span className={s.cardTag}>Make a difference</span>
                <h3 className={s.h3}>Choose an amount to begin</h3>
                <div className={s.quickAmounts}>
                  <Link href="/donate">$25</Link>
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
                <h2 className={s.h2}>One family across two continents</h2>
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
                <span className={s.kicker}>Who we are</span>
                <h2 className={s.h2}>A family carrying the message of God&rsquo;s love.</h2>
                <p className={s.lead}>
                  We believe love is the greatest voice that can heal hearts,
                  restore hope, and unite people across all nations — heard in every
                  heart, every home, and every nation.
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
                <span className={s.kicker}>Latest</span>
                <h2 className={s.h2}>Stories of love at work</h2>
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
                We are the Voice of Love Family — a generation chosen to speak
                God&rsquo;s love, to bring hope to the hopeless, and to unite the
                world through the power of love.
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
                <h2 className={s.h2} style={{ color: "#fff" }}>Join the family</h2>
                <p>Get updates, prayer, and ways to get involved in your inbox.</p>
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
