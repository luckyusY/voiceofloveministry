import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
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
    "donate",
    "community",
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
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={hanken.variable}>{children}</body>
    </html>
  );
}
