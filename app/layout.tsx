import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zach McGuckin | Software Engineer",
  description:
    "Software Engineer based in Columbus, Ohio. Building great software experiences across mobile, web, and beyond.",
  keywords: [
    "Zach McGuckin",
    "Software Engineer",
    "iOS Developer",
    "Full Stack Engineer",
    "Columbus Ohio",
  ],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Zach McGuckin | Software Engineer",
    description:
      "Software Engineer based in Columbus, Ohio. Building great software experiences across mobile, web, and beyond.",
    url: "https://zmcguckin.com",
    siteName: "Zach McGuckin",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
