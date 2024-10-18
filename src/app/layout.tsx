import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

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
  title: "Lauf - Website Design & Development",
  description:
    "Husband-wife team building custom websites designed to elevate your brand and grow your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="BEaUF1hQ50xW7pT-B1zxzSCo0Ud5FQbvu3ej5HBEjJI"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  overflow-x-hidden antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
