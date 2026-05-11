"use client";

import { useState } from "react";
import Link from "next/link";
import { Certification, Domain } from "@/data/certifications";
import { Question } from "@/data/questions";

type Props = {
  cert: Certification;
  questions: Question[];
};

type Phase = "setup" | "quiz" | "done";

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

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function QuizClient({ cert, questions }: Props) {
  // Domains that actually have questions
  const domainsWithQuestions: Domain[] = cert.domains.filter((d) =>
    questions.some((q) => q.domainId === d.id)
  );

  const [phase, setPhase] = useState<Phase>("setup");
  const [selectedDomainIds, setSelectedDomainIds] = useState<Set<string>>(
    () => new Set(domainsWithQuestions.map((d) => d.id))
  );
  const [shuffled, setShuffled] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  function toggleDomain(domainId: string) {
    setSelectedDomainIds((prev) => {
      const next = new Set(prev);
      if (next.has(domainId)) {
        next.delete(domainId);
      } else {
        next.add(domainId);
      }
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

  function startQuiz() {
    const filtered = questions.filter((q) => selectedDomainIds.has(q.domainId));
    setShuffled(shuffle(filtered));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setPhase("quiz");
  }

  function choose(optIndex: number) {
    if (selected !== null) return;
    setSelected(optIndex);
    if (optIndex === shuffled[index].correctIndex) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= shuffled.length) {
      setPhase("done");
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  function restart() {
    setPhase("setup");
    setSelectedDomainIds(new Set(domainsWithQuestions.map((d) => d.id)));
  }

  // ── Setup screen ──────────────────────────────────────────────────────────
  if (phase === "setup") {
    const selectedCount = questions.filter((q) => selectedDomainIds.has(q.domainId)).length;
    const allSelected = selectedDomainIds.size === domainsWithQuestions.length;

    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-lg mx-auto">
          <Link href={`/cert/${cert.id}`} className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-block">
            ← {cert.name}
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Practice Quiz</h1>
          <p className="text-sm text-gray-500 mb-6">Choose which domains to include in this session.</p>

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
              {domainsWithQuestions.map((domain, i) => {
                const qCount = questions.filter((q) => q.domainId === domain.id).length;
                const checked = selectedDomainIds.has(domain.id);
                const domainIndex = cert.domains.findIndex((d) => d.id === domain.id);
                return (
                  <label
                    key={domain.id}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                      checked ? `border-gray-300 bg-gray-50` : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        checked
                          ? `${checkMap[cert.color]} border-transparent`
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {checked && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => toggleDomain(domain.id)}
                    />
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
            onClick={startQuiz}
            disabled={selectedCount === 0}
            className={`w-full py-3 rounded-lg text-white font-medium text-sm transition-opacity ${colorMap[cert.color]} disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            {selectedCount === 0
              ? "Select at least one domain"
              : `Start Quiz · ${selectedCount} question${selectedCount !== 1 ? "s" : ""}`}
          </button>
        </div>
      </main>
    );
  }

  // ── Results screen ────────────────────────────────────────────────────────
  if (phase === "done") {
    const pct = Math.round((score / shuffled.length) * 100);
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-10 max-w-md w-full text-center">
          <p className="text-5xl font-bold text-gray-900 mb-1">{pct}%</p>
          <p className="text-gray-500 mb-6">{score} / {shuffled.length} correct</p>
          <p className="text-lg font-semibold text-gray-800 mb-8">
            {pct >= 70 ? "Good work — keep it up!" : "Keep studying — you've got this!"}
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={restart}
              className={`px-5 py-2.5 rounded-lg text-white font-medium text-sm ${colorMap[cert.color]}`}
            >
              New Quiz
            </button>
            <Link
              href={`/cert/${cert.id}`}
              className="px-5 py-2.5 rounded-lg border border-gray-200 font-medium text-sm text-gray-700 hover:border-gray-400"
            >
              Back to {cert.name}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── Quiz screen ───────────────────────────────────────────────────────────
  const current = shuffled[index];
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={restart}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            ← {cert.name}
          </button>
          <span className="text-sm text-gray-400">
            {index + 1} / {shuffled.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-8">
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
            {current.options.map((opt, i) => {
              let cls = "w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors ";
              if (selected === null) {
                cls += "border-gray-200 hover:border-gray-400 text-gray-700";
              } else if (i === current.correctIndex) {
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
                </button>
              );
            })}
          </div>

          {selected !== null && (
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
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
