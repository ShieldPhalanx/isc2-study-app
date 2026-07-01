"use client";

import { useScoreHistory } from "@/hooks/useScoreHistory";

const textMap: Record<string, string> = {
  blue: "text-blue-600",
  green: "text-green-600",
  purple: "text-purple-600",
  orange: "text-orange-600",
};

type Props = {
  certId: string;
  certColor: string;
};

export default function CertLastScore({ certId, certColor }: Props) {
  const { getHistory } = useScoreHistory();
  const results = getHistory(certId);

  if (results.length === 0) return null;

  const last = results[0];
  const best = Math.max(...results.map((r) => r.pct));
  const passing = last.pct >= 70;

  return (
    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
      <span>
        Last quiz:{" "}
        <span className={`font-semibold ${passing ? textMap[certColor] : "text-red-500"}`}>
          {last.pct}%
        </span>
      </span>
      {best > last.pct && (
        <span className="text-gray-400">· Best: {best}%</span>
      )}
    </div>
  );
}
