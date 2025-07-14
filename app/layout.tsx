import type { Metadata } from "next";
import localFont from "next/font/local";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BusinessApplicationPopup from "@/components/BusinessApplicationPopup";

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
const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: ["700", "400"],
});

export const metadata: Metadata = {
  title: "McMaster Exoskeleton",
  description: "McMaster Exoskeleton Team Website",
  keywords: [
    "McMaster",
    "Exoskeleton",
    "McMaster Exoskeleton",
    "McMaster Team",
    "McMcmaster Exoskeleton Team",
    "MES",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/exo_white_scalable.svg" />
        <link rel="icon" href="/exo_white_scalable.ico" type="image/x-icon" />
        <title>McMaster Exoskeleton</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo_2.className} antialiased`}
      >
        <BusinessApplicationPopup />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
