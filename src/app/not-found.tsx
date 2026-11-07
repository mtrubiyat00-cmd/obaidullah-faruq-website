import Link from "next/link";
export default function NotFound() { return <section className="section"><div className="container not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>This page is not available.</h1><p>The page may have moved or the address may be incorrect.</p><Link href="/" className="button button-dark">Return home</Link></div></section>; }
