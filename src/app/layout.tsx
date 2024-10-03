import type { Metadata } from "next";
// import { Head } from "next/document";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

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

const montrealMedium = localFont({
  src: "./fonts/PPNeueMontreal-Medium.otf",
  variable: "--font-montreal-medium",
});
const montrealBook = localFont({
  src: "./fonts/PPNeueMontreal-Book.otf",
  variable: "--font-montreal-book",
});
const montrealBold = localFont({
  src: "./fonts/PPNeueMontreal-Bold.otf",
  variable: "--font-montreal-bold",
});

export const metadata: Metadata = {
  title: "Lauf",
  description: "Wesbite Design and Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
      </Head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montrealMedium.className} ${montrealBook.className}  ${montrealBold.className}overflow-x-hidden antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
