import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AQF Ingredients | Direct-from-Origin Indian Ingredients",
    template: "%s | AQF Ingredients",
  },
  description:
    "AQF supplies premium direct-from-origin Indian ingredients with verified UK/EU-grade compliance. Kosher, BRCGS, FSSC 22000 certified. Serving food manufacturers, nutraceutical brands and pet food producers.",
  keywords: [
    "Indian ingredients supplier",
    "B2B ingredient manufacturer",
    "Kosher certified ingredients",
    "BRCGS ingredients",
    "vegetable powder supplier",
    "herb ingredient supplier UK",
    "nutraceutical ingredients",
    "pet food ingredients",
  ],
  authors: [{ name: "AQF Ingredients" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://aqfingredients.com",
    siteName: "AQF Ingredients",
    title: "AQF Ingredients | Direct-from-Origin Indian Ingredients",
    description:
      "Premium direct-from-origin Indian ingredients with UK/EU-grade compliance certification. Trusted by B2B food manufacturers across Europe.",
    images: [
      {
        url: "/images/hero/pexels-cottonbro-5532845.jpg",
        width: 1200,
        height: 630,
        alt: "AQF Ingredients - Premium Indian ingredient supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AQF Ingredients | Direct-from-Origin Indian Ingredients",
    description:
      "Premium direct-from-origin Indian ingredients with UK/EU-grade compliance certification.",
    images: ["/images/hero/pexels-cottonbro-5532845.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <ScrollObserver />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
