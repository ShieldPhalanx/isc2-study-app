export type KeyTerm = { term: string; definition: string };

export type SectionVisual =
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "steps"; steps: { label: string; description?: string }[] }
  | { type: "formula"; formula: string; components: { symbol: string; name: string; definition: string }[] }
  | { type: "hierarchy"; label?: string; levels: { label: string; sublabel?: string }[] };

export type TopicSection = {
  title: string;
  explanation?: string;
  visual?: SectionVisual;
  points: string[];
};

export type DomainStudyContent = {
  domainId: string;
  overview: string;
  sections: TopicSection[];
  keyTerms: KeyTerm[];
  examTips: string[];
};

export const studyContent: DomainStudyContent[] = [
  // ─── CISSP D1 ───────────────────────────────────────────
  {
    domainId: "cissp-d1",
    overview: "Security and Risk Management is the largest CISSP domain (16%). It covers the foundational principles of information security — the CIA triad, governance frameworks, risk management methodologies, legal and regulatory requirements, business continuity, and the ethical responsibilities of security professionals.",
    sections: [
      {
        title: "CIA Triad & Security Concepts",
        explanation: "The CIA triad is the bedrock model for evaluating any security decision. Every control you implement protects one or more of its three properties — and every attack violates at least one. Understanding which property is threatened in a given scenario tells you which class of control is the right answer.",
        visual: {
          type: "table",
          headers: ["Property", "Goal", "Threat", "Example Controls"],
          rows: [
            ["Confidentiality", "Prevent unauthorized disclosure", "Eavesdropping, data leaks", "Encryption, access controls, MFA"],
            ["Integrity", "Ensure data is accurate and unaltered", "Tampering, unauthorized modification", "Hashing, digital signatures, audit logs"],
            ["Availability", "Ensure authorized access when needed", "DoS attacks, hardware failure", "Redundancy, backups, DRP, clustering"],
          ],
        },
        points: [
          "Confidentiality — preventing unauthorized disclosure of information (encryption, access controls).",
          "Integrity — ensuring information is accurate and unaltered (hashing, digital signatures).",
          "Availability — ensuring authorized users can access information when needed (redundancy, DRPs).",
          "Authenticity, non-repudiation, and privacy extend the core triad in modern frameworks.",
          "Defense in depth layers controls so no single failure compromises the system.",
        ],
      },
      {
        title: "Security Governance",
        explanation: "Governance is the management layer above operations — it sets direction, accountability, and oversight rather than executing controls directly. The key distinction CISSP tests repeatedly is between due care (doing the right thing) and due diligence (knowing what the right thing is). Both are required; neither alone is sufficient.",
        visual: {
          type: "hierarchy",
          label: "Policy Hierarchy — most authoritative to least",
          levels: [
            { label: "Policy", sublabel: "Senior management intent — the 'why'" },
            { label: "Standards", sublabel: "Mandatory rules — the 'what'" },
            { label: "Procedures", sublabel: "Step-by-step instructions — the 'how'" },
            { label: "Guidelines", sublabel: "Optional recommendations — the 'suggestion'" },
          ],
        },
        points: [
          "Governance aligns security strategy with business objectives and regulatory obligations.",
          "Due care = taking reasonable protective steps; due diligence = researching what steps are needed.",
          "Policies set intent (senior management). Standards are mandatory rules. Guidelines are recommendations. Procedures are step-by-step instructions.",
          "Separation of duties prevents a single person from completing a sensitive transaction alone.",
          "Least privilege grants only the minimum access necessary for a role.",
          "The CISO owns the security program; the Board/executives own organizational risk.",
        ],
      },
      {
        title: "Risk Management",
        explanation: "Risk management is fundamentally about making informed decisions under uncertainty. Quantitative methods produce dollar figures that executives can act on; qualitative methods are faster when data is scarce. The ALE formula is the most tested calculation in this domain — practice it until it is automatic.",
        visual: {
          type: "formula",
          formula: "ALE = SLE × ARO",
          components: [
            { symbol: "ALE", name: "Annual Loss Expectancy", definition: "Expected monetary loss per year from a given threat." },
            { symbol: "SLE", name: "Single Loss Expectancy", definition: "AV × EF — loss from a single incident." },
            { symbol: "AV", name: "Asset Value", definition: "Dollar value of the asset." },
            { symbol: "EF", name: "Exposure Factor", definition: "Percentage of asset value lost in one incident (0–1)." },
            { symbol: "ARO", name: "Annual Rate of Occurrence", definition: "Expected frequency of the threat per year." },
          ],
        },
        points: [
          "Risk = Threat × Vulnerability × Asset Value (conceptually). Formally: Risk = Likelihood × Impact.",
          "Qualitative risk analysis uses subjective ratings (High/Med/Low). Quantitative uses monetary values (ALE = SLE × ARO).",
          "Risk responses: Avoidance (stop the activity), Mitigation (reduce likelihood/impact), Transfer (insurance, contracts), Acceptance (documented tolerance).",
          "Residual risk remains after controls are applied. Total risk exists without any controls.",
          "Key frameworks: NIST RMF (SP 800-37), ISO 27005, FAIR, OCTAVE.",
        ],
      },
      {
        title: "Legal & Regulatory Compliance",
        explanation: "Security professionals must understand the landscape of laws that apply to their industry and geography — not to give legal advice, but to ensure the program addresses all mandatory requirements. The most heavily tested regulations are GDPR (for its breach notification timeline) and HIPAA (for its safeguard categories).",
        visual: {
          type: "table",
          headers: ["Regulation", "Jurisdiction", "Sector", "Key Requirement"],
          rows: [
            ["GDPR", "EU (global reach)", "All sectors", "72-hour breach notification; consent; right to erasure"],
            ["HIPAA/HITECH", "USA", "Healthcare", "Admin, physical & technical safeguards for PHI"],
            ["PCI-DSS", "Global (card brands)", "Payment cards", "12 requirements; applies to any entity touching cardholder data"],
            ["SOX", "USA", "Public companies", "Section 404: management must assess IT controls over financial reporting"],
            ["GLBA", "USA", "Financial", "Safeguards Rule: protect NPI; notify customers of privacy practices"],
            ["FISMA", "USA", "Federal agencies", "RMF compliance mandatory for all federal information systems"],
          ],
        },
        points: [
          "GDPR — EU regulation governing personal data; requires consent, breach notification within 72 hours.",
          "HIPAA — US healthcare data; requires administrative, physical, and technical safeguards.",
          "PCI-DSS — payment card data; applies to any entity storing, processing, or transmitting cardholder data.",
          "SOX — financial reporting integrity for US public companies; requires access controls and audit trails.",
          "Computer crime laws: CFAA (US), CMA (UK). Export controls: ITAR, EAR.",
          "Intellectual property: copyright, trademark, patent, trade secret.",
        ],
      },
      {
        title: "Business Continuity Planning (BCP)",
        explanation: "BCP and DRP are often confused. BCP is the broader program covering how the entire organization continues operating through a disruption. DRP is the technology-recovery subset. The BIA comes first — you cannot design recovery strategies until you know which processes are most critical and how long they can be down.",
        visual: {
          type: "table",
          headers: ["Metric", "Full Name", "Question It Answers", "Who Owns It"],
          rows: [
            ["MTD", "Maximum Tolerable Downtime", "How long before the business fails permanently?", "Business management"],
            ["RTO", "Recovery Time Objective", "How fast must we restore the system?", "IT / Business jointly"],
            ["RPO", "Recovery Point Objective", "How much data can we afford to lose?", "Business management"],
            ["MTTR", "Mean Time To Repair", "How long does repair typically take?", "IT / Operations"],
          ],
        },
        points: [
          "BCP ensures critical business functions continue during and after a disruption.",
          "BIA (Business Impact Analysis) identifies critical processes and their dependencies.",
          "RTO (Recovery Time Objective) — maximum acceptable downtime.",
          "RPO (Recovery Point Objective) — maximum acceptable data loss (measured in time).",
          "MTD (Maximum Tolerable Downtime) — absolute limit before the organization suffers irreversible harm.",
          "BCP scope: prevention, detection, response, recovery. DRP is the IT-focused subset.",
        ],
      },
      {
        title: "Personnel Security",
        explanation: "People are consistently the weakest link in security, and personnel controls address this from hire to separation. Mandatory vacations and job rotation are detective controls — they expose fraud that an employee has been concealing. The moment an employee is terminated, access revocation must happen before they leave the building.",
        points: [
          "Background checks, reference checks, and employment verification before hiring.",
          "NDA (Non-Disclosure Agreement) signed at onboarding to protect confidential information.",
          "Security awareness training is mandatory for all users; role-based training for privileged users.",
          "Onboarding establishes access rights; offboarding must immediately revoke them.",
          "Job rotation reduces fraud risk; mandatory vacations detect concealment of fraud.",
        ],
      },
      {
        title: "Ethics",
        explanation: "The ISC² Code of Ethics is enforceable — violations can result in revocation of certification. Canon 1 (protect society) is the overriding principle; when other canons conflict with it, Canon 1 wins. This hierarchy is the most commonly tested aspect of the ethics section.",
        points: [
          "ISC² Code of Ethics: Protect society; Act honorably, honestly, and lawfully; Provide diligent service; Advance the profession.",
          "Canon 1 (Protect society) takes precedence over all other canons.",
          "RFC 1087 defines unethical Internet behavior.",
          "Security professionals must prioritize public safety over employer interests when they conflict.",
        ],
      },
    ],
    keyTerms: [
      { term: "CIA Triad", definition: "Confidentiality, Integrity, Availability — the three core security properties." },
      { term: "ALE", definition: "Annual Loss Expectancy = SLE × ARO." },
      { term: "SLE", definition: "Single Loss Expectancy = Asset Value × Exposure Factor." },
      { term: "ARO", definition: "Annual Rate of Occurrence — estimated frequency of a threat per year." },
      { term: "RTO", definition: "Recovery Time Objective — maximum tolerable system downtime." },
      { term: "RPO", definition: "Recovery Point Objective — maximum acceptable data loss in time." },
      { term: "Due Care", definition: "Taking reasonable protective steps to guard assets." },
      { term: "Due Diligence", definition: "Research and investigation to identify what protective steps are needed." },
      { term: "Residual Risk", definition: "Risk remaining after controls have been applied." },
    ],
    examTips: [
      "CISSP is a management exam — when in doubt, choose the answer that a manager or executive would pick, not a technician.",
      "Distinguish due care (doing) from due diligence (researching). Exam questions use them precisely.",
      "ALE calculations appear frequently: memorize SLE = AV × EF, ALE = SLE × ARO.",
      "BCP questions often test RTO vs RPO vs MTD — MTD > RTO always; if RTO exceeds MTD the business cannot survive.",
      "Risk acceptance is valid only when formally documented and approved by management.",
    ],
  },

  // ─── CISSP D2 ───────────────────────────────────────────
  {
    domainId: "cissp-d2",
    overview: "Asset Security (10%) covers the lifecycle of data — from classification and ownership through handling, storage, retention, and destruction. It also addresses privacy requirements and the roles of individuals who interact with data.",
    sections: [
      {
        title: "Data Classification",
        explanation: "Classification exists so that controls can be proportionate to sensitivity. Over-classifying wastes resources; under-classifying exposes sensitive data. The data owner — always a business manager, never IT — determines the classification based on potential harm if the data were disclosed.",
        visual: {
          type: "hierarchy",
          label: "Classification Levels (highest → lowest sensitivity)",
          levels: [
            { label: "Top Secret (Gov) / Confidential (Commercial)", sublabel: "Extreme harm if disclosed" },
            { label: "Secret (Gov) / Private / Internal (Commercial)", sublabel: "Serious harm if disclosed" },
            { label: "Confidential (Gov) / Sensitive (Commercial)", sublabel: "Moderate harm if disclosed" },
            { label: "Unclassified (Gov) / Public (Commercial)", sublabel: "No harm if disclosed" },
          ],
        },
        points: [
          "Government classification (US): Top Secret → Secret → Confidential → Unclassified.",
          "Commercial classification: Confidential/Proprietary → Internal/Private → Public.",
          "Classification is determined by data owners based on sensitivity and potential harm from disclosure.",
          "Labels must be applied to media, data objects, and output consistently.",
        ],
      },
      {
        title: "Data Ownership Roles",
        explanation: "Role confusion is a common exam trap. The data owner sets policy and accepts risk — they are a business executive, not an IT person. The custodian implements what the owner decides. GDPR added controller/processor terminology that maps closely to owner/custodian but with legal accountability attached.",
        visual: {
          type: "table",
          headers: ["Role", "Who They Are", "Responsibility"],
          rows: [
            ["Data Owner", "Senior business manager", "Classifies data; sets access policy; accepts residual risk"],
            ["Data Custodian", "IT / security team", "Implements controls; performs backups; enforces policy"],
            ["Data User", "Any authorized employee", "Accesses data within defined permissions"],
            ["Data Controller (GDPR)", "Organization", "Determines purpose and means of processing personal data"],
            ["Data Processor (GDPR)", "Third-party vendor", "Processes data on behalf of the controller"],
            ["Data Steward", "Business analyst / DBA", "Ensures data quality and appropriate use"],
          ],
        },
        points: [
          "Data Owner — senior management; defines classification, sets policy, accepts residual risk.",
          "Data Custodian — IT/security team; implements controls, performs backups, enforces policies.",
          "Data User — anyone who accesses data within defined permissions.",
          "Data Controller (GDPR) — determines the purpose and means of processing personal data.",
          "Data Processor (GDPR) — processes data on behalf of the controller.",
          "Data Steward — ensures data quality and proper use within business context.",
        ],
      },
      {
        title: "Data Lifecycle & Handling",
        explanation: "Every stage of the data lifecycle presents distinct security risks and requires specific controls. Data in use (being actively processed in memory) is the hardest to protect because it must be decrypted to be useful. DLP tools address movement between stages, particularly the boundary between internal use and sharing.",
        visual: {
          type: "steps",
          steps: [
            { label: "Create", description: "Classification label applied; owner assigned; baseline controls established." },
            { label: "Store", description: "Encryption at rest (AES-256); access controls; backup and integrity checks." },
            { label: "Use", description: "Decrypted in memory — hardest to protect; secure enclaves, memory encryption." },
            { label: "Share", description: "DLP monitoring; encryption in transit (TLS); need-to-know enforcement." },
            { label: "Archive", description: "Long-term storage; retention schedule applied; access restricted." },
            { label: "Destroy", description: "NIST SP 800-88 sanitization: Clear → Purge → Destroy." },
          ],
        },
        points: [
          "Data at rest — stored data; protected by encryption (AES-256 typical standard).",
          "Data in transit — moving across networks; protected by TLS, IPSec.",
          "Data in use — being processed in memory; hardest to protect; secure enclaves help.",
          "DLP (Data Loss Prevention) tools monitor and prevent unauthorized data movement.",
        ],
      },
      {
        title: "Data Retention & Destruction",
        explanation: "Keeping data longer than necessary creates liability; destroying it too soon violates legal holds. NIST SP 800-88 is the authoritative standard for media sanitization — know the three levels and when each is appropriate. Certificates of destruction from third-party vendors are essential evidence for compliance audits.",
        visual: {
          type: "table",
          headers: ["Method", "NIST 800-88 Level", "How It Works", "Suitable For"],
          rows: [
            ["Overwriting", "Clear", "Writes new data patterns over existing data", "Media reused within same org at same classification"],
            ["Degaussing", "Purge", "Magnetic field destroys data on magnetic media", "HDDs/tapes before reuse at lower classification"],
            ["Cryptographic Erase", "Purge", "Destroys encryption key, rendering data unrecoverable", "SSDs and self-encrypting drives"],
            ["Physical Shredding", "Destroy", "Media physically disintegrated", "Highest assurance; end-of-life media"],
            ["Incineration", "Destroy", "Media burned", "Highest assurance; end-of-life media"],
          ],
        },
        points: [
          "Retention schedules must comply with legal, regulatory, and business requirements.",
          "Media sanitization standards: NIST SP 800-88 defines Clear, Purge, and Destroy levels.",
          "Clearing — overwriting; suitable for reuse within the same classification level.",
          "Purging — degaussing or cryptographic erase; suitable for reuse in lower-classified environments.",
          "Destruction — physical shredding, incineration, disintegration; highest assurance.",
          "Certificates of destruction should be obtained from third-party vendors.",
        ],
      },
      {
        title: "Privacy",
        explanation: "Privacy is about individuals controlling information about themselves — it overlaps with but is distinct from confidentiality. Privacy by design means building protections into systems from the start rather than retrofitting them. GDPR grants data subjects specific enforceable rights that must be built into system workflows.",
        points: [
          "PII (Personally Identifiable Information) — any data that can identify an individual.",
          "PHI (Protected Health Information) — PII in a healthcare context, covered by HIPAA.",
          "Privacy by design embeds privacy protections at the start of system development.",
          "Data minimization — collect only what is necessary for the stated purpose.",
          "GDPR rights: access, rectification, erasure (right to be forgotten), portability, objection.",
        ],
      },
    ],
    keyTerms: [
      { term: "Data Owner", definition: "Business manager responsible for data classification and policy decisions." },
      { term: "Data Custodian", definition: "IT/security role responsible for implementing data protection controls." },
      { term: "Data Controller", definition: "GDPR term for entity that determines how personal data is processed." },
      { term: "PII", definition: "Personally Identifiable Information — data that can identify an individual." },
      { term: "Data Remanence", definition: "Residual data that remains on media after deletion attempts." },
      { term: "Degaussing", definition: "Using a magnetic field to erase data from magnetic media." },
      { term: "DLP", definition: "Data Loss Prevention — tools that detect and prevent unauthorized data exfiltration." },
    ],
    examTips: [
      "The data owner is always a business/management role, never an IT role — IT is the custodian.",
      "NIST SP 800-88 is the key reference for media sanitization — know Clear/Purge/Destroy.",
      "Privacy by design questions test whether you bake privacy in from the start vs bolt it on later.",
      "When a question asks who is responsible for data classification, the answer is always the data owner.",
    ],
  },

  // ─── CISSP D3 ───────────────────────────────────────────
  {
    domainId: "cissp-d3",
    overview: "Security Architecture and Engineering (13%) covers secure design principles, security models that formalize access control, cryptographic systems, and physical security. Understanding how theoretical models translate into real-world systems is central to this domain.",
    sections: [
      {
        title: "Secure Design Principles",
        explanation: "These principles are not abstract ideals — they are practical rules that reduce attack surface and limit the blast radius when something goes wrong. Zero trust has become the dominant modern architecture principle because it assumes breach rather than trying to prevent all access from outside a perimeter.",
        points: [
          "Least privilege — grant minimum permissions required for a task.",
          "Separation of duties — split sensitive tasks across multiple people.",
          "Defense in depth — layer multiple controls; a single failure should not compromise the whole.",
          "Fail secure — on failure, default to a secure (deny) state rather than open.",
          "Economy of mechanism — keep designs simple; complex systems are harder to secure.",
          "Open design — security should not depend on keeping the mechanism secret (Kerckhoffs's principle).",
          "Zero trust — trust no entity implicitly; verify continuously regardless of network location.",
        ],
      },
      {
        title: "Security Models",
        explanation: "Security models are mathematical frameworks that formalize access control rules. Bell-LaPadula and Biba are mirror images of each other — BLP protects confidentiality by controlling reads and writes based on classification labels, while Biba does the same for integrity. Clark-Wilson is the commercial model you see in financial systems with its separation of duties enforcement.",
        visual: {
          type: "table",
          headers: ["Model", "Protects", "Core Rules", "Typical Use"],
          rows: [
            ["Bell-LaPadula", "Confidentiality", "No read up; no write down", "Military/government classification systems"],
            ["Biba", "Integrity", "No read down; no write up", "Financial systems; safety-critical software"],
            ["Clark-Wilson", "Integrity", "Only valid programs (TPs) can transform data; separation of duties enforced", "Commercial accounting, ERP systems"],
            ["Brewer-Nash", "Confidentiality", "Access changes dynamically to avoid conflicts of interest", "Consulting firms; financial advisors"],
            ["Graham-Denning", "Access control", "8 rules for creating/deleting subjects & objects, transferring rights", "OS access control design"],
          ],
        },
        points: [
          "Bell-LaPadula — confidentiality model. No read up (Simple Security), no write down (*-property).",
          "Biba — integrity model. No read down, no write up. Opposite of BLP.",
          "Clark-Wilson — integrity model using transactions and separation of duties (CDI, UDI, IVP, TP).",
          "Brewer-Nash (Chinese Wall) — prevents conflicts of interest; dynamically changes access based on prior access.",
          "Graham-Denning — defines rules for creating/deleting subjects/objects and managing access rights.",
        ],
      },
      {
        title: "Cryptography",
        explanation: "Cryptography underpins almost every other security control — from HTTPS to digital signatures to VPNs. The key concept for the exam is that symmetric and asymmetric crypto are complementary: asymmetric solves the key distribution problem, symmetric provides the speed for bulk data. TLS uses both in a hybrid handshake.",
        visual: {
          type: "table",
          headers: ["Type", "Key Model", "Speed", "Algorithms", "Primary Use"],
          rows: [
            ["Symmetric", "Same key for encrypt & decrypt", "Fast (bulk data)", "AES, 3DES, ChaCha20", "Encrypting stored data, session encryption"],
            ["Asymmetric", "Public key encrypts; private key decrypts", "Slow (key exchange only)", "RSA, ECC, DH, DSA", "Key exchange, digital signatures, PKI"],
            ["Hashing", "One-way — no key", "Very fast", "SHA-256, SHA-3, BLAKE2", "Integrity verification, password storage"],
            ["Hybrid", "Asymmetric for key exchange + Symmetric for data", "Fast after handshake", "TLS, PGP", "Secure communications (HTTPS, email)"],
          ],
        },
        points: [
          "Symmetric encryption — same key for encrypt/decrypt. Fast; key distribution is the challenge.",
          "Asymmetric encryption — public/private key pair. Slower; solves key distribution.",
          "Hashing — one-way function producing a fixed-length digest. Used for integrity.",
          "Digital signatures — hash encrypted with sender's private key; provides integrity + non-repudiation.",
          "PKI — infrastructure for issuing, managing, and revoking digital certificates (CA, RA, CRL, OCSP).",
          "Key lengths: AES-128/256 (symmetric), RSA-2048+ (asymmetric), SHA-256+ (hashing).",
        ],
      },
      {
        title: "Evaluation Criteria",
        explanation: "Common Criteria replaced the older TCSEC (Orange Book) as the international standard for evaluating security products. EAL levels represent the depth of testing, not the strength of security — a product at EAL4 has been more rigorously tested than EAL2, but the actual security of the product depends on what was tested.",
        visual: {
          type: "table",
          headers: ["EAL", "Level Name", "Description"],
          rows: [
            ["EAL1", "Functionally Tested", "Basic confidence; tests against specification"],
            ["EAL2", "Structurally Tested", "Adds design analysis and vulnerability testing"],
            ["EAL3", "Methodically Tested & Checked", "Adds security engineering during development"],
            ["EAL4", "Methodically Designed & Reviewed", "Most common commercial target; good balance of rigor and cost"],
            ["EAL5–7", "Semiformally / Formally Verified", "High assurance; used for smart cards, military systems"],
          ],
        },
        points: [
          "Common Criteria (ISO 15408) — international standard for IT product security evaluation.",
          "EAL (Evaluation Assurance Levels) — EAL1 (lowest) to EAL7 (highest). EAL4 is most common commercial target.",
          "PP (Protection Profile) — describes security requirements for a product category.",
          "ST (Security Target) — vendor's implementation-specific security claims.",
          "TCSEC (Orange Book) — historical US DoD standard; superseded by Common Criteria.",
        ],
      },
      {
        title: "Physical Security",
        explanation: "Physical security is the last line of defense — an attacker with physical access to hardware can bypass almost any logical control. Layers move from the outer perimeter inward, and controls at each layer should be independent so that defeat of one does not compromise the next. Mantraps address tailgating, which remains one of the most common physical intrusion techniques.",
        visual: {
          type: "hierarchy",
          label: "Physical Security Layers (outer → inner)",
          levels: [
            { label: "Perimeter", sublabel: "Fences, bollards, lighting, CCTV, guards" },
            { label: "Facility / Building", sublabel: "Badge readers, mantraps, reception, visitor logs" },
            { label: "Work Area", sublabel: "Locked offices, clean-desk policy, privacy screens" },
            { label: "Sensitive Area (Data Center)", sublabel: "Biometrics, raised floors, HVAC, fire suppression, Faraday cage" },
          ],
        },
        points: [
          "CPTED — uses lighting, landscaping, and layout to deter crime through environmental design.",
          "Mantraps (airlock/sally port) — two-door entry system preventing tailgating.",
          "Data center controls: raised floors, HVAC redundancy, fire suppression (FM-200, not water).",
          "Faraday cage — shields against electromagnetic eavesdropping (TEMPEST).",
        ],
      },
    ],
    keyTerms: [
      { term: "Bell-LaPadula", definition: "Confidentiality model: no read up, no write down." },
      { term: "Biba", definition: "Integrity model: no read down, no write up." },
      { term: "Clark-Wilson", definition: "Integrity model using transactions and separation of duties." },
      { term: "EAL", definition: "Evaluation Assurance Level in Common Criteria, ranging EAL1–EAL7." },
      { term: "PKI", definition: "Public Key Infrastructure — system of CAs, certificates, and revocation mechanisms." },
      { term: "Mantrap", definition: "Two-door entry system allowing only one person through at a time." },
      { term: "Hybrid Encryption", definition: "Asymmetric crypto to exchange a symmetric session key for bulk encryption." },
    ],
    examTips: [
      "Bell-LaPadula = confidentiality; Biba = integrity. They are mirror images of each other.",
      "Clark-Wilson is the model for commercial integrity controls with separation of duties.",
      "Brewer-Nash is the 'conflicts of interest' model — think consulting firms.",
      "EAL4 is the highest level commonly achieved in commercial products.",
      "Hybrid encryption is how TLS works — memorize this pattern.",
    ],
  },

  // ─── CISSP D4 ───────────────────────────────────────────
  {
    domainId: "cissp-d4",
    overview: "Communication and Network Security (13%) covers the OSI and TCP/IP models, network topologies, secure protocols, wireless security, firewalls, and network-based attacks.",
    sections: [
      {
        title: "OSI & TCP/IP Models",
        explanation: "The OSI model is a conceptual framework — real protocols often span multiple layers. Its primary value for the exam is as a diagnostic tool: knowing which layer a protocol or device operates at tells you what it can and cannot do. Routers operate at Layer 3 (they can filter by IP); switches at Layer 2 (they filter by MAC); hubs at Layer 1 (they cannot filter at all).",
        visual: {
          type: "table",
          headers: ["OSI Layer", "Name", "Key Protocols", "Devices"],
          rows: [
            ["7", "Application", "HTTP, SMTP, DNS, FTP, SNMP", "Proxy, WAF"],
            ["6", "Presentation", "SSL/TLS (initiation), JPEG, MPEG", "—"],
            ["5", "Session", "NetBIOS, RPC, SQL sessions", "—"],
            ["4", "Transport", "TCP, UDP, TLS (data)", "Load balancer, firewall (stateful)"],
            ["3", "Network", "IP, ICMP, IPSec, OSPF", "Router, Layer-3 switch"],
            ["2", "Data Link", "Ethernet, ARP, 802.11, VLANs", "Switch, bridge, WAP"],
            ["1", "Physical", "Cables, fiber, radio waves", "Hub, repeater, NIC"],
          ],
        },
        points: [
          "TCP (Layer 4) — connection-oriented, reliable delivery with acknowledgements.",
          "UDP (Layer 4) — connectionless, fast but no guaranteed delivery.",
          "IP (Layer 3) — handles logical addressing and routing between networks.",
          "ARP (Layer 2) — resolves IP addresses to MAC addresses; vulnerable to poisoning.",
        ],
      },
      {
        title: "Network Security Devices",
        explanation: "Choosing the right security device depends on where in the network it sits and what it needs to inspect. Packet-filtering firewalls are fast but blind to application-layer attacks. NGFWs combine stateful inspection with deep packet inspection and application awareness — they are the current standard. IDS alerts; IPS blocks — this distinction drives many exam questions.",
        visual: {
          type: "table",
          headers: ["Device", "OSI Layer", "What It Does", "Limitation"],
          rows: [
            ["Packet-filtering firewall", "L3/L4", "Filters by IP, port, protocol", "No state; vulnerable to fragmentation attacks"],
            ["Stateful firewall", "L4", "Tracks connection state; validates packets against session", "Cannot inspect payload content"],
            ["Application firewall / Proxy", "L7", "Full content inspection; understands protocols", "Slower; single point of failure"],
            ["NGFW", "L3–L7", "Stateful + DPI + IPS + app awareness", "More expensive; requires tuning"],
            ["IDS", "Passive", "Detects and alerts on suspicious traffic", "Does not block attacks"],
            ["IPS", "Inline", "Detects and blocks attacks in real time", "Can cause false-positive outages"],
            ["WAF", "L7", "Protects web apps against OWASP Top 10", "Limited to HTTP/HTTPS traffic"],
          ],
        },
        points: [
          "IDS — monitors and alerts; does not block. HIDS (host-based), NIDS (network-based).",
          "IPS — inline device that actively blocks detected attacks.",
          "WAF (Web Application Firewall) — protects against OWASP Top 10 web attacks.",
          "UTM (Unified Threat Management) — all-in-one device combining firewall, IPS, antivirus.",
        ],
      },
      {
        title: "Wireless Security",
        explanation: "WEP is broken and must never be used. WPA2 with AES-CCMP remains widely deployed but is vulnerable to KRACK. WPA3 fixes the KRACK vulnerability by replacing the PSK handshake with SAE (Simultaneous Authentication of Equals), which provides forward secrecy. 802.1X with a RADIUS server is the enterprise standard for both wired and wireless authentication.",
        visual: {
          type: "table",
          headers: ["Standard", "Encryption", "Authentication", "Vulnerability"],
          rows: [
            ["WEP", "RC4 (broken)", "Shared key", "Completely broken — IV reuse allows key recovery in minutes"],
            ["WPA (TKIP)", "RC4 + TKIP", "PSK or 802.1X", "TKIP weaknesses; deprecated"],
            ["WPA2", "AES-CCMP", "PSK or 802.1X", "KRACK attack on 4-way handshake; dictionary attacks on PSK"],
            ["WPA3", "AES-CCMP / GCMP-256", "SAE (replaces PSK)", "Current standard; forward secrecy via SAE"],
          ],
        },
        points: [
          "WEP — broken; do not use.",
          "WPA2 — AES-CCMP encryption; still widely used. Vulnerable to KRACK attack.",
          "WPA3 — current standard; SAE provides forward secrecy.",
          "802.1X — port-based NAC; uses RADIUS server to authenticate before network access.",
          "Evil twin — rogue AP mimicking a legitimate network; mitigated by WIDS and 802.1X.",
        ],
      },
      {
        title: "Secure Protocols",
        explanation: "Protocol selection is a critical design decision — using insecure protocols is one of the most common causes of data breaches. TLS 1.3 eliminates legacy cipher suites and reduces the handshake from two round trips to one, improving both security and performance. SSH should replace Telnet everywhere — there is no valid reason to use Telnet on a modern network.",
        visual: {
          type: "table",
          headers: ["Secure Protocol", "Replaces", "Port", "Use Case"],
          rows: [
            ["TLS 1.3", "SSL, TLS 1.0/1.1/1.2", "443 (HTTPS)", "Encrypted web, API, and service communication"],
            ["SSH", "Telnet, rsh", "22", "Secure remote shell and SFTP file transfer"],
            ["IPSec", "None (adds encryption to IP)", "N/A", "VPNs, site-to-site encryption at Layer 3"],
            ["SFTP / FTPS", "FTP (plaintext)", "22 / 990", "Secure file transfer"],
            ["DNSSEC", "Plain DNS", "53", "Prevents DNS cache poisoning with cryptographic signatures"],
            ["S/MIME / PGP", "Plain email", "—", "Email encryption and digital signatures"],
          ],
        },
        points: [
          "TLS 1.3 — current standard for transport encryption; replaces SSL and TLS 1.2.",
          "IPSec — Layer 3 VPN protocol; AH (integrity), ESP (confidentiality+integrity), IKE (key exchange).",
          "SSH — secure remote administration; replaces Telnet.",
          "DNSSEC — adds cryptographic signatures to DNS to prevent cache poisoning.",
        ],
      },
      {
        title: "Network Attacks",
        explanation: "Most network attacks exploit predictable, well-understood weaknesses. ARP poisoning works because ARP has no authentication — any host can claim any IP. DNS poisoning corrupts the resolver cache so victims are silently redirected. DDoS attacks are hard to stop at the target; traffic scrubbing and anycast routing move the mitigation upstream closer to the traffic sources.",
        points: [
          "DoS/DDoS — overwhelms resources; mitigated by rate limiting, scrubbing centers, anycast routing.",
          "Man-in-the-Middle (MitM) — intercepts communication; mitigated by TLS and certificate pinning.",
          "ARP Poisoning — maps attacker's MAC to legitimate IP; mitigated by Dynamic ARP Inspection.",
          "DNS Poisoning — corrupts resolver cache; mitigated by DNSSEC.",
          "Session Hijacking — steals session tokens; mitigated by HTTPOnly, Secure cookies, short token lifetimes.",
        ],
      },
    ],
    keyTerms: [
      { term: "TLS", definition: "Transport Layer Security — protocol for encrypting data in transit." },
      { term: "IPSec", definition: "Internet Protocol Security — Layer 3 VPN and encryption framework." },
      { term: "VLAN", definition: "Virtual LAN — logical network segmentation at Layer 2." },
      { term: "802.1X", definition: "IEEE port-based Network Access Control standard using RADIUS authentication." },
      { term: "NGFW", definition: "Next-Generation Firewall — combines stateful inspection with application awareness and IPS." },
      { term: "Evil Twin", definition: "A rogue wireless AP that mimics a legitimate one to capture traffic." },
    ],
    examTips: [
      "Know which OSI layer each device/protocol operates at — routers=L3, switches=L2, hubs=L1.",
      "IPSec tunnel mode encrypts the entire original packet; transport mode encrypts only the payload.",
      "For wireless, WPA3 is the preferred answer; if not an option, WPA2 with AES (not TKIP).",
      "IDS detects and alerts; IPS detects and blocks — this distinction appears on every exam.",
    ],
  },

  // ─── CISSP D5 ───────────────────────────────────────────
  {
    domainId: "cissp-d5",
    overview: "Identity and Access Management (13%) covers how identities are created, authenticated, authorized, and managed. It spans access control models, federation, privileged access, and the identity lifecycle.",
    sections: [
      {
        title: "Authentication",
        explanation: "Authentication answers the question 'are you who you claim to be?' The three classic factors must come from different categories — using two passwords is single-factor, not MFA. Biometrics are measured by two error rates: FAR (the security risk — impostors accepted) and FRR (the usability cost — legitimate users rejected). The crossover point (CER) is where they are equal and is used to compare systems.",
        visual: {
          type: "table",
          headers: ["Factor Type", "Category", "Examples", "Weakness"],
          rows: [
            ["Something you know", "Knowledge", "Password, PIN, security question", "Can be guessed, phished, or leaked"],
            ["Something you have", "Possession", "Smart card, hardware token, OTP app", "Can be lost or stolen"],
            ["Something you are", "Inherence", "Fingerprint, retina, face, voice", "Cannot be changed if compromised; FAR/FRR tradeoff"],
            ["Somewhere you are", "Location", "GPS geolocation, IP range", "Spoofable; context-based only"],
          ],
        },
        points: [
          "MFA requires two or more different factor types.",
          "Biometric performance: FAR (False Accept Rate), FRR (False Reject Rate), CER (Crossover Error Rate — lower is better).",
          "Passwords: enforce complexity, length (12+ chars), and non-reuse; store as salted hashes.",
        ],
      },
      {
        title: "Access Control Models",
        explanation: "The access control model determines who controls permissions. In DAC the resource owner decides (flexible but risky). In MAC the system decides based on labels (rigid but high assurance). RBAC is the dominant enterprise model because it simplifies administration — change the role, change access for all users in it. ABAC is the most fine-grained and is increasingly used in cloud and zero-trust environments.",
        visual: {
          type: "table",
          headers: ["Model", "Who Controls Access", "Decision Based On", "Best For"],
          rows: [
            ["DAC", "Resource owner", "Owner's discretion", "Small teams; flexible environments"],
            ["MAC", "System (OS/kernel)", "Sensitivity labels (TS/S/C/U)", "Military; high-security government"],
            ["RBAC", "Administrator via roles", "User's role in the organization", "Enterprises; most common model"],
            ["ABAC", "Policy engine", "Attributes of user, resource & environment", "Cloud; zero-trust; fine-grained control"],
            ["Rule-Based", "Administrator via rules", "Conditions (time, location, IP)", "Firewalls; time-of-day restrictions"],
          ],
        },
        points: [
          "DAC (Discretionary) — resource owners set permissions. Flexible but vulnerable to Trojan horses.",
          "MAC (Mandatory) — labels-based; enforced by the OS. Used in high-security environments.",
          "RBAC (Role-Based) — permissions assigned to roles, users assigned to roles.",
          "ABAC (Attribute-Based) — fine-grained; decisions based on user, resource, and environment attributes.",
        ],
      },
      {
        title: "Identity Federation & SSO",
        explanation: "Federation solves the identity silo problem — instead of each application maintaining its own user database, a trusted identity provider (IdP) authenticates once and issues assertions or tokens that relying parties (service providers) accept. The critical exam distinction: OAuth 2.0 is authorization only; OIDC adds authentication on top of it.",
        visual: {
          type: "table",
          headers: ["Protocol", "Type", "Token Format", "Typical Use Case"],
          rows: [
            ["SAML 2.0", "Authentication + Authorization", "XML assertions", "Enterprise web SSO between org and SaaS apps"],
            ["OAuth 2.0", "Authorization only", "Access token (opaque/JWT)", "Delegated API access (e.g. 'Login with Google')"],
            ["OpenID Connect", "Authentication + Authorization", "ID token (JWT)", "Consumer SSO built on OAuth 2.0"],
            ["Kerberos", "Authentication", "Tickets (TGT + service tickets)", "On-premises Windows/AD environments"],
          ],
        },
        points: [
          "SSO (Single Sign-On) — one authentication grants access to multiple systems.",
          "SAML 2.0 — XML-based federation standard; used for web SSO (IdP issues assertions to SP).",
          "OAuth 2.0 — authorization framework; grants delegated access via tokens (not authentication).",
          "OpenID Connect (OIDC) — authentication layer on top of OAuth 2.0; adds ID tokens.",
          "Kerberos — ticket-based SSO for on-premises environments; uses KDC, TGT, and service tickets.",
        ],
      },
      {
        title: "Identity Lifecycle",
        explanation: "The identity lifecycle is a security process, not just an HR process. The highest-risk moments are onboarding (over-provisioning) and offboarding (delayed revocation). Access reviews — sometimes called recertification — catch drift where users accumulate permissions over time beyond what their role requires.",
        visual: {
          type: "steps",
          steps: [
            { label: "Provisioning", description: "Account created; role-appropriate access granted; NDA signed; training completed." },
            { label: "Active Use", description: "Least privilege enforced; access logs monitored; MFA required." },
            { label: "Access Review (Recertification)", description: "Periodic manager sign-off that user still needs current access; orphan accounts flagged." },
            { label: "Role Change", description: "Old permissions revoked; new permissions granted — avoid permission accumulation." },
            { label: "Deprovisioning", description: "All access revoked immediately on separation; credentials disabled; tokens invalidated." },
          ],
        },
        points: [
          "Provisioning — creating accounts and assigning appropriate access upon hire or role change.",
          "Access reviews — periodic verification that users still need their current access.",
          "Deprovisioning — immediately revoking all access upon termination; critical control.",
          "Orphan accounts — accounts that remain active after a user leaves; a major risk.",
        ],
      },
      {
        title: "Privileged Access Management",
        explanation: "Privileged accounts are the most valuable target for attackers — compromising an admin account often means game over for a network. PAM solutions enforce just-in-time access (privileges granted only when needed, revoked immediately after) and record every session, providing both deterrence and forensic capability.",
        points: [
          "PAM — controls and monitors access for admin/root accounts.",
          "Just-in-time (JIT) access — privileges granted only when needed and revoked afterward.",
          "Credential vaulting — storing privileged credentials in an encrypted vault.",
          "Session recording — full audit trail of privileged sessions for forensics and compliance.",
        ],
      },
    ],
    keyTerms: [
      { term: "MFA", definition: "Multi-Factor Authentication — requires two or more different factor types." },
      { term: "CER/EER", definition: "Crossover Error Rate — the point where FAR equals FRR; lower is better." },
      { term: "SAML", definition: "Security Assertion Markup Language — XML-based standard for web SSO federation." },
      { term: "OAuth 2.0", definition: "Authorization framework for delegated access using tokens; NOT an authentication protocol." },
      { term: "OIDC", definition: "OpenID Connect — authentication layer built on top of OAuth 2.0." },
      { term: "Kerberos", definition: "Ticket-based SSO protocol using a Key Distribution Center (KDC)." },
      { term: "PAM", definition: "Privileged Access Management — tools and processes for controlling admin-level accounts." },
    ],
    examTips: [
      "OAuth 2.0 is authorization, not authentication — OIDC adds the authentication layer. This is heavily tested.",
      "SAML is the answer when the question involves web-based SSO between an IdP and an SP.",
      "The FIRST step after an employee is terminated must be disabling/revoking all access.",
      "Lower CER = better biometric system. FAR is the security risk; FRR is the usability cost.",
    ],
  },

  // ─── CISSP D6 ───────────────────────────────────────────
  {
    domainId: "cissp-d6",
    overview: "Security Assessment and Testing (12%) addresses how organizations verify that security controls are working as intended.",
    sections: [
      {
        title: "Vulnerability Assessment vs Penetration Testing",
        explanation: "The key distinction is exploitation. A vulnerability scanner identifies potential weaknesses but never proves they are exploitable. A penetration tester actually exploits vulnerabilities to demonstrate real-world impact. Both are necessary — scans provide broad coverage; pen tests provide depth and business-relevant risk evidence.",
        visual: {
          type: "table",
          headers: ["Attribute", "Vulnerability Scan", "Penetration Test"],
          rows: [
            ["Exploits vulnerabilities?", "No", "Yes"],
            ["Frequency", "Continuous / weekly", "Annual / after major changes"],
            ["Scope", "Broad — entire environment", "Targeted — defined scope"],
            ["Output", "List of potential vulnerabilities", "Proof of exploitability + business impact"],
            ["Authorization required?", "Yes", "Yes (rules of engagement essential)"],
            ["Cost", "Lower", "Higher"],
          ],
        },
        points: [
          "Vulnerability scan — automated tool identifies potential weaknesses; does not exploit them.",
          "Penetration test — authorized simulated attack that actively exploits vulnerabilities.",
          "Black box — tester has no prior knowledge. White box — full knowledge including source code. Gray box — partial knowledge.",
          "Bug bounty programs invite external researchers to find vulnerabilities for rewards.",
        ],
      },
      {
        title: "Penetration Testing Phases",
        explanation: "Pen testing follows a structured methodology to ensure consistency, safety, and legal defensibility. The rules of engagement document is critical — it defines what systems are in scope, what techniques are permitted, and what happens if critical systems are accidentally impacted. Without it, 'penetration testing' is just unauthorized hacking.",
        visual: {
          type: "steps",
          steps: [
            { label: "Planning & Reconnaissance", description: "Define scope and rules of engagement; passive OSINT (DNS, WHOIS, LinkedIn, job postings)." },
            { label: "Scanning & Enumeration", description: "Active port scanning (Nmap), service identification, OS fingerprinting." },
            { label: "Exploitation", description: "Attempt to gain access using identified vulnerabilities; document each step." },
            { label: "Post-Exploitation", description: "Lateral movement, privilege escalation, persistence; demonstrate full business impact." },
            { label: "Reporting", description: "Detailed findings with evidence, risk ratings, and remediation recommendations." },
          ],
        },
        points: [
          "Rules of engagement must be formally agreed before testing begins.",
          "OSINT gathering uses public sources only — no active interaction with target systems.",
          "Exploitation phase attempts to gain access using identified vulnerabilities.",
          "Reporting should include risk ratings (CVSS), evidence, and prioritized remediation steps.",
        ],
      },
      {
        title: "Security Audits & Log Reviews",
        explanation: "Audits provide independent assurance that controls exist and are working. Log review is a detective control — it tells you what happened, not what is happening right now. SIEM platforms automate log aggregation and correlation, enabling analysts to identify patterns that would be invisible in raw log files.",
        points: [
          "Internal audit — conducted by the organization's own team; less independent.",
          "External audit — conducted by an independent third party; required for many compliance frameworks.",
          "Log review — examining audit trails for anomalies, policy violations, and security events.",
          "SIEM (Security Information and Event Management) — aggregates and correlates logs across the environment.",
          "Code review — SAST examines code without executing it; DAST tests running code.",
        ],
      },
      {
        title: "Vulnerability Scoring (CVSS)",
        explanation: "CVSS provides a standardized language for communicating vulnerability severity. The base score reflects the inherent characteristics of the vulnerability; temporal scores adjust for whether an exploit is available; environmental scores adjust for the specific organization. For exam purposes, know the severity thresholds and what the base score components measure.",
        visual: {
          type: "table",
          headers: ["CVSS Score", "Severity", "Typical Response"],
          rows: [
            ["9.0 – 10.0", "Critical", "Emergency patch within 24–72 hours"],
            ["7.0 – 8.9", "High", "Patch within 7–30 days"],
            ["4.0 – 6.9", "Medium", "Patch within 30–90 days"],
            ["0.1 – 3.9", "Low", "Patch at next maintenance window"],
            ["0.0", "None", "Informational — no action required"],
          ],
        },
        points: [
          "CVSS (Common Vulnerability Scoring System) — standardized 0-10 score for vulnerability severity.",
          "CVSS Base score components: attack vector, complexity, privileges required, user interaction, scope, CIA impact.",
          "CVE — unique identifier for publicly known vulnerabilities.",
          "NVD — NIST-maintained database enriching CVE data with CVSS scores.",
        ],
      },
    ],
    keyTerms: [
      { term: "CVSS", definition: "Common Vulnerability Scoring System — 0-10 score representing vulnerability severity." },
      { term: "CVE", definition: "Common Vulnerabilities and Exposures — unique identifier for known vulnerabilities." },
      { term: "SAST", definition: "Static Application Security Testing — code analysis without execution." },
      { term: "DAST", definition: "Dynamic Application Security Testing — testing a running application." },
      { term: "SIEM", definition: "Security Information and Event Management — centralized log aggregation and correlation." },
      { term: "Rules of Engagement", definition: "Formal document defining the scope, timing, and limitations of a penetration test." },
    ],
    examTips: [
      "Pen testing always requires written authorization — without it, it is a crime.",
      "Vulnerability scans identify; pen tests exploit. Know which is appropriate for a given scenario.",
      "CVSS 9.0–10.0 = Critical, 7.0–8.9 = High — know the thresholds for triage questions.",
      "Log review is a detective control — it identifies what happened, not prevents it.",
    ],
  },

  // ─── CISSP D7 ───────────────────────────────────────────
  {
    domainId: "cissp-d7",
    overview: "Security Operations (13%) covers incident response, digital forensics, disaster recovery, change management, and patch management.",
    sections: [
      {
        title: "Incident Response",
        explanation: "Incident response is a structured process — improvising during a breach is one of the most common causes of poor outcomes. The PICERL lifecycle is the framework most tested on CISSP. The critical ordering rule: always contain before eradicating. Attempting to eradicate (clean up) without containment first means the attacker can re-enter as fast as you clean.",
        visual: {
          type: "steps",
          steps: [
            { label: "Preparation", description: "Develop IR plan; train the CSIRT; deploy detection tools; establish communication channels." },
            { label: "Identification", description: "Confirm an incident has occurred; determine scope and severity; distinguish from false positives." },
            { label: "Containment", description: "Short-term (isolate system); long-term (segment network). Preserve evidence before remediation." },
            { label: "Eradication", description: "Remove malware, backdoors, and unauthorized accounts; close the entry vector." },
            { label: "Recovery", description: "Restore systems from known-good backups; validate normal operation; enhanced monitoring." },
            { label: "Lessons Learned", description: "Post-incident review within 2 weeks; update plans, controls, and detection rules." },
          ],
        },
        points: [
          "PICERL phases: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned.",
          "Containment comes before eradication — stop the spread first.",
          "Preserve evidence before taking remediation actions.",
          "Lessons learned is required — it drives continuous improvement.",
        ],
      },
      {
        title: "Digital Forensics",
        explanation: "Forensics is evidence collection under legal scrutiny — every action must be documented, and the integrity of evidence must be provable. The order of volatility is the forensic equivalent of triage: collect what disappears fastest first. A chain of custody document follows evidence from collection through presentation in court.",
        visual: {
          type: "steps",
          steps: [
            { label: "CPU registers & cache", description: "Most volatile — lost the moment the system is touched." },
            { label: "RAM (system memory)", description: "Contains running processes, encryption keys, network connections. Collect before powering off." },
            { label: "Swap / page file", description: "RAM overflow on disk — can contain fragments of memory content." },
            { label: "Disk (HDD/SSD)", description: "Persistent storage — image with write blocker; verify with hash." },
            { label: "Remote logs / SIEM", description: "Network and application logs stored externally — preserve before retention expires." },
            { label: "Backup / archived media", description: "Least volatile — usually preserved by retention policy." },
          ],
        },
        points: [
          "Order of volatility — collect most volatile evidence first (CPU → RAM → swap → disk → logs → archives).",
          "Chain of custody — documented evidence handling to ensure admissibility.",
          "Write blockers — prevent any modification to storage media during forensic acquisition.",
          "Forensic images — bit-for-bit copies verified with hashes (MD5 + SHA-256).",
          "Legal hold — preserve all relevant data when litigation is anticipated.",
        ],
      },
      {
        title: "Disaster Recovery (DRP)",
        explanation: "Disaster recovery is the technology-recovery component of the broader BCP. Site selection is a classic cost-versus-recovery-time tradeoff: hot sites are expensive but fast; cold sites are cheap but slow. Cloud DR has disrupted traditional site models — many organizations now use cloud as their hot standby, paying only for what they use during an actual disaster.",
        visual: {
          type: "table",
          headers: ["Site Type", "Equipment", "Data Currency", "Activation Time", "Cost"],
          rows: [
            ["Hot site", "Fully equipped & powered", "Real-time or near-real-time", "Minutes to hours", "Very high"],
            ["Warm site", "Partially equipped", "Recent backup (hours/days old)", "Hours to days", "Moderate"],
            ["Cold site", "Basic infrastructure only (power, space)", "Must be restored from backup", "Days to weeks", "Low"],
            ["Cloud DR", "On-demand provisioned", "Configurable (near-real-time possible)", "Minutes to hours", "Pay-as-you-use"],
          ],
        },
        points: [
          "Hot site — fully equipped standby facility; can take over within hours. Most expensive.",
          "Warm site — partially equipped; needs some setup time. Balanced cost.",
          "Cold site — basic facility; days/weeks to activate. Cheapest.",
          "DR tests: tabletop (discussion) → walk-through → parallel → full interruption (highest risk).",
        ],
      },
      {
        title: "Change & Patch Management",
        explanation: "Change management and patch management are both about controlling what changes on systems — one proactively (change management), one reactively (patching). The Change Advisory Board (CAB) is the governance body that reviews and approves changes. Emergency change processes bypass the normal approval cycle but still require documentation after the fact.",
        points: [
          "Change management ensures changes are planned, tested, approved, and documented before deployment.",
          "Change Advisory Board (CAB) — reviews and approves proposed changes.",
          "Patch prioritization: CVSS score + exploitability in the wild + asset criticality.",
          "Configuration baselines — approved system configurations against which drift is detected.",
        ],
      },
    ],
    keyTerms: [
      { term: "PICERL", definition: "Incident response phases: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned." },
      { term: "Chain of Custody", definition: "Documented record of who handled evidence and when, maintaining integrity for legal use." },
      { term: "Hot Site", definition: "Fully operational alternate facility that can assume operations within hours." },
      { term: "Legal Hold", definition: "Directive to preserve all potentially relevant data in anticipation of litigation." },
      { term: "Order of Volatility", definition: "Forensics principle: collect the most transient evidence first (CPU → RAM → disk)." },
    ],
    examTips: [
      "In IR, containment comes before eradication — stop the bleeding before you clean the wound.",
      "Preserve evidence before remediation — forensic integrity cannot be restored after the fact.",
      "MTD > RTO — RTO must be less than MTD; otherwise the organization cannot survive the recovery window.",
      "Legal hold supersedes ALL retention and destruction schedules.",
    ],
  },

  // ─── CISSP D8 ───────────────────────────────────────────
  {
    domainId: "cissp-d8",
    overview: "Software Development Security (10%) covers securing the SDLC, applying secure coding practices, and managing security risks in applications and databases.",
    sections: [
      {
        title: "Secure SDLC",
        explanation: "Security injected at the requirements and design stages costs a fraction of security bolted on after release — this is the 'shift left' principle. Threat modeling during design is the highest-leverage activity: it identifies architectural risks before a single line of code is written, when they are cheapest to fix.",
        visual: {
          type: "steps",
          steps: [
            { label: "Requirements", description: "Define security and privacy requirements alongside functional ones; identify compliance obligations." },
            { label: "Design", description: "Threat modeling (STRIDE/PASTA); secure architecture review; define security controls." },
            { label: "Implementation", description: "Secure coding standards (OWASP, CERT); peer code review; dependency scanning (SCA)." },
            { label: "Testing", description: "SAST, DAST, IAST, fuzz testing, penetration testing before release." },
            { label: "Deployment", description: "Secure configuration; secrets management; hardening; infrastructure-as-code scanning." },
            { label: "Maintenance", description: "Patch management; vulnerability monitoring; incident response integration; secure retirement." },
          ],
        },
        points: [
          "Security must be integrated at every SDLC phase, not added at the end.",
          "Threat modeling during design is the highest-leverage activity.",
          "Security gates are formal checkpoints requiring security sign-off to proceed.",
        ],
      },
      {
        title: "OWASP Top 10",
        explanation: "The OWASP Top 10 is the most widely referenced list of critical web application security risks. It is updated every few years based on real-world data from thousands of applications. Understanding each risk category helps you select the right controls — the mitigation for injection is fundamentally different from the mitigation for broken access control.",
        visual: {
          type: "table",
          headers: ["#", "Risk", "Root Cause", "Primary Mitigation"],
          rows: [
            ["A01", "Broken Access Control", "Authorization not enforced server-side", "Deny by default; test all access paths"],
            ["A02", "Cryptographic Failures", "Weak/missing encryption", "TLS everywhere; strong algorithms; no hardcoded keys"],
            ["A03", "Injection (SQL, LDAP, OS)", "Untrusted data sent to interpreter", "Parameterized queries; input validation"],
            ["A04", "Insecure Design", "Missing security architecture", "Threat modeling; security requirements; design review"],
            ["A05", "Security Misconfiguration", "Default credentials; open storage", "Hardening; change defaults; disable unused features"],
            ["A06", "Vulnerable Components", "Unpatched libraries", "SCA scanning; dependency pinning; patch management"],
            ["A07", "Auth Failures", "Weak passwords; broken sessions", "MFA; secure session management; credential hashing"],
            ["A08", "Data Integrity Failures", "Unsigned updates; insecure deserialization", "Digital signatures; integrity verification"],
            ["A09", "Logging Failures", "Insufficient audit trails", "Centralized logging; SIEM alerting"],
            ["A10", "SSRF", "Server fetches attacker-controlled URLs", "Allowlist outbound destinations; block internal ranges"],
          ],
        },
        points: [
          "Broken Access Control is the #1 risk — users acting outside intended permissions.",
          "Injection is prevented by parameterized queries, not input filtering alone.",
          "Insecure Design is an architectural risk — it cannot be fixed with patches.",
        ],
      },
      {
        title: "Secure Coding Practices",
        explanation: "Secure coding is about eliminating classes of vulnerabilities systematically rather than patching individual bugs. Parameterized queries make SQL injection architecturally impossible — the query structure and the data are never concatenated. Output encoding prevents XSS — they address different injection points and both are required.",
        points: [
          "Input validation — validate all input server-side; never trust client-supplied data.",
          "Parameterized queries (prepared statements) — the primary defense against SQL injection.",
          "Output encoding — prevent XSS by encoding output before rendering in the browser.",
          "Error handling — show generic error messages to users; log detailed errors internally.",
          "Secrets management — never hardcode credentials; use vaults or environment variables.",
        ],
      },
      {
        title: "DevSecOps",
        explanation: "DevSecOps integrates security into the CI/CD pipeline so that every code commit is automatically scanned for security issues. The goal is to make the secure path the easy path — developers get security feedback in their normal workflow rather than receiving a report weeks after code was written. An SBOM (Software Bill of Materials) is increasingly required by regulation and customers.",
        points: [
          "Shifts security left — integrates security checks into CI/CD pipelines.",
          "SAST in pipeline — scan code on every commit for security vulnerabilities.",
          "Container security — scan images for CVEs; use minimal base images.",
          "Software Bill of Materials (SBOM) — inventory of all components and dependencies.",
        ],
      },
    ],
    keyTerms: [
      { term: "STRIDE", definition: "Threat modeling framework: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege." },
      { term: "SQL Injection", definition: "Attack that inserts malicious SQL into input fields to manipulate a database." },
      { term: "XSS", definition: "Cross-Site Scripting — injecting malicious scripts into web pages viewed by other users." },
      { term: "SBOM", definition: "Software Bill of Materials — complete inventory of software components and dependencies." },
      { term: "DevSecOps", definition: "Practice of integrating security continuously throughout the DevOps pipeline." },
    ],
    examTips: [
      "Parameterized queries are the ONLY reliable defense against SQL injection.",
      "STRIDE is the threat modeling framework most associated with CISSP.",
      "Input validation prevents injection; output encoding prevents XSS — two different controls for two different risks.",
      "Security in requirements is exponentially cheaper than security in maintenance.",
    ],
  },

  // ─── CGRC D1 ───────────────────────────────────────────
  {
    domainId: "cgrc-d1",
    overview: "The Information Security Risk Management Program domain establishes the foundation of the NIST RMF. It covers how organizations integrate risk management into the SDLC, define roles, and set policies that govern the entire RMF process.",
    sections: [
      {
        title: "NIST RMF Overview",
        explanation: "The RMF replaced the legacy Certification and Accreditation (C&A) process and introduced the concept of ongoing authorization — security is continuously monitored rather than assessed once every three years and forgotten. Rev 2 added the Prepare step at the front of the process to ensure organizational context is established before system-level work begins.",
        visual: {
          type: "steps",
          steps: [
            { label: "Prepare", description: "Establish organizational context, risk tolerance, common controls, and governance before system work begins. (Added in RMF Rev 2)" },
            { label: "Categorize", description: "Determine the system's impact level (Low/Moderate/High) using FIPS 199 and NIST SP 800-60." },
            { label: "Select", description: "Choose the appropriate control baseline from SP 800-53B; tailor as needed." },
            { label: "Implement", description: "Deploy controls; document implementation details in the System Security Plan (SSP)." },
            { label: "Assess", description: "Evaluate whether controls are implemented correctly using SP 800-53A procedures; produce the SAR." },
            { label: "Authorize", description: "AO reviews SSP + SAR + POA&M and issues an ATO, DATO, or IATO." },
            { label: "Monitor", description: "Continuously assess controls; report status; respond to changes; maintain authorization." },
          ],
        },
        points: [
          "RMF (NIST SP 800-37) integrates security and privacy into the SDLC.",
          "The Prepare step was added in RMF Rev 2.",
          "RMF is risk-based — controls are selected based on categorization, not one-size-fits-all.",
        ],
      },
      {
        title: "Key Roles & Responsibilities",
        explanation: "Role clarity is essential in the RMF — multiple people share responsibility and confusion leads to gaps. The Authorizing Official is the most tested role: they are the only person who can formally accept residual risk and issue an ATO. The AO is always a senior executive, not a security professional.",
        visual: {
          type: "table",
          headers: ["Role", "Primary Responsibility", "Key Accountability"],
          rows: [
            ["Authorizing Official (AO)", "Reviews authorization package; accepts residual risk", "Issues ATO / DATO — the single most accountable role"],
            ["System Owner", "Manages the system; coordinates security activities", "Accountable for the system's security posture"],
            ["ISSO", "Day-to-day security operations for a specific system", "Maintains SSP; monitors controls; reports to ISSM"],
            ["ISSM", "Oversees security program across multiple systems", "Supervises ISSOs; advises AO"],
            ["Security Control Assessor (SCA)", "Independently assesses implemented controls", "Produces SAR; must be independent of the system owner"],
            ["Common Control Provider", "Develops controls inherited by multiple systems", "Maintains shared control documentation"],
          ],
        },
        points: [
          "AO — senior executive who accepts residual risk and issues the ATO.",
          "System Owner — manages the information system and is accountable for its security.",
          "SCA — independently assesses whether controls are implemented correctly.",
          "ISSO — day-to-day security operations for a specific system.",
        ],
      },
      {
        title: "Foundational Documents",
        explanation: "The NIST SP 800-series documents form an interconnected framework — each one references others. FIPS 199 feeds into 800-60 which feeds into control selection from 800-53. Think of them as a cascade: categorization drives selection, selection drives implementation, and 800-53A tells you how to assess what was implemented.",
        visual: {
          type: "table",
          headers: ["Document", "Purpose", "Used In RMF Step"],
          rows: [
            ["FIPS 199", "Defines Low/Moderate/High impact levels for CIA", "Categorize"],
            ["NIST SP 800-60", "Maps information types to impact levels", "Categorize"],
            ["NIST SP 800-53 Rev 5", "Catalog of security and privacy controls", "Select"],
            ["NIST SP 800-53B", "Control baselines (Low/Moderate/High)", "Select"],
            ["NIST SP 800-53A", "Assessment procedures for each control", "Assess"],
            ["NIST SP 800-37", "The RMF process itself", "All steps"],
            ["NIST SP 800-30", "Risk assessment methodology", "Prepare / Assess"],
            ["NIST SP 800-137", "Continuous monitoring program", "Monitor"],
          ],
        },
        points: [
          "FIPS 199 — categorization standards (Low/Moderate/High).",
          "SP 800-53 — security and privacy controls catalog.",
          "SP 800-53A — assessment procedures for those controls.",
          "FIPS 200 — minimum security requirements for federal systems.",
        ],
      },
      {
        title: "Risk Management Concepts",
        explanation: "The RMF is fundamentally a risk management process — every decision from categorization to authorization is a risk decision. Common controls are one of the most powerful efficiency mechanisms in the framework: a shared control is implemented once by a provider and inherited by multiple systems, reducing cost and duplication.",
        points: [
          "Common control — protects multiple systems; reduces duplication; inherited by child systems.",
          "System-specific control — applies only to one system.",
          "Hybrid control — partially common, partially system-specific.",
          "Organization-wide risk framing sets the context for all subordinate risk decisions.",
          "Threat sources: adversarial, accidental, structural, and environmental.",
        ],
      },
    ],
    keyTerms: [
      { term: "RMF", definition: "Risk Management Framework — NIST SP 800-37 process for managing security and privacy risk." },
      { term: "ATO", definition: "Authority to Operate — formal authorization for a system to process information." },
      { term: "AO", definition: "Authorizing Official — senior executive who grants or denies an ATO." },
      { term: "ISSO", definition: "Information System Security Officer — day-to-day security lead for a specific system." },
      { term: "Common Control", definition: "A security control inherited by and protecting multiple information systems." },
      { term: "FIPS 199", definition: "Federal standard defining Low, Moderate, High impact categories." },
    ],
    examTips: [
      "Know all 7 RMF steps in order: Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor.",
      "The AO accepts risk — they do not implement controls. The System Owner implements.",
      "RMF Rev 2 added the Prepare step — this is a commonly tested fact.",
      "FIPS 199 drives categorization; categorization drives control baseline selection from SP 800-53B.",
    ],
  },

  // ─── CGRC D2 ───────────────────────────────────────────
  {
    domainId: "cgrc-d2",
    overview: "This domain covers how organizations define the boundaries of their information systems, categorize them by impact level, and document them in the System Security Plan (SSP).",
    sections: [
      {
        title: "System Categorization",
        explanation: "Categorization is the most consequential step in the RMF — get it wrong and every subsequent decision is built on a faulty foundation. The high water mark rule means a system with even one High-impact information type is categorized as a High-impact system overall, regardless of other types. This prevents downward pressure on categorization.",
        visual: {
          type: "table",
          headers: ["Impact Level", "CIA Potential Impact", "Typical Example"],
          rows: [
            ["Low", "Limited adverse effect on operations, assets, or individuals", "Public-facing information website; internal newsletters"],
            ["Moderate", "Serious adverse effect — significant damage", "HR systems; financial reporting; most enterprise apps"],
            ["High", "Severe or catastrophic adverse effect — major damage or loss of life", "Life-safety systems; national security; payment infrastructure"],
          ],
        },
        points: [
          "FIPS 199 categorizes systems as Low, Moderate, or High based on CIA impact.",
          "High Water Mark — overall system category equals the highest single CIA impact value.",
          "Example: Confidentiality=Low, Integrity=High, Availability=Moderate → system is categorized HIGH.",
          "Categorization determines which SP 800-53B control baseline applies.",
        ],
      },
      {
        title: "System Boundaries & Interconnections",
        explanation: "The authorization boundary defines the scope of the ATO — only what is inside the boundary is covered. Systems that connect across the boundary require formal interconnection agreements. In cloud environments, the boundary is split between the cloud service provider (CSP) and the customer under a shared responsibility model.",
        points: [
          "Authorization boundary defines what hardware, software, data, and interfaces are included in the ATO.",
          "Interconnection Security Agreement (ISA) + MOU/MOA required for connected systems outside the boundary.",
          "OSCAL — machine-readable format for documenting boundaries and control implementations.",
          "Shared responsibility in cloud: CSP owns infrastructure controls; customer owns data and application controls.",
        ],
      },
      {
        title: "System Security Plan (SSP)",
        explanation: "The SSP is the master document for the system's security posture — it describes what the system does, what data it processes, what controls are in place, and how each control is implemented. It is a living document updated whenever the system or its environment changes significantly.",
        points: [
          "The SSP is the primary artifact describing how the system meets its security requirements.",
          "Contains: system description, boundary diagram, categorization, data types, interconnections, control implementations.",
          "Control implementation statements describe HOW each required control is satisfied.",
          "Updated throughout the lifecycle; reviewed and approved by the AO.",
        ],
      },
    ],
    keyTerms: [
      { term: "High Water Mark", definition: "Method of determining system categorization — the overall level equals the highest individual CIA impact." },
      { term: "Authorization Boundary", definition: "The defined perimeter of an information system subject to a single ATO." },
      { term: "SSP", definition: "System Security Plan — master document describing system security posture and control implementations." },
      { term: "ISA", definition: "Interconnection Security Agreement — defines security requirements for connecting two systems." },
    ],
    examTips: [
      "High Water Mark: practice the calculation — one High value makes the whole system High.",
      "The SSP documents WHAT controls are required and HOW they are implemented.",
      "Systems outside the authorization boundary require separate ATOs or formal interconnection agreements.",
    ],
  },

  // ─── CGRC D3 ───────────────────────────────────────────
  {
    domainId: "cgrc-d3",
    overview: "This domain covers selecting the right security and privacy controls from SP 800-53, tailoring them to the specific system, and getting the tailored set approved before implementation.",
    sections: [
      {
        title: "Control Selection from SP 800-53",
        explanation: "SP 800-53 Rev 5 is organized into 20 control families covering the full spectrum of security and privacy. Each family has an identifier (AC for Access Control, AU for Audit, etc.). The baseline for a given system is determined by its categorization — a Moderate system uses the Moderate baseline, which is a superset of the Low baseline.",
        visual: {
          type: "table",
          headers: ["Family ID", "Family Name", "Family ID", "Family Name"],
          rows: [
            ["AC", "Access Control", "MP", "Media Protection"],
            ["AT", "Awareness and Training", "PE", "Physical & Environmental Protection"],
            ["AU", "Audit and Accountability", "PL", "Planning"],
            ["CA", "Assessment, Auth & Monitoring", "PM", "Program Management"],
            ["CM", "Configuration Management", "PS", "Personnel Security"],
            ["CP", "Contingency Planning", "PT", "PII Processing & Transparency"],
            ["IA", "Identification & Authentication", "RA", "Risk Assessment"],
            ["IR", "Incident Response", "SA", "System & Services Acquisition"],
            ["MA", "Maintenance", "SC", "System & Comms Protection"],
            ["SI", "System & Info Integrity", "SR", "Supply Chain Risk Management"],
          ],
        },
        points: [
          "SP 800-53 Rev 5 contains 20 control families.",
          "SP 800-53B provides the Low, Moderate, and High control baselines.",
          "Privacy controls (PT family) are integrated in Rev 5.",
          "Higher baselines are supersets — Moderate includes all Low controls plus additional ones.",
        ],
      },
      {
        title: "Tailoring Controls",
        explanation: "Tailoring is not about weakening the baseline — it is about making it fit. A control designed for on-premises servers may not apply to a SaaS application; scoping it out is appropriate and documented. Compensating controls must provide equivalent protection to what they replace, and the justification must be documented and approved.",
        visual: {
          type: "table",
          headers: ["Tailoring Technique", "What It Does", "Example"],
          rows: [
            ["Scoping", "Removes inapplicable controls", "Remove physical media controls for a cloud-only system"],
            ["Compensating Controls", "Substitutes an alternative when baseline control cannot be met", "Network monitoring compensates for inability to encrypt legacy protocol"],
            ["Supplementing", "Adds controls beyond the baseline", "Adding extra logging for a high-visibility system"],
            ["Overlays", "Applies environment-specific guidance", "Cloud overlay, ICS overlay, privacy overlay"],
            ["Organization-Defined Parameters (ODPs)", "Sets specific values within control statements", "Setting the password minimum length to 15 characters"],
          ],
        },
        points: [
          "Scoping — removing controls that are not applicable to the system's technology or environment.",
          "Compensating controls — alternative measures when a baseline control cannot be implemented.",
          "Supplementing — adding controls beyond the baseline when risk warrants it.",
          "ODPs — values that organizations must specify for certain control requirements.",
        ],
      },
    ],
    keyTerms: [
      { term: "SP 800-53", definition: "NIST catalog of security and privacy controls for federal information systems." },
      { term: "Control Baseline", definition: "Pre-selected set of controls from SP 800-53 for a Low/Moderate/High impact system." },
      { term: "Tailoring", definition: "Process of adjusting the baseline by scoping, compensating, or supplementing controls." },
      { term: "Overlay", definition: "Supplemental guidance modifying a baseline for a specific technology or environment." },
      { term: "Compensating Control", definition: "An alternative control applied when the specified baseline control cannot be implemented." },
    ],
    examTips: [
      "Know all 20 SP 800-53 control family acronyms — they appear in questions about which control addresses a given risk.",
      "Compensating controls must provide equivalent protection — they are not a way to reduce security.",
      "Scoping removes controls; supplementing adds them. Both require documentation and AO approval.",
    ],
  },

  // ─── CGRC D4 ───────────────────────────────────────────
  {
    domainId: "cgrc-d4",
    overview: "The Implementation domain covers putting selected controls into practice — configuring systems, documenting implementation details, managing configurations, and ensuring supply chain security.",
    sections: [
      {
        title: "Control Implementation",
        explanation: "Controls fall into three implementation types that work together. Technical controls are the most automated and scalable. Operational controls depend on people following processes consistently. Management controls establish the governance and oversight that ensure the other two types remain effective. All three must be present; a gap in any layer weakens the overall posture.",
        visual: {
          type: "table",
          headers: ["Control Type", "Implemented By", "Examples"],
          rows: [
            ["Technical", "Hardware and software", "Encryption, access control lists, firewalls, MFA, audit logging"],
            ["Operational", "People and processes", "Security training, incident response procedures, patch management, backups"],
            ["Management", "Governance and oversight", "Risk assessments, security planning, system authorization, policy"],
          ],
        },
        points: [
          "Technical controls — implemented in hardware/software (encryption, access controls).",
          "Operational controls — implemented through processes (training, incident response).",
          "Management controls — governance and risk management (risk assessment, planning).",
          "Implementation must match the SSP control implementation statements exactly.",
        ],
      },
      {
        title: "Configuration Management",
        explanation: "Configuration management prevents unauthorized or undocumented changes from degrading security posture. STIGs are DoD-specific hardening guides; CIS Benchmarks are the industry equivalent. SCAP automates the verification that configurations match the approved baseline, enabling continuous compliance checking at scale.",
        points: [
          "Configuration baseline — approved set of settings for a system component.",
          "STIGs (Security Technical Implementation Guides) — DoD hardening guides for common platforms.",
          "CIS Benchmarks — industry configuration hardening guides from the Center for Internet Security.",
          "SCAP — automates configuration checking and vulnerability scanning.",
          "Change control — all changes to configuration items must go through formal approval.",
        ],
      },
      {
        title: "Supply Chain Risk Management (SCRM)",
        explanation: "Supply chain attacks — where adversaries compromise software or hardware before it reaches the target organization — have become one of the most impactful attack vectors. NIST SP 800-161 provides the framework. An SBOM makes the software supply chain visible, enabling rapid response when a component is found to be vulnerable.",
        points: [
          "SP 800-161 — NIST guidance for supply chain risk management.",
          "Risks include: counterfeit components, tampered hardware/software, sole-source dependency.",
          "Controls: vendor vetting, software composition analysis, hardware attestation, SBOM requirements.",
          "EO 14028 designated critical software with enhanced SCRM requirements.",
        ],
      },
    ],
    keyTerms: [
      { term: "STIG", definition: "Security Technical Implementation Guide — DoD hardening configuration standard." },
      { term: "SCAP", definition: "Security Content Automation Protocol — standard for automated security configuration assessment." },
      { term: "SCRM", definition: "Supply Chain Risk Management — managing security risks from the technology supply chain." },
      { term: "CIS Benchmarks", definition: "Vendor-neutral hardening guides from the Center for Internet Security." },
    ],
    examTips: [
      "STIGs are DoD-specific; CIS Benchmarks are the civilian/commercial equivalent.",
      "SCRM is increasingly prominent in CGRC — know SP 800-161 and EO 14028.",
      "The SSP control implementation statements must accurately describe what is deployed — not what is planned.",
    ],
  },

  // ─── CGRC D5 ───────────────────────────────────────────
  {
    domainId: "cgrc-d5",
    overview: "Assessment covers the formal evaluation of implemented controls to determine whether they are functioning as intended. It produces the Security Assessment Report (SAR) which informs the authorization decision.",
    sections: [
      {
        title: "Security Assessment Process",
        explanation: "Assessment is not the same as auditing — it specifically evaluates whether controls are implemented correctly per SP 800-53A procedures. The three assessment methods (Examine, Interview, Test) are used in combination: you examine the policy, interview the administrator, then test that the control actually works as described. Independence of the assessor is critical for objectivity.",
        visual: {
          type: "table",
          headers: ["Method", "What You Do", "Example"],
          rows: [
            ["Examine", "Review documentation, configurations, logs", "Review the access control policy; inspect firewall rule sets; examine audit logs"],
            ["Interview", "Question personnel about processes and practices", "Ask the sysadmin how patches are applied; ask security staff how incidents are reported"],
            ["Test", "Technically test the control's function", "Attempt to log in with an expired account; verify encryption is applied to stored data"],
          ],
        },
        points: [
          "Governed by SP 800-53A — provides assessment procedures for every SP 800-53 control.",
          "Assessments should be conducted by an independent party.",
          "Findings are rated: Satisfied, or Other Than Satisfied (OTS — control not working as required).",
          "OTS findings feed directly into the POA&M.",
        ],
      },
      {
        title: "Security Assessment Report (SAR) & POA&M",
        explanation: "The SAR is the output of assessment — it documents what was tested, how it was tested, and what was found. OTS findings are not failures of the authorization process; they are expected inputs to the risk-based authorization decision. The POA&M tracks the remediation of those findings with owners, resources, and milestones.",
        visual: {
          type: "table",
          headers: ["Document", "Purpose", "Who Produces It", "Who Uses It"],
          rows: [
            ["SAR", "Documents assessment findings and evidence", "Security Control Assessor (SCA)", "AO — to make authorization decision"],
            ["POA&M", "Tracks weaknesses and remediation plans", "ISSO / System Owner", "AO — to judge residual risk acceptability"],
          ],
        },
        points: [
          "SAR — documents assessment results including findings, evidence, and recommendations.",
          "OTS findings feed into the POA&M.",
          "POA&M tracks unresolved weaknesses with remediation plans and dates.",
          "High-risk open POA&M items may prevent an ATO.",
        ],
      },
    ],
    keyTerms: [
      { term: "SAR", definition: "Security Assessment Report — documents findings from evaluating implemented security controls." },
      { term: "POA&M", definition: "Plan of Action and Milestones — tracks security weaknesses and remediation plans." },
      { term: "SP 800-53A", definition: "NIST guide providing assessment procedures for each SP 800-53 control." },
      { term: "OTS", definition: "Other Than Satisfied — assessment finding indicating a control is not correctly implemented." },
    ],
    examTips: [
      "The three assessment methods are Examine, Interview, and Test — all three are typically used together.",
      "The SAR feeds into the authorization package — without it the AO cannot make an informed decision.",
      "Assessors must be independent of the implementation team.",
    ],
  },

  // ─── CGRC D6 ───────────────────────────────────────────
  {
    domainId: "cgrc-d6",
    overview: "Authorization is the formal management decision to allow an information system to operate. The AO reviews the authorization package and makes a risk-based determination.",
    sections: [
      {
        title: "Authorization Package",
        explanation: "The three-document authorization package gives the AO everything needed to make an informed risk decision: what the system does and how it is secured (SSP), whether the controls work (SAR), and what gaps remain and when they will be fixed (POA&M). The AO weighs residual risk against mission need and organizational risk tolerance.",
        visual: {
          type: "table",
          headers: ["Document", "What It Contains", "Purpose in Authorization"],
          rows: [
            ["SSP", "System description, boundary, categorization, control implementations", "Tells the AO what security is in place"],
            ["SAR", "Assessment findings — satisfied and OTS controls", "Tells the AO whether controls actually work"],
            ["POA&M", "Open weaknesses, owners, timelines, resources", "Tells the AO what risks remain and the plan to address them"],
          ],
        },
        points: [
          "The authorization package presented to the AO contains: SSP, SAR, and POA&M.",
          "The ISSO/ISSM compiles and submits the package.",
          "The AO reviews residual risk — risks remaining after controls are in place.",
        ],
      },
      {
        title: "Authorization Decisions",
        explanation: "The ATO is not a checkbox — it is a formal management acceptance of risk. The AO may grant a full ATO, a time-limited IATO with conditions, or deny authorization entirely. Ongoing authorization replaces the fixed three-year reauthorization cycle with continuous monitoring data feeding real-time risk decisions.",
        visual: {
          type: "table",
          headers: ["Decision", "Meaning", "When Issued"],
          rows: [
            ["ATO", "System is authorized; AO accepts residual risk", "Risk is within tolerance; POA&M items are manageable"],
            ["IATO", "Time-limited conditional authorization", "System is needed now but conditions must be met before full ATO"],
            ["DATO", "System is NOT authorized to operate", "Risk is unacceptable; critical OTS findings not mitigated"],
          ],
        },
        points: [
          "Only the AO can formally accept residual risk and issue an ATO.",
          "ATO duration — typically three years with continuous monitoring in between.",
          "Ongoing authorization — replaces periodic reauthorization with continuous risk-based decisions.",
        ],
      },
    ],
    keyTerms: [
      { term: "ATO", definition: "Authority to Operate — formal authorization granted by the AO accepting residual risk." },
      { term: "DATO", definition: "Denial of Authorization to Operate — system prohibited from operating due to unacceptable risk." },
      { term: "IATO", definition: "Interim Authority to Operate — time-limited conditional authorization." },
      { term: "Ongoing Authorization", definition: "Continuous risk-based authorization replacing fixed reauthorization cycles." },
    ],
    examTips: [
      "Only the AO can grant an ATO — it is a formal management decision, not a technical one.",
      "The authorization package is SSP + SAR + POA&M — all three are required.",
      "Ongoing authorization (RMF Rev 2) uses continuous monitoring data for real-time decisions.",
    ],
  },

  // ─── CGRC D7 ───────────────────────────────────────────
  {
    domainId: "cgrc-d7",
    overview: "Continuous Monitoring (17%, the largest CGRC domain) ensures that the security posture of authorized systems is maintained over time through ongoing assessment, status reporting, and response to changes.",
    sections: [
      {
        title: "ISCM Strategy & Program",
        explanation: "Information Security Continuous Monitoring (ISCM) transforms authorization from a point-in-time event into an ongoing process. The frequency of monitoring is risk-based — not everything needs to be checked daily. High-risk controls and volatile environments warrant more frequent monitoring; stable, lower-risk controls can be checked less often.",
        visual: {
          type: "steps",
          steps: [
            { label: "Define Strategy", description: "Establish ISCM goals, metrics, and reporting requirements aligned with organizational risk tolerance." },
            { label: "Establish Program", description: "Define monitoring frequencies, assign roles, select tools (SIEM, scanners, CM platforms)." },
            { label: "Implement & Collect", description: "Deploy monitoring tools; automate data collection; maintain asset inventory." },
            { label: "Analyze & Report", description: "Correlate security data; produce security status reports for AO and leadership." },
            { label: "Respond", description: "Act on findings — remediate, accept, or escalate; update POA&M." },
            { label: "Review & Update", description: "Periodically reassess the ISCM strategy; adjust frequencies and tools based on threat changes." },
          ],
        },
        points: [
          "SP 800-137 defines Information Security Continuous Monitoring (ISCM).",
          "ISCM maintains ongoing awareness of security and privacy posture.",
          "Monitoring frequencies should be risk-based — higher risk = more frequent.",
          "Automation is key: SIEM, vulnerability scanners, configuration management tools.",
        ],
      },
      {
        title: "Security Status Reporting",
        explanation: "Status reporting translates technical monitoring data into actionable information for the AO and senior leadership. The AO uses this data to make ongoing authorization decisions — if the security posture degrades significantly, they may revoke the ATO. Key metrics focus on trends over time, not just point-in-time snapshots.",
        points: [
          "Regular reports to the AO and senior leadership on security posture changes.",
          "Key metrics: open POA&M items, patch compliance rate, scan coverage, incidents.",
          "Significant changes may trigger reauthorization.",
        ],
      },
      {
        title: "Responding to Changes",
        explanation: "Not all changes require reauthorization, but significant changes — new external connections, major software upgrades, changes in the type of data processed — can materially affect the risk posture and must be assessed. The ISSO notifies the AO who decides whether reauthorization is required. System decommissioning closes the ATO and requires secure data disposal.",
        points: [
          "Configuration changes, new vulnerabilities, and incidents must be assessed for impact on the ATO.",
          "Significant changes: new external connections, major SW upgrades, change in data types processed.",
          "ISSO notifies the AO of significant changes; AO decides if reauthorization is required.",
          "Decommissioning — ATO is terminated; data is disposed of per NIST SP 800-88.",
        ],
      },
    ],
    keyTerms: [
      { term: "ISCM", definition: "Information Security Continuous Monitoring — maintaining ongoing awareness of security posture." },
      { term: "SP 800-137", definition: "NIST guide for establishing an Information Security Continuous Monitoring program." },
      { term: "Significant Change", definition: "A system change that may require reassessment or reauthorization of the ATO." },
    ],
    examTips: [
      "Continuous monitoring does not mean all controls are assessed daily — frequency is risk-based.",
      "SP 800-137 is the CGRC-specific reference for continuous monitoring — know it by name.",
      "A significant change may require reauthorization — the ISSO must notify the AO.",
      "Decommissioning requires secure data disposal per SP 800-88 and formal ATO closure.",
    ],
  },

  // ─── ISSMP D1 ───────────────────────────────────────────
  {
    domainId: "issmp-d1",
    overview: "Leadership and Business Management (22%, the largest ISSMP domain) focuses on the CISO's strategic role: aligning security with business, managing budgets, communicating with executives, and fostering a security culture.",
    sections: [
      {
        title: "Security Strategy & Governance",
        explanation: "Security strategy is derived from business strategy — it exists to protect and enable business objectives, not the other way around. The CISO operates at the intersection of risk, technology, and business. Effective CISOs spend more time in boardrooms and business unit meetings than in the SOC — they translate technical risk into business language.",
        points: [
          "Security strategy must be derived from and aligned with business strategy.",
          "Governance structures: Board risk committee, executive steering committees, security councils.",
          "Security program charter formally defines the scope, authority, and accountability of the security function.",
          "Three lines of defense: business operations (1st), risk/compliance (2nd), internal audit (3rd).",
          "The CISO should report to the CEO or Board — not the CIO — for organizational independence.",
        ],
      },
      {
        title: "Business Case & Financial Management",
        explanation: "The ROSI formula quantifies the financial value of a security control. A control that costs $50,000 per year but reduces expected losses by $200,000 per year has a positive ROSI of $150,000 — a compelling executive argument. When ROSI is negative, the control costs more than the risk it mitigates and should be reconsidered.",
        visual: {
          type: "formula",
          formula: "ROSI = (ALE_before − ALE_after) − Cost of Control",
          components: [
            { symbol: "ROSI", name: "Return on Security Investment", definition: "Net financial benefit of implementing a security control per year." },
            { symbol: "ALE_before", name: "ALE Before Control", definition: "Annual Loss Expectancy without the control in place." },
            { symbol: "ALE_after", name: "ALE After Control", definition: "Annual Loss Expectancy with the control in place." },
            { symbol: "Cost", name: "Annual Control Cost", definition: "Total cost of implementing and operating the control per year (TCO basis)." },
          ],
        },
        points: [
          "ROSI = (ALE Before − ALE After) − Cost of Control.",
          "TCO (Total Cost of Ownership) includes acquisition, operation, maintenance, and disposal.",
          "Prioritize investments using risk-based analysis — highest risk, highest ROI first.",
          "Security spend benchmark: typically 5-10% of IT budget, varying by industry and risk profile.",
        ],
      },
      {
        title: "Executive Communication",
        explanation: "Boards and C-suites speak in financial terms — revenue, cost, and liability. A CISO who presents CVE counts and patch percentages will lose the room. Translating risk into business impact (e.g. 'a ransomware incident of this type costs our industry an average of $4.5M and results in 18 days of downtime') creates the urgency and clarity that drives investment decisions.",
        visual: {
          type: "table",
          headers: ["Audience", "Preferred Metrics", "Language"],
          rows: [
            ["Board / C-Suite", "Business risk exposure ($), regulatory fine exposure, peer benchmarking", "Financial impact, strategic risk, competitive risk"],
            ["Executive Security Steering Committee", "ROSI, risk register status, key incidents, compliance posture", "Risk management, investment decisions, program maturity"],
            ["IT / Security Leadership", "MTTD, MTTR, vulnerability counts, patch compliance, incident trends", "Operational metrics, trend analysis, resource allocation"],
            ["SOC / Analysts", "Alert volumes, detection rates, false positive rates, IOC counts", "Technical indicators, operational workload"],
          ],
        },
        points: [
          "Board and C-suite prefer financial metrics over technical ones.",
          "Translate risk scenarios into business impact: revenue loss, regulatory fines, reputational damage.",
          "Security briefings should be concise, business-focused, and action-oriented.",
        ],
      },
      {
        title: "Security Culture & Awareness",
        explanation: "Culture is the most durable security control — when employees instinctively report suspicious emails, question unusual requests, and protect sensitive data without being told to, security becomes self-sustaining. Tone at the top is the most powerful driver: if leadership visibly respects security policies, employees follow. If they routinely bypass controls, employees learn that security is optional.",
        points: [
          "Tone at the top — leadership must visibly demonstrate security commitment.",
          "Security awareness programs: phishing simulations, role-based training, newsletters, gamification.",
          "Metrics: phishing click rates, training completion, security reporting rates.",
          "Insider threat programs identify and address behaviors that may indicate malicious or negligent insiders.",
        ],
      },
    ],
    keyTerms: [
      { term: "ROSI", definition: "Return on Security Investment = (ALE before − ALE after) − cost of control." },
      { term: "Security Charter", definition: "Formal document defining the authority, scope, and accountability of the security function." },
      { term: "Three Lines of Defense", definition: "Governance model: business operations (1st), risk/compliance (2nd), internal audit (3rd)." },
    ],
    examTips: [
      "ISSMP is a CISSP concentration — think like a CISO, not a security analyst.",
      "ROSI requires knowing both ALE before and after the control.",
      "When asked about communicating with the board, always choose financial impact over technical metrics.",
      "Security strategy is derived from business strategy — never the reverse.",
    ],
  },

  // ─── ISSMP D2 ───────────────────────────────────────────
  {
    domainId: "issmp-d2",
    overview: "Systems Lifecycle Management (19%) covers how security is integrated across the full lifecycle — from acquisition planning through design, development, testing, deployment, operation, and retirement.",
    sections: [
      {
        title: "Secure SDLC Integration",
        explanation: "The cost to fix a security flaw discovered in production is estimated at 30x the cost of fixing it at the design stage. Security gates — formal sign-off checkpoints between phases — create accountability without blocking development. Security debt is the accumulation of unresolved security issues; like financial debt, it compounds over time and becomes increasingly expensive to service.",
        points: [
          "Security requirements must be defined in the planning phase — before design begins.",
          "Threat modeling at design identifies architectural risks early and cheaply.",
          "Security gates — formal checkpoints in the SDLC where security sign-off is required to proceed.",
          "Security debt — deferred security work that accumulates and compounds over time.",
          "Security testing (SAST, DAST, pen testing) must occur before production deployment.",
        ],
      },
      {
        title: "Acquisition & Third-Party Risk",
        explanation: "Third-party vendors are one of the largest sources of organizational risk — attackers frequently compromise a smaller, less secure vendor to reach their true target. Security requirements must be contractual, not aspirational. The right to audit clause is the most powerful contractual tool: it gives the organization direct visibility into the vendor's security posture rather than relying on questionnaires.",
        visual: {
          type: "table",
          headers: ["Vendor Risk Control", "What It Does", "When to Use It"],
          rows: [
            ["Security questionnaire (SIG/CAIQ)", "Self-assessment of vendor security controls", "Initial qualification and annual renewal"],
            ["SOC 2 Type II report", "Independent audit of security controls over 6-12 months", "Cloud services; SaaS; data processors"],
            ["ISO 27001 certification", "Certified ISMS against international standard", "High-risk vendors; vendors in regulated industries"],
            ["Right to audit clause", "Contractual right to assess vendor directly", "High-risk; classified data; critical systems"],
            ["Penetration test of vendor", "Technical validation of vendor security", "Before connecting critical systems to vendor infrastructure"],
          ],
        },
        points: [
          "Security requirements must be included in procurement contracts and RFPs.",
          "Right to audit clauses — contractual right to assess third-party security posture.",
          "SCRM — vetting hardware and software components for supply chain integrity.",
          "Fourth-party risk — risks introduced by your vendors' vendors.",
        ],
      },
      {
        title: "System Retirement & Decommissioning",
        explanation: "Decommissioning is a security event, not just an IT project task. Data left on retired hardware, active accounts for decommissioned systems, and forgotten interconnections are all sources of real-world breaches. A formal decommissioning checklist ensures nothing is overlooked.",
        points: [
          "Formal decommissioning process ensures data is securely removed per NIST SP 800-88.",
          "Remove system from asset inventory; revoke accounts; terminate interconnections.",
          "Archive logs and records as required by retention schedules and legal holds.",
          "Lessons learned from the retired system inform security requirements for its replacement.",
        ],
      },
    ],
    keyTerms: [
      { term: "Security Gate", definition: "A formal SDLC checkpoint requiring security sign-off before the project advances." },
      { term: "Security Debt", definition: "Accumulated deferred security work that grows more expensive over time." },
      { term: "Right to Audit", definition: "Contractual provision allowing an organization to assess a vendor's security controls." },
    ],
    examTips: [
      "Security must be in requirements — fixing issues early is exponentially cheaper.",
      "Right to audit is the strongest vendor risk control — questionnaires alone are insufficient for high-risk vendors.",
      "Decommissioning is a security event — improper disposal creates significant residual risk.",
    ],
  },

  // ─── ISSMP D3 ───────────────────────────────────────────
  {
    domainId: "issmp-d3",
    overview: "Risk Management (18%) at the ISSMP level focuses on enterprise-wide risk governance, integrating security risk into organizational risk frameworks, and using quantitative and qualitative methods to communicate risk.",
    sections: [
      {
        title: "Enterprise Risk Management (ERM)",
        explanation: "ERM integrates information security risk with all other enterprise risks — operational, financial, legal, reputational — into a single governance framework. Security risk viewed in isolation is often misunderstood and underfunded. When the CISO can show that a cyber risk represents X% of the organization's total risk exposure, it gets appropriately prioritized against other business risks.",
        visual: {
          type: "table",
          headers: ["ERM Framework", "Focus", "Common In"],
          rows: [
            ["COSO ERM", "Enterprise-wide risk governance integrated with strategy", "Public companies; financial sector; SOX compliance"],
            ["ISO 31000", "International risk management principles and guidelines", "Global organizations; non-prescriptive"],
            ["NIST SP 800-30", "Information security risk assessment methodology", "US federal agencies; CGRC/RMF context"],
            ["FAIR", "Quantitative cyber risk measurement (probabilistic)", "Organizations wanting financial risk metrics"],
          ],
        },
        points: [
          "ERM integrates information security risk with all enterprise risks.",
          "Risk appetite — how much risk the organization will accept (set by the Board).",
          "Risk tolerance — the acceptable deviation from the risk appetite in day-to-day operations.",
          "Risk register — central repository of identified risks with likelihood, impact, owner, and treatment.",
          "Key Risk Indicators (KRIs) — early warning metrics that signal increasing risk.",
        ],
      },
      {
        title: "Risk Assessment Methods",
        explanation: "Qualitative methods produce ratings (High/Medium/Low); quantitative methods produce dollar figures. FAIR is the leading quantitative framework for cyber risk — it produces probability distributions rather than single-point estimates, reflecting the inherent uncertainty in risk measurement. Neither method is always better; the right choice depends on data availability and audience.",
        visual: {
          type: "table",
          headers: ["Method", "Output", "Pros", "Cons"],
          rows: [
            ["Qualitative", "Risk ratings (H/M/L)", "Fast; no data required; easy to communicate", "Subjective; inconsistent across raters"],
            ["Quantitative (ALE)", "Dollar figure per year", "Objective; financially compelling; enables ROSI", "Requires reliable frequency/impact data"],
            ["FAIR", "Probability distribution ($)", "Handles uncertainty explicitly; defensible", "Complex; requires training; time-intensive"],
            ["Semi-quantitative", "Ordinal scales mapped to $ ranges", "Balance of speed and rigor", "Less precise than full quantitative"],
          ],
        },
        points: [
          "Qualitative analysis uses scales (High/Med/Low) based on expert judgment.",
          "Quantitative: ALE = SLE × ARO. Provides dollar figures; useful for justifying investments.",
          "FAIR — probabilistic quantitative risk model; growing adoption.",
          "Risk scenarios model specific threat scenarios and estimate frequency and magnitude.",
        ],
      },
      {
        title: "Risk Treatment & Monitoring",
        explanation: "Risk treatment decisions must be tied to risk appetite — accepting a risk that exceeds the organization's stated tolerance without escalation is a governance failure. KRIs are leading indicators that warn you before a risk materializes; KPIs tell you how the program performed after the fact. Both are needed for effective risk monitoring.",
        visual: {
          type: "table",
          headers: ["Treatment Option", "Action", "Example", "Residual Risk"],
          rows: [
            ["Accept", "Document and acknowledge the risk", "Accept low-likelihood risk because control cost exceeds potential loss", "Unchanged — same as inherent"],
            ["Avoid", "Eliminate the risky activity", "Stop offering a product line that creates unacceptable regulatory exposure", "Eliminated"],
            ["Mitigate", "Implement controls to reduce likelihood or impact", "Deploy MFA to reduce credential theft risk", "Reduced — some remains"],
            ["Transfer / Share", "Shift financial burden to third party", "Cyber insurance; contractual liability transfer to vendor", "Financial impact transferred; operational risk remains"],
          ],
        },
        points: [
          "Risk acceptance must be formally documented and signed by the appropriate risk owner.",
          "Residual risk — risk remaining after treatment; must be within risk tolerance.",
          "KRIs — metrics that signal increasing risk before an incident occurs.",
        ],
      },
    ],
    keyTerms: [
      { term: "ERM", definition: "Enterprise Risk Management — holistic framework integrating all organizational risk types." },
      { term: "FAIR", definition: "Factor Analysis of Information Risk — quantitative model for cyber risk measurement." },
      { term: "Risk Appetite", definition: "Board-level statement of the amount of risk the organization is willing to accept." },
      { term: "Risk Tolerance", definition: "Acceptable deviation from the risk appetite in operational practice." },
      { term: "KRI", definition: "Key Risk Indicator — early warning metric signaling an emerging risk." },
    ],
    examTips: [
      "Risk appetite is set by the Board; risk tolerance is the operational implementation.",
      "FAIR produces probabilistic dollar ranges, not single values — understand this distinction.",
      "KRIs are leading (predict risk); KPIs are lagging (measure past performance).",
      "Risk acceptance without documentation is negligence, not governance.",
    ],
  },

  // ─── ISSMP D4 ───────────────────────────────────────────
  {
    domainId: "issmp-d4",
    overview: "Threat Intelligence and Incident Management (17%) focuses on using threat intelligence to anticipate attacks and managing the full incident response lifecycle at a program level.",
    sections: [
      {
        title: "Threat Intelligence",
        explanation: "Threat intelligence is only valuable if it reaches the right audience in a format they can act on. Strategic intelligence shapes multi-year security investment decisions. Tactical intelligence helps architects design defenses against specific adversary TTPs. Technical intelligence (IOCs) feeds directly into detection tools. The key failure mode is distributing technical IOCs to executives who cannot act on them, or strategic reports to analysts who need IOCs.",
        visual: {
          type: "table",
          headers: ["Intelligence Type", "Content", "Audience", "Time Horizon"],
          rows: [
            ["Strategic", "Threat actor intent, geopolitical trends, industry targeting", "CISO, Board, executives", "Months to years"],
            ["Tactical", "TTPs — adversary techniques and procedures (MITRE ATT&CK)", "Security architects, IR team leads", "Weeks to months"],
            ["Operational", "Specific planned or ongoing attack details", "IR team", "Days to weeks"],
            ["Technical", "IOCs — IPs, domains, file hashes, YARA rules", "SOC analysts, detection engineers", "Hours to days"],
          ],
        },
        points: [
          "MITRE ATT&CK — knowledge base of adversary TTPs organized by tactic and technique.",
          "STIX/TAXII — standards for structuring and sharing threat intelligence.",
          "ISACs — sector-specific threat intelligence sharing organizations.",
          "IOCs (Indicators of Compromise) — artifacts indicating a system may be compromised.",
        ],
      },
      {
        title: "Incident Management Program",
        explanation: "An IR program built before an incident is exponentially more effective than one assembled during one. Playbooks eliminate decision paralysis under pressure by pre-answering 'what do we do when X happens?' Retainers ensure that external IR firm capacity is available when needed — trying to engage a firm during a major incident, when everyone else is also calling, is a losing proposition.",
        points: [
          "IR program defines team structure (CSIRT), roles, authority, and escalation paths.",
          "Playbooks — documented step-by-step procedures for specific incident types.",
          "Tabletop exercises validate IR plans without disrupting operations.",
          "Retainers — pre-arranged contracts with IR firms for rapid external support.",
          "Communication plans — pre-defined templates for internal and external notifications.",
        ],
      },
      {
        title: "Breach Notification Requirements",
        explanation: "Breach notification timelines are legally mandated and strictly enforced. Missing a notification deadline can result in regulatory fines that dwarf the cost of the breach itself. The 72-hour GDPR window is particularly challenging — organizations must notify before they fully understand the scope of the breach.",
        visual: {
          type: "table",
          headers: ["Regulation", "Notify Whom", "Deadline", "Trigger"],
          rows: [
            ["GDPR", "Supervisory authority (DPA)", "72 hours", "Personal data breach likely to risk individuals' rights"],
            ["HIPAA Breach Rule", "HHS + affected individuals + media (if >500)", "60 days from discovery", "Unsecured PHI breach"],
            ["SEC (public companies)", "SEC Form 8-K", "4 business days", "Material cybersecurity incident"],
            ["PCI-DSS", "Card brands + acquiring bank", "Immediately (24-72 hrs)", "Cardholder data compromise suspected"],
          ],
        },
        points: [
          "GDPR: 72 hours to supervisory authority; without undue delay to affected individuals.",
          "HIPAA: 60 days from discovery to HHS and affected individuals.",
          "SEC: 4 business days for material incidents (public companies).",
          "Legal and PR coordination required before any public statements.",
        ],
      },
    ],
    keyTerms: [
      { term: "MITRE ATT&CK", definition: "Framework cataloging adversary tactics, techniques, and procedures." },
      { term: "STIX", definition: "Structured Threat Information eXpression — standard format for sharing threat intelligence." },
      { term: "ISAC", definition: "Information Sharing and Analysis Center — sector-specific threat intelligence sharing." },
      { term: "IOC", definition: "Indicator of Compromise — artifact (IP, hash, domain) indicating a system may be compromised." },
      { term: "TTP", definition: "Tactics, Techniques, and Procedures — the how of adversary behavior." },
    ],
    examTips: [
      "Match intelligence type to audience — strategic to executives, technical (IOCs) to SOC analysts.",
      "GDPR = 72 hours; HIPAA = 60 days — these timelines are heavily tested.",
      "Retainers should be signed before an incident, not during one.",
      "Tabletop exercises test plans; full simulations test execution — both are needed.",
    ],
  },

  // ─── ISSMP D5 ───────────────────────────────────────────
  {
    domainId: "issmp-d5",
    overview: "Contingency Management (14%) covers Business Continuity Planning (BCP) and Disaster Recovery (DRP) at an enterprise program level.",
    sections: [
      {
        title: "Business Impact Analysis (BIA)",
        explanation: "The BIA is the foundation of the entire continuity program — you cannot design recovery strategies until you know which processes are most critical and how long they can be offline. The BIA output (RTO, RPO, MTD per process) drives every subsequent decision: which recovery site type, how often to back up, and how much to invest in resilience.",
        points: [
          "The BIA identifies critical business functions and their dependencies.",
          "Outputs: critical process list, RTO, RPO, MTD, and resource requirements per function.",
          "Quantitative impact: lost revenue, regulatory penalties, contractual failures.",
          "Qualitative impact: reputational damage, customer trust, employee morale.",
          "BIA must be reviewed when business processes or systems change significantly.",
        ],
      },
      {
        title: "Recovery Site Types",
        explanation: "Site selection is a cost-versus-speed tradeoff. The appropriate site type depends on the RTO from the BIA. If a process has an RTO of 4 hours, only a hot site or cloud DR can meet it. If RTO is 5 days, a warm or cold site is sufficient and far cheaper. Cloud DR has disrupted this model — many organizations now achieve hot-site capability at warm-site cost.",
        visual: {
          type: "table",
          headers: ["Site Type", "Activation Time", "Data Currency", "Cost", "Best For"],
          rows: [
            ["Hot site", "Minutes – 1 hour", "Real-time replication", "Very high", "RTO < 4 hours; life-safety; critical revenue systems"],
            ["Warm site", "Hours – 2 days", "Recent backup (hours old)", "Moderate", "RTO 4–48 hours; most enterprise systems"],
            ["Cold site", "Days – weeks", "Must restore from backup", "Low", "RTO > 5 days; non-critical systems"],
            ["Cloud DR", "Minutes – hours", "Configurable (near-real-time)", "Pay-as-you-use", "Variable RTO; modern cloud-native architectures"],
            ["Reciprocal agreement", "Variable", "Variable", "Very low", "Small organizations; non-critical systems"],
          ],
        },
        points: [
          "Hot site — fully equipped; minutes to hours to activate. Most expensive.",
          "Warm site — partially equipped; hours to days. Balanced cost.",
          "Cold site — basic infrastructure; days to weeks. Cheapest.",
          "MTD > RTO always — RTO must be less than MTD or the business cannot survive the recovery window.",
        ],
      },
      {
        title: "BC/DR Testing",
        explanation: "Plans that are not tested are not plans — they are hopes. Testing follows a maturity progression from discussion-based exercises to full production failover. Organizations typically start with tabletops and progress toward parallel and full interruption tests as confidence grows. Full interruption tests carry real risk and should only be conducted when plans are mature.",
        visual: {
          type: "table",
          headers: ["Test Type", "What Happens", "Disruption Risk", "Frequency"],
          rows: [
            ["Tabletop exercise", "Team walks through scenarios verbally", "None", "Quarterly / after major changes"],
            ["Walk-through (structured)", "Team steps through plan document in detail", "Minimal", "Semi-annually"],
            ["Simulation", "Team responds to simulated incident without activating recovery systems", "Low", "Annually"],
            ["Parallel test", "Recovery systems activated alongside production — no production impact", "Low-moderate", "Annually for critical systems"],
            ["Full interruption test", "Production shut down; recovery systems take over completely", "High", "Rarely — only for mature plans"],
          ],
        },
        points: [
          "Plans should be tested at least annually; critical systems more frequently.",
          "Full interruption test is the most realistic but most risky.",
          "Test results must be documented and used to update the plan.",
        ],
      },
    ],
    keyTerms: [
      { term: "BIA", definition: "Business Impact Analysis — identifies critical processes and the impact of their disruption." },
      { term: "MTD", definition: "Maximum Tolerable Downtime — absolute limit before irreversible business harm results." },
      { term: "RTO", definition: "Recovery Time Objective — target time for restoring a system after disruption." },
      { term: "RPO", definition: "Recovery Point Objective — maximum acceptable data loss measured in time." },
    ],
    examTips: [
      "MTD > RTO — RTO must be less than MTD or the organization cannot survive.",
      "RPO drives backup frequency — RPO of 4 hours means back up at least every 4 hours.",
      "BIA comes before recovery strategy design — always.",
      "Full interruption tests are most realistic but also most dangerous to production.",
    ],
  },

  // ─── ISSMP D6 ───────────────────────────────────────────
  {
    domainId: "issmp-d6",
    overview: "Law, Ethics, and Security Compliance Management (10%) covers the legal landscape affecting security programs, intellectual property, privacy law, ethics, and managing compliance obligations.",
    sections: [
      {
        title: "Key Regulations & Laws",
        explanation: "No organization operates under a single regulation — most face overlapping obligations from multiple jurisdictions and sectors. The compliance mapping technique identifies how a single control (e.g. MFA) satisfies requirements across multiple frameworks simultaneously, avoiding duplicated effort. GDPR's extraterritorial reach means any organization serving EU residents is subject to it regardless of where they are based.",
        visual: {
          type: "table",
          headers: ["Regulation", "Jurisdiction", "Sector", "Penalty for Breach"],
          rows: [
            ["GDPR", "EU (global reach for EU data subjects)", "All sectors", "Up to 4% of global annual revenue or €20M"],
            ["HIPAA/HITECH", "USA", "Healthcare", "Up to $1.9M per violation category per year"],
            ["PCI-DSS", "Global", "Payment cards", "Fines, card processing privileges revoked"],
            ["SOX Section 404", "USA (public companies)", "Financial reporting", "Criminal penalties for executives; delisting"],
            ["CCPA/CPRA", "California (USA)", "All sectors with CA consumers", "$2,500 per unintentional / $7,500 per intentional violation"],
            ["FISMA", "USA federal agencies", "Government", "Reporting requirements; oversight scrutiny"],
          ],
        },
        points: [
          "GDPR — fines up to 4% of global annual revenue; 72-hour breach notification.",
          "HIPAA/HITECH — administrative, physical, and technical safeguards for PHI.",
          "PCI-DSS — 12 requirements; applies globally to cardholder data environments.",
          "FISMA — RMF compliance mandatory for US federal agencies.",
        ],
      },
      {
        title: "Intellectual Property",
        explanation: "IP protection strategies are often used together — a product may be protected by patent (the invention), trademark (the brand name), and trade secret (the manufacturing process). Trade secrets are the most fragile: unlike patents or copyrights, they have no registration mechanism and are lost the moment they become public, whether through disclosure, reverse engineering, or employee departure.",
        visual: {
          type: "table",
          headers: ["IP Type", "What It Protects", "Duration", "Registration Required?"],
          rows: [
            ["Copyright", "Original creative works (code, documents, art)", "Life of author + 70 years (US)", "No — automatic on creation"],
            ["Patent", "Novel inventions and processes", "20 years from filing date", "Yes — must apply and be granted"],
            ["Trademark", "Brand identifiers (names, logos, slogans)", "Indefinite if renewed", "Yes — registration strengthens protection"],
            ["Trade Secret", "Confidential business information (formulas, algorithms)", "As long as kept secret", "No — protection requires active secrecy measures"],
          ],
        },
        points: [
          "Copyright — protects creative works; automatic; lasts life of author + 70 years.",
          "Patent — protects inventions; must be applied for; lasts 20 years from filing.",
          "Trademark — protects brand identifiers; must be registered; renewable indefinitely.",
          "Trade secret — confidential business information protected as long as kept secret.",
        ],
      },
      {
        title: "Ethics",
        explanation: "The ISC² Code of Ethics is not optional — it is a binding professional obligation, and violations can result in certification revocation after investigation. Canon 1 (Protect society, the common good, necessary public trust and confidence, and the infrastructure) is the supreme canon. If following your employer's instructions would harm the public, Canon 1 requires you to refuse.",
        points: [
          "ISC² Code of Ethics canons: 1) Protect society; 2) Act honorably; 3) Provide competent service; 4) Advance the profession.",
          "Canon 1 (Protect society) takes precedence over all other canons.",
          "ISACA Code of Professional Ethics governs CISM holders.",
          "Security professionals must not engage in unauthorized testing or conflicts of interest.",
        ],
      },
      {
        title: "Compliance Management",
        explanation: "Compliance is a minimum threshold, not a security goal. Organizations that pursue 'compliance as security' inevitably discover that meeting checkbox requirements does not protect against real-world threats. GRC platforms reduce the overhead of demonstrating compliance by mapping controls to multiple frameworks simultaneously and automating evidence collection.",
        points: [
          "Compliance ≠ security — meeting a compliance requirement does not guarantee an effective control.",
          "GRC platforms automate evidence collection and control mapping across frameworks.",
          "SOC 2 Type I assesses design; SOC 2 Type II assesses operating effectiveness over 6-12 months.",
          "Regulatory mapping — one control often satisfies requirements across multiple frameworks simultaneously.",
        ],
      },
    ],
    keyTerms: [
      { term: "GDPR", definition: "General Data Protection Regulation — EU privacy law with global reach and heavy penalties." },
      { term: "Trade Secret", definition: "Confidential business information protected as long as secrecy is actively maintained." },
      { term: "SOC 2", definition: "Third-party audit of security controls based on AICPA Trust Services Criteria." },
      { term: "GRC", definition: "Governance, Risk, and Compliance — integrated management platform." },
    ],
    examTips: [
      "ISC² Canon 1 (protect society) overrides all other canons — public safety first.",
      "Compliance is a floor, not a ceiling.",
      "GDPR breach notification: 72 hours to the supervisory authority.",
      "Trade secrets have no registration — protection depends entirely on maintaining secrecy.",
      "SOC 2 Type II (operating effectiveness over time) is more valuable than Type I (design only).",
    ],
  },

  // ─── CISM D1 ───────────────────────────────────────────
  {
    domainId: "cism-d1",
    overview: "Information Security Governance (17%) establishes the leadership and accountability framework for information security. It covers program structure, alignment with business strategy, and measurement of effectiveness.",
    sections: [
      {
        title: "Governance Framework",
        explanation: "Governance is direction and oversight — it is distinct from management, which is execution. The Board governs; the CISO manages. Effective governance ensures that security decisions are made at the right level, with the right information, by accountable owners. The Three Lines of Defense model is the most commonly tested governance structure on CISM.",
        visual: {
          type: "hierarchy",
          label: "Three Lines of Defense",
          levels: [
            { label: "1st Line: Business Operations", sublabel: "Owns and manages risk day-to-day; implements controls" },
            { label: "2nd Line: Risk & Compliance", sublabel: "Monitors, challenges, and advises on risk management" },
            { label: "3rd Line: Internal Audit", sublabel: "Provides independent assurance to the Board" },
          ],
        },
        points: [
          "Governance = the system by which an organization directs and controls security.",
          "Key frameworks: COBIT 2019, ISO 27001, NIST CSF, ISF Standard of Good Practice.",
          "The CISO should report to the CEO or Board — not the CIO — for independence.",
          "Three lines of defense: business operations (1st), risk/compliance (2nd), internal audit (3rd).",
        ],
      },
      {
        title: "Security Strategy",
        explanation: "A security strategy answers: where are we now, where do we need to be, and how do we get there? The gap analysis compares current state to desired state. The security roadmap is the multi-year plan that closes the gap, prioritized by risk. Maturity models provide a common language for describing current state and targets.",
        points: [
          "Security strategy is derived from the business strategy — security enables business objectives.",
          "Gap analysis — current state vs desired state; identifies investment priorities.",
          "Security roadmap — multi-year plan for maturing the security program.",
          "Maturity models (CMMI, C2M2) assess program maturity and guide improvement.",
        ],
      },
      {
        title: "Policies, Standards & Metrics",
        explanation: "The policy hierarchy defines how security direction flows from governance to operations. A policy without standards is a wish; a standard without procedures is incomplete. KPIs measure how well security is performing; KRIs provide early warning of increasing risk. Both are needed — KPIs tell you if the controls are working, KRIs tell you if new threats are emerging.",
        visual: {
          type: "hierarchy",
          label: "Policy Hierarchy (most authoritative → least)",
          levels: [
            { label: "Policy", sublabel: "Senior management statement of intent — the WHY" },
            { label: "Standards", sublabel: "Mandatory, measurable requirements — the WHAT" },
            { label: "Procedures", sublabel: "Step-by-step implementation instructions — the HOW" },
            { label: "Guidelines", sublabel: "Optional recommendations and best practices" },
          ],
        },
        points: [
          "Information security policy — senior management statement of intent; top of the hierarchy.",
          "Standards define mandatory requirements (e.g. password length, encryption algorithm).",
          "KPIs — measure how well the security program is performing.",
          "KRIs — early warning signals of increasing risk.",
        ],
      },
    ],
    keyTerms: [
      { term: "COBIT", definition: "Control Objectives for Information and Related Technologies — IT governance framework." },
      { term: "Three Lines of Defense", definition: "Business operations (1st), risk/compliance (2nd), internal audit (3rd)." },
      { term: "CISO", definition: "Chief Information Security Officer — executive responsible for the security program." },
      { term: "KPI", definition: "Key Performance Indicator — measures effectiveness of security program activities." },
      { term: "KRI", definition: "Key Risk Indicator — early warning metric signaling increasing risk." },
    ],
    examTips: [
      "CISM is an ISACA certification — answers reflect the business management perspective over technical.",
      "Governance provides direction; management executes. The Board governs; the CISO manages.",
      "The CISO should report to the CEO or Board, not the CIO — independence from IT is critical.",
      "Policy → Standards → Procedures → Guidelines — know the order and who owns each level.",
    ],
  },

  // ─── CISM D2 ───────────────────────────────────────────
  {
    domainId: "cism-d2",
    overview: "Information Security Risk Management (20%) covers identifying, analyzing, evaluating, and treating information security risks in alignment with organizational risk appetite.",
    sections: [
      {
        title: "Risk Identification",
        explanation: "You cannot manage risks you don't know about. Risk identification is a continuous process — new assets, new threats, and new business activities all introduce new risks. The risk register is the central repository that makes identified risks visible, assigned, and trackable. Without it, risk management is informal and unreliable.",
        points: [
          "Threat landscape analysis — understanding adversaries, their capabilities, and likely targets.",
          "Vulnerability identification — technical (scans), process (audits), human (social engineering tests).",
          "Asset inventory — you cannot protect what you don't know you have.",
          "Risk scenarios — structured descriptions of how a threat exploits a vulnerability to harm an asset.",
          "Risk register — living document tracking all identified risks.",
        ],
      },
      {
        title: "Risk Analysis & Evaluation",
        explanation: "Inherent risk is the baseline — the level of risk before any controls exist. Residual risk is what remains after controls. The goal is not to eliminate residual risk (impossible) but to reduce it to within the organization's risk tolerance. The distinction between risk appetite (the board's strategic statement) and risk tolerance (the operational implementation of that appetite) is consistently tested on CISM.",
        visual: {
          type: "table",
          headers: ["Concept", "Definition", "Who Owns It", "Example"],
          rows: [
            ["Inherent Risk", "Risk level before any controls", "System / process owner", "Probability of data breach with no security controls: HIGH"],
            ["Residual Risk", "Risk remaining after controls are applied", "System / process owner", "Probability of breach with MFA + encryption: MEDIUM-LOW"],
            ["Risk Appetite", "Overall risk the org will accept (strategic)", "Board / CEO", "'We will not accept risks that could result in regulatory action'"],
            ["Risk Tolerance", "Operational boundaries around risk appetite", "CISO / Risk Committee", "'Residual risk ratings of Medium or below are acceptable'"],
          ],
        },
        points: [
          "Inherent risk — risk before any controls are applied.",
          "Residual risk — risk remaining after controls; must be within risk tolerance.",
          "Risk appetite — overall amount of risk the Board will accept.",
          "Risk tolerance — the operational deviation boundaries around the risk appetite.",
        ],
      },
      {
        title: "Risk Treatment",
        explanation: "Every risk must have a documented treatment decision — undocumented acceptance is negligence. The treatment must align with risk appetite: if the residual risk after treatment still exceeds tolerance, additional controls or escalation to the Board is required. Risk transfer through insurance shifts the financial impact but does not eliminate operational, reputational, or regulatory risk.",
        visual: {
          type: "table",
          headers: ["Treatment", "Action", "Example", "Residual Risk"],
          rows: [
            ["Accept", "Document and formally acknowledge", "Accept low-value, low-likelihood risk", "= Inherent (unchanged)"],
            ["Avoid", "Eliminate the risky activity", "Stop collecting unnecessary personal data", "Eliminated"],
            ["Mitigate", "Implement controls to reduce", "Deploy MFA and endpoint detection", "Reduced"],
            ["Transfer", "Shift financial burden", "Cyber liability insurance; vendor contracts", "Financial risk shifted; operational risk remains"],
          ],
        },
        points: [
          "All four treatment options: Accept, Avoid, Mitigate, Transfer.",
          "Risk acceptance must be formally documented and approved.",
          "Control effectiveness must be monitored — controls degrade over time.",
        ],
      },
    ],
    keyTerms: [
      { term: "Inherent Risk", definition: "The level of risk before any controls are applied." },
      { term: "Residual Risk", definition: "Risk remaining after controls have been applied." },
      { term: "Risk Appetite", definition: "The total level of risk an organization is willing to accept." },
      { term: "Risk Tolerance", definition: "The acceptable variation around the risk appetite in operational practice." },
      { term: "Risk Register", definition: "Repository of identified risks with likelihood, impact, owner, and treatment status." },
    ],
    examTips: [
      "Inherent vs residual risk is heavily tested on CISM — know both definitions.",
      "Risk appetite is set by the Board/senior management — the CISO advises but does not set it.",
      "Risk transfer does not eliminate risk — reputational and operational risk always remain.",
      "Risk acceptance without documentation is negligence — formal sign-off is required.",
    ],
  },

  // ─── CISM D3 ───────────────────────────────────────────
  {
    domainId: "cism-d3",
    overview: "Information Security Program (33%, the largest CISM domain) covers designing, building, and operating an effective security program — including policies, controls, architecture, awareness, and vendor management.",
    sections: [
      {
        title: "Security Program Design",
        explanation: "A security program is the operationalization of the security strategy — it turns direction into action through processes, people, and technology. The key architectural principle is defense in depth: no single control failure should result in a complete compromise. Zero trust extends this by eliminating implicit trust even for internal users and devices.",
        points: [
          "The security program operationalizes the security strategy.",
          "Defense in depth — multiple layers of controls so no single failure compromises the organization.",
          "Zero trust architecture — continuous verification; no implicit trust based on network location.",
          "Security program maturity assessed against CMMI or NIST CSF tiers.",
        ],
      },
      {
        title: "Security Controls",
        explanation: "Controls are classified by what they do (function) and how they are implemented (type). The combination creates a matrix — for example, a physical lock is a physical preventive control; a firewall is a technical preventive control; a policy is an administrative directive control. A comprehensive program needs controls in all categories.",
        visual: {
          type: "table",
          headers: ["Control Category →\nFunction ↓", "Administrative", "Technical", "Physical"],
          rows: [
            ["Preventive", "Security policy, hiring checks, NDA", "Firewall, MFA, encryption, access controls", "Locks, mantraps, fences, bollards"],
            ["Detective", "Audits, log reviews, risk assessments", "IDS, SIEM, honeypots, DLP alerts", "CCTV, motion sensors, guards"],
            ["Corrective", "IR procedures, disciplinary policy", "Patch management, backup restoration, AV quarantine", "Fire suppression systems"],
            ["Deterrent", "Acceptable Use Policy, security awareness", "Warning banners, CAPTCHA", "Warning signs, visible cameras, lighting"],
          ],
        },
        points: [
          "Control categories: Preventive, Detective, Corrective, Compensating, Deterrent, Directive.",
          "Control types: Administrative (policies), Technical (software/hardware), Physical (locks/cameras).",
          "Control selection based on risk assessment — match control to the risk it mitigates.",
          "Cost-benefit analysis — control cost should be proportionate to the risk it mitigates.",
        ],
      },
      {
        title: "Security Awareness & Training",
        explanation: "Awareness creates recognition of risks; training builds skills to respond. The distinction matters: awareness programs (posters, newsletters, phishing simulations) reach everyone; training programs (hands-on workshops, certification) are deeper and role-specific. Metrics close the loop — phishing click rates and reported incident rates measure whether the program is changing behavior.",
        points: [
          "Awareness creates recognition of security risks; training builds skills to respond.",
          "Role-based training tailored to specific job functions.",
          "Mandatory annual training for all staff; additional training for privileged users.",
          "Phishing simulations measure and improve resistance to social engineering.",
          "Metrics: training completion rate, phishing click rate, reported incidents.",
        ],
      },
      {
        title: "Third-Party & Vendor Management",
        explanation: "Vendor risk is organizational risk — a breach of a trusted vendor can be just as damaging as a direct breach. The vendor risk lifecycle mirrors the organization's own risk management lifecycle: assess before onboarding, monitor during the relationship, and ensure clean offboarding when the relationship ends. Fourth-party risk (your vendor's vendors) is the frontier of supply chain security.",
        points: [
          "Vendor risk assessment before engagement — questionnaires, audits, certification review.",
          "Contractual controls: security requirements in SLAs, right to audit, breach notification obligations.",
          "Ongoing monitoring — annual reassessment, continuous monitoring of vendor security news.",
          "Fourth-party risk — risks introduced by your vendors' vendors.",
          "Termination procedures — ensure data is returned or destroyed when vendor relationship ends.",
        ],
      },
    ],
    keyTerms: [
      { term: "Defense in Depth", definition: "Layered controls so no single failure results in full compromise." },
      { term: "Zero Trust", definition: "Security model requiring continuous verification of every user and device." },
      { term: "Fourth-Party Risk", definition: "Risk introduced by a vendor's own third-party suppliers." },
      { term: "SLA", definition: "Service Level Agreement — contractual commitment including security obligations." },
    ],
    examTips: [
      "Control selection must follow risk assessment — never implement controls before knowing the risk.",
      "Administrative controls (policies, training) are often the most cost-effective first line of defense.",
      "Vendor management questions test whether security was included in the contract from the start.",
      "Zero trust is the direction of modern architecture — 'never trust, always verify'.",
    ],
  },

  // ─── CISM D4 ───────────────────────────────────────────
  {
    domainId: "cism-d4",
    overview: "Incident Management (30%, the largest CISM domain by exam weight) covers developing and managing an incident response capability — from preparation through post-incident review.",
    sections: [
      {
        title: "Incident Response Program",
        explanation: "An incident response program is built before incidents occur — reactive IR (building the team and process during a crisis) is universally ineffective. The CSIRT must have clear authority, pre-defined escalation paths, and tested playbooks. Without these, every incident becomes a novel crisis rather than a managed response.",
        points: [
          "IR program establishes team structure (CSIRT), roles, responsibilities, and escalation paths.",
          "IR plan: objectives, scope, roles, responsibilities, communication templates.",
          "Playbooks — specific procedures for common incident types (ransomware, data breach, DDoS).",
          "Retainers — pre-negotiated contracts with external IR firms for surge capacity.",
          "Tabletop exercises test the plan; full simulations test execution.",
        ],
      },
      {
        title: "Incident Response Lifecycle",
        explanation: "The IR lifecycle is a structured process that prevents improvisation from making incidents worse. The most important ordering rule — always contain before eradicating. An uncontained attacker can re-infect systems as fast as they are cleaned. Lessons learned is not optional: it is the mechanism by which the program improves after every incident.",
        visual: {
          type: "steps",
          steps: [
            { label: "Preparation", description: "IR plan, team training, detection tools, communication channels, playbooks, retainers." },
            { label: "Detection & Analysis", description: "Identify and confirm the incident; determine scope and severity; classify by type." },
            { label: "Containment", description: "Isolate affected systems; prevent further spread. Preserve evidence before any remediation." },
            { label: "Eradication", description: "Remove the threat — malware, backdoors, unauthorized accounts; close the entry vector." },
            { label: "Recovery", description: "Restore from known-good backups; validate normal operation; enhanced monitoring post-recovery." },
            { label: "Post-Incident Review", description: "Lessons learned within 2 weeks; update plans, controls, and detection rules." },
          ],
        },
        points: [
          "Containment before eradication — stop the spread before cleaning up.",
          "Preserve evidence before remediation — forensic integrity cannot be restored.",
          "Recovery includes enhanced monitoring — the attacker may still have access.",
          "Lessons learned drives continuous improvement — document what worked and what did not.",
        ],
      },
      {
        title: "Notification & Communication",
        explanation: "Notification failures — notifying too late, notifying the wrong parties, or issuing contradictory public statements — can be as damaging as the incident itself. Pre-approved communication templates eliminate the chaos of drafting statements under pressure. Legal counsel must review all external statements before release.",
        visual: {
          type: "table",
          headers: ["Recipient", "Trigger", "Deadline", "Who Coordinates"],
          rows: [
            ["Executive team / Board", "Any material incident", "Immediately per escalation plan", "CISO"],
            ["Legal / General Counsel", "Any incident with potential liability", "Immediately", "CISO"],
            ["HR", "Insider threat; employee-related incidents", "Per IR plan", "CISO + Legal"],
            ["Regulators (GDPR DPA)", "Personal data breach", "72 hours", "Legal + CISO"],
            ["Regulators (HIPAA HHS)", "Unsecured PHI breach", "60 days", "Legal + Privacy Officer"],
            ["Affected customers / public", "Material breach affecting individuals", "Per regulation / contract", "Legal + PR + CISO"],
          ],
        },
        points: [
          "Internal notifications: executive team, Board, legal, HR, affected business units.",
          "External: regulators (GDPR: 72h, HIPAA: 60 days), law enforcement, affected customers.",
          "Pre-approved communication templates avoid contradictory or legally risky statements.",
          "MTTD and MTTR are the key operational metrics for incident response effectiveness.",
        ],
      },
    ],
    keyTerms: [
      { term: "CSIRT", definition: "Computer Security Incident Response Team — dedicated team managing security incidents." },
      { term: "MTTD", definition: "Mean Time to Detect — average time from incident occurrence to detection." },
      { term: "MTTR", definition: "Mean Time to Respond/Remediate — average time from detection to resolution." },
      { term: "Playbook", definition: "Step-by-step IR procedure for a specific incident scenario." },
      { term: "Lessons Learned", definition: "Post-incident review to identify improvements across people, process, and technology." },
    ],
    examTips: [
      "Incident Management is 30% of CISM — the highest-weighted domain; prioritize it.",
      "Containment before eradication — always stop the spread before cleaning up.",
      "CISM focuses on the MANAGER's role: designing the program, not performing technical IR.",
      "Lessons learned is mandatory — it is the mechanism for continuous program improvement.",
      "GDPR 72-hour breach notification to the supervisory authority is consistently tested.",
    ],
  },
];
