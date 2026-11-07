export type PracticeArea = {
  slug: string;
  title: string;
  description: string;
  detail: string;
  icon: "scale" | "landmark" | "users" | "briefcase" | "file" | "shield";
  confirmed: boolean;
};

// Illustrative categories only. Keep confirmed:false until the advocate verifies
// that each area accurately reflects their practice and professional authorization.
export const services: PracticeArea[] = [
  { slug: "civil-law", title: "Civil Law", description: "Civil disputes and related legal matters.", detail: "This is a sample description. Replace it with an accurate, lawyer-approved explanation of the specific civil-law services offered.", icon: "scale", confirmed: false },
  { slug: "criminal-law", title: "Criminal Law", description: "Criminal proceedings and related matters.", detail: "This is a sample description. Confirm the exact services, court coverage and professional authorization before publication.", icon: "shield", confirmed: false },
  { slug: "property-law", title: "Property and Land Law", description: "Property, land and documentation matters.", detail: "This is a sample description. Replace it with a verified scope of property and land-law services.", icon: "landmark", confirmed: false },
  { slug: "family-law", title: "Family Law", description: "Family-related legal matters.", detail: "This is a sample description. Confirm the services actually offered before publication.", icon: "users", confirmed: false },
  { slug: "corporate-commercial", title: "Corporate and Commercial Law", description: "Business and commercial legal matters.", detail: "This is a sample description. Confirm the services actually offered before publication.", icon: "briefcase", confirmed: false },
  { slug: "contractual-matters", title: "Contractual Matters", description: "Contract review, drafting and disputes.", detail: "This is a sample description. Confirm the services actually offered before publication.", icon: "file", confirmed: false }
];
export const publishedServices = services.filter((service) => service.confirmed);
