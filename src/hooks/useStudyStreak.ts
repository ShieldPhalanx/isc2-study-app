"use client";

import { useState, useEffect, useCallback } from "react";

type StreakData = {
  lastStudyDate: string;
  currentStreak: number;
  bestStreak: number;
};

const STORAGE_KEY = "study-streak";
const EMPTY: StreakData = { lastStudyDate: "", currentStreak: 0, bestStreak: 0 };

function load(): StreakData {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null") ?? EMPTY;
  } catch {
    return EMPTY;
  }
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function useStudyStreak() {
  const [data, setData] = useState<StreakData>(EMPTY);

  useEffect(() => {
    setData(load());
  }, []);

  const recordStudy = useCallback(() => {
    setData((prev) => {
      const today = todayStr();
      if (prev.lastStudyDate === today) return prev;
      const newStreak = prev.lastStudyDate === yesterdayStr() ? prev.currentStreak + 1 : 1;
      const next: StreakData = {
        lastStudyDate: today,
        currentStreak: newStreak,
        bestStreak: Math.max(newStreak, prev.bestStreak),
      };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  return { ...data, recordStudy };
}
