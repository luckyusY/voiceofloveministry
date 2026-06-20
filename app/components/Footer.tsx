import Link from "next/link";
import styles from "../ui.module.css";

const COLS: [string, [string, string][]][] = [
  [
    "What We Do",
    [
      ["Children & Youth", "/what-we-do"],
      ["Word & Worship", "/what-we-do"],
      ["Family of Faith", "/what-we-do"],
      ["Practical Care", "/what-we-do"],
    ],
  ],
  [
    "Where We Work",
    [
      ["United States (HQ)", "/where-we-work"],
      ["Uganda", "/where-we-work"],
      ["Rwanda", "/where-we-work"],
      ["Kenya", "/where-we-work"],
    ],
  ],
  [
    "Get Involved",
    [
      ["Donate", "/donate"],
      ["Give Monthly", "/donate"],
      ["Our Story", "/about"],
      ["Contact Us", "/contact"],
    ],
  ],
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.brand}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.png" alt="" className={styles.brandLogo} />
              <span className={styles.brandText}>
                The Voice of Love<em>Ministry</em>
              </span>
            </Link>
            <p>
              A Christian ministry serving children and families through
              teaching, worship, prayer, and practical care.
            </p>
            <p>
              <a href="mailto:Danymuhinda1@gmail.com">Danymuhinda1@gmail.com</a>
              <br />
              <a href="tel:+15209069946">+1 (520) 906-9946</a>
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="YouTube">YouTube</a>
            </div>
          </div>
          {COLS.map(([head, items]) => (
            <div className={styles.footerCol} key={head}>
              <h4>{head}</h4>
              {items.map(([label, href], i) => (
                <Link href={href} key={label + i}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} The Voice of Love Ministry. All rights reserved.</span>
          <span>Faith expressed through words, worship, and care.</span>
        </div>
      </div>
    </footer>
  );
}
