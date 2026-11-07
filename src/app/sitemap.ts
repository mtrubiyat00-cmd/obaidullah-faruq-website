import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { publishedArticles } from "@/data/articles";
import { publishedServices } from "@/data/services";
export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["/", "/biography", "/services", "/contact", "/legal-insights", "/privacy-policy", "/disclaimer"];
  return [
    ...fixed.map(path => ({ url: absoluteUrl(path), lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.7 })),
    ...publishedServices.map(x => ({ url: absoluteUrl(`/services/${x.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
    ...publishedArticles.map(x => ({ url: absoluteUrl(`/legal-insights/${x.slug}`), lastModified: new Date(x.date), changeFrequency: "yearly" as const, priority: 0.6 }))
  ];
}
