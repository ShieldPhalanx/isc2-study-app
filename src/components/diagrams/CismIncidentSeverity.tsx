export default function CismIncidentSeverity() {
  const levels = [
    {
      level: "P1 — Critical",
      color: "#dc2626",
      text: "#fff",
      criteria: "Widespread outage · Active breach · Reg. requirement",
      response: "Immediate · All hands · CEO/Board notified",
      escalation: "< 15 min",
      example: "Ransomware on servers · PII exfiltrated",
    },
    {
      level: "P2 — High",
      color: "#f97316",
      text: "#fff",
      criteria: "Critical system down · Suspected breach · Service degraded",
      response: "< 1 hour · IR team activated · Exec notified",
      escalation: "< 1 hr",
      example: "ERP compromised · Account hijacked",
    },
    {
      level: "P3 — Medium",
      color: "#eab308",
      text: "#000",
      criteria: "Non-critical affected · Policy violation · Malware contained",
      response: "< 4 hours · Security team · Manager informed",
      escalation: "< 4 hrs",
      example: "Phishing click · Isolated workstation",
    },
    {
      level: "P4 — Low",
      color: "#22c55e",
      text: "#fff",
      criteria: "Minor violation · Unconfirmed suspicion · Near-miss",
      response: "Next business day · Standard ticket · Monitor",
      escalation: "72 hrs",
      example: "Password reuse · Known IP spike",
    },
  ];

  const rowH = 62, labelW = 130, svgW = 730;

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${svgW} ${rowH * 4 + 76}`} className="w-full max-w-3xl mx-auto block" aria-label="Incident severity classification table showing P1 Critical through P4 Low levels">
        {/* Header */}
        {[
          { x: 0, w: labelW, label: "Severity" },
          { x: labelW, w: 190, label: "Criteria" },
          { x: labelW + 190, w: 190, label: "Response Target" },
          { x: labelW + 380, w: 90, label: "Escalate By" },
          { x: labelW + 470, w: svgW - labelW - 470, label: "Example" },
        ].map((col, i) => (
          <g key={i}>
            <rect x={col.x} y={0} width={col.w - 2} height={32} rx={i === 0 ? 6 : 0} fill="#1e293b"/>
            <text x={col.x + col.w / 2} y="20" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{col.label}</text>
          </g>
        ))}

        {levels.map((l, i) => {
          const y = 34 + i * rowH;
          const cols = [
            { x: 0, w: labelW, val: l.level, bold: true },
            { x: labelW, w: 190, val: l.criteria, bold: false },
            { x: labelW + 190, w: 190, val: l.response, bold: false },
            { x: labelW + 380, w: 90, val: l.escalation, bold: true },
            { x: labelW + 470, w: svgW - labelW - 470, val: l.example, bold: false },
          ];
          return (
            <g key={i}>
              {cols.map((col, ci) => (
                <g key={ci}>
                  <rect x={col.x} y={y} width={col.w - 2} height={rowH - 2} fill={ci === 0 ? l.color : i % 2 === 0 ? "#f8fafc" : "#f1f5f9"} stroke="#e2e8f0" rx="2"/>
                  {col.val.split(' · ').map((line, li) => (
                    <text
                      key={li}
                      x={ci === 0 ? col.x + col.w / 2 : col.x + 6}
                      y={y + 18 + li * 14}
                      textAnchor={ci === 0 ? "middle" : "start"}
                      fill={ci === 0 ? l.text : "#374151"}
                      fontSize={ci === 3 ? 12 : 9}
                      fontWeight={col.bold || ci === 3 ? "bold" : "normal"}
                    >{line}</text>
                  ))}
                </g>
              ))}
            </g>
          );
        })}

        <rect x="0" y={34 + rowH * 4 + 4} width={svgW} height="30" rx="5" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x={svgW / 2} y={34 + rowH * 4 + 17} textAnchor="middle" fill="#64748b" fontSize="10">
          CISM: P1/P2 may trigger breach notification laws. Always pre-define severity criteria before an incident.
        </text>
        <text x={svgW / 2} y={34 + rowH * 4 + 30} textAnchor="middle" fill="#94a3b8" fontSize="9">
          Escalation paths and notification contacts must be documented in the IR plan in advance.
        </text>
      </svg>
    </div>
  );
}
