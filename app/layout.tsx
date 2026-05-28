import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque, Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Jason Barry · Honest Recruiting Strategy",
  description:
    "Former college coach offering strategic golf recruiting advisory. Honest evaluation, experienced perspective, and clear guidance for families pursuing college golf.",
  metadataBase: new URL("https://jasonbarrygolf.com"),
  openGraph: {
    title: "Jason Barry · Honest Recruiting Strategy",
    description:
      "Strategic college golf recruiting guidance for families seeking clarity, fit, and a realistic path forward.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
