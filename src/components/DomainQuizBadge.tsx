"use client";

import { useScoreHistory } from "@/hooks/useScoreHistory";

type Props = {
  certId: string;
  domainId: string;
};

export default function DomainQuizBadge({ certId, domainId }: Props) {
  const { getDomainStats } = useScoreHistory();
  const stats = getDomainStats(certId)[domainId];

  if (!stats) return null;

  const passing = stats.lastPct >= 70;
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
        passing
          ? "bg-green-50 text-green-700 border border-green-200"
          : "bg-orange-50 text-orange-700 border border-orange-200"
      }`}
    >
      {passing ? "✓" : "↺"} Last quiz: {stats.lastPct}%
      {stats.attempts > 1 && (
        <span className="font-normal opacity-60">({stats.attempts}×)</span>
      )}
    </span>
  );
}
