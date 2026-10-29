import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const description =
  "RankLift SEO helps growing businesses win organic traffic with technical SEO, content strategy and link building. Book a free audit today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SEO Services That Grow Organic Traffic | RankLift SEO",
    template: `%s | ${SITE_NAME}`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: "SEO Services That Grow Organic Traffic | RankLift SEO",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services That Grow Organic Traffic | RankLift SEO",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4f46e5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
