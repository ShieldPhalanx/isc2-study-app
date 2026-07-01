export default function CismProgramLifecycle() {
  const phases = [
    { label: "Assess", sub: "Current state, gaps, risk appetite", color: "#7c3aed" },
    { label: "Design", sub: "Strategy, controls, architecture", color: "#1d4ed8" },
    { label: "Implement", sub: "Deploy controls, awareness, tools", color: "#0369a1" },
    { label: "Operate", sub: "Run SOC, manage incidents, patch", color: "#0f766e" },
    { label: "Monitor", sub: "Metrics, KPIs, audits, reviews", color: "#15803d" },
    { label: "Improve", sub: "Update plan, address gaps, iterate", color: "#92400e" },
  ];

  const cx = 280, cy = 155, r = 110, labelR = 148;
  const total = phases.length;

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 560 350" className="w-full max-w-xl mx-auto block" aria-label="Security program lifecycle: Assess, Design, Implement, Operate, Monitor, Improve">
        {/* Center circle */}
        <circle cx={cx} cy={cy} r="62" fill="#1e293b"/>
        <text x={cx} y={cy - 10} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Security</text>
        <text x={cx} y={cy + 8} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Program</text>
        <text x={cx} y={cy + 24} textAnchor="middle" fill="#94a3b8" fontSize="10">Continuous</text>

        {phases.map((p, i) => {
          const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
          const bx = cx + r * Math.cos(angle);
          const by = cy + r * Math.sin(angle);
          const lx = cx + labelR * Math.cos(angle);
          const ly = cy + labelR * Math.sin(angle);

          // Arc for this segment
          const startAngle = ((i - 0.42) / total) * 2 * Math.PI - Math.PI / 2;
          const endAngle = ((i + 0.42) / total) * 2 * Math.PI - Math.PI / 2;
          const arcR = 90;
          const x1 = cx + arcR * Math.cos(startAngle);
          const y1 = cy + arcR * Math.sin(startAngle);
          const x2 = cx + arcR * Math.cos(endAngle);
          const y2 = cy + arcR * Math.sin(endAngle);

          // Text box
          const boxW = 86, boxH = 40;
          const textX = lx - boxW / 2;
          const textY = ly - boxH / 2;

          return (
            <g key={i}>
              <path d={`M ${x1} ${y1} A ${arcR} ${arcR} 0 0 1 ${x2} ${y2}`} stroke={p.color} strokeWidth="18" fill="none" strokeLinecap="round"/>
              <circle cx={bx} cy={by} r="5" fill={p.color}/>
              <rect x={textX} y={textY} width={boxW} height={boxH} rx="6" fill={p.color}/>
              <text x={lx} y={ly - 7} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{p.label}</text>
              <text x={lx} y={ly + 8} textAnchor="middle" fill="white" fontSize="8" opacity="0.9">{p.sub}</text>
            </g>
          );
        })}

        <rect x="10" y="306" width="540" height="38" rx="6" fill="#f1f5f9" stroke="#e2e8f0"/>
        <text x="280" y="321" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">Key CISM concept: The lifecycle is continuous — not a one-time project.</text>
        <text x="280" y="337" textAnchor="middle" fill="#64748b" fontSize="10">Each iteration improves maturity. Monitoring feeds back into Assess.</text>
      </svg>
    </div>
  );
}
