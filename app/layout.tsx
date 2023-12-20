import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/header";
import { LIGHT_THEME } from "./constant";
import { sans, serif } from "./utils/fonts";

export const metadata: Metadata = {
  title: "overreacted",
  description: "a new implementation of overreacted",
  metadataBase: new URL("https://overreacted.netlify.app"),
  keywords: ["Next.js", "React", "JavaScript"],
  creator: "Sima Amini",
  generator: "Next.js",
  applicationName: "Overreacted",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
      data-theme={LIGHT_THEME}
    >
      <body className="mx-auto max-w-2xl  px-5 py-12">
        <Header />
        <main className="flex min-h-screen flex-col  justify-between py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
