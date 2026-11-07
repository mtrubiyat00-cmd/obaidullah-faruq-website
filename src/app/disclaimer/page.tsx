import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(`Legal Disclaimer | ${site.name}`, `Important information about the legal content and use of this website.`, "/disclaimer");
export default function DisclaimerPage() {
  return <><section className="page-hero"><div className="container"><span className="eyebrow gold-text">IMPORTANT INFORMATION</span><h1>Legal Disclaimer</h1><p>Please read this information before relying on website content.</p></div></section>
    <section className="section"><div className="container narrow-content legal-copy">
      <h2>General information only</h2><p>The content on this website is provided for general informational and educational purposes. It is not legal advice and should not be relied upon as a substitute for advice about a specific legal matter.</p>
      <h2>No attorney-client relationship</h2><p>Viewing this website, contacting the website, or submitting an inquiry does not by itself create an attorney-client relationship. Such a relationship arises only if expressly agreed in accordance with applicable professional requirements.</p>
      <h2>No confidential submissions</h2><p>Please do not send confidential or sensitive information through the website contact form unless and until an appropriate professional relationship and secure communication method have been established.</p>
      <h2>Accuracy and jurisdiction</h2><p>Laws and procedures vary by jurisdiction and may change. Website content may not reflect the latest legal developments. No outcome or result is guaranteed.</p>
      <h2>Professional information</h2><p>Professional qualifications, practice areas and other credentials should be independently verified through the appropriate official sources.</p>
      <p className="muted-copy">This template must be reviewed for compliance with applicable bar association advertising and professional conduct rules before publication.</p>
    </div></section></>;
}
