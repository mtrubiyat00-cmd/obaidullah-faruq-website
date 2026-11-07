import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/data/articles";
export default function ArticleCard({ article }: { article: Article }) {
  return <article className="article-card">
    <div className="article-art"><span className="article-art-label">LEGAL PERSPECTIVE</span><span className="article-art-mark">§</span></div>
    <div className="article-body"><div className="article-meta">{article.category} <span>·</span> {new Date(article.date).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })}</div>
      <h3>{article.title}</h3><p>{article.summary}</p><Link className="text-link" href={`/legal-insights/${article.slug}`}>Read article <ArrowUpRight size={16} /></Link></div>
  </article>;
}
