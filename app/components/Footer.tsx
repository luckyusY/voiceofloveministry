import Link from "next/link";
import styles from "../ui.module.css";

const COLS: [string, [string, string][]][] = [
  [
    "Join Us",
    [
      ["Donate Now", "/donate"],
      ["Donate Monthly", "/donate"],
      ["Pray With Us", "/about"],
      ["Volunteer", "/about"],
    ],
  ],
  [
    "Explore",
    [
      ["Who We Are", "/about"],
      ["What We Do", "/#ways"],
      ["Where We Work", "/where-we-work"],
      ["Latest News", "/#latest"],
    ],
  ],
  [
    "Follow Us",
    [
      ["Facebook", "#"],
      ["Instagram", "#"],
      ["YouTube", "#"],
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
              <img src="/images/logo.png" alt="" className={styles.brandLogo} />
              <span className={styles.brandText}>Voice of Love</span>
            </Link>
          </div>
          {COLS.map(([head, items]) => (
            <div className={styles.footerCol} key={head}>
              <h4>{head}</h4>
              {items.map(([label, href]) => (
                <Link href={href} key={label}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} The Voice of Love Family</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Contact Us</span>
        </div>
        <p className={styles.legalCopy}>
          The Voice of Love Family is a community ministry carrying hope through
          worship, prayer, outreach, and practical care. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
