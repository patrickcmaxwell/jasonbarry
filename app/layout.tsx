import type { Metadata } from "next";
import { Geist_Mono, Teko, Cambay } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const cambay = Cambay({
  variable: "--font-cambay",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Barry Golf · College Recruiting & Instruction",
  description:
    "Former college coach offering honest recruiting strategy and golf instruction. Director of Instruction at Springdale Golf Club. Five-time Golf Digest Best Young Teacher.",
  metadataBase: new URL("https://jasonbarrygolf.com"),
  openGraph: {
    title: "Jason Barry Golf · College Recruiting & Instruction",
    description:
      "Honest recruiting strategy from a former college coach. Strategic guidance for families pursuing college golf.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${teko.variable} ${cambay.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
