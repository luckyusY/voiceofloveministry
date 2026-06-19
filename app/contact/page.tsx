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
    "Get in touch with The Voice of Love Ministry — for prayer, partnership, volunteering, or to learn more about our mission to children and communities.",
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
              We&rsquo;d love to <em className={s.italicAccent}>hear</em> from you.
            </h1>
            <p className={s.pageLede}>
              Whether you&rsquo;d like to pray with us, partner in the mission, or
              learn how your gift helps children and families — we&rsquo;re glad to
              connect.
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
                <h2 className={s.h2}>Let&rsquo;s talk</h2>
                <p className={s.lead}>
                  Send us a message and a member of the family will get back to
                  you. For giving questions, our{" "}
                  <Link href="/donate" className={s.textLink}>donation page</Link>{" "}
                  has everything you need.
                </p>
                <div className={s.contactList}>
                  <p><strong>Headquarters</strong><br />United States</p>
                  <p><strong>Operations</strong><br />Uganda · Rwanda · Kenya</p>
                  <p><strong>Email</strong><br />hello@voiceoflove.org</p>
                </div>
                <p style={{ marginTop: "1.4rem", fontSize: ".9rem", color: "var(--ink-mute)" }}>
                  (Contact details are placeholders — share your real email,
                  phone, and address and I&rsquo;ll add them.)
                </p>
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
                <h2 className={s.h2} style={{ color: "#fff" }}>Stand with the children</h2>
                <p>Your gift helps a child know they are loved.</p>
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
