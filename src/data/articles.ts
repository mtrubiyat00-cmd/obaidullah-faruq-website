export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string[];
  published: boolean;
};

// Draft records are excluded from all public routes until reviewed and approved
// by the advocate. Add lawyer-reviewed educational content to publish articles.
export const articles: Article[] = [
  {
    slug: "understanding-civil-litigation",
    title: "Understanding Civil Litigation",
    date: "2026-01-01",
    category: "Civil Law",
    summary: "A draft introduction to the general stages of a civil dispute.",
    content: [
      "DRAFT — This sample content is not legal advice and is not approved for publication.",
      "Replace this draft with original educational material reviewed and approved by the advocate. Explain the topic in the correct jurisdiction and cite applicable primary legal sources.",
      "Include a clear publication date, accurate author details, and a disclaimer appropriate to the jurisdiction."
    ],
    published: false
  },
  {
    slug: "preparing-for-a-legal-consultation",
    title: "Preparing for a Legal Consultation",
    date: "2026-01-01",
    category: "Legal Guidance",
    summary: "A draft checklist for preparing questions and relevant background.",
    content: [
      "DRAFT — This sample content is not legal advice and is not approved for publication.",
      "Replace this draft with lawyer-reviewed educational information. Avoid inviting visitors to submit confidential facts through an unsecured website form."
    ],
    published: false
  },
  {
    slug: "the-importance-of-written-agreements",
    title: "The Importance of Written Agreements",
    date: "2026-01-01",
    category: "Contracts",
    summary: "A draft overview of why clear written terms matter.",
    content: [
      "DRAFT — This sample content is not legal advice and is not approved for publication.",
      "Replace this draft with lawyer-reviewed educational material that reflects the relevant jurisdiction."
    ],
    published: false
  }
];
export const publishedArticles = articles.filter((article) => article.published);
