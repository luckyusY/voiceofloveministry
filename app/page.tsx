import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsletterForm from "./components/NewsletterForm";
import s from "./ui.module.css";

// NOTE: these figures are placeholders — replace with Voice of Love's real numbers.
const IMPACT = [
  ["4", "nations across two continents"],
  ["25+", "communities reached together"],
  ["1,000+", "hearts encouraged in worship"],
  ["100%", "driven by faith, hope & love"],
];

const INVOLVED = [
  {
    title: "Worship & outreach events",
    text: "Through song, preaching, and prayer we carry the message of God's love to gatherings across the nations.",
    img: "/images/band.jpg",
    action: "Donate",
  },
  {
    title: "Mission work in East Africa",
    text: "Our teams visit homes, churches, and communities in Uganda, Rwanda, and Kenya with practical love and care.",
    img: "/images/field.jpg",
    action: "Learn more",
  },
  {
    title: "Hope for young people",
    text: "We walk with youth through teaching, mentorship, music, and compassionate care.",
    img: "/images/youth.jpg",
    action: "Donate",
  },
];

const NEWS = [
  {
    date: "15 Jun 2026",
    area: "Uganda",
    title: "Families in our main outreach receive prayer, encouragement, and care",
    img: "/images/teaching.jpg",
  },
  {
    date: "11 Jun 2026",
    area: "United States",
    title: "A night of worship draws the family together to lift up the nations",
    img: "/images/audience.jpg",
  },
  {
    date: "10 Jun 2026",
    area: "Rwanda",
    title: "Standing with women and families through compassionate outreach",
    img: "/images/outreach-women.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={s.emergencyHero}>
          <img src="/images/hero-worship.jpg" alt="" className={s.emergencyImage} />
          <div className={s.container}>
            <DonationPanel />
          </div>
        </section>

        <section className={s.urgent}>
          <div className={s.container}>
            <h1>
              <span>The voice of love</span> for every nation
            </h1>
            <p>
              Across the United States and East Africa, Voice of Love is
              mobilising prayer, worship, and practical care — standing with
              families, young people, and communities who need hope.
            </p>
            <p>
              Your donation today can help carry God&rsquo;s love where it is
              needed most: in homes, churches, and communities across two
              continents.
            </p>
            <Link href="/donate" className={s.inlineRed}>
              Your donation today can make a difference.
            </Link>
          </div>
        </section>

        <section className={s.intro}>
          <div className={s.container}>
            <h2>Voice of Love</h2>
            <p>
              We believe love is the greatest voice — one that can heal hearts,
              restore hope, and unite people across all nations. Our purpose is to
              live, speak, and share this divine love through faith, compassion,
              and service.
            </p>
            <p>
              Behind every gathering is a person, a family, and a story. Our work
              is simple and joyful: speak love, bring hope, and stand with people
              until dignity and possibility return.
            </p>
            <p>
              Together, we will let the voice of love be heard in every heart,
              home, and nation. Join us.
            </p>
          </div>
        </section>

        <section className={s.impactPlain}>
          <div className={s.container}>
            <h2>Our impact in 2025</h2>
            <div className={s.impactPlainGrid}>
              {IMPACT.map(([number, label]) => (
                <article key={label} className={s.impactItem}>
                  <HeartMark />
                  <strong>{number}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={s.involved} id="ways">
          <div className={s.container}>
            <h2>Ways to get involved</h2>
            <div className={s.cardRow}>
              {INVOLVED.map((item) => (
                <article key={item.title} className={s.crisisCard}>
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href="/donate">{item.action} <span>›</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={s.empower}>
          <div className={s.container}>
            <h2>How we share God&rsquo;s love</h2>
            <div className={s.empowerPanel}>
              <img src="/images/team.jpg" alt="" />
              <div className={s.empowerContent}>
                <div className={s.tabs}>
                  <span>Worship</span>
                  <span>Family</span>
                  <span>Truth</span>
                  <span>Compassion</span>
                </div>
                <div>
                  <h3>Worship</h3>
                  <p>
                    Through music, preaching, and prayer we lift up the name of
                    God and invite every heart into His love — gathering as one
                    family with one voice.
                  </p>
                  <Link href="/about">Learn more ›</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={s.latest} id="latest">
          <div className={s.container}>
            <h2>Latest news</h2>
            <div className={s.newsGrid}>
              {NEWS.map((item) => (
                <article key={item.title} className={s.newsCard}>
                  <div className={s.newsImage}>
                    <img src={item.img} alt="" />
                  </div>
                  <div className={s.newsBody}>
                    <p>
                      <span>{item.date}</span> {item.area}
                    </p>
                    <h3>{item.title}</h3>
                    <Link href="/about">Read more ›</Link>
                  </div>
                </article>
              ))}
            </div>
            <Link href="/about" className={s.moreNews}>
              View more news from Voice of Love ›
            </Link>
          </div>
        </section>

        <section className={s.newsletterBand}>
          <div className={s.container}>
            <div className={s.newsletterBox}>
              <img src="/images/congregation.jpg" alt="" />
              <div>
                <h2>Newsletter</h2>
                <p>
                  Find out how we are sharing love and bringing hope. You can opt
                  out at any time.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DonationPanel() {
  return (
    <aside className={s.donationPanel} aria-label="Donation form">
      <h2>Give to the voice of love</h2>
      <div className={s.frequency}>
        <button type="button">One-time</button>
        <button type="button">Monthly</button>
      </div>
      <div className={s.amounts}>
        {["$25", "$50", "$100", "$250"].map((amount) => (
          <button
            type="button"
            key={amount}
            className={amount === "$50" ? s.selectedAmount : ""}
          >
            {amount}
          </button>
        ))}
      </div>
      <p>$50 helps carry worship, prayer, and practical care to a community.</p>
      <label className={s.customAmount}>
        <span>$</span>
        <input type="text" placeholder="Enter other amount" />
      </label>
      <Link href="/donate" className={s.donateNow}>
        ♥ Donate now
      </Link>
      <div className={s.payments}>
        <span>VISA</span>
        <span>PayPal</span>
        <span>Apple Pay</span>
      </div>
      <small>🔒 Your donation is processed securely</small>
    </aside>
  );
}

function HeartMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="20" />
      <path d="M24 33s-9-5.7-9-12.2A5 5 0 0 1 24 17a5 5 0 0 1 9 3.8C33 27.3 24 33 24 33Z" />
    </svg>
  );
}
