import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

import { Montserrat, Merriweather } from "next/font/google";

export const sans = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal"],
  variable: "--font-sans",
});

export const serif = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "overreacted",
  description: "a new implementation of overreacted",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="mx-auto max-w-2xl  px-5 py-12">
        <Header />
        <main className="flex min-h-screen flex-col  justify-between py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
