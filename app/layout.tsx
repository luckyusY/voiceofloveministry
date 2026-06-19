import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import DonatePopup from "./components/DonatePopup";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const body = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "The Voice of Love Ministry — Speaking God's Love to Every Nation",
    template: "%s · The Voice of Love Ministry",
  },
  description:
    "The Voice of Love Ministry is a community built on the message of God's love — spreading hope, faith, and compassion through worship, words, and service from the United States to East Africa.",
  keywords: [
    "The Voice of Love",
    "The Voice of Love Ministry",
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
  authors: [{ name: "The Voice of Love Ministry" }],
  openGraph: {
    title: "The Voice of Love Ministry",
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
      <body className={`${display.variable} ${body.variable}`}>
        {children}
        <DonatePopup />
      </body>
    </html>
  );
}
