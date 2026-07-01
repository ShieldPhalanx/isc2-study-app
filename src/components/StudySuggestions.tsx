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
      <div className="flex flex-col gap-2">
        {weak.map((d) => {
          const pct = domainStats[d.id].lastPct;
          return (
            <div key={d.id} className="flex items-center gap-2">
              <Link
                href={`/cert/${cert.id}/learn/${d.id}`}
                className="flex-1 inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-orange-200 text-orange-700 px-3 py-1.5 rounded-lg hover:border-orange-400 transition-colors"
              >
                <span className="font-bold text-red-500">{pct}%</span>
                <span className="text-orange-300">·</span>
                <span className="truncate">{d.name}</span>
              </Link>
              <Link
                href={`/cert/${cert.id}/quiz?domain=${d.id}`}
                className="flex-shrink-0 text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200 px-2.5 py-1.5 rounded-lg hover:bg-orange-200 transition-colors"
                aria-label={`Retry quiz for ${d.name}`}
              >
                ↻ Quiz
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
