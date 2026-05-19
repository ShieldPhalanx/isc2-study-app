"use client";

import Link from "next/link";
import { useQuizHistory } from "@/hooks/useQuizHistory";
import type { Certification } from "@/data/certifications";

type Props = {
  cert: Certification;
};

const barColor = (pct: number) => {
  if (pct >= 80) return "bg-green-500";
  if (pct >= 65) return "bg-yellow-400";
  return "bg-red-400";
};

const labelColor = (pct: number) => {
  if (pct >= 80) return "text-green-700 bg-green-50";
  if (pct >= 65) return "text-yellow-700 bg-yellow-50";
  return "text-red-700 bg-red-50";
};

export default function DomainQuizStats({ cert }: Props) {
  const { getAllDomainStats } = useQuizHistory();
  const domainIds = cert.domains.map((d) => d.id);
  const stats = getAllDomainStats(cert.id, domainIds);

  if (!stats || Object.values(stats).every((v) => v === null)) return null;

  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold text-gray-800 mb-3">Quiz Performance</h2>
      <div className="space-y-2">
        {cert.domains.map((domain, i) => {
          const s = stats[domain.id];
          if (!s) return null;
          return (
            <div key={domain.id} className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs font-medium text-gray-400 shrink-0">D{i + 1}</span>
                  <span className="text-sm font-medium text-gray-700 truncate">{domain.name}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${labelColor(s.pct)}`}>
                    {s.pct}%
                  </span>
                  <Link
                    href={`/cert/${cert.id}/quiz?domain=${domain.id}`}
                    className="text-xs text-gray-400 hover:text-gray-700 underline"
                  >
                    drill
                  </Link>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1">
                <div
                  className={`h-1 rounded-full transition-all ${barColor(s.pct)}`}
                  style={{ width: `${s.pct}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">{s.correct}/{s.total} correct across all attempts</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
