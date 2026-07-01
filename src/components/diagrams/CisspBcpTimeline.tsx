export default function CisspBcpTimeline() {
  const lastBackup = 110, incident = 290, restored = 430, mtdLimit = 610;
  const axisY = 210;

  const bars = [
    { label: "RPO — max acceptable data loss", from: lastBackup, to: incident, y: 46, color: "#1d4ed8" },
    { label: "RTO — max time to restore", from: incident, to: restored, y: 86, color: "#0f766e" },
    { label: "MTD — max tolerable downtime", from: incident, to: mtdLimit, y: 126, color: "#dc2626" },
  ];

  const events = [
    { x: lastBackup, label: "Last backup", row: 0 },
    { x: incident, label: "Incident occurs", row: 1 },
    { x: restored, label: "Systems restored", row: 0 },
    { x: mtdLimit, label: "MTD limit", row: 1 },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 700 300" className="w-full max-w-2xl mx-auto block" aria-label="BCP timeline showing RPO, RTO, and MTD relative to an incident">
        {bars.map((b, i) => (
          <g key={i}>
            <rect x={b.from} y={b.y} width={b.to - b.from} height="26" rx="5" fill={b.color} />
            <text x={(b.from + b.to) / 2} y={b.y + 17} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              {b.label}
            </text>
          </g>
        ))}

        {/* Axis */}
        <line x1="60" y1={axisY} x2="650" y2={axisY} stroke="#94a3b8" strokeWidth="2" />
        <path d="M645,204 L655,210 L645,216" fill="none" stroke="#94a3b8" strokeWidth="2" />

        {events.map((e, i) => (
          <g key={i}>
            <line x1={e.x} y1="40" x2={e.x} y2={axisY} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4,3" />
            <circle cx={e.x} cy={axisY} r="4" fill="#475569" />
            <text
              x={e.x}
              y={e.row === 0 ? axisY + 22 : axisY + 40}
              textAnchor="middle"
              fill="#334155"
              fontSize="11"
              fontWeight="bold"
            >
              {e.label}
            </text>
          </g>
        ))}

        <rect x="60" y="262" width="590" height="30" rx="6" fill="#f1f5f9" stroke="#e2e8f0" />
        <text x="355" y="276" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">
          MTD is always the largest value: MTD = RTO + WRT (Work Recovery Time)
        </text>
        <text x="355" y="288" textAnchor="middle" fill="#64748b" fontSize="10">
          RPO looks backward (data loss); RTO and MTD look forward (downtime)
        </text>
      </svg>
    </div>
  );
}
