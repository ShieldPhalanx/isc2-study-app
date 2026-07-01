"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Certification } from "@/data/certifications";
import { Question } from "@/data/questions";
import { loadFlashcardRecords, useFlashcardProgress } from "@/hooks/useFlashcardProgress";

type Props = {
  cert: Certification;
  questions: Question[];
};

type Rating = "mastered" | "review";
type Phase = "cards" | "summary";

type CardState = {
  question: Question;
  rating: Rating | null;
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  orange: "bg-orange-600 hover:bg-orange-700",
};

const borderColorMap: Record<string, string> = {
  blue: "border-blue-300",
  green: "border-green-300",
  purple: "border-purple-300",
  orange: "border-orange-300",
};

const textColorMap: Record<string, string> = {
  blue: "text-blue-600",
  green: "text-green-600",
  purple: "text-purple-600",
  orange: "text-orange-600",
};

const bgLightMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700",
  green: "bg-green-50 text-green-700",
  purple: "bg-purple-50 text-purple-700",
  orange: "bg-orange-50 text-orange-700",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Weak cards (streak < 2) appear first; mastered cards (streak ≥ 2) at the back.
// Within each tier, cards are shuffled so the order varies each session.
function prioritizedDeck(questions: Question[]): CardState[] {
  const records = loadFlashcardRecords();
  const weak = shuffle(questions.filter((q) => (records[q.id]?.streak ?? 0) < 2));
  const strong = shuffle(questions.filter((q) => (records[q.id]?.streak ?? 0) >= 2));
  return [...weak, ...strong].map((q) => ({ question: q, rating: null }));
}

export default function StudyClient({ cert, questions }: Props) {
  const { updateCard } = useFlashcardProgress();

  const [phase, setPhase] = useState<Phase>("cards");
  const [cards, setCards] = useState<CardState[]>(() => prioritizedDeck(questions));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [flaggedIds, setFlaggedIds] = useState<Set<string>>(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(`quiz-flags-${cert.id}`) ?? "[]");
      return new Set<string>(Array.isArray(stored) ? stored : []);
    } catch { return new Set<string>(); }
  });

  const current = cards[index];
  const domain = cert.domains.find((d) => d.id === current.question.domainId);
  const masteredCount = cards.filter((c) => c.rating === "mastered").length;
  const reviewCount = cards.filter((c) => c.rating === "review").length;
  const totalCount = cards.length;

  // Persistent mastery: streak ≥ 2
  const persistentMastered = (() => {
    const records = loadFlashcardRecords();
    return questions.filter((q) => (records[q.id]?.streak ?? 0) >= 2).length;
  })();

  // Streak badge for current card
  const currentStreak = (() => {
    const records = loadFlashcardRecords();
    return records[current.question.id]?.streak ?? 0;
  })();

  function toggleFlag(questionId: string) {
    setFlaggedIds((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) next.delete(questionId);
      else next.add(questionId);
      try {
        localStorage.setItem(`quiz-flags-${cert.id}`, JSON.stringify([...next]));
      } catch {}
      return next;
    });
  }

  function rate(rating: Rating) {
    updateCard(current.question.id, rating === "mastered");
    const newCards = [...cards];
    newCards[index] = { ...newCards[index], rating };
    setCards(newCards);
    if (index + 1 >= cards.length) {
      setPhase("summary");
    } else {
      setIndex(index + 1);
      setFlipped(false);
    }
  }

  const rateRef = useRef(rate);
  useEffect(() => { rateRef.current = rate; });

  function reviewMissed() {
    const missed = cards
      .filter((c) => c.rating === "review")
      .map((c) => ({ question: c.question, rating: null as Rating | null }));
    setCards(shuffle(missed));
    setIndex(0);
    setFlipped(false);
    setPhase("cards");
  }

  function restart() {
    setCards(prioritizedDeck(questions));
    setIndex(0);
    setFlipped(false);
    setPhase("cards");
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (phase !== "cards") return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (!flipped) setFlipped(true);
      } else if (flipped) {
        if (e.key === "ArrowRight" || e.key === "1") rateRef.current("mastered");
        if (e.key === "ArrowLeft" || e.key === "2") rateRef.current("review");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, flipped]);

  // ── Summary screen ────────────────────────────────────────────────────────
  if (phase === "summary") {
    const pct = Math.round((masteredCount / totalCount) * 100);
    const allTimePct = Math.round((persistentMastered / questions.length) * 100);

    return (
      <main id="main-content" className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-10 max-w-md w-full text-center">
          <p className="text-5xl font-bold text-gray-900 mb-1">{pct}%</p>
          <p className="text-gray-500 mb-2">{masteredCount} of {totalCount} mastered this session</p>

          {/* Persistent mastery indicator */}
          <div className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full mb-6 ${bgLightMap[cert.color]}`}>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
              <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5l-2.9 1.5.6-3.2L1.2 4.5l3.3-.5z"/>
            </svg>
            {persistentMastered}/{questions.length} mastered all-time ({allTimePct}%)
          </div>

          {reviewCount > 0 ? (
            <p className="text-sm text-orange-600 mb-8">
              {reviewCount} card{reviewCount !== 1 ? "s" : ""} marked for review
            </p>
          ) : (
            <p className={`text-sm font-semibold mb-8 ${textColorMap[cert.color]}`}>
              All cards mastered this session!
            </p>
          )}

          <div className="flex flex-col gap-3">
            {reviewCount > 0 && (
              <button
                onClick={reviewMissed}
                className={`w-full py-3 rounded-lg text-white font-medium text-sm ${colorMap[cert.color]}`}
              >
                Review {reviewCount} missed card{reviewCount !== 1 ? "s" : ""} →
              </button>
            )}
            {flaggedIds.size > 0 && (
              <Link
                href={`/cert/${cert.id}/quiz?domain=all`}
                onClick={() => {
                  // Navigate to quiz — flagged questions are accessible via quiz setup
                }}
                className="w-full py-3 rounded-lg text-center border-2 border-yellow-300 bg-yellow-50 text-yellow-800 font-medium text-sm hover:bg-yellow-100 transition-colors"
              >
                ⚑ {flaggedIds.size} flagged — practice in quiz →
              </Link>
            )}
            <button
              onClick={restart}
              className="w-full py-3 rounded-lg border border-gray-200 font-medium text-sm text-gray-700 hover:border-gray-400"
            >
              Restart (weak cards first)
            </button>
            <Link
              href={`/cert/${cert.id}`}
              className="w-full py-3 rounded-lg text-center text-sm text-gray-500 hover:text-gray-800"
            >
              Back to {cert.name}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── Cards screen ──────────────────────────────────────────────────────────
  return (
    <main id="main-content" className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link href={`/cert/${cert.id}`} className="text-sm text-gray-500 hover:text-gray-700">
            ← {cert.name}
          </Link>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            {masteredCount > 0 && (
              <span className={`font-medium ${textColorMap[cert.color]}`}>
                {masteredCount} mastered
              </span>
            )}
            <span>{index + 1} / {totalCount}</span>
          </div>
        </div>

        <div
          role="progressbar"
          aria-valuenow={index + 1}
          aria-valuemin={1}
          aria-valuemax={totalCount}
          aria-label={`Card ${index + 1} of ${totalCount}`}
          className="w-full bg-gray-200 rounded-full h-1.5 mb-8"
        >
          <div
            className={`h-1.5 rounded-full transition-all ${colorMap[cert.color].split(" ")[0]}`}
            style={{ width: `${((index + 1) / totalCount) * 100}%` }}
          />
        </div>

        {/* 3D flip card */}
        <div
          className="flashcard-scene mb-4 cursor-pointer"
          onClick={() => { if (!flipped) setFlipped(true); }}
          role="button"
          tabIndex={flipped ? -1 : 0}
          aria-label="Flip card to reveal answer"
          onKeyDown={(e) => {
            if ((e.key === " " || e.key === "Enter") && !flipped) {
              e.preventDefault();
              setFlipped(true);
            }
          }}
        >
          <div className={`flashcard ${flipped ? "flashcard--flipped" : ""}`}>
            {/* Front face */}
            <div className="flashcard-face flashcard-face--front bg-white rounded-2xl border-2 border-gray-200 p-8 flex flex-col items-center justify-center text-center hover:border-gray-300 transition-colors relative">
              <button
                onClick={(e) => { e.stopPropagation(); toggleFlag(current.question.id); }}
                aria-label={flaggedIds.has(current.question.id) ? "Remove flag" : "Flag for review"}
                className={`absolute top-4 right-4 text-base transition-colors ${
                  flaggedIds.has(current.question.id) ? "text-yellow-500 hover:text-yellow-400" : "text-gray-200 hover:text-yellow-400"
                }`}
              >
                ⚑
              </button>
              {currentStreak >= 2 && (
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full mb-3 ${bgLightMap[cert.color]}`}>
                  Mastered ×{currentStreak}
                </span>
              )}
              <p className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wide">
                {domain?.name}
              </p>
              <p className="text-lg font-semibold text-gray-900">{current.question.question}</p>
              <p className="text-xs text-gray-300 mt-6">Tap or press Space to reveal</p>
            </div>
            {/* Back face */}
            <div className={`flashcard-face flashcard-face--back bg-white rounded-2xl border-2 ${borderColorMap[cert.color]} p-8 flex flex-col items-center justify-center text-center`}>
              <p className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-wide">
                Answer + Explanation
              </p>
              <p className="text-base font-semibold text-green-700 mb-3">
                {current.question.options[current.question.correctIndex]}
              </p>
              <p className="text-sm text-gray-600">{current.question.explanation}</p>
            </div>
          </div>
        </div>

        {flipped ? (
          <div className="flex gap-3 mb-3">
            <button
              onClick={() => rate("review")}
              className="flex-1 py-3 rounded-xl bg-orange-50 border-2 border-orange-200 text-orange-700 font-semibold text-sm hover:bg-orange-100 transition-colors"
            >
              ↺ Review again
              <span className="hidden md:block text-xs font-normal opacity-60 mt-0.5">← or press 2</span>
            </button>
            <button
              onClick={() => rate("mastered")}
              className="flex-1 py-3 rounded-xl bg-green-50 border-2 border-green-200 text-green-700 font-semibold text-sm hover:bg-green-100 transition-colors"
            >
              ✓ Got it
              <span className="hidden md:block text-xs font-normal opacity-60 mt-0.5">→ or press 1</span>
            </button>
          </div>
        ) : (
          <p className="text-center text-xs text-gray-400 mb-3">
            Tap card or press Space to reveal the answer
          </p>
        )}
      </div>
    </main>
  );
}
