"use client";

import { useScoreHistory } from "@/hooks/useScoreHistory";

const colorMap: Record<string, string> = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
};

type Props = {
  certId: string;
  certColor: string;
};

export default function QuizScoreHistory({ certId, certColor }: Props) {
  const { getHistory } = useScoreHistory();
  const results = getHistory(certId);

  if (results.length === 0) return null;

  const best = Math.max(...results.map((r) => r.pct));
  const last = results[0].pct;
  const chronological = [...results].reverse();

  return (
    <div className="mt-4 border-t border-gray-100 pt-4">
      <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
        <span>Recent quiz scores</span>
        <span>
          Best&nbsp;<span className="font-semibold text-gray-600">{best}%</span>
          &nbsp;·&nbsp;Last&nbsp;<span className="font-semibold text-gray-600">{last}%</span>
        </span>
      </div>
      <div className="flex items-end gap-1" style={{ height: "28px" }}>
        {chronological.map((r, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${r.pct >= 70 ? colorMap[certColor] : "bg-gray-200"}`}
            style={{ height: `${Math.max(4, Math.round(r.pct * 0.26))}px` }}
            title={`${r.pct}% (${r.score}/${r.total})`}
          />
        ))}
      </div>
    </div>
  );
}
