"use client";

import { useState, useEffect, useCallback } from "react";

export type QuizResult = {
  certId: string;
  score: number;
  total: number;
  pct: number;
  ts: number;
  examMode?: boolean;
  domainScores?: Record<string, { score: number; total: number }>;
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

  // Returns the most-recent quiz score per domain for a given cert.
  // history is stored newest-first, so the first occurrence of each domainId
  // is always the most recent result.
  const getDomainStats = useCallback(
    (certId: string): Record<string, { lastPct: number; attempts: number }> => {
      const certHistory = history.filter((r) => r.certId === certId);
      const stats: Record<string, { lastPct: number; attempts: number }> = {};
      for (const result of certHistory) {
        for (const [domainId, ds] of Object.entries(result.domainScores ?? {})) {
          const pct = Math.round((ds.score / ds.total) * 100);
          if (!stats[domainId]) {
            stats[domainId] = { lastPct: pct, attempts: 1 };
          } else {
            stats[domainId].attempts++;
          }
        }
      }
      return stats;
    },
    [history]
  );

  return { addResult, getHistory, getDomainStats };
}
