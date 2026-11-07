export const site = {
  name: "Advocate Obaidullah Faruq Sawgat",
  designation: "ADVOCATE",
  tagline: "Legal Knowledge. Professional Integrity. Commitment to Justice.",
  introduction:
    "A professional legal profile presenting verified background, areas of practice, and ways to make a professional inquiry.",
  biography:
    "This biography is a development placeholder. Add a lawyer-approved account of professional background, legal experience, approach to practice, and areas of interest before publication.",
  phone: "", // Add verified phone number, including country code.
  email: "", // Add verified professional email.
  chamberAddress: "", // Add verified chamber address.
  officeHours: "",
  domain: "https://your-domain.example",
  portrait: "/images/advocate-portrait-placeholder.svg",
  portraitAlt: "Portrait placeholder for Advocate Obaidullah Faruq Sawgat",
  social: [] as { label: string; url: string }[],
  education: [] as { title: string; institution: string; year?: string; detail?: string }[],
  career: [] as { title: string; institution: string; year?: string; detail?: string }[],
  highlights: [] as { category: string; title: string; detail?: string; date?: string }[]
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Biography", href: "/biography" },
  { label: "Services", href: "/services" },
  { label: "Contact Me", href: "/contact" }
];
