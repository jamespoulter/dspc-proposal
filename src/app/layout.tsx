import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["900"],
});

export const metadata: Metadata = {
  title: "DSP Concepts AI Positioning Programme | ThreePoint × The Liminal Group",
  description: "A strategic positioning and go-to-market programme to establish DSP Concepts as the essential infrastructure layer for AI-powered products.",
  icons: {
    icon: "/threepoint-icon.png",
    shortcut: "/threepoint-icon.png",
    apple: "/threepoint-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${barlowCondensed.variable} font-sans antialiased bg-navy text-cream`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
