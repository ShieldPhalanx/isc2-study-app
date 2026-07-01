"use client";

import { useState } from "react";

type Props = {
  term: string;
  definition: string;
  detail?: string;
  example?: string;
  color: string;
};

const dotMap: Record<string, string> = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
};

const accentMap: Record<string, string> = {
  blue: "border-blue-200 bg-blue-50 text-blue-800",
  green: "border-green-200 bg-green-50 text-green-800",
  purple: "border-purple-200 bg-purple-50 text-purple-800",
  orange: "border-orange-200 bg-orange-50 text-orange-800",
};

const chevronMap: Record<string, string> = {
  blue: "text-blue-500",
  green: "text-green-500",
  purple: "text-purple-500",
  orange: "text-orange-500",
};

export default function KeyTermCard({ term, definition, detail, example, color }: Props) {
  const [open, setOpen] = useState(false);
  const hasMore = !!(detail || example);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => hasMore && setOpen((o) => !o)}
        className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${
          hasMore ? "hover:bg-gray-50 cursor-pointer" : "cursor-default"
        }`}
        aria-expanded={hasMore ? open : undefined}
        disabled={!hasMore}
      >
        <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${dotMap[color]}`} />
        <div className="flex-1 min-w-0">
          <span className="text-sm font-semibold text-gray-900">{term}</span>
          <span className="text-gray-400 mx-2 text-sm">—</span>
          <span className="text-sm text-gray-600">{definition}</span>
        </div>
        {hasMore && (
          <span className={`shrink-0 mt-0.5 transition-transform duration-200 ${chevronMap[color]} ${open ? "rotate-180" : ""}`}>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )}
      </button>

      {hasMore && open && (
        <div className="px-4 pb-4 border-t border-gray-100">
          {detail && (
            <p className="text-sm text-gray-700 mt-3 leading-relaxed">{detail}</p>
          )}
          {example && (
            <div className={`mt-3 rounded-lg border px-3 py-2.5 ${accentMap[color]}`}>
              <p className="text-xs font-semibold uppercase tracking-wide mb-1 opacity-70">Real-world example</p>
              <p className="text-sm leading-relaxed">{example}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
