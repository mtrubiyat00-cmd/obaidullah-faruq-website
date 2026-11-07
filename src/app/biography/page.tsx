import Image from "next/image";
import { site } from "@/data/site";
import Timeline from "@/components/Timeline";
import SectionHeading from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = pageMetadata(`Biography | ${site.name}`, `Read the professional biography and verified background of ${site.name}.`, "/biography");
export default function BiographyPage() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow gold-text">THE PROFESSIONAL PROFILE</span><h1>Biography</h1><p>A closer look at professional background, education and career milestones.</p></div></section>
    <section className="section"><div className="container bio-grid">
      <div className="bio-photo"><Image src={site.portrait} alt={site.portraitAlt} fill sizes="(max-width: 800px) 90vw, 38vw" /></div>
      <div className="bio-content"><span className="eyebrow">ADVOCATE</span><SectionHeading title={site.name} /><p>{site.biography}</p><p className="muted-copy">This profile is designed to present verified professional information. Qualifications, enrollment details, professional history and achievements should be added only after confirmation.</p></div>
    </div></section>
    <section className="section section-soft"><div className="container bio-details-grid">
      <div><SectionHeading title="Academic Qualifications" /><Timeline entries={site.education} emptyText="Verified academic qualifications have not yet been provided." /></div>
      <div><SectionHeading title="Professional Career" /><Timeline entries={site.career} emptyText="Verified professional milestones have not yet been provided." /></div>
    </div></section>
    <section className="contact-banner"><div className="container contact-banner-inner"><div><h2>Continue the Conversation</h2><p>Use the contact page for professional inquiries.</p></div><Link href="/contact" className="button button-gold">Contact Me <ArrowRight size={17} /></Link></div></section>
  </>;
}
