"use client";

import { useCallback } from "react";

export type CardRecord = { streak: number; ts: number };

const STORAGE_KEY = "flashcard-progress";

export function loadFlashcardRecords(): Record<string, CardRecord> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function useFlashcardProgress() {
  const updateCard = useCallback((id: string, mastered: boolean) => {
    const records = loadFlashcardRecords();
    const current = records[id] ?? { streak: 0, ts: 0 };
    records[id] = {
      streak: mastered ? current.streak + 1 : 0,
      ts: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }, []);

  return { updateCard };
}
