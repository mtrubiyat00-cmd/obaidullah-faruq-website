# Advocate Obaidullah Faruq Sawgat — Legal Portfolio

A premium midnight-navy and antique-gold responsive Next.js App Router website with editable profile data, service and article content, metadata, JSON-LD, sitemap, robots.txt, and an integration-ready contact form.

## Visual design
The refreshed theme uses layered midnight-navy backgrounds, antique-gold accents, low-opacity OFS watermarking, fine radial rays, architectural hairlines, textured section backgrounds, and restrained metallic details. The palette and effects are maintained in `src/app/globals.css`.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Before publishing
1. Edit `src/data/site.ts` and replace every clearly marked placeholder with verified information.
2. Add an authentic portrait at `public/images/advocate-portrait.jpg` (or change `portrait` in the config). Do not use a generated or stock image as the advocate's likeness.
3. Confirm actual practice areas in `src/data/services.ts`; the sample entries are intentionally marked as unconfirmed and are not shown as confirmed claims.
4. Add verified education, enrollment, career and professional highlights in `src/data/site.ts`.
5. Add lawyer-reviewed legal articles in `src/data/articles.ts`. Starter articles are intentionally drafts and are not published.
6. Set `NEXT_PUBLIC_SITE_URL` to the production canonical URL.
7. Configure the contact form using Resend environment variables below.
8. Review legal advertising, bar rules, privacy wording, and all claims before launch.

## Contact form setup (Resend)
Create a Resend account and verify a sending domain. Set these environment variables in `.env.local` and Vercel:
- `RESEND_API_KEY`
- `CONTACT_EMAIL` — inbox that should receive inquiries
- `CONTACT_FROM_EMAIL` — verified sender, e.g. `Website <website@your-domain.example>`

The API route validates fields and includes a honeypot. If Resend is not configured, the form returns a clear configuration error and does not pretend to deliver.

## GitHub
1. Create an empty GitHub repository.
2. Extract this project ZIP.
3. Upload the project contents (the `package.json` should be at repository root), or use:
```bash
git init
git add .
git commit -m "Initial legal portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Deploy to Vercel
1. Sign in to Vercel and choose **Add New → Project**.
2. Import the GitHub repository.
3. Keep the framework preset as **Next.js** and the default build command (`npm run build`).
4. Add the environment variables listed above under Project Settings → Environment Variables.
5. Deploy. Add your custom domain in Project Settings → Domains, then update `NEXT_PUBLIC_SITE_URL` and redeploy.

## Useful commands
```bash
npm install
npm run dev
npm run build
npm run start
```

## Content and SEO notes
- Main navigation intentionally contains exactly Home, Biography, Services and Contact Me.
- Legal Insights is a homepage section and has its own archive and article routes, not a main-nav item.
- Sample practice areas and article records are disabled by default until reviewed and confirmed.
- No academic credentials, bar details, address, telephone, testimonials, case results or years of experience are invented.
- Structured data only emits supplied identity/contact facts. Review the generated JSON-LD and metadata before publishing.
- Sitemap uses `NEXT_PUBLIC_SITE_URL`; set it before deployment.
