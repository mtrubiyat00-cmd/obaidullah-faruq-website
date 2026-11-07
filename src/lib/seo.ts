import type { Metadata } from "next";
import { site } from "@/data/site";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || site.domain).replace(/\/$/, "");

export function absoluteUrl(path = "") {
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const canonical = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: site.name,
      images: [{ url: absoluteUrl("/images/og-cover.svg"), width: 1200, height: 630, alt: site.name }]
    },
    twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/images/og-cover.svg")] }
  };
}
