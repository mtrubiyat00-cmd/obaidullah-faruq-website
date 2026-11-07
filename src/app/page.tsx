import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Scale } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ArticleCard from "@/components/ArticleCard";
import Timeline from "@/components/Timeline";
import { site } from "@/data/site";
import { publishedServices } from "@/data/services";
import { publishedArticles } from "@/data/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Advocate Obaidullah Faruq Sawgat | Professional Legal Portfolio",
  "Explore the professional biography, legal services, qualifications, and legal insights of Advocate Obaidullah Faruq Sawgat.",
  "/"
);

export default function HomePage() {
  return <>
    <section className="hero">
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow"><span />{site.designation}</span>
          <h1>Advocate<br /><em>Obaidullah</em><br />Faruq Sawgat</h1>
          <div className="gold-rule" />
          <p className="hero-tagline">{site.tagline}</p>
          <p className="hero-intro">{site.introduction}</p>
          <div className="hero-actions"><Link className="button button-gold" href="/biography">Explore Biography <ArrowRight size={17} /></Link>
            <Link className="button button-outline-light" href="/services">View Services</Link></div>
          <div className="hero-footnote"><CheckCircle2 size={15} /> Professional details are being updated with verified information.</div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-frame"><Image src={site.portrait} alt={site.portraitAlt} fill priority sizes="(max-width: 900px) 85vw, 42vw" className="portrait-image" /></div>
          <div className="portrait-caption"><span>OFS</span><div><strong>Professional Profile</strong><small>Advocate</small></div></div>
          <span className="portrait-corner" />
        </div>
      </div>
      <div className="hero-bottom-line" />
    </section>

    <section className="section section-intro">
      <div className="container intro-grid">
        <div><span className="eyebrow">01 / INTRODUCTION</span><SectionHeading title="A Professional Introduction" /></div>
        <div className="intro-copy"><p>{site.biography}</p><Link href="/biography" className="text-link">Read full biography <ArrowUpRight size={17} /></Link></div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="container">
        <div className="section-topline"><span className="eyebrow">02 / PRACTICE AREAS</span><span className="section-index">LEGAL SERVICES</span></div>
        <SectionHeading title="Legal Services and Areas of Practice" text="Explore the legal practice areas and professional services confirmed for this profile." />
        {publishedServices.length ? <div className="service-grid">{publishedServices.slice(0, 6).map(service => <ServiceCard key={service.slug} service={service} />)}</div>
          : <div className="empty-panel"><Scale size={28} /><div><h3>Practice areas will be published after confirmation</h3><p>Specific legal services are not listed until they have been verified.</p></div></div>}
        <div className="center-action"><Link href="/services" className="button button-dark">View Services <ArrowRight size={17} /></Link></div>
      </div>
    </section>

    <section className="section">
      <div className="container journey-grid">
        <div className="journey-intro"><span className="eyebrow">03 / BACKGROUND</span><SectionHeading title="Education and Professional Journey" text="Academic and professional milestones will appear here once verified." /><Link href="/biography" className="text-link">View biography <ArrowUpRight size={17} /></Link></div>
        <div className="journey-timeline"><Timeline entries={[...site.education, ...site.career]} emptyText="Verified qualifications, institutions, enrollment details and career milestones have not yet been added." /></div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="container">
        <div className="section-topline"><span className="eyebrow">04 / KNOWLEDGE</span><span className="section-index">EDITORIAL</span></div>
        <SectionHeading title="Legal Insights and Perspectives" text="Educational legal articles and professional perspectives, published after review." />
        {publishedArticles.length ? <div className="article-grid">{publishedArticles.slice(0, 3).map(article => <ArticleCard key={article.slug} article={article} />)}</div>
          : <div className="empty-panel"><div className="article-art-mini">§</div><div><h3>Legal insights are in preparation</h3><p>Articles will be published only after professional review and approval.</p></div><Link href="/legal-insights" className="text-link">Visit insights <ArrowUpRight size={17} /></Link></div>}
      </div>
    </section>

    {site.highlights.length > 0 && <section className="section"><div className="container"><SectionHeading title="Professional Highlights" text="Selected verified professional and academic activities." />
      <div className="highlight-grid">{site.highlights.map((h, i) => <article className="highlight-card" key={`${h.title}-${i}`}><span className="eyebrow">{h.category}</span><h3>{h.title}</h3>{h.detail && <p>{h.detail}</p>}{h.date && <small>{h.date}</small>}</article>)}</div>
    </div></section>}

    <section className="contact-banner"><div className="container contact-banner-inner"><div><span className="eyebrow gold-text">PROFESSIONAL INQUIRIES</span><h2>Get in Touch</h2><p>For professional inquiries and further information, please use the contact details provided below.</p></div><Link href="/contact" className="button button-gold">Contact Me <ArrowRight size={17} /></Link></div></section>
  </>;
}
