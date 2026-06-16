import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "The Voice of Love Family — Speaking God's Love to Every Nation",
    template: "%s · The Voice of Love Family",
  },
  description:
    "The Voice of Love Family is a community built on the message of God's love — spreading hope, faith, and compassion through worship, words, and service from the United States to East Africa.",
  keywords: [
    "Voice of Love",
    "Voice of Love Family",
    "Christian ministry",
    "faith",
    "God's love",
    "NGO",
    "charity",
    "donate",
    "Uganda",
    "Rwanda",
    "Kenya",
  ],
  authors: [{ name: "The Voice of Love Family" }],
  openGraph: {
    title: "The Voice of Love Family",
    description:
      "A generation chosen to speak God's love, bring hope to the hopeless, and unite the world through the power of love.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#06314f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
