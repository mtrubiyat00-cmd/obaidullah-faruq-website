 "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navItems, site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const phone = site.phone.trim();
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand-mark">OFS</span>
          <span className="brand-name"><strong>Obaidullah Faruq Sawgat</strong><small>ADVOCATE</small></span>
        </Link>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
              className={pathname === item.href ? "active" : ""}>{item.label}</Link>
          ))}
        </nav>
        <div className="nav-contact">
          {phone ? <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}><Phone size={16} />{phone}</a>
            : <span className="phone-placeholder">Phone number to be added</span>}
        </div>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
          onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
