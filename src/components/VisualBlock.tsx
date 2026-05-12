import type { SectionVisual } from "@/data/studyContent";

const headerBg: Record<string, string> = {
  blue: "bg-blue-600 text-white",
  green: "bg-green-600 text-white",
  purple: "bg-purple-600 text-white",
  orange: "bg-orange-600 text-white",
};

const accentBg: Record<string, string> = {
  blue: "bg-blue-50 border-blue-200",
  green: "bg-green-50 border-green-200",
  purple: "bg-purple-50 border-purple-200",
  orange: "bg-orange-50 border-orange-200",
};

const accentText: Record<string, string> = {
  blue: "text-blue-700",
  green: "text-green-700",
  purple: "text-purple-700",
  orange: "text-orange-700",
};

const stepCircle: Record<string, string> = {
  blue: "bg-blue-600 text-white",
  green: "bg-green-600 text-white",
  purple: "bg-purple-600 text-white",
  orange: "bg-orange-600 text-white",
};

const stepLine: Record<string, string> = {
  blue: "bg-blue-200",
  green: "bg-green-200",
  purple: "bg-purple-200",
  orange: "bg-orange-200",
};

const hierarchyPalette = [
  "bg-gray-800 text-white",
  "bg-gray-600 text-white",
  "bg-gray-500 text-white",
  "bg-gray-400 text-white",
  "bg-gray-300 text-gray-800",
  "bg-gray-200 text-gray-700",
  "bg-gray-100 text-gray-600 border border-gray-200",
];

type Props = { visual: SectionVisual; certColor: string };

export default function VisualBlock({ visual, certColor }: Props) {
  // ── Table ────────────────────────────────────────────────
  if (visual.type === "table") {
    return (
      <div className="overflow-x-auto rounded-xl border border-gray-200 my-5 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr>
              {visual.headers.map((h) => (
                <th
                  key={h}
                  className={`px-4 py-2.5 text-left font-semibold text-xs uppercase tracking-wide ${headerBg[certColor]}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visual.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-2.5 text-gray-700 align-top border-t border-gray-100 ${j === 0 ? "font-medium text-gray-900" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // ── Steps ────────────────────────────────────────────────
  if (visual.type === "steps") {
    return (
      <div className={`rounded-xl border p-5 my-5 ${accentBg[certColor]}`}>
        <div className="flex flex-col">
          {visual.steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${stepCircle[certColor]}`}
                >
                  {i + 1}
                </div>
                {i < visual.steps.length - 1 && (
                  <div className={`w-0.5 flex-1 my-1 min-h-3 ${stepLine[certColor]}`} />
                )}
              </div>
              <div className="pb-4">
                <p className={`font-semibold text-sm ${accentText[certColor]}`}>{step.label}</p>
                {step.description && (
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Formula ──────────────────────────────────────────────
  if (visual.type === "formula") {
    return (
      <div className={`rounded-xl border p-5 my-5 ${accentBg[certColor]}`}>
        <p className={`text-center text-xl font-mono font-bold mb-4 ${accentText[certColor]}`}>
          {visual.formula}
        </p>
        <div className="flex flex-col gap-2">
          {visual.components.map((c) => (
            <div
              key={c.symbol}
              className="flex gap-2 items-baseline bg-white rounded-lg px-3 py-2 border border-gray-100"
            >
              <span className={`font-mono font-bold text-sm w-12 shrink-0 ${accentText[certColor]}`}>
                {c.symbol}
              </span>
              <span className="text-gray-300 shrink-0">=</span>
              <span className="text-xs text-gray-700">
                <span className="font-semibold text-gray-900">{c.name}</span> — {c.definition}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Hierarchy ────────────────────────────────────────────
  if (visual.type === "hierarchy") {
    return (
      <div className="rounded-xl border border-gray-200 overflow-hidden my-5 shadow-sm">
        {visual.label && (
          <div className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide ${headerBg[certColor]}`}>
            {visual.label}
          </div>
        )}
        {visual.levels.map((level, i) => (
          <div
            key={i}
            className={`px-4 py-3 flex items-center justify-between ${hierarchyPalette[Math.min(i, hierarchyPalette.length - 1)]}`}
          >
            <span className="font-semibold text-sm">{level.label}</span>
            {level.sublabel && (
              <span className="text-xs opacity-70">{level.sublabel}</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return null;
}
