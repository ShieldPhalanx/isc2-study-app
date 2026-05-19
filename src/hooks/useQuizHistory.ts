"use client";

import { useCallback } from "react";

export type QuestionResult = { questionId: string; domainId: string; correct: boolean };
export type QuizAttempt = { certId: string; date: string; results: QuestionResult[] };

const KEY = "quiz-history";
const MAX_ATTEMPTS = 30;

function load(): QuizAttempt[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function useQuizHistory() {
  const saveAttempt = useCallback((certId: string, results: QuestionResult[]) => {
    if (results.length === 0) return;
    const history = load();
    const attempt: QuizAttempt = { certId, date: new Date().toISOString(), results };
    localStorage.setItem(KEY, JSON.stringify([attempt, ...history].slice(0, MAX_ATTEMPTS)));
  }, []);

  const getDomainStats = useCallback((certId: string, domainId: string) => {
    const relevant = load()
      .filter((a) => a.certId === certId)
      .flatMap((a) => a.results)
      .filter((r) => r.domainId === domainId);
    if (relevant.length === 0) return null;
    const correct = relevant.filter((r) => r.correct).length;
    return { correct, total: relevant.length, pct: Math.round((correct / relevant.length) * 100) };
  }, []);

  const getAllDomainStats = useCallback((certId: string, domainIds: string[]) => {
    const history = load().filter((a) => a.certId === certId);
    if (history.length === 0) return null;
    const allResults = history.flatMap((a) => a.results);
    return Object.fromEntries(
      domainIds.map((id) => {
        const relevant = allResults.filter((r) => r.domainId === id);
        if (relevant.length === 0) return [id, null];
        const correct = relevant.filter((r) => r.correct).length;
        return [id, { correct, total: relevant.length, pct: Math.round((correct / relevant.length) * 100) }];
      })
    ) as Record<string, { correct: number; total: number; pct: number } | null>;
  }, []);

  return { saveAttempt, getDomainStats, getAllDomainStats };
}
