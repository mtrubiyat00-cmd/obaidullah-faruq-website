import SectionHeading from "@/components/SectionHeading";
import ArticleCard from "@/components/ArticleCard";
import { publishedArticles } from "@/data/articles";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(`Legal Insights | ${site.name}`, `Educational legal insights and perspectives from ${site.name}.`, "/legal-insights");
export default function InsightsPage() {
  return <><section className="page-hero"><div className="container"><span className="eyebrow gold-text">KNOWLEDGE & PERSPECTIVE</span><h1>Legal Insights</h1><p>Educational articles and perspectives, subject to professional review.</p></div></section>
    <section className="section"><div className="container"><SectionHeading title="Articles and Perspectives" text="Content is provided for general educational purposes and is not a substitute for advice on a specific matter." />
      {publishedArticles.length ? <div className="article-grid">{publishedArticles.map(article => <ArticleCard key={article.slug} article={article} />)}</div>
        : <div className="empty-panel"><div className="article-art-mini">§</div><div><h3>Articles will appear here after review</h3><p>No article is currently approved for publication.</p></div></div>}
    </div></section></>;
}
