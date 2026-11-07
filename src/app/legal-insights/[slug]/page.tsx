import { notFound } from "next/navigation";
import Link from "next/link";
import { publishedArticles } from "@/data/articles";
import { site } from "@/data/site";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return publishedArticles.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = publishedArticles.find(x => x.slug === slug);
  return article ? pageMetadata(`${article.title} | Legal Insights`, article.summary, `/legal-insights/${slug}`) : {};
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = publishedArticles.find(x => x.slug === slug);
  if (!article) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.summary, datePublished: article.date, author: { "@type": "Person", name: site.name }, mainEntityOfPage: absoluteUrl(`/legal-insights/${slug}`) };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="article-hero"><div className="container narrow-content"><Link href="/legal-insights" className="back-link">← All legal insights</Link><span className="eyebrow">{article.category}</span><h1>{article.title}</h1><p className="article-date">By {site.name} · {new Date(article.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}</p></div></section>
    <article className="section article-reading"><div className="container narrow-content"><p className="article-disclaimer">Educational content only. This article does not constitute legal advice and does not create an attorney-client relationship.</p>
      {article.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      <div className="article-end"><span>—</span><strong>{site.name}</strong><small>ADVOCATE</small></div></div></article>
  </>;
}
