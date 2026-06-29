import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import s from "../ui.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact The Voice of Love Ministry about prayer, partnership, volunteering, giving, or our work with children and families.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className={s.pageHeader}>
        <div className={s.container}>
          <div className={s.pageHeaderInner}>
            <div className={s.crumb}>
              <Link href="/">Home</Link> <span>/</span> <span>Contact</span>
            </div>
            <span className={s.kicker}>Get in touch</span>
            <h1 className={s.pageTitle}>
              Tell us what&rsquo;s on your <em className={s.italicAccent}>mind.</em>
            </h1>
            <p className={s.pageLede}>
              Ask a question, share a prayer request, or talk with us about
              supporting the ministry. Your message will reach a real person.
            </p>
          </div>
        </div>
      </section>

      <main>
        <section className={s.section}>
          <div className={s.container}>
            <div className={s.split}>
              <Reveal>
                <span className={s.kicker}>Reach us</span>
                <h2 className={s.h2}>Send us a message</h2>
                <p className={s.lead}>
                  We will read your message and reply as soon as we can. For
                  common giving questions, visit our{" "}
                  <Link href="/donate" className={s.textLink}>donation page</Link>{" "}
                  first.
                </p>
                <div className={s.contactList}>
                  <p><strong>Headquarters</strong><br />United States</p>
                  <p><strong>Operations</strong><br />Uganda · Rwanda · Kenya · DR Congo</p>
                  <p>
                    <strong>Email</strong><br />
                    <a href="mailto:Danymuhinda1@gmail.com" className={s.textLink}>
                      Danymuhinda1@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone</strong><br />
                    <a href="tel:+15209069946" className={s.textLink}>
                      +1 (520) 906-9946
                    </a>
                  </p>
                </div>
              </Reveal>
              <Reveal className={s.formCard} delay={100}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={s.newsletter}>
          <div className={s.container}>
            <div className={s.newsInner}>
              <div>
                <h2 className={s.h2} style={{ color: "#fff" }}>Help us care for children</h2>
                <p>Your gift supports teaching, worship, visits, and practical help.</p>
              </div>
              <Link href="/donate" className={s.btnPrimary}>Donate now</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
