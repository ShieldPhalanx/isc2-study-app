export default function CismProgramLifecycle() {
  const phases = [
    { label: "Assess", sub: "Gap analysis", color: "#7c3aed" },
    { label: "Design", sub: "Plan & roadmap", color: "#1d4ed8" },
    { label: "Implement", sub: "Deploy controls", color: "#0369a1" },
    { label: "Operate", sub: "Run & manage", color: "#0f766e" },
    { label: "Monitor", sub: "KPIs & audits", color: "#15803d" },
    { label: "Improve", sub: "Iterate & update", color: "#92400e" },
  ];

  const cx = 290, cy = 160, r = 112, labelR = 155;
  const total = phases.length;

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 580 360" className="w-full max-w-xl mx-auto block" aria-label="Security program lifecycle: Assess, Design, Implement, Operate, Monitor, Improve">
        {/* Center circle */}
        <circle cx={cx} cy={cy} r="66" fill="#1e293b"/>
        <text x={cx} y={cy - 12} textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Security</text>
        <text x={cx} y={cy + 6} textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Program</text>
        <text x={cx} y={cy + 24} textAnchor="middle" fill="#94a3b8" fontSize="10">Continuous</text>

        {phases.map((p, i) => {
          const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
          const bx = cx + r * Math.cos(angle);
          const by = cy + r * Math.sin(angle);
          const lx = cx + labelR * Math.cos(angle);
          const ly = cy + labelR * Math.sin(angle);

          const startAngle = ((i - 0.4) / total) * 2 * Math.PI - Math.PI / 2;
          const endAngle = ((i + 0.4) / total) * 2 * Math.PI - Math.PI / 2;
          const arcR = 92;
          const x1 = cx + arcR * Math.cos(startAngle);
          const y1 = cy + arcR * Math.sin(startAngle);
          const x2 = cx + arcR * Math.cos(endAngle);
          const y2 = cy + arcR * Math.sin(endAngle);

          const boxW = 96, boxH = 42;
          const textX = lx - boxW / 2;
          const textY = ly - boxH / 2;

          return (
            <g key={i}>
              <path d={`M ${x1} ${y1} A ${arcR} ${arcR} 0 0 1 ${x2} ${y2}`} stroke={p.color} strokeWidth="18" fill="none" strokeLinecap="round"/>
              <circle cx={bx} cy={by} r="5" fill={p.color}/>
              <rect x={textX} y={textY} width={boxW} height={boxH} rx="6" fill={p.color}/>
              <text x={lx} y={ly - 6} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{p.label}</text>
              <text x={lx} y={ly + 9} textAnchor="middle" fill="white" fontSize="9" opacity="0.9">{p.sub}</text>
            </g>
          );
        })}

        <rect x="10" y="316" width="560" height="38" rx="6" fill="#f1f5f9" stroke="#e2e8f0"/>
        <text x="290" y="330" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">Key concept: The lifecycle is continuous — not a one-time project.</text>
        <text x="290" y="346" textAnchor="middle" fill="#64748b" fontSize="10">Each cycle improves maturity. Monitor findings feed directly back into Assess.</text>
      </svg>
    </div>
  );
}
