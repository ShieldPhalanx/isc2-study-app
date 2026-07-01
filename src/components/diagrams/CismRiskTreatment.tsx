export default function CismRiskTreatment() {
  const quadrants = [
    { label: "TRANSFER", sub: "High Impact · Low Likelihood", tip: "Insurance, contracts, outsourcing", color: "#2563eb", textColor: "#fff" },
    { label: "AVOID", sub: "High Impact · High Likelihood", tip: "Stop the activity entirely", color: "#dc2626", textColor: "#fff" },
    { label: "ACCEPT", sub: "Low Impact · Low Likelihood", tip: "Document & monitor residual risk", color: "#16a34a", textColor: "#fff" },
    { label: "REDUCE", sub: "Low Impact · High Likelihood", tip: "Add controls to reduce risk", color: "#d97706", textColor: "#fff" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 560 360" className="w-full max-w-xl mx-auto block" aria-label="Risk treatment options quadrant: Avoid, Transfer, Reduce, Accept">
        {/* Axis labels */}
        <text x="280" y="16" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold">Impact →</text>
        <text x="280" y="28" textAnchor="middle" fill="#9ca3af" fontSize="10">Low ←————————————→ High</text>

        <text x="14" y="210" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold" transform="rotate(-90,14,210)">Likelihood ↑</text>
        <text x="28" y="210" textAnchor="middle" fill="#9ca3af" fontSize="10" transform="rotate(-90,28,210)">Low ←————→ High</text>

        {/* 4 quadrants */}
        {quadrants.map((q, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = 50 + col * 250;
          const y = 40 + (1 - row) * 145; // row 0 = top half = high likelihood
          return (
            <g key={i}>
              <rect x={x} y={y} width="240" height="135" rx="10" fill={q.color} />
              <text x={x + 120} y={y + 30} textAnchor="middle" fill={q.textColor} fontSize="18" fontWeight="bold">{q.label}</text>
              <text x={x + 120} y={y + 50} textAnchor="middle" fill={q.textColor} fontSize="10" opacity="0.85">{q.sub}</text>
              <line x1={x + 20} y1={y + 62} x2={x + 220} y2={y + 62} stroke={q.textColor} strokeWidth="0.5" opacity="0.3"/>
              <text x={x + 120} y={y + 80} textAnchor="middle" fill={q.textColor} fontSize="11" fontStyle="italic">"{q.tip}"</text>
            </g>
          );
        })}

        {/* Center cross */}
        <line x1="50" y1="185" x2="540" y2="185" stroke="#e5e7eb" strokeWidth="2"/>
        <line x1="295" y1="40" x2="295" y2="330" stroke="#e5e7eb" strokeWidth="2"/>

        {/* Tip */}
        <rect x="50" y="334" width="490" height="22" rx="5" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="295" y="349" textAnchor="middle" fill="#64748b" fontSize="10">
          CISM: Risk acceptance requires formal documentation and management sign-off.
        </text>
      </svg>
    </div>
  );
}
