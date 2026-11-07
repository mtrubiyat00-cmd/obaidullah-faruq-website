import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(`Privacy Policy | ${site.name}`, `Website privacy information for ${site.name}.`, "/privacy-policy");
export default function PrivacyPage() {
  return <><section className="page-hero"><div className="container"><span className="eyebrow gold-text">WEBSITE INFORMATION</span><h1>Privacy Policy</h1><p>How information submitted through this website is handled.</p></div></section>
    <section className="section"><div className="container narrow-content legal-copy"><p><strong>Last updated:</strong> November 2026 (review before publication).</p>
      <h2>Information you provide</h2><p>If you submit the contact form, the website may collect your name, email address, optional telephone number, inquiry category and message so the inquiry can be reviewed and responded to.</p>
      <h2>Purpose and handling</h2><p>Information is intended to be used to respond to the inquiry and administer website communications. If email delivery is configured, form information is transmitted to the configured email provider. Confirm the provider's terms, retention practices and applicable privacy obligations before launch.</p>
      <h2>Do not submit confidential information</h2><p>Do not send confidential legal documents, sensitive personal information, passwords, financial account information or detailed case facts through this website form.</p>
      <h2>Cookies and analytics</h2><p>No analytics or advertising tracker is configured by this starter project. Update this policy if analytics, cookies or other third-party services are added.</p>
      <h2>Contact</h2><p>For privacy-related inquiries, contact {site.email || "the website administrator using a verified contact address once published"}.</p>
      <p className="muted-copy">This is a starter policy template, not legal advice. It must be reviewed and adapted to the applicable jurisdiction and actual data practices before publication.</p>
    </div></section></>;
}
