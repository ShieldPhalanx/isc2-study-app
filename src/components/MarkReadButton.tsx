"use client";

import { useProgress } from "@/hooks/useProgress";

const colorMap: Record<string, string> = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  orange: "bg-orange-600 hover:bg-orange-700",
};

type Props = {
  domainId: string;
  certColor: string;
};

export default function MarkReadButton({ domainId, certColor }: Props) {
  const { progress, toggle } = useProgress();
  const isRead = !!progress[domainId];

  return (
    <button
      onClick={() => toggle(domainId)}
      className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors mb-4 ${
        isRead
          ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
          : `text-white ${colorMap[certColor]}`
      }`}
    >
      {isRead ? "✓ Marked as Read — click to undo" : "Mark as Read"}
    </button>
  );
}
