import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { publishedServices } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return publishedServices.map(service => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = publishedServices.find(x => x.slug === slug);
  return service ? pageMetadata(`${service.title} | Legal Services`, `${service.description} Learn more about ${service.title.toLowerCase()} with ${site.name}.`, `/services/${slug}`) : {};
}
export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = publishedServices.find(x => x.slug === slug);
  if (!service) notFound();
  return <><section className="page-hero"><div className="container"><span className="eyebrow gold-text">AREA OF PRACTICE</span><h1>{service.title}</h1><p>{service.description}</p></div></section>
    <section className="section"><div className="container narrow-content"><p className="lead">{service.detail}</p><p>For information about this area of practice, please use the professional inquiry form. Do not submit confidential or sensitive case information through the website.</p>
      <Link href="/services" className="text-link"><ArrowLeft size={16} /> All services</Link></div></section>
    <section className="contact-banner"><div className="container contact-banner-inner"><div><h2>Make a General Inquiry</h2><p>Submitting an inquiry does not establish an attorney-client relationship.</p></div><Link href="/contact" className="button button-gold">Contact Me <ArrowRight size={17} /></Link></div></section></>;
}
