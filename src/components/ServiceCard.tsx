import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PracticeIcon } from "@/components/Icons";
import type { PracticeArea } from "@/data/services";
export default function ServiceCard({ service }: { service: PracticeArea }) {
  return <article className="service-card">
    <div className="service-icon"><PracticeIcon name={service.icon} /></div>
    <h3>{service.title}</h3><p>{service.description}</p>
    <Link href={`/services/${service.slug}`} className="text-link">Explore area <ArrowUpRight size={16} /></Link>
  </article>;
}
