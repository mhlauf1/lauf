import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lauf.co"),
  title: {
    default: "Lauf | Web Design & Development",
    template: "%s | Lauf",
  },
  description:
    "Professional web design and development services by Lauf. Expert website solutions for modern businesses.",
  keywords: [
    "Lauf",
    "web design",
    "web development",
    "digital agency",
    "website design",
    "Chicago",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lauf.co",
    siteName: "Lauf",
    title: "Lauf | Professional Web Design & Development",
    description: "Professional web design and development services by Lauf",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lauf Web Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lauf | Professional Web Design & Development",
    description: "Professional web design and development services by Lauf",
    images: ["/opengraph-image.png"],
  },
  verification: {
    google: "google5090f974ab070b62",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lauf.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  overflow-x-hidden antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
