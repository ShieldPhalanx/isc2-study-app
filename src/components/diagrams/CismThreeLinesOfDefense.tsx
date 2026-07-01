export default function CismThreeLinesOfDefense() {
  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 760 320" className="w-full max-w-2xl mx-auto block" aria-label="Three Lines of Defense model diagram">
        {/* Board */}
        <rect x="230" y="10" width="300" height="44" rx="8" fill="#1e40af" />
        <text x="380" y="28" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Board &amp; Audit Committee</text>
        <text x="380" y="46" textAnchor="middle" fill="#bfdbfe" fontSize="10">Sets risk appetite · Oversees assurance</text>

        {/* Arrow down */}
        <line x1="380" y1="54" x2="380" y2="74" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>

        {/* Senior Management */}
        <rect x="230" y="74" width="300" height="44" rx="8" fill="#1d4ed8" />
        <text x="380" y="92" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Senior Management / CISO</text>
        <text x="380" y="110" textAnchor="middle" fill="#bfdbfe" fontSize="10">Owns security strategy · Allocates resources</text>

        {/* Arrows to 3 columns */}
        <line x1="220" y1="118" x2="100" y2="148" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)"/>
        <line x1="380" y1="118" x2="380" y2="148" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)"/>
        <line x1="540" y1="118" x2="660" y2="148" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)"/>

        {/* Line 1 */}
        <rect x="20" y="148" width="180" height="88" rx="8" fill="#16a34a" />
        <text x="110" y="168" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">1st Line</text>
        <text x="110" y="184" textAnchor="middle" fill="#bbf7d0" fontSize="10">Business Units</text>
        <text x="110" y="200" textAnchor="middle" fill="#bbf7d0" fontSize="9">Own &amp; manage risk</text>
        <text x="110" y="214" textAnchor="middle" fill="#bbf7d0" fontSize="9">day-to-day</text>
        <text x="110" y="228" textAnchor="middle" fill="#bbf7d0" fontSize="9">Operational controls</text>

        {/* Line 2 */}
        <rect x="290" y="148" width="180" height="88" rx="8" fill="#d97706" />
        <text x="380" y="168" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">2nd Line</text>
        <text x="380" y="184" textAnchor="middle" fill="#fef3c7" fontSize="10">Risk &amp; Security</text>
        <text x="380" y="200" textAnchor="middle" fill="#fef3c7" fontSize="9">Oversee &amp; challenge</text>
        <text x="380" y="214" textAnchor="middle" fill="#fef3c7" fontSize="9">1st line controls</text>
        <text x="380" y="228" textAnchor="middle" fill="#fef3c7" fontSize="9">Policy &amp; frameworks</text>

        {/* Line 3 */}
        <rect x="560" y="148" width="180" height="88" rx="8" fill="#7c3aed" />
        <text x="650" y="168" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">3rd Line</text>
        <text x="650" y="184" textAnchor="middle" fill="#ede9fe" fontSize="10">Internal Audit</text>
        <text x="650" y="200" textAnchor="middle" fill="#ede9fe" fontSize="9">Independent</text>
        <text x="650" y="214" textAnchor="middle" fill="#ede9fe" fontSize="9">assurance to Board</text>
        <text x="650" y="228" textAnchor="middle" fill="#ede9fe" fontSize="9">No operational role</text>

        {/* CISM exam tip */}
        <rect x="20" y="254" width="720" height="52" rx="8" fill="#f1f5f9" stroke="#e2e8f0" />
        <text x="380" y="272" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">CISM Exam Key Point</text>
        <text x="380" y="290" textAnchor="middle" fill="#64748b" fontSize="10">Security (CISO) sits in the 2nd line — oversight, not operations.</text>
        <text x="380" y="304" textAnchor="middle" fill="#64748b" fontSize="10">Internal Audit (3rd line) must be independent of both 1st and 2nd lines.</text>

        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
          </marker>
        </defs>
      </svg>
    </div>
  );
}
