"use client";

import Link from "next/link";
import { useProgress } from "@/hooks/useProgress";
import type { Certification, Domain } from "@/data/certifications";
import type { DomainStudyContent } from "@/data/studyContent";

const colorMap: Record<string, string> = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600",
  orange: "bg-orange-600",
};

const ringMap: Record<string, string> = {
  blue: "ring-blue-200 hover:ring-blue-400",
  green: "ring-green-200 hover:ring-green-400",
  purple: "ring-purple-200 hover:ring-purple-400",
  orange: "ring-orange-200 hover:ring-orange-400",
};

const checkMap: Record<string, string> = {
  blue: "text-blue-600",
  green: "text-green-600",
  purple: "text-purple-600",
  orange: "text-orange-600",
};

type Props = {
  cert: Certification;
  domains: (Domain & { qCount: number })[];
  contentMap: Record<string, DomainStudyContent>;
};

export default function DomainProgressList({ cert, domains, contentMap }: Props) {
  const { progress } = useProgress();
  const readCount = domains.filter((d) => progress[d.id]).length;

  return (
    <>
      {/* Progress summary */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
          <span>{readCount} of {domains.length} domains studied</span>
          <span>{Math.round((readCount / domains.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className={`h-1.5 rounded-full transition-all ${colorMap[cert.color]}`}
            style={{ width: `${(readCount / domains.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Domain list */}
      <div className="space-y-3">
        {domains.map((domain, i) => {
          const content = contentMap[domain.id];
          const isRead = !!progress[domain.id];

          return (
            <Link
              key={domain.id}
              href={`/cert/${cert.id}/learn/${domain.id}`}
              className={`flex items-start justify-between bg-white border border-gray-200 ring-2 ring-transparent rounded-xl px-5 py-4 transition-all ${ringMap[cert.color]}`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold text-white px-2 py-0.5 rounded ${colorMap[cert.color]}`}>
                    D{i + 1}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">{domain.name}</span>
                </div>
                {content && (
                  <p className="text-xs text-gray-500 line-clamp-2 mt-1">{content.overview}</p>
                )}
              </div>
              <div className="ml-4 text-right shrink-0 flex flex-col items-end gap-1">
                {isRead ? (
                  <span className={`text-lg font-bold ${checkMap[cert.color]}`}>✓</span>
                ) : (
                  <span className="text-lg text-gray-200">○</span>
                )}
                <p className="text-xs text-gray-400">{domain.weight}%</p>
                <p className="text-xs text-gray-400">{domain.qCount} q</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
