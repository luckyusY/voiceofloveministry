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
    default: "The Voice of Love Ministry — Faith, Worship, and Care",
    template: "%s · The Voice of Love Ministry",
  },
  description:
    "The Voice of Love Ministry serves children and families through Christian teaching, worship, mentorship, prayer, and practical care.",
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
      "Christian teaching, worship, mentorship, prayer, and practical care for children and families.",
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
