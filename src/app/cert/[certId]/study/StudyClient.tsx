"use client";

import { useState } from "react";
import Link from "next/link";
import { Certification } from "@/data/certifications";
import { Question } from "@/data/questions";

type Props = {
  cert: Certification;
  questions: Question[];
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  orange: "bg-orange-600 hover:bg-orange-700",
};

export default function StudyClient({ cert, questions }: Props) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = questions[index];
  const domain = cert.domains.find((d) => d.id === current.domainId);

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
    setFlipped(false);
  }

  function next() {
    setIndex((i) => Math.min(questions.length - 1, i + 1));
    setFlipped(false);
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link href={`/cert/${cert.id}`} className="text-sm text-gray-500 hover:text-gray-700">
            ← {cert.name}
          </Link>
          <span className="text-sm text-gray-400">
            {index + 1} / {questions.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-8">
          <div
            className={`h-1.5 rounded-full transition-all ${colorMap[cert.color].split(" ")[0]}`}
            style={{ width: `${((index + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Flashcard */}
        <button
          onClick={() => setFlipped((f) => !f)}
          className="w-full bg-white rounded-2xl border-2 border-gray-200 p-10 min-h-64 flex flex-col items-center justify-center text-center cursor-pointer hover:border-gray-300 transition-colors mb-4"
        >
          <p className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wide">
            {flipped ? "Answer + Explanation" : domain?.name}
          </p>
          {flipped ? (
            <div>
              <p className="text-base font-semibold text-green-700 mb-3">
                {current.options[current.correctIndex]}
              </p>
              <p className="text-sm text-gray-600">{current.explanation}</p>
            </div>
          ) : (
            <p className="text-lg font-semibold text-gray-900">{current.question}</p>
          )}
          <p className="text-xs text-gray-300 mt-6">{flipped ? "Tap to see question" : "Tap to reveal answer"}</p>
        </button>

        <div className="flex gap-3">
          <button
            onClick={prev}
            disabled={index === 0}
            className="flex-1 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>
          <button
            onClick={next}
            disabled={index === questions.length - 1}
            className={`flex-1 py-2.5 rounded-lg text-white text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed ${colorMap[cert.color]}`}
          >
            Next →
          </button>
        </div>
      </div>
    </main>
  );
}
