import { Scale, Landmark, Users, BriefcaseBusiness, FileText, ShieldCheck } from "lucide-react";
import type { PracticeArea } from "@/data/services";

export function PracticeIcon({ name }: { name: PracticeArea["icon"] }) {
  const common = { size: 24, strokeWidth: 1.5, "aria-hidden": true as const };
  switch (name) {
    case "scale": return <Scale {...common} />;
    case "landmark": return <Landmark {...common} />;
    case "users": return <Users {...common} />;
    case "briefcase": return <BriefcaseBusiness {...common} />;
    case "file": return <FileText {...common} />;
    default: return <ShieldCheck {...common} />;
  }
}
