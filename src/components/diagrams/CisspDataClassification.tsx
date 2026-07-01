export default function CisspDataClassification() {
  const levels = [
    { label: "Top Secret", width: 200, color: "#7c1d1d" },
    { label: "Secret", width: 300, color: "#b91c1c" },
    { label: "Confidential", width: 400, color: "#d97706" },
    { label: "Unclassified", width: 500, color: "#15803d" },
  ];

  const cx = 320;
  const rowH = 34, rowGap = 6;

  const sanitize = [
    { label: "Clear", method: "Logical overwrite", reuse: "Reuse within same org", color: "#0369a1" },
    { label: "Purge", method: "Crypto erase / degauss", reuse: "Reuse in lower-sensitivity env", color: "#0f766e" },
    { label: "Destroy", method: "Shred / incinerate", reuse: "No reuse — highest assurance", color: "#7c2d12" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 640 380" className="w-full max-w-2xl mx-auto block" aria-label="Government data classification pyramid and NIST 800-88 media sanitization levels">
        <text x={cx} y="14" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold">Classification Levels (most → least sensitive)</text>

        {levels.map((l, i) => {
          const y = 22 + i * (rowH + rowGap);
          const x = cx - l.width / 2;
          return (
            <g key={i}>
              <rect x={x} y={y} width={l.width} height={rowH} rx="6" fill={l.color} />
              <text x={cx} y={y + rowH / 2 + 4} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{l.label}</text>
            </g>
          );
        })}

        <line x1="20" y1="195" x2="620" y2="195" stroke="#e2e8f0" strokeWidth="1.5" />

        <text x={cx} y="216" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold">NIST SP 800-88 — Media Sanitization</text>

        {sanitize.map((s, i) => {
          const colW = 190, gap = 15;
          const x = 20 + i * (colW + gap);
          const y = 230;
          return (
            <g key={i}>
              <rect x={x} y={y} width={colW} height={40} rx="6" fill={s.color} />
              <text x={x + colW / 2} y={y + 26} textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">{s.label}</text>
              <rect x={x} y={y + 48} width={colW} height="60" rx="6" fill="#f8fafc" stroke="#e2e8f0" />
              <text x={x + colW / 2} y={y + 68} textAnchor="middle" fill="#374151" fontSize="10" fontWeight="bold">{s.method}</text>
              <text x={x + colW / 2} y={y + 86} textAnchor="middle" fill="#64748b" fontSize="9">{s.reuse}</text>
            </g>
          );
        })}

        <rect x="20" y="342" width="600" height="30" rx="6" fill="#f1f5f9" stroke="#e2e8f0" />
        <text x="320" y="356" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">
          Degaussing works on magnetic media only — never on SSDs or flash storage
        </text>
        <text x="320" y="368" textAnchor="middle" fill="#64748b" fontSize="10">
          The data owner sets classification; the data custodian executes sanitization
        </text>
      </svg>
    </div>
  );
}
