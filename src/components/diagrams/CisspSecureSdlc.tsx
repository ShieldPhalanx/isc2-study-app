export default function CisspSecureSdlc() {
  const phases = [
    { label: "Requirements", color: "#1d4ed8", points: ["Security & privacy reqs"] },
    { label: "Design", color: "#0369a1", points: ["Threat modeling"] },
    { label: "Implementation", color: "#0891b2", points: ["Secure coding, review"] },
    { label: "Testing", color: "#0f766e", points: ["SAST, DAST, fuzzing"] },
    { label: "Deployment", color: "#b45309", points: ["Hardening, secrets mgmt"] },
    { label: "Maintenance", color: "#7c2d12", points: ["Patch & monitor"] },
  ];

  const boxW = 100, boxH = 62, gap = 8;
  const totalW = phases.length * (boxW + gap) - gap;
  const svgW = totalW + 20;
  const chartTop = 90, chartBottom = 150;

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${svgW} 210`} className="w-full max-w-3xl mx-auto block" aria-label="Secure SDLC phases with the rising cost of fixing security flaws later in the lifecycle">
        {phases.map((p, i) => {
          const x = 10 + i * (boxW + gap);
          const nextX = x + boxW + gap / 2;
          return (
            <g key={i}>
              <rect x={x} y="10" width={boxW} height={boxH} rx="7" fill={p.color} />
              <text x={x + boxW / 2} y="30" textAnchor="middle" fill="white" fontSize="10.5" fontWeight="bold">{p.label}</text>
              <text x={x + boxW / 2} y="48" textAnchor="middle" fill="white" fontSize="8" opacity="0.9">{p.points[0]}</text>
              {i < phases.length - 1 && (
                <path d={`M ${nextX - 4} 41 L ${nextX + 4} 41`} stroke="white" strokeWidth="1.5" markerEnd="url(#arrowWsd)" />
              )}
            </g>
          );
        })}

        {/* Rising cost-to-fix bars */}
        <text x="10" y={chartTop - 8} fill="#374151" fontSize="10" fontWeight="bold">Cost to fix a flaw found at this phase →</text>
        {phases.map((p, i) => {
          const x = 10 + i * (boxW + gap);
          const barH = 8 + i * 9;
          const y = chartBottom - barH;
          return (
            <g key={i}>
              <rect x={x + boxW / 2 - 14} y={y} width="28" height={barH} rx="3" fill={p.color} opacity="0.75" />
            </g>
          );
        })}
        <line x1="10" y1={chartBottom} x2={totalW + 10} y2={chartBottom} stroke="#cbd5e1" strokeWidth="1.5" />

        <rect x="10" y="168" width={svgW - 20} height="34" rx="6" fill="#f1f5f9" stroke="#e2e8f0" />
        <text x={svgW / 2} y="182" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">
          Shift left: a flaw caught in Requirements costs far less than one found in Maintenance
        </text>
        <text x={svgW / 2} y="196" textAnchor="middle" fill="#64748b" fontSize="9.5">
          Threat modeling (STRIDE) belongs in Design — before a single line of code is written
        </text>

        <defs>
          <marker id="arrowWsd" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="white" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
