"use client";

import { useState } from "react";
import Link from "next/link";
import { Certification } from "@/data/certifications";
import { Question } from "@/data/questions";
import { useQuizHistory, QuestionResult } from "@/hooks/useQuizHistory";

type Props = {
  cert: Certification;
  questions: Question[];
  domainName?: string;
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  orange: "bg-orange-600 hover:bg-orange-700",
};

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function shuffleOptions(q: Question): Question {
  const correct = q.options[q.correctIndex];
  const opts = shuffle(q.options);
  return { ...q, options: opts, correctIndex: opts.indexOf(correct) };
}

export default function QuizClient({ cert, questions, domainName }: Props) {
  const { saveAttempt } = useQuizHistory();
  const [shuffled] = useState(() => shuffle(questions).map(shuffleOptions));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);

  const current = shuffled[index];

  function choose(optIndex: number) {
    if (selected !== null) return;
    setSelected(optIndex);
    const correct = optIndex === current.correctIndex;
    if (correct) setScore((s) => s + 1);
    setResults((prev) => [
      ...prev,
      { questionId: current.id, domainId: current.domainId, correct },
    ]);
    if (!correct) setWrongQuestions((prev) => [...prev, current]);
  }

  function next() {
    if (index + 1 >= shuffled.length) {
      saveAttempt(cert.id, [...results, {
        questionId: current.id,
        domainId: current.domainId,
        correct: selected === current.correctIndex,
      }]);
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setResults([]);
    setWrongQuestions([]);
  }

  if (done) {
    const finalResults = [...results];
    const pct = Math.round((score / shuffled.length) * 100);
    const missed = wrongQuestions;

    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-2xl mx-auto">
          <Link href={`/cert/${cert.id}`} className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-block">
            ← {cert.name}
          </Link>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center mb-6">
            <p className="text-5xl font-bold text-gray-900 mb-1">{pct}%</p>
            <p className="text-gray-500 mb-2">{score} / {shuffled.length} correct</p>
            {domainName && <p className="text-sm text-gray-400 mb-4">{domainName}</p>}
            <p className="text-base font-semibold text-gray-800 mb-6">
              {pct >= 80 ? "Strong — you're exam ready on this." : pct >= 65 ? "Getting there — review the misses below." : "Needs work — study the domain then retry."}
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={restart}
                className={`px-5 py-2.5 rounded-lg text-white font-medium text-sm ${colorMap[cert.color]}`}
              >
                Retry
              </button>
              <Link
                href={`/cert/${cert.id}`}
                className="px-5 py-2.5 rounded-lg border border-gray-200 font-medium text-sm text-gray-700 hover:border-gray-400"
              >
                Back to {cert.name}
              </Link>
            </div>
          </div>

          {missed.length > 0 && (
            <div>
              <h2 className="text-base font-semibold text-gray-800 mb-3">
                Review — {missed.length} missed {missed.length === 1 ? "question" : "questions"}
              </h2>
              <div className="space-y-4">
                {missed.map((q) => (
                  <div key={q.id} className="bg-white border border-gray-200 rounded-xl p-5">
                    <p className="text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      {cert.domains.find((d) => d.id === q.domainId)?.name}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mb-3">{q.question}</p>
                    <div className="space-y-1.5 mb-3">
                      {q.options.map((opt, i) => (
                        <div
                          key={i}
                          className={`px-3 py-2 rounded-lg text-sm ${
                            i === q.correctIndex
                              ? "bg-green-50 border border-green-300 text-green-800 font-medium"
                              : "text-gray-400 border border-gray-100"
                          }`}
                        >
                          <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                          {opt}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 bg-gray-50 rounded p-3 border border-gray-100">
                      {q.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link href={`/cert/${cert.id}`} className="text-sm text-gray-500 hover:text-gray-700">
            ← {cert.name}
          </Link>
          <div className="text-right">
            <span className="text-sm text-gray-400">{index + 1} / {shuffled.length}</span>
            {domainName && <p className="text-xs text-gray-400">{domainName}</p>}
          </div>
        </div>

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
