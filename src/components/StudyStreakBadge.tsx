"use client";

import { useStudyStreak } from "@/hooks/useStudyStreak";

export default function StudyStreakBadge() {
  const { currentStreak, bestStreak } = useStudyStreak();

  if (currentStreak === 0) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
        <path d="M6 1C6 1 8 3.5 8 5.5C8 6.6 7.1 7.5 6 7.5C4.9 7.5 4 6.6 4 5.5C4 4.5 4.8 3.2 5 2.5C5.2 1.8 6 1 6 1ZM3 7C3 9.2 4.3 11 6 11C7.7 11 9 9.2 9 7C9 6 8.5 5.2 8.5 5.2C8.3 6.4 7.3 7 6 7C4.7 7 3.7 6 3.5 4.8C3.5 4.8 3 5.8 3 7Z"/>
      </svg>
      {currentStreak} day{currentStreak !== 1 ? "s" : ""}
      {bestStreak > currentStreak && (
        <span className="text-orange-400 font-normal">· best {bestStreak}</span>
      )}
    </span>
  );
}
