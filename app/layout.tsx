import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Voice of Love Family — Speaking God's Love to Every Nation",
  description:
    "The Voice of Love Family is a community built on the message of God's love — spreading hope, faith, and compassion through words, actions, and service to communities everywhere.",
  keywords: [
    "Voice of Love",
    "Voice of Love Family",
    "Voice of Love Ministry",
    "Christian ministry",
    "faith",
    "God's love",
    "NGO",
    "charity",
    "community",
    "compassion",
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
  themeColor: "#0f1c17",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
