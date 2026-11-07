import { Mail, MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(`Contact Me | ${site.name}`, `Contact ${site.name} for professional inquiries and further information.`, "/contact");
export default function ContactPage() {
  return <><section className="page-hero"><div className="container"><span className="eyebrow gold-text">GET IN TOUCH</span><h1>Contact Me</h1><p>For professional inquiries and further information.</p></div></section>
    <section className="section"><div className="container contact-grid">
      <aside className="contact-aside"><SectionHeading title="Professional Contact" text="Use the details below for general professional inquiries." />
        <div className="contact-detail"><Phone /><div><small>Telephone</small>{site.phone ? <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a> : <span>To be confirmed</span>}</div></div>
        <div className="contact-detail"><Mail /><div><small>Email</small>{site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : <span>To be confirmed</span>}</div></div>
        <div className="contact-detail"><MapPin /><div><small>Chamber address</small><span>{site.chamberAddress || "To be confirmed"}</span></div></div>
        <div className="contact-detail"><Clock /><div><small>Office hours</small><span>{site.officeHours || "To be confirmed"}</span></div></div>
        <div className="contact-note">Submitting an inquiry does not automatically establish an attorney-client relationship.</div>
      </aside>
      <div className="form-panel"><span className="eyebrow">SEND AN INQUIRY</span><h2>How may I help?</h2><p className="muted-copy">Please keep your message general. Do not include confidential documents or sensitive case details.</p><ContactForm /></div>
    </div></section>
  </>;
}
