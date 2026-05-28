import type { Metadata } from "next";
import { Geist_Mono, Anton, Inter_Tight } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { contact } from "@/lib/content";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE = "https://jasonbarrygolf.com";
const TITLE = "Jason Barry Golf · College Recruiting Advisory";
const DESC =
  "Honest, strategic college golf recruiting guidance from a former college coach. Director of Instruction at Springdale Golf Club. Five-time Golf Digest Best Young Teacher.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s · Jason Barry Golf",
  },
  description: DESC,
  applicationName: "Jason Barry Golf",
  authors: [{ name: "Jason Barry" }],
  keywords: [
    "Jason Barry",
    "college golf recruiting",
    "golf advisor",
    "Springdale Golf Club",
    "Princeton NJ golf",
    "Best Young Teacher",
    "junior golf recruiting",
    "Division I golf recruiting",
    "Rider University golf",
    "golf lessons Princeton",
  ],
  category: "sports",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Jason Barry Golf",
    title: TITLE,
    description: DESC,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: true, email: true, address: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Jason Barry",
      jobTitle: "Director of Instruction & College Golf Recruiting Advisor",
      worksFor: { "@type": "Organization", name: contact.club },
      email: contact.email,
      telephone: contact.phone,
      url: SITE,
      sameAs: [contact.clubLink],
      award: [
        "Golf Digest Best Young Teacher in America (5×)",
        "Conference Championship, Rider University Men's Golf",
        "NCAA Regional Appearances",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Jason Barry Golf",
      image: `${SITE}/opengraph-image`,
      description: DESC,
      url: SITE,
      telephone: contact.phone,
      email: contact.email,
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1895 Clubhouse Drive",
        addressLocality: "Princeton",
        addressRegion: "NJ",
        postalCode: "08540",
        addressCountry: "US",
      },
      areaServed: { "@type": "Country", name: "United States" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${interTight.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
