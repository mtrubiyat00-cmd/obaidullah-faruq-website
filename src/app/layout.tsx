import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || site.domain),
  title: { default: `${site.name} | Professional Legal Portfolio`, template: `%s | ${site.name}` },
  description: "Explore the professional biography, legal services, qualifications, and legal insights of Advocate Obaidullah Faruq Sawgat.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: { type: "website", siteName: site.name, title: `${site.name} | Professional Legal Portfolio`, description: site.tagline, images: ["/images/og-cover.svg"] },
  twitter: { card: "summary_large_image", title: site.name, description: site.tagline, images: ["/images/og-cover.svg"] },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org", "@type": "Person", name: site.name,
    jobTitle: "Advocate", url: absoluteUrl("/"),
    ...(site.email ? { email: `mailto:${site.email}` } : {}),
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(site.chamberAddress ? { address: { "@type": "PostalAddress", streetAddress: site.chamberAddress } } : {})
  };
  return <html lang="en"><body className={`${playfair.variable} ${inter.variable}`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
    <Navbar /><main>{children}</main><Footer />
  </body></html>;
}
