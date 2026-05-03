import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RBC India — Premium Home Hardware & Bathroom Solutions",
    template: "%s | RBC India",
  },
  description:
    "Ramswarup Brothers and Co. — North Bengal's most trusted distributor of premium home hardware, bathroom accessories, and fittings. Authorized dealer for Jaquar, Racold, Sintex and 10+ top brands.",
  keywords: [
    "bathroom fittings Siliguri",
    "home hardware West Bengal",
    "Jaquar distributor North Bengal",
    "bathroom accessories",
    "Ramswarup Brothers",
    "RBC India",
    "faucets shower head Siliguri",
  ],
  authors: [{ name: "RBC India" }],
  openGraph: {
    title: "RBC India — Premium Home Hardware & Bathroom Solutions",
    description:
      "North Bengal's most trusted distributor of premium home hardware and bathroom accessories.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
