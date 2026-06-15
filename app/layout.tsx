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
  title: "Voice of Love Ministry — Coming Soon",
  description:
    "Voice of Love Ministry is a non-profit dedicated to carrying hope, compassion, and dignity to communities in need. Our new home is coming soon.",
  keywords: [
    "Voice of Love Ministry",
    "NGO",
    "non-profit",
    "charity",
    "ministry",
    "compassion",
    "community",
  ],
  authors: [{ name: "Voice of Love Ministry" }],
  openGraph: {
    title: "Voice of Love Ministry — Coming Soon",
    description:
      "Hope is on the way. Voice of Love Ministry's new website is coming soon.",
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
