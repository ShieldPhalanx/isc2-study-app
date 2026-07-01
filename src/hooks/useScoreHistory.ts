"use client";

import { useState, useEffect, useCallback } from "react";

export type QuizResult = {
  certId: string;
  score: number;
  total: number;
  pct: number;
  ts: number;
};

const STORAGE_KEY = "quiz-score-history";
const MAX_PER_CERT = 8;

function load(): QuizResult[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function useScoreHistory() {
  const [history, setHistory] = useState<QuizResult[]>([]);

  useEffect(() => {
    setHistory(load());
  }, []);

  const addResult = useCallback((result: QuizResult) => {
    setHistory((prev) => {
      const all = [result, ...prev];
      const seen: Record<string, number> = {};
      const next = all.filter((r) => {
        seen[r.certId] = (seen[r.certId] ?? 0) + 1;
        return seen[r.certId] <= MAX_PER_CERT;
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const getHistory = useCallback(
    (certId: string) => history.filter((r) => r.certId === certId),
    [history]
  );

  return { addResult, getHistory };
}
