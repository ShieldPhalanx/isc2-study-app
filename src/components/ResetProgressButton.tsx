"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Certification } from "@/data/certifications";

type Props = {
  cert: Certification;
  questionIds: string[];
};

export default function ResetProgressButton({ cert, questionIds }: Props) {
  const [confirming, setConfirming] = useState(false);
  const router = useRouter();

  function reset() {
    try {
      // domain-progress: remove only this cert's domain IDs
      const progress = JSON.parse(localStorage.getItem("domain-progress") ?? "{}");
      cert.domains.forEach((d) => delete progress[d.id]);
      localStorage.setItem("domain-progress", JSON.stringify(progress));

      // quiz-score-history: remove results for this cert
      const history = JSON.parse(localStorage.getItem("quiz-score-history") ?? "[]");
      localStorage.setItem(
        "quiz-score-history",
        JSON.stringify(history.filter((r: { certId: string }) => r.certId !== cert.id))
      );

      // flashcard-progress: remove card records for this cert's questions
      const fp = JSON.parse(localStorage.getItem("flashcard-progress") ?? "{}");
      questionIds.forEach((id) => delete fp[id]);
      localStorage.setItem("flashcard-progress", JSON.stringify(fp));
    } catch {
      // ignore localStorage errors (private browsing, quota, etc.)
    }
    setConfirming(false);
    router.refresh();
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-3 text-sm">
        <span className="text-gray-500">Reset all {cert.name} progress?</span>
        <button
          onClick={reset}
          className="text-red-600 font-medium hover:text-red-800 underline underline-offset-2"
        >
          Yes, reset
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2"
    >
      Reset all progress
    </button>
  );
}
