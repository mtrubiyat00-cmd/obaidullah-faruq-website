import Link from "next/link";
import { site, navItems } from "@/data/site";
export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-about">
        <div className="footer-monogram">OFS</div>
        <h2>{site.name}</h2><p>Professional legal profile and information.</p>
        <span className="eyebrow gold-text">ADVOCATE</span>
      </div>
      <div><h3>Explore</h3><ul>{navItems.map(x => <li key={x.href}><Link href={x.href}>{x.label}</Link></li>)}
        <li><Link href="/legal-insights">Legal Insights</Link></li></ul></div>
      <div><h3>Contact</h3><ul>
        <li>{site.phone ? <a href={`tel:${site.phone}`}>{site.phone}</a> : "Phone: to be confirmed"}</li>
        <li>{site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : "Email: to be confirmed"}</li>
        <li>{site.chamberAddress || "Chamber address: to be confirmed"}</li>
      </ul></div>
      <div><h3>Information</h3><ul><li><Link href="/privacy-policy">Privacy Policy</Link></li><li><Link href="/disclaimer">Legal Disclaimer</Link></li></ul></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span><span>Professional information only.</span></div>
  </footer>;
}
