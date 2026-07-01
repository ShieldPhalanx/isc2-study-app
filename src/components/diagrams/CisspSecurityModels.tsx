export default function CisspSecurityModels() {
  const labelW = 115, colW = 172, headerH = 34, rowH = 54;
  const rows = [
    { label: "Focus" },
    { label: "Core rule" },
    { label: "Blocks" },
    { label: "Used for" },
  ];
  const models = [
    {
      name: "Bell-LaPadula",
      color: "#1d4ed8",
      cells: [
        ["Confidentiality"],
        ["No read up,", "no write down"],
        ["High→Low writes,", "Low→High reads"],
        ["Military & government", "classified systems"],
      ],
    },
    {
      name: "Biba",
      color: "#15803d",
      cells: [
        ["Integrity"],
        ["No read down,", "no write up"],
        ["Low→High writes,", "High→Low reads"],
        ["Financial & medical", "data integrity"],
      ],
    },
    {
      name: "Clark-Wilson",
      color: "#7c3aed",
      cells: [
        ["Commercial integrity"],
        ["Well-formed transactions,", "separation of duties"],
        ["Direct writes to", "constrained data"],
        ["Banking transaction", "processing systems"],
      ],
    },
  ];

  const totalW = labelW + colW * 3;
  const totalH = headerH + rowH * rows.length;

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${totalW} ${totalH + 40}`} className="w-full max-w-2xl mx-auto block" aria-label="Comparison of Bell-LaPadula, Biba, and Clark-Wilson security models">
        {/* Column headers */}
        <rect x="0" y="0" width={labelW - 2} height={headerH - 2} fill="#f8fafc" />
        {models.map((m, i) => (
          <g key={m.name}>
            <rect x={labelW + i * colW} y="0" width={colW - 2} height={headerH - 2} rx="4" fill={m.color} />
            <text x={labelW + i * colW + colW / 2} y={headerH / 2 + 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
              {m.name}
            </text>
          </g>
        ))}

        {/* Rows */}
        {rows.map((row, ri) => {
          const y = headerH + ri * rowH;
          return (
            <g key={ri}>
              <rect x="0" y={y} width={labelW - 2} height={rowH - 2} fill="#f1f5f9" />
              <text x={10} y={y + rowH / 2 + 4} fill="#374151" fontSize="10" fontWeight="bold">{row.label}</text>
              {models.map((m, ci) => {
                const cellX = labelW + ci * colW;
                const lines = m.cells[ri];
                const startY = lines.length === 1 ? y + rowH / 2 + 4 : y + rowH / 2 - 6;
                return (
                  <g key={ci}>
                    <rect x={cellX} y={y} width={colW - 2} height={rowH - 2} fill={ci % 2 === 0 ? "#ffffff" : "#f8fafc"} stroke="#e2e8f0" />
                    {lines.map((line, li) => (
                      <text
                        key={li}
                        x={cellX + colW / 2}
                        y={startY + li * 16}
                        textAnchor="middle"
                        fill="#374151"
                        fontSize="10"
                      >
                        {line}
                      </text>
                    ))}
                  </g>
                );
              })}
            </g>
          );
        })}

        <rect x="0" y={totalH + 4} width={totalW} height="30" rx="6" fill="#f1f5f9" stroke="#e2e8f0" />
        <text x={totalW / 2} y={totalH + 22} textAnchor="middle" fill="#64748b" fontSize="10">
          Biba is Bell-LaPadula's mirror image: confidentiality rules flip to protect integrity instead
        </text>
      </svg>
    </div>
  );
}
