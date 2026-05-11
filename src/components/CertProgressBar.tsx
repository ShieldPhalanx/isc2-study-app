"use client";

import { useProgress } from "@/hooks/useProgress";

const colorMap: Record<string, string> = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600",
  orange: "bg-orange-600",
};

type Props = {
  certColor: string;
  domainIds: string[];
};

export default function CertProgressBar({ certColor, domainIds }: Props) {
  const { progress } = useProgress();
  const readCount = domainIds.filter((id) => progress[id]).length;
  const total = domainIds.length;
  const pct = Math.round((readCount / total) * 100);

  if (readCount === 0) return null;

  return (
    <div className="mt-3">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>{readCount}/{total} domains studied</span>
        <span>{pct}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1">
        <div
          className={`h-1 rounded-full transition-all ${colorMap[certColor]}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
