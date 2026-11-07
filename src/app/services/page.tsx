import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { site } from "@/data/site";
import { publishedServices } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(`Legal Services | ${site.name}`, `Review confirmed legal practice areas and professional service information for ${site.name}.`, "/services");
export default function ServicesPage() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow gold-text">AREAS OF PRACTICE</span><h1>Legal Services</h1><p>Professional legal services and areas of practice.</p></div></section>
    <section className="section"><div className="container"><SectionHeading title="Practice Areas" text="Only confirmed practice areas are displayed. Details should accurately reflect professional authorization and the services offered." />
      {publishedServices.length ? <div className="service-grid">{publishedServices.map(service => <ServiceCard key={service.slug} service={service} />)}</div>
      : <div className="empty-panel"><Scale size={28} /><div><h3>Services are being verified</h3><p>No practice area has been marked as confirmed in the site configuration. Update `src/data/services.ts` after verification.</p></div></div>}
    </div></section>
    <section className="contact-banner"><div className="container contact-banner-inner"><div><h2>Have a Professional Inquiry?</h2><p>Contact details and a general inquiry form are available on the contact page.</p></div><Link href="/contact" className="button button-gold">Contact Me <ArrowRight size={17} /></Link></div></section>
  </>;
}
