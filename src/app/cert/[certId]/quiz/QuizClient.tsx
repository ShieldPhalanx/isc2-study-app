"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Certification, Domain } from "@/data/certifications";
import { Question } from "@/data/questions";
import { useScoreHistory } from "@/hooks/useScoreHistory";

type Props = {
  cert: Certification;
  questions: Question[];
  initialDomain?: string;
};

type Phase = "setup" | "quiz" | "done";

type ShuffledQuestion = Question & {
  displayOptions: string[];
  displayCorrectIndex: number;
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  orange: "bg-orange-600 hover:bg-orange-700",
};

const checkMap: Record<string, string> = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600",
  orange: "bg-orange-600",
};

const bgLightMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-200 text-blue-700",
  green: "bg-green-50 border-green-200 text-green-700",
  purple: "bg-purple-50 border-purple-200 text-purple-700",
  orange: "bg-orange-50 border-orange-200 text-orange-700",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function withShuffledOptions(pool: Question[]): ShuffledQuestion[] {
  return shuffle(pool).map((q) => {
    const order = shuffle([0, 1, 2, 3].slice(0, q.options.length));
    return {
      ...q,
      displayOptions: order.map((i) => q.options[i]),
      displayCorrectIndex: order.indexOf(q.correctIndex),
    };
  });
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function QuizClient({ cert, questions, initialDomain }: Props) {
  const { addResult } = useScoreHistory();

  const domainsWithQuestions: Domain[] = cert.domains.filter((d) =>
    questions.some((q) => q.domainId === d.id)
  );

  const [phase, setPhase] = useState<Phase>("setup");
  const [examMode, setExamMode] = useState(false);
  const [selectedDomainIds, setSelectedDomainIds] = useState<Set<string>>(() => {
    if (initialDomain && questions.some((q) => q.domainId === initialDomain)) {
      return new Set([initialDomain]);
    }
    return new Set(domainsWithQuestions.map((d) => d.id));
  });
  const [shuffled, setShuffled] = useState<ShuffledQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [wrongIds, setWrongIds] = useState<Set<string>>(new Set());
  const [showMistakes, setShowMistakes] = useState(false);
  const [domainScores, setDomainScores] = useState<Record<string, { score: number; total: number }>>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isExamSession, setIsExamSession] = useState(false);

  // Countdown timer for exam mode
  useEffect(() => {
    if (timeLeft === null || phase !== "quiz") return;
    if (timeLeft <= 0) {
      finishQuiz(score, domainScores);
      return;
    }
    const id = setTimeout(() => setTimeLeft((t) => Math.max(0, (t ?? 0) - 1)), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, phase]); // eslint-disable-line react-hooks/exhaustive-deps

  function finishQuiz(
    finalScore: number,
    finalDomainScores: Record<string, { score: number; total: number }>
  ) {
    addResult({
      certId: cert.id,
      score: finalScore,
      total: shuffled.length,
      pct: Math.round((finalScore / shuffled.length) * 100),
      ts: Date.now(),
      examMode: isExamSession,
      domainScores: finalDomainScores,
    });
    setPhase("done");
  }

  function toggleDomain(domainId: string) {
    setSelectedDomainIds((prev) => {
      const next = new Set(prev);
      if (next.has(domainId)) next.delete(domainId);
      else next.add(domainId);
      return next;
    });
  }

  function toggleAll() {
    if (selectedDomainIds.size === domainsWithQuestions.length) {
      setSelectedDomainIds(new Set());
    } else {
      setSelectedDomainIds(new Set(domainsWithQuestions.map((d) => d.id)));
    }
  }

  function startQuiz(questionsToUse?: Question[]) {
    const pool = questionsToUse ?? questions.filter((q) => selectedDomainIds.has(q.domainId));
    const deck = withShuffledOptions(pool);
    setShuffled(deck);
    setIndex(0);
    setSelected(null);
    setScore(0);
    setWrongIds(new Set());
    setDomainScores({});
    setShowMistakes(false);
    setIsExamSession(examMode && !questionsToUse);
    if (examMode && !questionsToUse) {
      setTimeLeft(Math.ceil(pool.length * 90)); // 90 s per question
    } else {
      setTimeLeft(null);
    }
    setPhase("quiz");
  }

  function choose(optIndex: number) {
    if (selected !== null) return;
    setSelected(optIndex);
    const current = shuffled[index];
    const correct = optIndex === current.displayCorrectIndex;
    if (correct) {
      setScore((s) => s + 1);
    } else {
      setWrongIds((prev) => new Set(prev).add(current.id));
    }
    setDomainScores((prev) => {
      const d = prev[current.domainId] ?? { score: 0, total: 0 };
      return {
        ...prev,
        [current.domainId]: { score: d.score + (correct ? 1 : 0), total: d.total + 1 },
      };
    });
  }

  function next() {
    if (index + 1 >= shuffled.length) {
      // score/domainScores are already updated because choose() ran first (separate click)
      finishQuiz(score, domainScores);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  function restart() {
    setPhase("setup");
    setSelectedDomainIds(new Set(domainsWithQuestions.map((d) => d.id)));
    setWrongIds(new Set());
    setShowMistakes(false);
    setTimeLeft(null);
  }

  const chooseRef = useRef(choose);
  const nextRef = useRef(next);
  useEffect(() => { chooseRef.current = choose; });
  useEffect(() => { nextRef.current = next; });

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (phase !== "quiz") return;
      if (selected === null) {
        const pick = ["1", "2", "3", "4"].indexOf(e.key);
        if (pick !== -1) { e.preventDefault(); chooseRef.current(pick); }
      } else {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); nextRef.current(); }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, selected]);

  // ── Setup screen ──────────────────────────────────────────────────────────
  if (phase === "setup") {
    const selectedCount = questions.filter((q) => selectedDomainIds.has(q.domainId)).length;
    const allSelected = selectedDomainIds.size === domainsWithQuestions.length;

    return (
      <main id="main-content" className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-lg mx-auto">
          <Link href={`/cert/${cert.id}`} className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-block">
            ← {cert.name}
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Practice Quiz</h1>
          <p className="text-sm text-gray-500 mb-6">Choose domains and mode for this session.</p>

          {/* Exam mode toggle */}
          <label
            className={`flex items-start gap-3 p-4 rounded-xl border-2 mb-4 cursor-pointer transition-colors ${
              examMode ? `${bgLightMap[cert.color]} border-current` : "border-gray-200 hover:border-gray-300 bg-white"
            }`}
          >
            <input
              type="checkbox"
              className="sr-only"
              checked={examMode}
              onChange={(e) => setExamMode(e.target.checked)}
            />
            <span
              aria-hidden="true"
              className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
                examMode ? `${checkMap[cert.color]} border-transparent` : "border-gray-300 bg-white"
              }`}
            >
              {examMode && (
                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-800">Exam simulation mode</p>
              <p className="text-xs text-gray-500 mt-0.5">
                No feedback until the end · 90 s per question countdown · domain breakdown in results
              </p>
            </div>
          </label>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-700">Domains</span>
              <button
                onClick={toggleAll}
                className="text-xs font-medium text-gray-500 hover:text-gray-800 underline underline-offset-2"
              >
                {allSelected ? "Deselect all" : "Select all"}
              </button>
            </div>

            <div className="space-y-2">
              {domainsWithQuestions.map((domain) => {
                const qCount = questions.filter((q) => q.domainId === domain.id).length;
                const checked = selectedDomainIds.has(domain.id);
                const domainIndex = cert.domains.findIndex((d) => d.id === domain.id);
                return (
                  <label
                    key={domain.id}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                      checked ? "border-gray-300 bg-gray-50" : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <span className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      checked ? `${checkMap[cert.color]} border-transparent` : "border-gray-300 bg-white"
                    }`}>
                      {checked && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggleDomain(domain.id)} />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium text-gray-400 mr-1.5">D{domainIndex + 1}</span>
                      <span className="text-sm font-medium text-gray-800">{domain.name}</span>
                    </div>
                    <span className="text-xs text-gray-400 flex-shrink-0">{qCount}q</span>
                  </label>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => startQuiz()}
            disabled={selectedCount === 0}
            className={`w-full py-3 rounded-lg text-white font-medium text-sm transition-opacity ${colorMap[cert.color]} disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            {selectedCount === 0
              ? "Select at least one domain"
              : examMode
              ? `Start Exam · ${selectedCount}q · ${formatTime(selectedCount * 90)}`
              : `Start Quiz · ${selectedCount} question${selectedCount !== 1 ? "s" : ""}`}
          </button>
        </div>
      </main>
    );
  }

  // ── Results screen ────────────────────────────────────────────────────────
  if (phase === "done") {
    const pct = Math.round((score / shuffled.length) * 100);
    const wrongQuestions = shuffled.filter((q) => wrongIds.has(q.id));
    const timedOut = timeLeft === 0;

    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center mb-4">
            {timedOut && (
              <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">Time expired</p>
            )}
            <p className="text-5xl font-bold text-gray-900 mb-1">{pct}%</p>
            <p className="text-gray-500 mb-4">{score} / {shuffled.length} correct</p>
            <p className="text-base font-semibold text-gray-800 mb-8">
              {pct >= 70 ? "Good work — keep it up!" : "Keep studying — you've got this!"}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button onClick={restart} className={`px-5 py-2.5 rounded-lg text-white font-medium text-sm ${colorMap[cert.color]}`}>
                New Quiz
              </button>
              {wrongQuestions.length > 0 && (
                <button
                  onClick={() => startQuiz(wrongQuestions)}
                  className="px-5 py-2.5 rounded-lg border-2 border-orange-200 text-orange-700 font-medium text-sm hover:bg-orange-50"
                >
                  Retry {wrongQuestions.length} wrong
                </button>
              )}
              <Link href={`/cert/${cert.id}`} className="px-5 py-2.5 rounded-lg border border-gray-200 font-medium text-sm text-gray-700 hover:border-gray-400">
                Back to {cert.name}
              </Link>
            </div>
          </div>

          {/* Domain breakdown */}
          {Object.keys(domainScores).length > 1 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-4">
              <p className="text-sm font-semibold text-gray-700 mb-3">Domain breakdown</p>
              <div className="space-y-2">
                {cert.domains
                  .filter((d) => domainScores[d.id])
                  .map((d) => {
                    const ds = domainScores[d.id];
                    const dpct = Math.round((ds.score / ds.total) * 100);
                    const weak = dpct < 70;
                    return (
                      <div key={d.id} className="flex items-center gap-3 text-sm">
                        <span className="flex-1 text-gray-700 truncate">{d.name}</span>
                        <span className="text-xs text-gray-400 w-12 text-right">{ds.score}/{ds.total}</span>
                        <div className="w-16 bg-gray-100 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${weak ? "bg-red-300" : colorMap[cert.color].split(" ")[0]}`}
                            style={{ width: `${dpct}%` }}
                          />
                        </div>
                        <span className={`text-xs font-medium w-8 text-right ${weak ? "text-red-500" : "text-gray-600"}`}>
                          {dpct}%
                        </span>
                        {weak && (
                          <Link
                            href={`/cert/${cert.id}/quiz?domain=${d.id}`}
                            className="text-xs font-medium text-orange-600 hover:text-orange-800 bg-orange-50 hover:bg-orange-100 px-2 py-0.5 rounded transition-colors whitespace-nowrap"
                          >
                            ↻ Retry
                          </Link>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Missed question review */}
          {wrongQuestions.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setShowMistakes((s) => !s)}
                className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span>Review {wrongQuestions.length} missed question{wrongQuestions.length !== 1 ? "s" : ""}</span>
                <span className="text-gray-400">{showMistakes ? "▲" : "▼"}</span>
              </button>
              {showMistakes && (
                <div className="px-6 pb-6 space-y-5 border-t border-gray-100 pt-4">
                  {wrongQuestions.map((q) => (
                    <div key={q.id}>
                      <p className="text-sm font-semibold text-gray-800 mb-2">{q.question}</p>
                      <div className="space-y-1 mb-2">
                        {q.options.map((opt, i) => (
                          <div key={i} className={`text-xs px-3 py-2 rounded-lg ${
                            i === q.correctIndex ? "bg-green-50 text-green-700 font-medium" : "text-gray-400"
                          }`}>
                            {String.fromCharCode(65 + i)}. {opt}
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 italic">{q.explanation}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    );
  }

  // ── Quiz screen ───────────────────────────────────────────────────────────
  const current = shuffled[index];
  const timeWarning = timeLeft !== null && timeLeft <= 60;

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={restart} className="text-sm text-gray-500 hover:text-gray-700" aria-label={`Exit quiz, back to ${cert.name}`}>
            ← {cert.name}
          </button>
          <div className="flex items-center gap-4">
            {timeLeft !== null && (
              <span
                role="timer"
                aria-live="polite"
                aria-label={`Time remaining: ${formatTime(timeLeft)}`}
                className={`text-sm font-mono font-semibold ${timeWarning ? "text-red-500" : "text-gray-500"}`}
              >
                {formatTime(timeLeft)}
              </span>
            )}
            <span className="text-sm text-gray-400" aria-label={`Question ${index + 1} of ${shuffled.length}`}>{index + 1} / {shuffled.length}</span>
          </div>
        </div>

        <div
          role="progressbar"
          aria-valuenow={index + 1}
          aria-valuemin={1}
          aria-valuemax={shuffled.length}
          aria-label={`Question ${index + 1} of ${shuffled.length}`}
          className="w-full bg-gray-200 rounded-full h-1.5 mb-8"
        >
          <div
            className={`h-1.5 rounded-full transition-all ${colorMap[cert.color].split(" ")[0]}`}
            style={{ width: `${((index + 1) / shuffled.length) * 100}%` }}
          />
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <p className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-wide">
            {cert.domains.find((d) => d.id === current.domainId)?.name}
          </p>
          <p className="text-lg font-semibold text-gray-900 mb-6">{current.question}</p>

          <div className="space-y-3 mb-6">
            {current.displayOptions.map((opt, i) => {
              let cls = "w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors ";
              if (selected === null) {
                cls += "border-gray-200 hover:border-gray-400 text-gray-700";
              } else if (isExamSession) {
                // Exam mode: only highlight selected, no green/red reveal
                cls += i === selected
                  ? "border-gray-500 bg-gray-100 text-gray-800"
                  : "border-gray-200 text-gray-400";
              } else if (i === current.displayCorrectIndex) {
                cls += "border-green-500 bg-green-50 text-green-800";
              } else if (i === selected) {
                cls += "border-red-400 bg-red-50 text-red-700";
              } else {
                cls += "border-gray-200 text-gray-400";
              }
              return (
                <button key={i} className={cls} onClick={() => choose(i)}>
                  <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                  {selected === null && (
                    <span className="hidden md:inline ml-2 text-xs opacity-40 font-normal">({i + 1})</span>
                  )}
                </button>
              );
            })}
          </div>

          {selected !== null && !isExamSession && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100">
              <p className="text-xs font-semibold text-gray-500 mb-1">Explanation</p>
              <p className="text-sm text-gray-700">{current.explanation}</p>
            </div>
          )}

          {selected !== null && (
            <button
              onClick={next}
              className={`w-full py-3 rounded-lg text-white font-medium text-sm ${colorMap[cert.color]}`}
            >
              {index + 1 >= shuffled.length ? "See Results" : "Next Question →"}
              <span className="hidden md:inline ml-2 text-xs opacity-60 font-normal">Enter</span>
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
