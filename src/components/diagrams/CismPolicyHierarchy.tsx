export default function CismPolicyHierarchy() {
  const levels = [
    { label: "Policy", sub: "WHY — Management intent & direction", color: "#1e40af", light: "#dbeafe", width: 200, desc: "Executive intent. Broad, long-lived." },
    { label: "Standard", sub: "WHAT — Mandatory requirements", color: "#0369a1", light: "#e0f2fe", width: 310, desc: "Specific, measurable. '12+ char passwords required.'" },
    { label: "Guideline", sub: "HOW — Recommended approaches", color: "#0891b2", light: "#ecfeff", width: 440, desc: "Advisory, flexible. 'Consider using a password manager.'" },
    { label: "Procedure", sub: "HOW EXACTLY — Step-by-step instructions", color: "#0f766e", light: "#f0fdfa", width: 580, desc: "Detailed steps. 'Step 1: Open vault. Step 2: Enter credentials.'" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 640 310" className="w-full max-w-2xl mx-auto block" aria-label="Policy hierarchy pyramid showing Policy, Standard, Guideline, Procedure levels">
        {levels.map((l, i) => {
          const y = 14 + i * 62;
          const x = (640 - l.width) / 2;
          return (
            <g key={l.label}>
              <rect x={x} y={y} width={l.width} height={50} rx="6" fill={l.color} />
              <text x="320" y={y + 16} textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">{l.label}</text>
              <text x="320" y={y + 30} textAnchor="middle" fill={l.light} fontSize="10">{l.sub}</text>
              <text x="320" y={y + 44} textAnchor="middle" fill={l.light} fontSize="9" fontStyle="italic">{l.desc}</text>
            </g>
          );
        })}

        {/* Labels */}
        <text x="14" y="48" fill="#94a3b8" fontSize="9" textAnchor="start">Most abstract</text>
        <text x="14" y="270" fill="#94a3b8" fontSize="9" textAnchor="start">Most specific</text>
        <text x="626" y="48" fill="#94a3b8" fontSize="9" textAnchor="end">Fewest docs</text>
        <text x="626" y="270" fill="#94a3b8" fontSize="9" textAnchor="end">Most docs</text>

        {/* Arrow on left */}
        <line x1="22" y1="58" x2="22" y2="264" stroke="#cbd5e1" strokeWidth="1.5"/>
        <path d="M17,264 L22,275 L27,264" fill="#cbd5e1"/>

        <rect x="0" y="280" width="640" height="26" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="320" y="297" textAnchor="middle" fill="#64748b" fontSize="10">
          CISM tip: Policy requires executive sign-off. Only Policy states "why." Procedures are the most granular.
        </text>
      </svg>
    </div>
  );
}
