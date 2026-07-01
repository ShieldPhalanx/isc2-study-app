"use client";

import Link from "next/link";
import { useScoreHistory } from "@/hooks/useScoreHistory";
import type { Certification } from "@/data/certifications";

type Props = {
  cert: Certification;
};

export default function StudySuggestions({ cert }: Props) {
  const { getDomainStats } = useScoreHistory();
  const domainStats = getDomainStats(cert.id);

  const weak = cert.domains.filter(
    (d) => domainStats[d.id] && domainStats[d.id].lastPct < 70
  );

  if (weak.length === 0) return null;

  return (
    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
      <p className="text-sm font-semibold text-orange-800 mb-2">
        Focus areas — scored below 70% recently
      </p>
      <div className="flex flex-wrap gap-2">
        {weak.map((d) => {
          const pct = domainStats[d.id].lastPct;
          return (
            <Link
              key={d.id}
              href={`/cert/${cert.id}/learn/${d.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-orange-200 text-orange-700 px-3 py-1.5 rounded-lg hover:border-orange-400 transition-colors"
            >
              <span className="font-bold">{pct}%</span>
              <span className="text-orange-500">·</span>
              {d.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
