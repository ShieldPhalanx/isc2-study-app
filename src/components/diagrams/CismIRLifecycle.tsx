export default function CismIRLifecycle() {
  const phases = [
    {
      label: "Prepare",
      color: "#1d4ed8",
      points: ["IR plan & playbooks", "Team roles (CSIRT)", "Tools & retainers", "Training & drills"],
    },
    {
      label: "Identify",
      color: "#7c3aed",
      points: ["Detect the incident", "Classify severity", "Activate IR team", "Initial triage"],
    },
    {
      label: "Contain",
      color: "#dc2626",
      points: ["Isolate systems", "Block attacker paths", "Preserve evidence", "Short-term fix"],
    },
    {
      label: "Eradicate",
      color: "#d97706",
      points: ["Remove malware", "Patch vulnerability", "Revoke credentials", "Validate clean state"],
    },
    {
      label: "Recover",
      color: "#15803d",
      points: ["Restore from backup", "Validate systems", "Monitor closely", "Declare recovery"],
    },
    {
      label: "Review",
      color: "#0f766e",
      points: ["Root cause analysis", "Lessons learned", "Update playbooks", "Improve controls"],
    },
  ];

  const boxW = 120, boxH = 106, gap = 10;
  const totalW = phases.length * (boxW + gap) - gap;
  const svgW = totalW + 20;

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${svgW} 190`} className="w-full max-w-3xl mx-auto block" aria-label="Incident Response lifecycle: Prepare, Identify, Contain, Eradicate, Recover, Review">
        {phases.map((p, i) => {
          const x = 10 + i * (boxW + gap);
          const nextX = x + boxW + gap / 2;
          return (
            <g key={i}>
              <rect x={x} y="10" width={boxW} height={boxH} rx="8" fill={p.color}/>
              <text x={x + boxW / 2} y="28" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{p.label}</text>
              {p.points.map((pt, pi) => (
                <text key={pi} x={x + 8} y={44 + pi * 16} fill="white" fontSize="8.5" opacity="0.92">• {pt}</text>
              ))}
              {i < phases.length - 1 && (
                <path d={`M ${nextX - 5} 63 L ${nextX + 5} 63`} stroke="white" strokeWidth="2" markerEnd="url(#arrowW)"/>
              )}
            </g>
          );
        })}

        {/* Review → Prepare feedback loop */}
        <path
          d={`M ${10 + (phases.length - 1) * (boxW + gap) + boxW / 2} 116 Q ${svgW / 2} 155 ${10 + boxW / 2} 116`}
          stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeDasharray="5,3"
          markerEnd="url(#arrowGray)"
        />
        <text x={svgW / 2} y="166" textAnchor="middle" fill="#94a3b8" fontSize="9">Lessons learned feed back into Prepare</text>

        <rect x="10" y="172" width={svgW - 20} height="14" rx="4" fill="#f1f5f9"/>
        <text x={svgW / 2} y="183" textAnchor="middle" fill="#64748b" fontSize="9">
          CISM: Containment preserves evidence. Eradication removes root cause. Never skip Prepare or Review.
        </text>

        <defs>
          <marker id="arrowW" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="white"/>
          </marker>
          <marker id="arrowGray" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#94a3b8"/>
          </marker>
        </defs>
      </svg>
    </div>
  );
}
