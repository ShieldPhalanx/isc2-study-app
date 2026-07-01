export type KeyTerm = {
  term: string;
  definition: string;
  detail?: string;
  example?: string;
};

export type TopicSection = {
  title: string;
  points: string[];
};

export type DomainStudyContent = {
  domainId: string;
  overview: string;
  sections: TopicSection[];
  keyTerms: KeyTerm[];
  examTips: string[];
  diagramIds?: string[];
};

export const studyContent: DomainStudyContent[] = [
  // ─────────────────────────────────────────
  // CISSP
  // ─────────────────────────────────────────
  {
    domainId: "cissp-d1",
    overview:
      "Security and Risk Management is the largest CISSP domain (16%). It covers the foundational principles of information security — the CIA triad, governance frameworks, risk management methodologies, legal and regulatory requirements, business continuity, and the ethical responsibilities of security professionals.",
    sections: [
      {
        title: "CIA Triad & Security Concepts",
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
        points: [
          "ISC² Code of Ethics: Protect society; Act honorably, honestly, and lawfully; Provide diligent service; Advance the profession.",
          "RFC 1087 defines unethical Internet behavior.",
          "Security professionals must prioritize public safety over employer interests when they conflict.",
        ],
      },
    ],
    keyTerms: [
      { term: "CIA Triad", definition: "Confidentiality, Integrity, Availability — the three core security properties." },
      { term: "ALE", definition: "Annual Loss Expectancy = Single Loss Expectancy × Annual Rate of Occurrence." },
      { term: "SLE", definition: "Single Loss Expectancy = Asset Value × Exposure Factor." },
      { term: "ARO", definition: "Annual Rate of Occurrence — estimated frequency of a threat event per year." },
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
      "BCP questions often test RTO vs RPO vs MTD — know the hierarchy (MTD > RTO always).",
      "Risk acceptance is valid only when formally documented and approved by management.",
    ],
  },
  {
    domainId: "cissp-d2",
    overview:
      "Asset Security (10%) covers the lifecycle of data — from classification and ownership through handling, storage, retention, and destruction. It also addresses privacy requirements and the roles of individuals who interact with data.",
    sections: [
      {
        title: "Data Classification",
        points: [
          "Government classification (US): Top Secret → Secret → Confidential → Unclassified.",
          "Commercial classification: Confidential/Proprietary → Internal/Private → Public.",
          "Classification is determined by data owners based on sensitivity and potential harm from disclosure.",
          "Labels must be applied to media, data objects, and output consistently.",
        ],
      },
      {
        title: "Data Ownership Roles",
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
        points: [
          "Stages: Create → Store → Use → Share → Archive → Destroy.",
          "Data at rest — stored data; protected by encryption (AES-256 typical standard).",
          "Data in transit — moving across networks; protected by TLS, IPSec.",
          "Data in use — being processed in memory; hardest to protect; secure enclaves help.",
          "DLP (Data Loss Prevention) tools monitor and prevent unauthorized data movement.",
          "Scoping and tailoring baseline controls to the specific environment and data types.",
        ],
      },
      {
        title: "Data Retention & Destruction",
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
  {
    domainId: "cissp-d3",
    overview:
      "Security Architecture and Engineering (13%) covers secure design principles, security models that formalize access control, cryptographic systems, and physical security. Understanding how theoretical models translate into real-world systems is central to this domain.",
    sections: [
      {
        title: "Secure Design Principles",
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
        points: [
          "Bell-LaPadula — confidentiality model. No read up (Simple Security), no write down (*-property).",
          "Biba — integrity model. No read down, no write up. Opposite of BLP.",
          "Clark-Wilson — integrity model using transactions and separation of duties (CDI, UDI, IVP, TP).",
          "Brewer-Nash (Chinese Wall) — prevents conflicts of interest; dynamically changes access based on prior access.",
          "Graham-Denning — defines rules for creating/deleting subjects/objects and managing access rights.",
          "Take-Grant model — specifies how rights can be passed between subjects and objects.",
        ],
      },
      {
        title: "Evaluation Criteria",
        points: [
          "Common Criteria (ISO 15408) — international standard for IT product security evaluation.",
          "EAL (Evaluation Assurance Levels) — EAL1 (lowest) to EAL7 (highest). EAL4 is most common commercial target.",
          "PP (Protection Profile) — describes security requirements for a product category.",
          "ST (Security Target) — vendor's implementation-specific security claims.",
          "TCSEC (Orange Book) — historical US DoD standard (D, C1, C2, B1, B2, B3, A1).",
        ],
      },
      {
        title: "Cryptography",
        points: [
          "Symmetric encryption — same key for encrypt/decrypt. Fast; key distribution is the challenge. Examples: AES, 3DES, ChaCha20.",
          "Asymmetric encryption — public/private key pair. Slower; solves key distribution. Examples: RSA, ECC, DH.",
          "Hashing — one-way function producing a fixed-length digest. Used for integrity. MD5 (broken), SHA-2, SHA-3.",
          "Digital signatures — hash encrypted with sender's private key; provides integrity + non-repudiation.",
          "PKI — infrastructure for issuing, managing, and revoking digital certificates (CA, RA, CRL, OCSP).",
          "Hybrid encryption — asymmetric to exchange a session key, symmetric for bulk data (TLS does this).",
          "Key lengths: AES-128/256 (symmetric), RSA-2048+ (asymmetric), SHA-256+ (hashing).",
        ],
      },
      {
        title: "Physical Security",
        points: [
          "Crime Prevention Through Environmental Design (CPTED) — uses lighting, landscaping, and layout to deter crime.",
          "Layers: Perimeter → Facility → Work area → Sensitive area (e.g., data center).",
          "Access controls: fences, guards, bollards, mantraps, turnstiles, badge readers, biometrics.",
          "Mantraps (airlock/sally port) — two-door entry system preventing tailgating.",
          "Data center controls: raised floors, HVAC redundancy, fire suppression (FM-200, clean agents — not water).",
          "Faraday cage — shields against electromagnetic eavesdropping (TEMPEST).",
        ],
      },
    ],
    keyTerms: [
      { term: "Bell-LaPadula", definition: "Confidentiality model: no read up, no write down." },
      { term: "Biba", definition: "Integrity model: no read down, no write up." },
      { term: "Clark-Wilson", definition: "Integrity model using transactions and separation of duties." },
      { term: "EAL", definition: "Evaluation Assurance Level in Common Criteria, ranging from EAL1 to EAL7." },
      { term: "PKI", definition: "Public Key Infrastructure — system of CAs, certificates, and revocation mechanisms." },
      { term: "Mantrap", definition: "Two-door entry system that allows only one person through at a time." },
      { term: "TEMPEST", definition: "Standards for shielding against electromagnetic eavesdropping on electronic equipment." },
      { term: "Hybrid Encryption", definition: "Using asymmetric crypto to exchange a symmetric session key for bulk encryption." },
    ],
    examTips: [
      "Bell-LaPadula = confidentiality (government/military context); Biba = integrity (financial/medical context).",
      "Clark-Wilson is the model to cite for commercial integrity controls and separation of duties.",
      "Brewer-Nash is the 'conflicts of interest' model — think consulting firms or financial advisors.",
      "When a CISSP question says 'MOST effective physical control', think layered controls and access limitation.",
      "EAL4 is the highest level commonly achieved in commercial products — memorize this.",
    ],
  },
  {
    domainId: "cissp-d4",
    overview:
      "Communication and Network Security (13%) covers the OSI and TCP/IP models, network topologies, secure protocols, wireless security, firewalls, and network-based attacks. Understanding how data flows and how each layer can be secured is the focus.",
    sections: [
      {
        title: "OSI & TCP/IP Models",
        points: [
          "OSI Layer 7 – Application: HTTP, SMTP, DNS, FTP.",
          "OSI Layer 6 – Presentation: encryption, compression, encoding.",
          "OSI Layer 5 – Session: session establishment, maintenance, teardown.",
          "OSI Layer 4 – Transport: TCP (reliable, connection-oriented), UDP (fast, connectionless).",
          "OSI Layer 3 – Network: IP addressing, routing (routers operate here).",
          "OSI Layer 2 – Data Link: MAC addresses, switches, VLANs, ARP.",
          "OSI Layer 1 – Physical: cables, hubs, NIC.",
          "TCP/IP collapses OSI into 4 layers: Application, Transport, Internet, Network Access.",
        ],
      },
      {
        title: "Network Security Devices",
        points: [
          "Packet-filtering firewall — inspects headers; no state tracking. Fast but limited.",
          "Stateful inspection firewall — tracks connection state; more secure than packet filtering.",
          "Application-layer (proxy) firewall — full content inspection; understands protocols.",
          "NGFW (Next-Gen Firewall) — combines stateful inspection with IPS, DPI, application awareness.",
          "IDS — monitors and alerts; does not block. HIDS (host-based), NIDS (network-based).",
          "IPS — inline device that actively blocks detected attacks.",
          "WAF (Web Application Firewall) — protects against OWASP Top 10 web attacks.",
          "UTM (Unified Threat Management) — all-in-one device combining firewall, IPS, antivirus.",
        ],
      },
      {
        title: "Secure Protocols",
        points: [
          "TLS 1.3 — current standard for transport encryption; replaces SSL and TLS 1.2.",
          "IPSec — Layer 3 VPN protocol; AH (integrity), ESP (confidentiality+integrity), IKE (key exchange).",
          "SSH — secure remote administration; replaces Telnet.",
          "HTTPS = HTTP over TLS; SFTP = SSH File Transfer Protocol.",
          "DNSSEC — adds cryptographic signatures to DNS to prevent cache poisoning.",
          "S/MIME and PGP — secure email protocols providing encryption and digital signatures.",
        ],
      },
      {
        title: "Wireless Security",
        points: [
          "WEP — broken; do not use.",
          "WPA2 — AES-CCMP encryption; still widely used. Vulnerable to KRACK attack.",
          "WPA3 — current standard; SAE (Simultaneous Authentication of Equals) replaces PSK handshake.",
          "802.1X — port-based NAC; uses RADIUS server to authenticate before network access.",
          "Evil twin — rogue AP mimicking a legitimate network; mitigated by WIDS and 802.1X.",
          "Wireless surveys and heat maps are used to detect rogue APs and optimize coverage.",
        ],
      },
      {
        title: "Network Attacks",
        points: [
          "DoS/DDoS — overwhelms resources; mitigated by rate limiting, scrubbing centers, anycast routing.",
          "Man-in-the-Middle (MitM) — intercepts communication; mitigated by TLS and certificate pinning.",
          "ARP Poisoning — maps attacker's MAC to legitimate IP; mitigated by Dynamic ARP Inspection.",
          "DNS Poisoning — corrupts resolver cache; mitigated by DNSSEC.",
          "Session Hijacking — steals session tokens; mitigated by HTTPOnly, Secure cookies, short token lifetimes.",
          "Smurf attack — amplified ICMP flood using broadcast addresses (largely mitigated on modern networks).",
        ],
      },
    ],
    keyTerms: [
      { term: "TLS", definition: "Transport Layer Security — protocol for encrypting data in transit." },
      { term: "IPSec", definition: "Internet Protocol Security — Layer 3 VPN and encryption framework." },
      { term: "VLAN", definition: "Virtual LAN — logical network segmentation at Layer 2." },
      { term: "802.1X", definition: "IEEE port-based Network Access Control standard using RADIUS authentication." },
      { term: "NGFW", definition: "Next-Generation Firewall — combines stateful inspection with application awareness and IPS." },
      { term: "Evil Twin", definition: "A rogue wireless access point that mimics a legitimate one to capture traffic." },
      { term: "ARP Poisoning", definition: "Attack that maps an attacker's MAC to a legitimate IP to intercept traffic." },
    ],
    examTips: [
      "Know which OSI layer each device/protocol operates at — routers=L3, switches=L2, hubs=L1.",
      "IPSec tunnel mode encrypts the entire original packet; transport mode encrypts only the payload.",
      "For wireless, WPA3 is the preferred answer; if not an option, WPA2 with AES (not TKIP).",
      "IDS detects and alerts; IPS detects and blocks — this distinction appears on every exam.",
      "Questions about 'most secure remote access' typically point to IPSec VPN or SSH.",
    ],
  },
  {
    domainId: "cissp-d5",
    overview:
      "Identity and Access Management (13%) covers how identities are created, authenticated, authorized, and managed across an organization. It spans access control models, federation, privileged access, and the identity lifecycle.",
    sections: [
      {
        title: "Authentication",
        points: [
          "Something you know — password, PIN, security question.",
          "Something you have — smart card, hardware token, OTP device.",
          "Something you are — biometrics (fingerprint, retina, voice).",
          "Somewhere you are — geolocation-based (contextual).",
          "MFA requires two or more different factor types.",
          "Biometric performance: FAR (False Accept Rate), FRR (False Reject Rate), CER/EER (Crossover Error Rate — lower is better).",
          "Passwords: enforce complexity, length (12+ chars), and non-reuse; store as salted hashes.",
        ],
      },
      {
        title: "Access Control Models",
        points: [
          "DAC (Discretionary Access Control) — resource owners set permissions. Flexible but vulnerable to Trojan horses.",
          "MAC (Mandatory Access Control) — labels-based; enforced by the OS. Used in high-security environments.",
          "RBAC (Role-Based Access Control) — permissions assigned to roles, users assigned to roles. Most common enterprise model.",
          "ABAC (Attribute-Based Access Control) — fine-grained; decisions based on user, resource, and environment attributes.",
          "Rule-Based AC — access determined by rules (e.g., firewall rules, time-of-day restrictions).",
        ],
      },
      {
        title: "Identity Federation & SSO",
        points: [
          "SSO (Single Sign-On) — one authentication grants access to multiple systems.",
          "SAML 2.0 — XML-based federation standard; used for web SSO (IdP issues assertions to SP).",
          "OAuth 2.0 — authorization framework; grants delegated access via tokens (not authentication).",
          "OpenID Connect (OIDC) — authentication layer on top of OAuth 2.0; adds ID tokens.",
          "Kerberos — ticket-based SSO for on-premises environments; uses KDC, TGT, and service tickets.",
          "LDAP — directory protocol for querying identity stores (Active Directory uses LDAP).",
        ],
      },
      {
        title: "Privileged Access Management",
        points: [
          "PAM (Privileged Access Management) — controls and monitors access for admin/root accounts.",
          "Principle of least privilege — users get the minimum access required.",
          "Just-in-time (JIT) access — privileges granted only when needed and revoked afterward.",
          "Credential vaulting — storing privileged credentials in an encrypted vault (e.g., CyberArk, HashiCorp Vault).",
          "Session recording — full audit trail of privileged sessions for forensics and compliance.",
        ],
      },
      {
        title: "Identity Lifecycle",
        points: [
          "Provisioning — creating accounts and assigning appropriate access upon hire or role change.",
          "Access reviews — periodic verification that users still need their current access (recertification).",
          "Deprovisioning — immediately revoking all access upon termination; critical control.",
          "Account aggregation/federation — linking identities across multiple systems.",
          "Orphan accounts — accounts that remain active after a user leaves; a major risk.",
        ],
      },
    ],
    keyTerms: [
      { term: "MFA", definition: "Multi-Factor Authentication — requires two or more different factor types." },
      { term: "CER/EER", definition: "Crossover Error Rate — the point where FAR equals FRR; used to compare biometric systems." },
      { term: "SAML", definition: "Security Assertion Markup Language — XML-based standard for web SSO federation." },
      { term: "OAuth 2.0", definition: "Authorization framework for delegated access using tokens; not an authentication protocol." },
      { term: "OIDC", definition: "OpenID Connect — authentication layer built on top of OAuth 2.0." },
      { term: "Kerberos", definition: "Ticket-based SSO protocol using a Key Distribution Center (KDC)." },
      { term: "PAM", definition: "Privileged Access Management — tools and processes for controlling admin-level accounts." },
      { term: "JIT Access", definition: "Just-in-time access — privileges granted temporarily and revoked after use." },
    ],
    examTips: [
      "OAuth 2.0 is authorization, not authentication — OIDC adds the authentication layer. This distinction is commonly tested.",
      "SAML is the answer when the question involves web-based SSO between an IdP and an SP.",
      "Kerberos uses tickets and a KDC — it does not transmit passwords over the network.",
      "The FIRST step after an employee is terminated must be disabling/revoking all access.",
      "Lower CER = better biometric system. FAR is the security risk; FRR is the usability cost.",
    ],
  },
  {
    domainId: "cissp-d6",
    overview:
      "Security Assessment and Testing (12%) addresses how organizations verify that their security controls are working. It covers vulnerability assessments, penetration testing, audit types, log reviews, and software testing methodologies.",
    sections: [
      {
        title: "Vulnerability Assessment vs Penetration Testing",
        points: [
          "Vulnerability scan — automated tool identifies potential weaknesses; does not exploit them.",
          "Penetration test — authorized simulated attack that actively exploits vulnerabilities to demonstrate real-world risk.",
          "Bug bounty programs — invite external researchers to find vulnerabilities in exchange for rewards.",
          "Black box — tester has no prior knowledge of the target.",
          "White box (crystal box) — tester has full knowledge including source code and architecture.",
          "Gray box — partial knowledge (e.g., user-level credentials but no source code).",
        ],
      },
      {
        title: "Penetration Testing Phases",
        points: [
          "1. Planning & Reconnaissance — define scope, rules of engagement; gather OSINT.",
          "2. Scanning — active enumeration of open ports, services, OS versions.",
          "3. Exploitation — actively attempting to gain access using identified vulnerabilities.",
          "4. Post-Exploitation — lateral movement, privilege escalation, persistence.",
          "5. Reporting — document findings, evidence, and remediation recommendations.",
          "Rules of engagement must be formally agreed before testing begins.",
        ],
      },
      {
        title: "Security Audits & Reviews",
        points: [
          "Internal audit — conducted by the organization's own team; less independent.",
          "External audit — conducted by an independent third party; required for many compliance frameworks.",
          "Log review — examining audit trails for anomalies, policy violations, and security events.",
          "SIEM (Security Information and Event Management) — aggregates and correlates logs across the environment.",
          "Code review — static analysis (SAST) examines code without executing it; dynamic analysis (DAST) tests running code.",
          "Software composition analysis (SCA) — scans open-source dependencies for known CVEs.",
        ],
      },
      {
        title: "Metrics & Vulnerability Scoring",
        points: [
          "CVSS (Common Vulnerability Scoring System) — standardized 0-10 score for vulnerability severity.",
          "CVSS Base score components: attack vector, complexity, privileges required, user interaction, scope, CIA impact.",
          "CVE (Common Vulnerabilities and Exposures) — unique identifiers for publicly known vulnerabilities.",
          "NVD (National Vulnerability Database) — NIST-maintained database enriching CVE data with CVSS scores.",
          "KPIs for security testing: mean time to detect (MTTD), mean time to remediate (MTTR), patch compliance rate.",
        ],
      },
    ],
    keyTerms: [
      { term: "CVSS", definition: "Common Vulnerability Scoring System — 0-10 score representing vulnerability severity." },
      { term: "CVE", definition: "Common Vulnerabilities and Exposures — unique identifier for known vulnerabilities." },
      { term: "SAST", definition: "Static Application Security Testing — code analysis without execution." },
      { term: "DAST", definition: "Dynamic Application Security Testing — testing a running application." },
      { term: "SIEM", definition: "Security Information and Event Management — centralized log aggregation and correlation." },
      { term: "Rules of Engagement", definition: "Formal agreement defining the scope, timing, and limitations of a penetration test." },
      { term: "Bug Bounty", definition: "Program that rewards external researchers for responsibly disclosing vulnerabilities." },
    ],
    examTips: [
      "Pen testing always requires written authorization — doing it without permission is a crime.",
      "Vulnerability scans identify; pen tests exploit. Know which is appropriate for a given scenario.",
      "CVSS 9.0-10.0 = Critical, 7.0-8.9 = High — know these thresholds for triage questions.",
      "White box testing is most thorough; black box most closely mimics a real external attacker.",
      "Log review is a detective control — it identifies what happened, not prevents it.",
    ],
  },
  {
    domainId: "cissp-d7",
    overview:
      "Security Operations (13%) covers the day-to-day running of the security function: incident response, digital forensics, evidence handling, disaster recovery, change management, patch management, and physical security operations.",
    sections: [
      {
        title: "Incident Response",
        points: [
          "PICERL phases: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned.",
          "Preparation — develop IR plan, train the team, deploy detection tools before an incident occurs.",
          "Identification — confirm an incident has occurred; distinguish from false positives.",
          "Containment — stop the spread; short-term (isolate system) and long-term (patch, clean).",
          "Eradication — remove the threat (malware, backdoors, unauthorized accounts).",
          "Recovery — restore and validate systems; monitor closely after restoration.",
          "Lessons Learned — post-incident review to improve future response.",
        ],
      },
      {
        title: "Digital Forensics",
        points: [
          "Order of volatility (collect most volatile first): CPU registers/cache → RAM → swap/page file → disk → remote logs → archived media.",
          "Chain of custody — documented evidence handling to ensure admissibility in legal proceedings.",
          "Write blockers — prevent any modification to storage media during forensic acquisition.",
          "Forensic images — bit-for-bit copies verified with hashes (MD5 + SHA-256).",
          "Legal hold — preserve all relevant data when litigation is anticipated; overrides normal retention policies.",
        ],
      },
      {
        title: "Disaster Recovery (DRP)",
        points: [
          "Hot site — fully equipped standby facility; can take over within hours. Most expensive.",
          "Warm site — partially equipped; needs some setup time (hours to days). Balanced cost.",
          "Cold site — basic facility (power, space, connectivity); days/weeks to activate. Cheapest.",
          "Reciprocal agreement — two organizations agree to host each other; low cost but reliability risk.",
          "Cloud-based DR — increasingly common; pay-as-you-go; geographic redundancy.",
          "DR tests: tabletop (discussion), walk-through (functional), full interruption (actual failover).",
        ],
      },
      {
        title: "Change & Patch Management",
        points: [
          "Change management ensures that changes are planned, tested, approved, and documented before deployment.",
          "Change Advisory Board (CAB) — reviews and approves proposed changes.",
          "Emergency changes — expedited approval path for critical patches or outage remediation.",
          "Patch management — systematic process for testing and deploying software updates.",
          "Patch prioritization: CVSS score, exploitability in the wild, asset criticality.",
          "Configuration baselines — approved system configurations against which drift is detected.",
        ],
      },
    ],
    keyTerms: [
      { term: "PICERL", definition: "Incident response phases: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned." },
      { term: "Chain of Custody", definition: "Documented record of who handled evidence and when, maintaining its integrity for legal use." },
      { term: "Hot Site", definition: "Fully operational alternate facility that can assume operations within hours." },
      { term: "RTO", definition: "Recovery Time Objective — maximum acceptable downtime before recovery must be complete." },
      { term: "Legal Hold", definition: "Directive to preserve all potentially relevant data in anticipation of litigation." },
      { term: "Order of Volatility", definition: "Forensics principle: collect the most transient evidence first (CPU → RAM → disk)." },
      { term: "CAB", definition: "Change Advisory Board — body that reviews and approves changes before implementation." },
    ],
    examTips: [
      "In IR, containment comes before eradication — stop the bleeding before you clean the wound.",
      "Preserve evidence before you take remediation actions — forensic integrity is critical.",
      "Hot/warm/cold sites: CISSP questions often give cost vs recovery time tradeoffs — match them correctly.",
      "Change management exists to prevent unauthorized or untested changes from causing outages.",
      "Legal hold supersedes ALL retention and destruction schedules — never delete data under a hold.",
    ],
  },
  {
    domainId: "cissp-d8",
    overview:
      "Software Development Security (10%) covers securing the software development lifecycle (SDLC), applying secure coding practices, and understanding how to assess and manage security risks in applications and databases.",
    sections: [
      {
        title: "Secure SDLC",
        points: [
          "Security must be integrated at every SDLC phase, not added at the end.",
          "Requirements — define security and privacy requirements alongside functional ones.",
          "Design — threat modeling (STRIDE, DREAD, PASTA) to identify risks early.",
          "Implementation — secure coding standards (CERT, OWASP), peer code review.",
          "Testing — SAST, DAST, IAST, fuzz testing, penetration testing.",
          "Deployment — secure configuration, secrets management, hardening.",
          "Maintenance — patch management, vulnerability monitoring, secure retirement.",
        ],
      },
      {
        title: "OWASP Top 10 (Common Web Vulnerabilities)",
        points: [
          "Broken Access Control — users can act outside their intended permissions.",
          "Cryptographic Failures — weak or missing encryption exposing sensitive data.",
          "Injection (SQL, LDAP, OS) — untrusted data sent to an interpreter as a command.",
          "Insecure Design — missing or flawed security controls at the architecture level.",
          "Security Misconfiguration — default credentials, open cloud storage, verbose errors.",
          "Vulnerable and Outdated Components — unpatched libraries and frameworks.",
          "Identification and Authentication Failures — broken auth, weak passwords, session issues.",
          "Software and Data Integrity Failures — insecure deserialization, unsigned updates.",
          "Logging and Monitoring Failures — insufficient audit trails to detect breaches.",
          "Server-Side Request Forgery (SSRF) — server makes requests to unintended locations.",
        ],
      },
      {
        title: "Secure Coding Practices",
        points: [
          "Input validation — validate all input server-side; never trust client-supplied data.",
          "Parameterized queries (prepared statements) — the primary defense against SQL injection.",
          "Output encoding — prevent XSS by encoding output before rendering in the browser.",
          "Error handling — show generic error messages to users; log detailed errors internally.",
          "Secrets management — never hardcode credentials; use vaults, environment variables.",
          "Dependency management — pin versions, scan for CVEs with SCA tools (e.g., Snyk, Dependabot).",
        ],
      },
      {
        title: "DevSecOps",
        points: [
          "Shifts security left — integrates security checks into CI/CD pipelines.",
          "SAST in pipeline — scan code on every commit for security vulnerabilities.",
          "Container security — scan images for CVEs; use minimal base images; enforce pod security policies.",
          "Infrastructure as Code (IaC) scanning — check Terraform, CloudFormation for misconfigurations.",
          "Software Bill of Materials (SBOM) — inventory of all components and dependencies in a software product.",
        ],
      },
    ],
    keyTerms: [
      { term: "STRIDE", definition: "Threat modeling framework: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege." },
      { term: "SQL Injection", definition: "Attack that inserts malicious SQL code into input fields to manipulate a database." },
      { term: "XSS", definition: "Cross-Site Scripting — injecting malicious scripts into web pages viewed by other users." },
      { term: "CSRF", definition: "Cross-Site Request Forgery — tricks a user's browser into making unauthorized requests." },
      { term: "SBOM", definition: "Software Bill of Materials — a complete inventory of software components and dependencies." },
      { term: "Fuzz Testing", definition: "Automated technique sending random/malformed input to find crashes and vulnerabilities." },
      { term: "DevSecOps", definition: "Practice of integrating security continuously throughout the DevOps pipeline." },
    ],
    examTips: [
      "Parameterized queries (prepared statements) are the ONLY reliable defense against SQL injection.",
      "STRIDE is the threat modeling framework most associated with Microsoft and the CISSP exam.",
      "Security must be in requirements, not just testing — this is the 'shift left' principle.",
      "Input validation prevents injection; output encoding prevents XSS — two different controls.",
      "Never trust client-side validation alone; server-side validation is always required.",
    ],
  },

  // ─────────────────────────────────────────
  // CGRC
  // ─────────────────────────────────────────
  {
    domainId: "cgrc-d1",
    overview:
      "The Information Security Risk Management Program domain establishes the foundation of the NIST Risk Management Framework (RMF). It covers how organizations integrate risk management into the SDLC, define roles, and set policies that govern the entire RMF process.",
    sections: [
      {
        title: "NIST RMF Overview",
        points: [
          "The RMF (NIST SP 800-37) provides a disciplined, structured, and flexible process for managing security and privacy risk.",
          "RMF Steps: Prepare → Categorize → Select → Implement → Assess → Authorize → Monitor.",
          "The Prepare step (added in RMF Rev 2) establishes organizational context before system-level work begins.",
          "RMF is risk-based — controls are selected and tailored based on assessed risk, not a one-size-fits-all list.",
          "RMF integrates with the SDLC so security is considered from initial design, not bolted on.",
        ],
      },
      {
        title: "Key Roles & Responsibilities",
        points: [
          "Authorizing Official (AO) — senior executive who accepts residual risk and issues the ATO.",
          "System Owner — manages the information system and is accountable for security.",
          "Common Control Provider — develops and maintains controls inherited by multiple systems.",
          "Security Control Assessor (SCA) — independently assesses whether controls are implemented correctly.",
          "Information System Security Officer (ISSO) — day-to-day security operations for a specific system.",
          "Information System Security Manager (ISSM) — oversees the security program across multiple systems.",
        ],
      },
      {
        title: "Foundational Documents",
        points: [
          "NIST SP 800-37 — the RMF guide.",
          "NIST SP 800-53 — Security and Privacy Controls catalog.",
          "NIST SP 800-53A — Assessment procedures for SP 800-53 controls.",
          "NIST SP 800-30 — Risk Assessment guide.",
          "FIPS 199 — Standards for security categorization of federal information and systems.",
          "FIPS 200 — Minimum security requirements for federal information and systems.",
          "CNSSI 1253 — used by national security systems (NSS) instead of SP 800-53.",
        ],
      },
      {
        title: "Risk Management Concepts",
        points: [
          "Threats × Vulnerabilities × Likelihood × Impact = Risk (conceptual formula).",
          "Threat sources: adversarial (hackers, insiders), accidental (user error), structural (hardware failure), environmental (flood, fire).",
          "Common control — a control that protects multiple systems; reduces duplication.",
          "System-specific control — applies only to one system.",
          "Hybrid control — partially common, partially system-specific.",
          "Organization-wide risk framing sets the context for all subordinate risk decisions.",
        ],
      },
    ],
    keyTerms: [
      { term: "RMF", definition: "Risk Management Framework — NIST SP 800-37 process for managing security and privacy risk." },
      { term: "ATO", definition: "Authority to Operate — formal authorization for a system to process information." },
      { term: "AO", definition: "Authorizing Official — senior executive who grants or denies an ATO." },
      { term: "ISSO", definition: "Information System Security Officer — day-to-day security lead for a specific system." },
      { term: "Common Control", definition: "A security control that is inherited by and applies to multiple information systems." },
      { term: "FIPS 199", definition: "Federal standard for categorizing information systems by impact level (Low/Moderate/High)." },
    ],
    examTips: [
      "Know all 7 RMF steps in order: Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor.",
      "The AO accepts risk — they do not implement controls. The System Owner implements.",
      "Common controls reduce cost and duplication; inheriting systems do not need to re-implement them.",
      "FIPS 199 drives categorization; categorization drives control selection from SP 800-53.",
      "RMF Rev 2 added the Prepare step — this is a common exam question.",
    ],
  },
  {
    domainId: "cgrc-d2",
    overview:
      "The Scope domain covers how organizations define the boundaries of their information systems, categorize them by impact level, and document them in the System Security Plan (SSP). Accurate scoping is the foundation for appropriate control selection.",
    sections: [
      {
        title: "System Categorization",
        points: [
          "FIPS 199 categorizes systems as Low, Moderate, or High based on the potential impact to CIA.",
          "NIST SP 800-60 maps information types to impact levels.",
          "The overall system impact level is the HIGH WATER MARK of all three CIA impact levels.",
          "Example: if confidentiality = Low, integrity = High, availability = Moderate → system is High.",
          "Categorization determines which baseline of controls (Low/Moderate/High) from SP 800-53 is applied.",
        ],
      },
      {
        title: "System Boundaries",
        points: [
          "Authorization boundary defines what is included in the ATO — hardware, software, data, interfaces.",
          "Subsystems within the boundary share the same ATO; external systems require separate agreements.",
          "System Interconnection Agreements: ISA (Interconnection Security Agreement) + MOU/MOA.",
          "Shared services and cloud environments may split the boundary between provider and customer.",
          "OSCAL (Open Security Controls Assessment Language) — machine-readable format for documenting boundaries and controls.",
        ],
      },
      {
        title: "System Security Plan (SSP)",
        points: [
          "The SSP is the primary artifact describing how a system meets its security requirements.",
          "Contains: system description, boundary, categorization, data types, interconnections, and control implementations.",
          "Updated throughout the system lifecycle; reviewed and approved by the AO.",
          "Appendices include: contingency plan, incident response plan, configuration management plan.",
          "Control implementation statements describe HOW each required control is met.",
        ],
      },
    ],
    keyTerms: [
      { term: "FIPS 199", definition: "Standard defining Low, Moderate, High impact categories for federal information systems." },
      { term: "High Water Mark", definition: "Method of determining overall system categorization using the highest impact level across CIA." },
      { term: "Authorization Boundary", definition: "The defined perimeter of an information system subject to a single ATO." },
      { term: "SSP", definition: "System Security Plan — master document describing system security posture and control implementations." },
      { term: "ISA", definition: "Interconnection Security Agreement — defines security requirements for connecting two systems." },
      { term: "OSCAL", definition: "Open Security Controls Assessment Language — machine-readable format for security documentation." },
    ],
    examTips: [
      "High Water Mark: the system's overall category equals the single highest CIA impact value — a common exam calculation.",
      "The SSP documents WHAT controls are required and HOW they are implemented — it is a living document.",
      "Systems outside the authorization boundary require separate ATOs or formal interconnection agreements.",
      "Cloud environments use shared responsibility models — understand what the CSP inherits vs what the agency owns.",
    ],
  },
  {
    domainId: "cgrc-d3",
    overview:
      "This domain covers selecting the right security and privacy controls from NIST SP 800-53, tailoring them to the specific system and environment, and obtaining approval for the selected baseline before implementation.",
    sections: [
      {
        title: "Control Selection from SP 800-53",
        points: [
          "SP 800-53 Rev 5 contains 20 control families (AC, AU, AT, CM, CP, IA, IR, MA, MP, PE, PL, PM, PS, PT, RA, CA, SC, SI, SA, SR).",
          "Baselines (Low/Moderate/High) define which controls from each family are required for each impact level.",
          "SP 800-53B provides the updated control baselines following Rev 5.",
          "Privacy controls (PT family) are included in SP 800-53 Rev 5 for systems processing PII.",
        ],
      },
      {
        title: "Tailoring Controls",
        points: [
          "Scoping — removing controls that are not applicable to the system's environment or technology.",
          "Compensating controls — alternative measures when a baseline control cannot be implemented as specified.",
          "Supplementing — adding controls beyond the baseline when risk warrants it.",
          "Organization-defined parameters (ODPs) — values that organizations must specify for certain control requirements.",
          "Overlays — additional guidance for specific environments (e.g., cloud, industrial control systems, privacy).",
        ],
      },
      {
        title: "Control Approval",
        points: [
          "The tailored control set is documented in the SSP and approved by the AO before implementation.",
          "Divergence from the baseline must be formally justified and documented.",
          "The ISSM/ISSO verifies completeness and appropriateness of the selected control set.",
          "Control inheritance must be documented — inherited controls need not be re-implemented.",
        ],
      },
    ],
    keyTerms: [
      { term: "SP 800-53", definition: "NIST catalog of security and privacy controls for federal information systems." },
      { term: "Control Baseline", definition: "Pre-selected set of controls from SP 800-53 corresponding to a Low/Moderate/High impact level." },
      { term: "Tailoring", definition: "Process of adjusting the baseline by scoping, compensating, or supplementing controls." },
      { term: "Overlay", definition: "Supplemental guidance that modifies or extends a control baseline for a specific technology or environment." },
      { term: "ODP", definition: "Organization-Defined Parameter — a value that the organization must specify within a control statement." },
      { term: "Compensating Control", definition: "An alternative control applied when the specified baseline control cannot be implemented." },
    ],
    examTips: [
      "Know all 20 SP 800-53 control family acronyms — they appear in questions about what control addresses a given risk.",
      "Tailoring is not optional hardening — it is the formal process of making the baseline fit the system.",
      "Compensating controls must provide equivalent protection; they are not a way to weaken the baseline.",
      "Privacy controls in SP 800-53 Rev 5 reflect the integration of NIST Privacy Framework requirements.",
    ],
  },
  {
    domainId: "cgrc-d4",
    overview:
      "The Implementation domain covers putting the selected controls into practice — configuring systems, documenting implementation details, managing configurations, and ensuring supply chain security.",
    sections: [
      {
        title: "Control Implementation",
        points: [
          "Controls are implemented by the System Owner and the ISSO working with IT and system administrators.",
          "Implementation must match the control statement and the SSP description exactly.",
          "Technical controls — implemented in hardware/software (e.g., encryption, access control lists).",
          "Operational controls — implemented through processes (e.g., training, incident response).",
          "Management controls — governance and risk management processes (e.g., risk assessment, planning).",
          "Configuration management (CM) controls ensure that only approved configurations are deployed.",
        ],
      },
      {
        title: "Configuration Management",
        points: [
          "Configuration baseline — approved set of settings for a system component.",
          "Configuration item (CI) — any component under configuration management.",
          "Change control — changes to CIs must go through formal approval before implementation.",
          "STIGs (Security Technical Implementation Guides) — DoD hardening guides for common platforms.",
          "CIS Benchmarks — industry configuration hardening guides from the Center for Internet Security.",
          "SCAP (Security Content Automation Protocol) — automates configuration checking and vulnerability scanning.",
        ],
      },
      {
        title: "Supply Chain Risk Management (SCRM)",
        points: [
          "SP 800-161 — NIST guidance for supply chain risk management.",
          "Risks include: counterfeit components, tampered hardware/software, sole-source dependency.",
          "Controls: vendor vetting, software composition analysis, hardware attestation, SBOM requirements.",
          "Critical software — defined by EO 14028; subject to enhanced SCRM requirements.",
        ],
      },
    ],
    keyTerms: [
      { term: "STIG", definition: "Security Technical Implementation Guide — DoD hardening configuration standard." },
      { term: "SCAP", definition: "Security Content Automation Protocol — standard for automated security configuration assessment." },
      { term: "Configuration Baseline", definition: "Approved set of configuration settings for a system at a specific point in time." },
      { term: "SCRM", definition: "Supply Chain Risk Management — managing risks introduced through the technology supply chain." },
      { term: "CIS Benchmarks", definition: "Vendor-neutral hardening configuration guides from the Center for Internet Security." },
    ],
    examTips: [
      "STIGs are DoD-specific; CIS Benchmarks are the civilian/commercial equivalent.",
      "The SSP control implementation statements must accurately describe what is actually deployed — not what is planned.",
      "SCRM is increasingly prominent in CGRC — know SP 800-161 and the EO 14028 requirements.",
      "Configuration management is a preventive control — it stops unauthorized changes, not just detects them.",
    ],
  },
  {
    domainId: "cgrc-d5",
    overview:
      "Assessment covers the formal evaluation of implemented security and privacy controls to determine whether they are functioning as intended. It produces the Security Assessment Report (SAR) which informs the authorization decision.",
    sections: [
      {
        title: "Security Assessment Process",
        points: [
          "Governed by SP 800-53A — provides assessment procedures for every control in SP 800-53.",
          "Assessment methods: Examine (review documents/configurations), Interview (personnel), Test (technical testing).",
          "Assessment objects: specifications (policies, plans), mechanisms (hardware, software), activities (processes).",
          "Assessments should be conducted by an independent party — not the team that implemented the controls.",
          "Findings are rated: Satisfied, Other Than Satisfied (OTS — the control is not working as required).",
        ],
      },
      {
        title: "Security Assessment Report (SAR)",
        points: [
          "The SAR documents assessment results including findings, evidence, and recommendations.",
          "Findings that are OTS feed into the Plan of Action and Milestones (POA&M).",
          "The SAR is a key input to the authorization package reviewed by the AO.",
          "Assessors must document their methodology, depth, and coverage.",
        ],
      },
      {
        title: "Plan of Action & Milestones (POA&M)",
        points: [
          "The POA&M tracks unresolved control weaknesses and deficiencies with remediation plans and dates.",
          "Each POA&M item: description of weakness, resources required, milestones, completion date.",
          "The AO reviews the POA&M when making the authorization decision — open high-risk items may prevent an ATO.",
          "POA&M items are tracked and updated as remediation progresses.",
        ],
      },
    ],
    keyTerms: [
      { term: "SAR", definition: "Security Assessment Report — documents findings from evaluating implemented security controls." },
      { term: "POA&M", definition: "Plan of Action and Milestones — tracks security weaknesses and their remediation plans." },
      { term: "SP 800-53A", definition: "NIST guide providing assessment procedures for each control in SP 800-53." },
      { term: "OTS", definition: "Other Than Satisfied — assessment finding indicating a control is not implemented correctly." },
      { term: "Assessment Object", definition: "The item being assessed: a specification, mechanism, or activity." },
    ],
    examTips: [
      "The three assessment methods are Examine, Interview, and Test — know when each is appropriate.",
      "The SAR feeds directly into the authorization package — without it, the AO cannot make an informed decision.",
      "OTS findings must go on the POA&M; satisfied findings require no further action.",
      "Assessors must be independent of the implementation team to ensure objectivity.",
    ],
  },
  {
    domainId: "cgrc-d6",
    overview:
      "Authorization is the formal management decision to allow an information system to operate. The Authorizing Official reviews the authorization package, weighs residual risk, and issues an Authority to Operate (ATO), Denial of ATO (DATO), or an Interim ATO.",
    sections: [
      {
        title: "Authorization Package",
        points: [
          "The authorization package presented to the AO contains: SSP, SAR, and POA&M.",
          "Additional documents may include: privacy impact assessment (PIA), contingency plan, incident response plan.",
          "The ISSO/ISSM compiles and submits the package; the Senior Agency Information Security Officer (SAISO) may review.",
          "The AO reviews residual risk — risks remaining after controls are in place.",
        ],
      },
      {
        title: "Authorization Decisions",
        points: [
          "ATO (Authority to Operate) — system is authorized; AO accepts residual risk.",
          "DATO (Denial of ATO) — system is not authorized to operate; unacceptable risk.",
          "Interim ATO (IATO) — temporary authority granted with conditions; time-limited.",
          "ATO duration — typically three years; requires continuous monitoring in between.",
          "Ongoing authorization — replaces the periodic reauthorization cycle with continuous risk-based decisions.",
        ],
      },
      {
        title: "Risk Acceptance",
        points: [
          "The AO is the only person who can formally accept residual risk on behalf of the organization.",
          "Risk tolerance and organizational risk appetite influence what level of residual risk is acceptable.",
          "The AO may accept a POA&M item as mitigating factors if the risk is low and remediation is on track.",
          "Authorization is not permanent — new vulnerabilities or system changes may require reauthorization.",
        ],
      },
    ],
    keyTerms: [
      { term: "ATO", definition: "Authority to Operate — formal authorization for a system to process information, granted by the AO." },
      { term: "DATO", definition: "Denial of Authorization to Operate — system is prohibited from operating due to unacceptable risk." },
      { term: "IATO", definition: "Interim Authority to Operate — time-limited conditional authorization." },
      { term: "Ongoing Authorization", definition: "Continuous risk-based authorization replacing fixed three-year reauthorization cycles." },
      { term: "Authorization Package", definition: "Collection of SSP, SAR, and POA&M submitted to the AO for authorization review." },
    ],
    examTips: [
      "Only the AO can grant an ATO — this is a formal management decision, not a technical one.",
      "The authorization package is SSP + SAR + POA&M. Know all three components.",
      "Ongoing authorization (introduced in RMF Rev 2) uses continuous monitoring data to support real-time decisions.",
      "An IATO is not a full ATO — the conditions must be met before full authorization is granted.",
    ],
  },
  {
    domainId: "cgrc-d7",
    overview:
      "Continuous Monitoring (the largest CGRC domain at 17%) ensures that the security posture of authorized systems is maintained over time. It encompasses ongoing control assessments, security status reporting, and responding to changes that may affect the ATO.",
    sections: [
      {
        title: "ISCM Strategy & Program",
        points: [
          "SP 800-137 defines Information Security Continuous Monitoring (ISCM).",
          "ISCM purpose: maintain ongoing awareness of security and privacy posture to support risk decisions.",
          "ISCM program components: strategy, policies, procedures, metrics, monitoring frequencies, tools.",
          "Monitoring frequencies should be risk-based — higher risk controls monitored more frequently.",
          "Automation is key: SIEM, vulnerability scanners, configuration management tools.",
        ],
      },
      {
        title: "Ongoing Assessments",
        points: [
          "Not all controls need to be re-assessed at the same frequency.",
          "Critical controls (e.g., patch management, access control) may be assessed monthly or continuously.",
          "Less critical controls may be assessed annually.",
          "Assessment results feed into updated SARs and POA&M tracking.",
          "Hardware/software inventory must be maintained continuously — unknown assets cannot be protected.",
        ],
      },
      {
        title: "Security Status Reporting",
        points: [
          "Regular reports to the AO and senior leadership on security posture changes.",
          "Key metrics: number of open POA&M items, patch compliance rate, scan coverage, incidents.",
          "Significant changes to the system (major upgrades, new interconnections) may trigger reauthorization.",
          "Risk scoring models help quantify and communicate changes in posture over time.",
        ],
      },
      {
        title: "Responding to Changes",
        points: [
          "Configuration changes, new vulnerabilities, and incidents must be assessed for impact on the ATO.",
          "Significant change triggers: new external connections, major SW upgrades, change in data types processed.",
          "The ISSO notifies the AO of significant changes; the AO decides if reauthorization is required.",
          "Decommissioning — when a system is retired, the ATO is terminated and data is securely disposed of per NIST SP 800-88.",
        ],
      },
    ],
    keyTerms: [
      { term: "ISCM", definition: "Information Security Continuous Monitoring — maintaining ongoing awareness of an organization's security posture." },
      { term: "SP 800-137", definition: "NIST guide for establishing an Information Security Continuous Monitoring program." },
      { term: "Significant Change", definition: "A change to a system that may require reassessment or reauthorization." },
      { term: "Security Status Report", definition: "Periodic summary of current security posture and POA&M status submitted to the AO." },
    ],
    examTips: [
      "Continuous monitoring does not mean all controls are assessed daily — frequency is risk-based.",
      "A significant change to the system may require reauthorization — the ISSO must notify the AO.",
      "ISCM relies on automation; manual-only monitoring is not scalable and leaves gaps.",
      "SP 800-137 is the CGRC-specific document for continuous monitoring — know it by name.",
      "Decommissioning requires secure data disposal per SP 800-88 — the ATO is formally closed.",
    ],
  },

  // ─────────────────────────────────────────
  // ISSMP
  // ─────────────────────────────────────────
  {
    domainId: "issmp-d1",
    overview:
      "Leadership and Business Management (22%) is the largest ISSMP domain. It focuses on the CISO's strategic role: aligning security with business, building a security program, managing budgets, communicating with executives, and fostering a security culture.",
    sections: [
      {
        title: "Security Strategy & Governance",
        points: [
          "Security strategy must be derived from and aligned with business strategy — not technology trends.",
          "The CISO translates technical risk into business terms that executives and boards can act on.",
          "Governance structures: Board oversight, executive steering committees, security councils.",
          "Policy hierarchy: Board-level policy → management policy → standards → procedures → guidelines.",
          "Security program charter formally defines the scope, authority, and accountability of the security function.",
        ],
      },
      {
        title: "Business Case & Financial Management",
        points: [
          "ROSI (Return on Security Investment) = (ALE Before − ALE After) − Cost of Control.",
          "TCO (Total Cost of Ownership) — includes acquisition, operation, maintenance, and disposal costs.",
          "Prioritize investments using risk-based analysis — highest risk, highest ROI first.",
          "Budget cycles: capital expenditure (CapEx) vs operational expenditure (OpEx).",
          "Security spend benchmarks: typically 5-10% of IT budget, but varies by industry and risk profile.",
        ],
      },
      {
        title: "Executive Communication",
        points: [
          "Board and C-suite prefer financial metrics over technical ones (e.g., exposure in dollars, not CVE counts).",
          "Security dashboards: executive-level (risk posture, compliance), operational (alerts, patch status).",
          "Translate risk scenarios into business impact: revenue loss, regulatory fines, reputational damage.",
          "Security briefings should be concise, business-focused, and action-oriented.",
          "Establish relationships with business unit leaders — security is a business enabler, not just a gatekeeper.",
        ],
      },
      {
        title: "Security Culture & Awareness",
        points: [
          "Security culture — organizational norms and behaviors that support security without constant enforcement.",
          "Tone at the top — leadership must visibly demonstrate security commitment.",
          "Security awareness programs: phishing simulations, role-based training, newsletters, gamification.",
          "Metrics for awareness: phishing click rates, training completion, security reporting rates.",
          "Insider threat programs identify and address behaviors that may indicate malicious or negligent insiders.",
        ],
      },
    ],
    keyTerms: [
      { term: "ROSI", definition: "Return on Security Investment = (ALE before − ALE after) − cost of control." },
      { term: "Security Charter", definition: "Formal document defining the authority, scope, and accountability of the security function." },
      { term: "CapEx", definition: "Capital Expenditure — one-time spending on assets (e.g., hardware purchase)." },
      { term: "OpEx", definition: "Operational Expenditure — ongoing costs (e.g., SaaS subscriptions, staff salaries)." },
      { term: "Insider Threat", definition: "Risk posed by employees, contractors, or partners who misuse authorized access." },
    ],
    examTips: [
      "ISSMP is a CISSP concentration — think like a CISO, not a security analyst.",
      "ROSI requires knowing both ALE before and after the control — not just the cost of the control.",
      "When asked about communicating with the board, choose financial impact over technical metrics.",
      "Security strategy is derived from business strategy — never the other way around.",
      "Culture questions: 'tone at the top' is always the most effective long-term awareness control.",
    ],
  },
  {
    domainId: "issmp-d2",
    overview:
      "Systems Lifecycle Management (19%) covers how security is integrated across the full lifecycle of information systems — from initial acquisition planning through design, development, testing, deployment, operation, and retirement.",
    sections: [
      {
        title: "Secure SDLC Integration",
        points: [
          "Security requirements must be defined in the planning phase — before design begins.",
          "Threat modeling at the design phase identifies architectural risks early and cheaply.",
          "Security testing (SAST, DAST, pen testing) must occur before production deployment.",
          "Security gates — formal checkpoints in the SDLC where security sign-off is required to proceed.",
          "Security debt — deferred security work that accumulates interest over time.",
        ],
      },
      {
        title: "Acquisition & Third-Party Risk",
        points: [
          "Security requirements must be included in procurement contracts and RFPs.",
          "Vendor risk management: assess suppliers' security controls before engagement.",
          "Right to audit clauses — contractual right to assess third-party security posture.",
          "SCRM (Supply Chain Risk Management) — vetting hardware and software components for integrity.",
          "Third-party risk assessments: questionnaires, audits, penetration tests, certifications (SOC 2, ISO 27001).",
        ],
      },
      {
        title: "System Retirement & Decommissioning",
        points: [
          "Formal decommissioning process ensures data is securely removed per NIST SP 800-88.",
          "Remove system from asset inventory, revoke accounts, terminate interconnections.",
          "Archive logs and records as required by retention schedules and legal holds.",
          "Lessons learned from the retired system inform security requirements for its replacement.",
        ],
      },
    ],
    keyTerms: [
      { term: "Security Gate", definition: "A formal SDLC checkpoint requiring security sign-off before the project advances." },
      { term: "Security Debt", definition: "Accumulated deferred security work that grows more expensive over time." },
      { term: "Right to Audit", definition: "Contractual provision allowing an organization to assess a vendor's security controls." },
      { term: "SCRM", definition: "Supply Chain Risk Management — managing security risks introduced through the technology supply chain." },
    ],
    examTips: [
      "Security must be in requirements, not just testing — fixing issues early is exponentially cheaper.",
      "Third-party risk management is a key ISSMP topic — know the full vendor lifecycle from selection to termination.",
      "Decommissioning is a security event — improper data disposal creates significant risk.",
      "Security gates create accountability checkpoints without blocking the development process.",
    ],
  },
  {
    domainId: "issmp-d3",
    overview:
      "Risk Management (18%) at the ISSMP level focuses on enterprise-wide risk governance, integrating security risk into organizational risk frameworks, and using quantitative and qualitative methods to prioritize and communicate risk.",
    sections: [
      {
        title: "Enterprise Risk Management (ERM)",
        points: [
          "ERM integrates information security risk with other enterprise risks (operational, financial, reputational).",
          "Frameworks: COSO ERM, ISO 31000, NIST SP 800-30.",
          "Risk appetite — how much risk the organization will accept in pursuit of its objectives (set by the Board).",
          "Risk tolerance — the acceptable deviation from the risk appetite in day-to-day operations.",
          "Risk register — central repository of identified risks with likelihood, impact, owner, and treatment status.",
          "Risk heat maps visualize the distribution of risks by likelihood and impact.",
        ],
      },
      {
        title: "Risk Assessment Methods",
        points: [
          "Quantitative: ALE = SLE × ARO. Provides dollar figures; useful for justifying investments.",
          "Qualitative: uses scales (High/Med/Low) based on expert judgment; faster, less data-intensive.",
          "Semi-quantitative: combines both (e.g., ordinal scales mapped to monetary ranges).",
          "FAIR (Factor Analysis of Information Risk) — probabilistic quantitative risk model; growing adoption.",
          "Scenarios approach — models specific threat scenarios and estimates frequency and magnitude.",
        ],
      },
      {
        title: "Risk Treatment & Monitoring",
        points: [
          "Treatment options: Accept, Avoid, Mitigate, Transfer (Share).",
          "Risk acceptance must be formally documented and signed by the appropriate risk owner.",
          "Residual risk — risk remaining after treatment; must be within risk tolerance.",
          "Risk monitoring — ongoing tracking of risk levels and treatment effectiveness.",
          "Key Risk Indicators (KRIs) — metrics that signal increasing risk before an incident occurs.",
        ],
      },
    ],
    keyTerms: [
      { term: "ERM", definition: "Enterprise Risk Management — holistic framework integrating all organizational risk types." },
      { term: "FAIR", definition: "Factor Analysis of Information Risk — quantitative model for cyber risk measurement." },
      { term: "Risk Appetite", definition: "Board-level statement of the amount of risk the organization is willing to accept." },
      { term: "Risk Tolerance", definition: "Acceptable deviation from the risk appetite in operational practice." },
      { term: "KRI", definition: "Key Risk Indicator — early warning metric that signals an emerging risk." },
      { term: "Risk Register", definition: "Centralized log of identified risks including likelihood, impact, owner, and status." },
    ],
    examTips: [
      "Risk appetite is set by the Board/executives; risk tolerance is the operational implementation of that appetite.",
      "FAIR is increasingly tested at the ISSMP level — understand that it produces probabilistic dollar ranges, not single values.",
      "KRIs are leading indicators (predict risk); KPIs are lagging indicators (measure past performance).",
      "Risk acceptance without documentation is not risk acceptance — it is negligence.",
    ],
  },
  {
    domainId: "issmp-d4",
    overview:
      "Threat Intelligence and Incident Management (17%) focuses on using threat intelligence to anticipate attacks and managing the full incident response lifecycle at a program level — including team structure, playbooks, external coordination, and post-incident improvement.",
    sections: [
      {
        title: "Threat Intelligence",
        points: [
          "Strategic intelligence — high-level, long-term; informs security strategy and investment (audience: executives).",
          "Tactical intelligence — TTPs (Tactics, Techniques, Procedures) of threat actors (audience: security architects).",
          "Operational intelligence — details of specific planned or ongoing attacks (audience: IR team).",
          "Technical intelligence — IOCs (IP addresses, domains, hashes) for detection (audience: SOC analysts).",
          "MITRE ATT&CK — knowledge base of adversary TTPs organized by tactic and technique.",
          "STIX/TAXII — standards for structuring and sharing threat intelligence.",
          "ISACs — sector-specific threat intelligence sharing organizations (e.g., FS-ISAC for financial sector).",
        ],
      },
      {
        title: "Incident Management Program",
        points: [
          "The IR program defines team structure (CIRT/CSIRT), roles, authority, and escalation paths.",
          "Playbooks (runbooks) — documented step-by-step procedures for specific incident types.",
          "Tabletop exercises validate IR plans without disrupting operations.",
          "Retainers — pre-arranged contracts with IR firms for rapid external support during incidents.",
          "Communication plans — pre-defined templates for internal and external (legal, PR, regulatory) notifications.",
        ],
      },
      {
        title: "Incident Response Coordination",
        points: [
          "Coordination with law enforcement (FBI, CISA) may be required for criminal or nation-state incidents.",
          "Regulatory breach notification requirements: GDPR 72 hours, HIPAA 60 days, SEC 4 business days (material incidents).",
          "Media/PR coordination — legal and communications teams must be involved before public statements.",
          "Threat sharing with peers and ISACs reduces industry-wide risk.",
        ],
      },
    ],
    keyTerms: [
      { term: "MITRE ATT&CK", definition: "Framework cataloging adversary tactics, techniques, and procedures based on real-world observations." },
      { term: "STIX", definition: "Structured Threat Information eXpression — standard format for sharing threat intelligence." },
      { term: "TAXII", definition: "Trusted Automated eXchange of Intelligence Information — transport protocol for STIX data." },
      { term: "ISAC", definition: "Information Sharing and Analysis Center — sector-specific threat intelligence sharing organization." },
      { term: "IOC", definition: "Indicator of Compromise — artifact (IP, hash, domain) indicating a system may be compromised." },
      { term: "TTP", definition: "Tactics, Techniques, and Procedures — the how of adversary behavior." },
      { term: "Playbook", definition: "Pre-defined step-by-step IR procedure for a specific incident type." },
    ],
    examTips: [
      "Strategic intelligence goes to executives; technical intelligence (IOCs) goes to SOC analysts — match audience to type.",
      "MITRE ATT&CK is the standard framework for describing adversary behavior — know it by name.",
      "Breach notification timelines are commonly tested: GDPR = 72 hours, HIPAA = 60 days.",
      "Retainers for IR firms should be established before an incident — not during one.",
      "Tabletop exercises are the lowest-cost, least-disruptive way to test IR plans.",
    ],
  },
  {
    domainId: "issmp-d5",
    overview:
      "Contingency Management (14%) covers Business Continuity Planning (BCP) and Disaster Recovery (DRP) at an enterprise program level — ensuring the organization can continue critical operations through disruptions and recover effectively.",
    sections: [
      {
        title: "Business Impact Analysis (BIA)",
        points: [
          "The BIA is the foundation of the BCP — identifies critical business functions and their dependencies.",
          "Outputs: critical process list, RTO, RPO, MTD, and resource requirements for each function.",
          "Quantitative impact: lost revenue, regulatory penalties, contractual failures.",
          "Qualitative impact: reputational damage, customer trust, employee morale.",
          "BIA must be reviewed when business processes or systems change significantly.",
        ],
      },
      {
        title: "BC/DR Planning",
        points: [
          "BCP covers the full organization; DRP is the technology/IT recovery subset.",
          "Recovery strategy options: hot site, warm site, cold site, cloud DR, reciprocal agreements.",
          "RTO — maximum tolerable downtime before recovery must complete.",
          "RPO — maximum acceptable data loss measured in time (determines backup frequency).",
          "MTD — the absolute maximum time a process can be down before the business suffers irreversible harm.",
          "Work area recovery — alternate office space for staff when primary facility is unavailable.",
        ],
      },
      {
        title: "Testing BC/DR Plans",
        points: [
          "Tabletop exercise — discussion-based; low cost, no disruption.",
          "Walk-through (structured walk-through) — participants walk through the plan step by step.",
          "Simulation — team responds to a simulated scenario without activating actual recovery systems.",
          "Parallel test — recovery systems are activated alongside production; no production impact.",
          "Full interruption test — production systems are shut down; recovery systems take over. Highest risk, most realistic.",
          "Plans should be tested at least annually; critical systems more frequently.",
        ],
      },
    ],
    keyTerms: [
      { term: "BIA", definition: "Business Impact Analysis — identifies critical processes, their dependencies, and the financial/operational impact of disruption." },
      { term: "MTD", definition: "Maximum Tolerable Downtime — the absolute limit before irreversible business harm results." },
      { term: "RTO", definition: "Recovery Time Objective — target time for restoring a system after disruption." },
      { term: "RPO", definition: "Recovery Point Objective — maximum acceptable data loss measured in time." },
      { term: "Full Interruption Test", definition: "BC/DR test where production is actually shut down to validate recovery procedures." },
    ],
    examTips: [
      "MTD > RTO — RTO must be less than MTD; if RTO exceeds MTD, the business cannot survive.",
      "RPO drives backup frequency — if RPO = 4 hours, you must back up at least every 4 hours.",
      "Full interruption tests are the most realistic but most risky — rarely used in practice.",
      "The BIA is done BEFORE designing recovery strategies — you must know what to protect first.",
      "BCP covers people and processes; DRP covers technology — the CISO owns both at a program level.",
    ],
  },
  {
    domainId: "issmp-d6",
    overview:
      "Law, Ethics, and Security Compliance Management (10%) covers the legal and regulatory landscape affecting security programs, intellectual property, privacy law, ethics, and managing compliance obligations across multiple jurisdictions.",
    sections: [
      {
        title: "Key Regulations & Laws",
        points: [
          "GDPR — EU general data protection regulation; extraterritorial reach; fines up to 4% of global annual revenue.",
          "HIPAA/HITECH — US healthcare data protection; administrative, physical, technical safeguards.",
          "PCI-DSS — payment card industry standard; applies globally to cardholder data environments.",
          "SOX — financial reporting controls for US public companies; Section 404 covers IT controls.",
          "CCPA/CPRA — California privacy law with GDPR-like consumer rights.",
          "GLBA (Gramm-Leach-Bliley Act) — financial institution data protection requirements.",
          "FISMA — US federal information security law; mandates RMF compliance for federal agencies.",
        ],
      },
      {
        title: "Intellectual Property",
        points: [
          "Copyright — protects original creative works; automatic; lasts life of author + 70 years (US).",
          "Patent — protects inventions; must be applied for; lasts 20 years from filing date.",
          "Trademark — protects brand identifiers (names, logos); must be registered; renewable indefinitely.",
          "Trade secret — confidential business information; protected as long as kept secret (e.g., algorithms, formulas).",
          "Software licensing — perpetual, subscription, open source (GPL, Apache, MIT — know the key differences).",
        ],
      },
      {
        title: "Ethics",
        points: [
          "ISC² Code of Ethics canons: 1) Protect society; 2) Act honorably; 3) Provide competent service; 4) Advance the profession.",
          "Canon 1 (Protect society) takes precedence over all other canons.",
          "ISACA Code of Professional Ethics aligns with CISM; emphasizes confidentiality, competence, and professional standards.",
          "Security professionals must not engage in unauthorized testing, misleading representations, or conflicts of interest.",
        ],
      },
      {
        title: "Compliance Management",
        points: [
          "Compliance program: identify applicable requirements → map to controls → assess gaps → remediate → monitor.",
          "Compliance ≠ security — meeting a compliance requirement does not mean a control is effective.",
          "GRC (Governance, Risk, Compliance) platforms automate evidence collection and control mapping.",
          "Third-party audits (SOC 1, SOC 2, ISO 27001 certification) demonstrate compliance to customers and regulators.",
          "Regulatory mapping — many controls satisfy multiple frameworks (e.g., NIST CSF maps to ISO 27001, PCI-DSS, HIPAA).",
        ],
      },
    ],
    keyTerms: [
      { term: "GDPR", definition: "General Data Protection Regulation — EU privacy law with global reach and heavy penalties." },
      { term: "FISMA", definition: "Federal Information Security Modernization Act — requires RMF compliance for US federal agencies." },
      { term: "Trade Secret", definition: "Confidential business information protected as long as secrecy is maintained." },
      { term: "SOC 2", definition: "Service Organization Control 2 — third-party audit of security controls based on AICPA Trust Services Criteria." },
      { term: "GRC", definition: "Governance, Risk, and Compliance — integrated management of governance, risk, and regulatory requirements." },
    ],
    examTips: [
      "ISC² Code of Ethics Canon 1 (protect society) overrides all other canons — public safety first.",
      "Compliance is a floor, not a ceiling — being compliant does not guarantee security.",
      "GDPR breach notification is 72 hours to the supervisory authority — one of the most tested timelines.",
      "Trade secrets have no registration requirement — protection depends entirely on maintaining secrecy.",
      "SOC 2 Type I assesses design; SOC 2 Type II assesses operating effectiveness over time — know the difference.",
    ],
  },

  // ─────────────────────────────────────────
  // CISM
  // ─────────────────────────────────────────
  {
    domainId: "cism-d1",
    overview:
      "Information Security Governance (17%) establishes the leadership, accountability, and strategic direction for information security. It covers how the security program is structured, how it aligns with business strategy, how it is measured for effectiveness, and how security decisions are made and communicated across the organization.",
    sections: [
      {
        title: "What Is Security Governance?",
        points: [
          "Governance = the system by which an organization directs and controls security — who decides, who executes, who checks.",
          "Governance ≠ management: governance DIRECTS and OVERSEES; management EXECUTES. The Board governs; the CISO manages.",
          "Security governance ensures security is aligned with business strategy, not an isolated IT silo.",
          "Key governance structures: Board risk committee, Executive security steering committee, CISO office, Security council.",
          "COBIT 2019 — ISACA's governance framework; defines governance and management objectives for IT.",
          "ISO 27001 — international standard for information security management systems (ISMS).",
          "NIST CSF — five-function framework (Identify, Protect, Detect, Respond, Recover) widely adopted in the US.",
          "The CISO should report to the CEO, COO, or Board — NOT the CIO — to maintain independence from IT operations.",
          "Security steering committee: cross-functional body aligning security decisions with business priorities.",
        ],
      },
      {
        title: "Three Lines of Defense",
        points: [
          "1st Line — Business Units: own and manage risks day-to-day; implement operational controls.",
          "2nd Line — Risk, Security & Compliance: oversight, challenge, and support of the 1st line; sets policy and frameworks.",
          "3rd Line — Internal Audit: independent assurance to the Board; reviews both 1st and 2nd line effectiveness.",
          "The CISO and security team sit in the 2nd line — they design and oversee controls, they don't 'own' operational risk.",
          "Internal audit (3rd line) must remain independent — they should NOT implement or operate controls they audit.",
          "Regulators and external auditors are sometimes called the '4th line' — outside the organization entirely.",
        ],
      },
      {
        title: "Security Strategy Development",
        points: [
          "Security strategy is derived from business strategy — it exists to protect and enable business objectives.",
          "Gap analysis: current security state vs desired target state, identifying investment priorities.",
          "Security roadmap: multi-year, prioritized plan to improve program maturity.",
          "Strategic objectives should be SMART: Specific, Measurable, Achievable, Relevant, Time-bound.",
          "Maturity models (CMMI, C2M2, NIST CSF tiers) assess current capability and guide improvement direction.",
          "Business case for security: frame investments in terms of risk reduction, regulatory compliance, and business enablement.",
          "Return on Security Investment (ROSI): estimate the financial risk reduction a control provides vs its cost.",
        ],
      },
      {
        title: "Policy Hierarchy & Document Management",
        points: [
          "Policy — senior management statement of intent; answers WHY. Broad, long-lived, requires executive sign-off.",
          "Standard — mandatory requirements derived from policy; answers WHAT. Specific and measurable.",
          "Guideline — optional, recommended best practices; answers HOW (recommendations).",
          "Procedure — step-by-step instructions for specific tasks; answers HOW EXACTLY. Most granular.",
          "Policy lifecycle: draft → review → approve → publish → communicate → review → retire.",
          "Policy exceptions are normal — require risk assessment, compensating controls, management approval, and review date.",
          "Policies must be communicated to all relevant parties and regularly reviewed (typically annually).",
        ],
      },
      {
        title: "Metrics, KPIs & Board Reporting",
        points: [
          "KPIs (Key Performance Indicators) — measure how well the security program is performing (e.g., patch compliance %).",
          "KRIs (Key Risk Indicators) — early warning signals of increasing risk (e.g., # of high-severity vulnerabilities unpatched).",
          "OKRs (Objectives and Key Results) — goal-setting framework linking security objectives to measurable outcomes.",
          "Board-level metrics should be business-oriented: regulatory fines avoided, risk posture trend, mean time to resolve.",
          "Balanced scorecard: measure security from financial, customer, internal process, and learning perspectives.",
          "Security dashboard: visual summary of program health for executive and board consumption.",
          "Too many metrics = noise. Identify the 5-10 metrics that most clearly demonstrate program value and risk posture.",
        ],
      },
    ],
    keyTerms: [
      {
        term: "COBIT 2019",
        definition: "ISACA's IT governance framework providing a set of governance and management objectives.",
        detail: "COBIT 2019 organizes governance into 40 objectives across five domains spanning governance (Evaluate, Direct, Monitor) and management (Align, Plan, Organize; Build, Acquire, Implement; Deliver, Service, Support; Monitor, Evaluate, Assess). Organizations use it to benchmark maturity, satisfy board expectations, and demonstrate alignment to regulators. It creates a bridge between business goals and IT/security activities, defining clear accountability at each level.",
        example: "A bank uses COBIT 2019 to respond to its regulator's demand for 'effective IT governance.' The CISO maps security activities to COBIT objectives, demonstrating to the Board that risk oversight, policy direction, and performance monitoring are all in place — turning a vague regulatory requirement into a documented, verifiable structure.",
      },
      {
        term: "Three Lines of Defense",
        definition: "Governance model: 1st = business units (own risk), 2nd = security/compliance (oversee), 3rd = internal audit (assure).",
        detail: "The Three Lines model separates risk ownership from oversight and assurance. The 1st line (business units) operates controls and owns the risk. The 2nd line (security, compliance, risk) provides policy, oversight, and challenge without owning the risk. The 3rd line (internal audit) provides independent assurance to the Board. This separation prevents conflicts of interest where the same team executes, oversees, and audits its own work.",
        example: "A retailer suffers payment fraud. Post-incident review shows the 2nd line (compliance) had not been reviewing 1st-line point-of-sale controls adequately. Internal audit (3rd line) reports this governance failure directly to the Audit Committee, triggering a remediation program — exactly as the model is designed to function.",
      },
      {
        term: "CISO",
        definition: "Chief Information Security Officer — executive accountable for the information security program.",
        detail: "The CISO translates organizational risk appetite into a security strategy and program. A critical governance principle: the CISO should report to the CEO, COO, or Board — NOT to the CIO — to maintain independence from IT operations. This independence allows the CISO to report IT-related risks without conflicts of interest. The CISO bridges the security program and executive leadership, communicating risk in business terms.",
        example: "A technology company's CISO reports to the CEO rather than CIO. When a major breach occurs partly due to IT infrastructure decisions that ignored security concerns, the CISO can independently inform the Board — without the conflict of interest that would exist if the CIO were their supervisor.",
      },
      {
        term: "Maturity Model",
        definition: "Framework (e.g., CMMI) for assessing program capability on a scale and guiding improvement.",
        detail: "Security maturity models (CMMI, NIST CSF Tiers, C2M2) measure capability on a scale, typically 1–5. Level 1 is ad hoc (reactive, undocumented). Level 3 is defined (documented, consistently applied). Level 5 is optimizing (data-driven, continuously improving). The model helps prioritize investment by targeting the next level rather than perfection. It provides a common language for board communication about program progress over time.",
        example: "A healthcare organization assesses itself against NIST CSF maturity tiers. Asset management scores Tier 2 but incident response scores Tier 1. The CISO uses this specific gap to justify a dedicated IR budget to the Board, with a target of reaching Tier 3 within 18 months — turning an assessment into a funded roadmap.",
      },
      {
        term: "KPI",
        definition: "Key Performance Indicator — metric measuring effectiveness of security program activities.",
        detail: "Good KPIs measure outcomes, not just activity. 'Percentage of critical vulnerabilities remediated within SLA' is a meaningful KPI; 'number of patches applied' is not. KPIs must be SMART (Specific, Measurable, Achievable, Relevant, Time-bound). They support executive reporting and demonstrate program value. A common mistake is tracking too many KPIs — 5 to 10 meaningful indicators beat 50 mediocre ones.",
        example: "A CISO tracks 'mean time to patch critical vulnerabilities' as a KPI. When the metric rises from 7 days to 18 days over a quarter, the trend is visible before an incident occurs — enabling proactive resource allocation to the vulnerability management team before an exploitation happens.",
      },
      {
        term: "KRI",
        definition: "Key Risk Indicator — early-warning metric signaling that a risk is increasing or a threshold may be breached.",
        detail: "Unlike KPIs that measure past performance, KRIs are forward-looking early warning signals tied to specific risks in the risk register. When a KRI threshold is breached, it triggers a review or escalation — before the risk materializes into an incident. Good KRIs are predictive, measurable, and calibrated to fire early enough to allow response without creating constant false alarms.",
        example: "A financial institution monitors 'number of unpatched critical vulnerabilities older than 30 days' as a KRI. When the count exceeds 50, it automatically triggers escalation to the CISO and an emergency patching sprint — catching a dangerous trend before an attacker can exploit it.",
      },
      {
        term: "Security Steering Committee",
        definition: "Cross-functional body providing governance oversight and aligning security with business priorities.",
        detail: "The Security Steering Committee bridges the security program and senior business leadership. Typical members: CISO, CIO, CFO, Legal, HR, and business unit heads. It reviews major risk decisions, approves significant security investments, resolves conflicts between security and business priorities, and ensures security is embedded in strategic planning. It operates at the management level, distinct from the Board risk committee that operates at the governance level.",
        example: "A company considers a rapid cloud migration. The Security Steering Committee reviews security implications, approves the risk treatment plan, allocates a cloud security budget, and sets a go/no-go security criterion — ensuring security has a formal vote at the decision-making table before the project starts.",
      },
      {
        term: "Gap Analysis",
        definition: "Comparison of current security state against a target state to identify improvement priorities.",
        detail: "A gap analysis compares the current security posture against a target — a framework (ISO 27001, NIST CSF), a regulatory requirement, or strategic goals. The output is a prioritized list of gaps with associated risk, cost to close, and timeline. Gap analysis is typically the first step in building a security roadmap, and is especially important when a new CISO joins an organization.",
        example: "A new CISO conducts a gap analysis against ISO 27001 in the first 90 days. The assessment reveals no formal asset inventory, ad hoc access reviews, and no incident response plan. These three gaps become the top priorities on a security roadmap presented to the Board with specific timelines and budget estimates.",
      },
      {
        term: "ROSI",
        definition: "Return on Security Investment — ratio of expected risk reduction to cost of a security control.",
        detail: "ROSI quantifies the financial value of a security control: ROSI = (ALE before control − ALE after control − Annual control cost) / Annual control cost. A positive ROSI means the control pays for itself in risk reduction. ROSI is used to justify security spending to CFOs and boards who expect financial justification. The challenge is estimating ALE accurately — but even rough quantification is more persuasive than 'because it's best practice.'",
        example: "A CISO wants to deploy email filtering at $80,000/year. The current ALE from phishing-related incidents is $500,000. With filtering, estimated residual ALE drops to $100,000. ROSI = ($500K − $100K − $80K) / $80K = 4.0 (400% return). The CFO approves the investment based on the financial case.",
      },
      {
        term: "Policy Exception",
        definition: "Formal, documented approval to deviate from a policy with compensating controls and a review date.",
        detail: "Policy exceptions are a normal part of governance — they acknowledge that business reality sometimes requires deviating from the ideal. Required elements: description of the exception, business justification, risk created, compensating controls to reduce that risk, approving manager's signature, and an expiry/review date. Undocumented exceptions are audit findings and governance failures — the documentation is what makes an exception legitimate.",
        example: "A dev team needs to use unencrypted FTP to integrate with a legacy partner system, violating the encryption-in-transit policy. They submit an exception documenting the business need, the risk, a compensating control (network access restricted to the partner's IP only), and a 90-day expiry date. The CISO approves it formally — the exception is governed, not hidden.",
      },
    ],
    examTips: [
      "CISM is management-focused: always choose the answer that demonstrates business alignment, risk management, and governance over technical fixes.",
      "Governance DIRECTS; management EXECUTES. The Board sets risk appetite; the CISO operationalizes it.",
      "The CISO reports to CEO or Board — independence from CIO is essential to avoid conflicts of interest.",
      "Three Lines: Security sits in the 2nd line (oversight). Internal Audit (3rd line) is independent and must not manage controls it audits.",
      "Policy hierarchy order (most abstract to most specific): Policy → Standard → Guideline → Procedure.",
      "Policy exceptions require formal documentation — undocumented exceptions are governance failures.",
      "KPIs measure PERFORMANCE; KRIs measure RISK LEVEL — both are needed for a complete security dashboard.",
      "A security strategy not aligned to business objectives will fail to get funding and executive support.",
    ],
    diagramIds: ["cism-three-lines-of-defense", "cism-policy-hierarchy"],
  },
  {
    domainId: "cism-d2",
    overview:
      "Information Security Risk Management (20%) covers identifying, analyzing, evaluating, and treating information security risks in alignment with organizational risk appetite. CISM focuses on the management view: deciding how much risk is acceptable, making risk treatment decisions, and communicating risk to stakeholders — not just identifying technical vulnerabilities.",
    sections: [
      {
        title: "Risk Fundamentals",
        points: [
          "Risk = the potential for loss or harm arising from a threat exploiting a vulnerability against an asset.",
          "Threat: anything that could cause harm (attacker, disaster, human error, system failure).",
          "Vulnerability: a weakness that a threat can exploit.",
          "Asset: anything of value (data, systems, processes, reputation).",
          "Risk = Likelihood × Impact — both factors must be assessed together.",
          "Inherent risk: risk before any controls are applied.",
          "Residual risk: risk remaining after controls — must be within the organization's risk tolerance.",
          "Risk appetite: the TOTAL level of risk the organization is willing to accept (Board-level decision).",
          "Risk tolerance: the acceptable variation around the risk appetite in day-to-day operations.",
        ],
      },
      {
        title: "Risk Assessment Methods",
        points: [
          "Qualitative: uses descriptive scales (High/Medium/Low); fast, subjective, good for prioritization and board communication.",
          "Quantitative: uses monetary values; ALE (Annual Loss Expectancy = SLE × ARO), FAIR model.",
          "Risk heat map: visual 5×5 matrix plotting likelihood vs impact — see the diagram below.",
          "Risk scenarios: narrative descriptions of how a threat materializes, making abstract risks tangible for executives.",
          "Threat modeling: structured technique (e.g., STRIDE) to systematically identify risks in a system or process.",
          "OCTAVE: risk methodology emphasizing organizational and strategic risk, not just technical.",
          "FAIR: Factor Analysis of Information Risk — quantitative model decomposing risk into measurable factors.",
          "Risk assessments should be repeated: after major changes, annually, and after incidents.",
        ],
      },
      {
        title: "Risk Treatment Options",
        points: [
          "Accept: document and formally approve the risk; appropriate when cost to treat > impact or risk is within appetite.",
          "Avoid: eliminate the activity creating the risk; appropriate for catastrophic risks that cannot be mitigated.",
          "Mitigate (Reduce): implement controls to lower likelihood or impact; most common treatment.",
          "Transfer/Share: insurance, contractual transfer, outsourcing; shifts financial impact but NOT reputational risk.",
          "Risk treatment must be selected by the risk OWNER (business), not by the security team alone.",
          "After treatment, verify residual risk is within risk tolerance — if not, treat further.",
          "All accepted risks must be formally documented in the risk register with owner and review date.",
        ],
      },
      {
        title: "Risk Register & Ongoing Monitoring",
        points: [
          "Risk register: the central repository of all identified risks, their ratings, owners, treatment status, and review dates.",
          "Risk register attributes: risk ID, description, asset, threat, vulnerability, likelihood, impact, score, treatment, owner, residual risk, review date.",
          "Risk owners must be business leaders, not the security team — security advises; business owns.",
          "KRIs (Key Risk Indicators) provide early warning that a risk is increasing toward a threshold.",
          "Risk reviews: triggered by material changes (new system, acquisition, regulation) and on a scheduled basis (annually minimum).",
          "Risk escalation: define thresholds above which risks automatically escalate to senior management or the Board.",
          "Third-party risk: extend the risk management process to vendors, partners, and cloud providers.",
        ],
      },
    ],
    keyTerms: [
      {
        term: "Inherent Risk",
        definition: "The level of risk present before any controls are applied.",
        detail: "Inherent risk is the raw, unmitigated exposure that exists in an activity or process before any security controls are in place. Understanding inherent risk is critical for prioritization — you focus controls where inherent risk is highest. On the CISM exam, inherent risk is always assessed first; controls are then selected to bring residual risk within the acceptable appetite.",
        example: "A hospital's inherent risk for patient data breaches is very high — sensitive regulated data combined with multiple external access points, clinical staff under time pressure, and life-safety systems that can't tolerate patching downtime. This inherent risk score guides the security budget toward patient data systems before investing in lower-risk areas.",
      },
      {
        term: "Residual Risk",
        definition: "Risk remaining after controls have been implemented; must be within risk tolerance.",
        detail: "Residual risk is the real-world risk level the organization is living with after applying its chosen controls. It must be formally accepted by a business manager (the risk owner) and must fall within the organization's risk tolerance. If residual risk still exceeds tolerance after treatment, additional controls are required. The risk register tracks both inherent and residual scores to show the effectiveness of controls.",
        example: "After implementing MFA, encryption, and access logging for a cloud HR system, the inherent risk score drops from High (15/25) to Residual Medium (8/25). The CISO presents this to the risk owner (HR Director), who formally accepts the residual risk in writing in the risk register — the documentation of that acceptance is what makes it legitimate.",
      },
      {
        term: "Risk Appetite",
        definition: "The total amount of risk the Board is willing to accept in pursuit of business objectives.",
        detail: "Risk appetite is a Board-level strategic decision about how much total risk the organization will accept to pursue its objectives. It is expressed as a policy statement or threshold — for example, 'We will not accept High risks without Board-level approval.' The CISO provides input, but the Board sets appetite. It guides all subsequent risk treatment decisions and is the anchor point for the entire risk management program.",
        example: "A fintech startup sets a high risk appetite for product innovation but a low appetite for customer data security. The Board documents this in a risk appetite statement. The CISO uses it to justify strict encryption controls on customer data while accepting more risk in internal development environments — different thresholds for different risk types.",
      },
      {
        term: "Risk Tolerance",
        definition: "The acceptable operational variation around the risk appetite; the day-to-day working boundary.",
        detail: "Risk tolerance is the operational translation of risk appetite into measurable thresholds. While appetite is strategic ('we accept medium risk'), tolerance makes it actionable ('any risk scoring 15+ on our 25-point scale requires executive approval before accepting'). Tolerance is typically set by the CISO and business management within the bounds of Board-set appetite, and it creates the rules that day-to-day operations follow.",
        example: "A company's risk appetite says Low to Medium risk is acceptable. The CISO operationalizes this as a vulnerability management tolerance: CVSS 7.0+ vulnerabilities must be patched within 30 days; below 7.0 can wait 90 days. This converts a strategic statement into an actionable rule the vulnerability team can follow without executive consultation each time.",
      },
      {
        term: "Risk Register",
        definition: "Central repository tracking all identified risks with their ratings, owners, treatment, and review status.",
        detail: "The risk register is the authoritative record of all identified risks. Each entry includes: risk ID, description, threat/vulnerability, affected assets, inherent likelihood and impact scores, current controls, residual score, treatment decision, business owner, action plan, and review date. It is a living document updated after assessments, incidents, and material changes. The CISO uses it to report risk posture to the Board and Steering Committee.",
        example: "Before a major acquisition, the CISO reviews the risk register and adds five entries covering the target company's unknown security posture, legacy systems, and potential undisclosed liabilities. These new risks drive a pre-acquisition security due diligence assessment — the risk register turns a vague concern into a structured, tracked set of risks with owners.",
      },
      {
        term: "FAIR",
        definition: "Factor Analysis of Information Risk — quantitative model for measuring and communicating information risk.",
        detail: "FAIR decomposes risk into measurable components: threat event frequency, contact frequency, probability of action, vulnerability, and probable loss magnitude. Unlike qualitative methods, FAIR produces monetary estimates (annual expected loss in dollars). It is endorsed by The Open Group and used in large enterprises to justify security investments with CFO-friendly financial language rather than vague 'High/Medium/Low' ratings.",
        example: "A CISO uses FAIR to quantify the risk of not encrypting a customer database. By estimating 2 breach attempts/year, a 30% success probability, and $2M average loss per breach, the model outputs an ALE of ~$120,000/year. This justifies a $40,000 encryption investment — a clear financial case that the CFO can evaluate objectively.",
      },
      {
        term: "ALE",
        definition: "Annual Loss Expectancy = Single Loss Expectancy × Annual Rate of Occurrence; core quantitative risk metric.",
        detail: "ALE is the expected yearly financial loss from a specific risk. SLE (Single Loss Expectancy) is the loss from one occurrence. ARO (Annualized Rate of Occurrence) is expected frequency per year. A control is financially justified when its annual cost is less than the ALE reduction it provides. ALE allows comparing different risks on a consistent financial scale for budget prioritization.",
        example: "A server faces ransomware once every 5 years (ARO = 0.2), with $250,000 recovery cost (SLE). ALE = $250K × 0.2 = $50,000/year. An endpoint detection tool costing $15,000/year reduces ARO to 0.05. New ALE = $12,500/year. Net annual benefit = $50K − $12.5K − $15K = $22,500. The CISO presents this to justify the investment.",
      },
      {
        term: "Risk Heat Map",
        definition: "Visual 5×5 matrix plotting risks by likelihood and impact to prioritize treatment.",
        detail: "A risk heat map plots individual risks on a matrix by likelihood (y-axis) and impact (x-axis), using color-coding (red = high, yellow = medium, green = low). It gives executives an instant visual of the risk portfolio and focuses attention on the top-right quadrant (high likelihood + high impact). Heat maps are board-friendly but qualitative — they lack the financial precision of ALE or FAIR, making them better for communication than for budgeting.",
        example: "A CISO presents a 5×5 heat map to the Board. Three risks appear in the red quadrant: ransomware, third-party breach, and insider threat. The visual instantly focuses the Board's attention and budget discussion on those three items, rather than requiring them to interpret a 20-row risk register spreadsheet.",
      },
      {
        term: "Risk Scenario",
        definition: "Narrative description of how a specific threat could materialize and harm the organization.",
        detail: "Risk scenarios describe concretely how a threat event occurs, what vulnerability it exploits, what assets are affected, and what the business impact looks like. Scenarios make abstract risks tangible for non-technical executives and board members. They are used in tabletop exercises, board presentations, and insurance applications. FAIR explicitly uses scenarios as the foundation for quantitative analysis.",
        example: "The CISO develops a scenario: 'A nation-state actor sends spear-phishing to finance staff, obtains credentials, accesses the wire transfer system, and initiates a $3M fraudulent transfer before detection.' This concrete narrative leads the CFO to approve wire transfer dual-authorization controls — the scenario made the risk visceral in a way a risk score never could.",
      },
      {
        term: "Risk Owner",
        definition: "Business manager accountable for a risk and its treatment — not the CISO.",
        detail: "The risk owner is the business executive whose operations are most affected by a risk and who is accountable for the treatment decision. This is a fundamental governance principle: security advises; the business owns. Risk owners are always business managers — never the CISO or security team. This accountability is documented in the risk register with the owner's formal sign-off on the accepted residual risk.",
        example: "The CISO identifies high risk in the customer-facing web application. The risk owner is the VP of Digital Products. The CISO presents three options: patch now, implement a WAF, or accept with monitoring. The VP chooses the WAF, signs the risk treatment plan, and owns the residual risk — the CISO implements the chosen control but does not own the risk decision.",
      },
      {
        term: "KRI",
        definition: "Key Risk Indicator — metric providing early warning of increasing risk toward a defined threshold.",
        detail: "In risk management, KRIs monitor the leading indicators of specific risks in the register. Each significant risk should have 1-3 KRIs that, when thresholds are breached, automatically trigger a review or escalation action. KRIs require calibration — they should fire early enough to allow response but not so frequently that they create alert fatigue and lose credibility.",
        example: "A bank's risk register includes 'unauthorized data access' as a high risk. KRIs include: (1) privileged access reviews overdue > 10, (2) failed logins on core banking system > 500/day, (3) outbound data transfers > 2x baseline. Breaching any threshold triggers a security review — catching risk trends before a breach occurs.",
      },
    ],
    examTips: [
      "Inherent vs residual risk is a high-frequency exam topic — always distinguish between pre-control and post-control risk.",
      "Risk appetite is set by the BOARD, not the CISO. The CISO advises and implements; executives decide.",
      "Risk transfer (insurance) never eliminates reputational risk — this distinction is tested repeatedly.",
      "Risk acceptance requires formal documentation and management sign-off — verbal acceptance is not sufficient.",
      "The risk OWNER is always a business manager, not a security professional.",
      "Qualitative methods are preferred for board communication; quantitative for financial justification of controls.",
      "CISM exam tip: when in doubt, choose the answer that involves risk assessment BEFORE any treatment decision.",
    ],
    diagramIds: ["cism-risk-heatmap", "cism-risk-treatment"],
  },
  {
    domainId: "cism-d3",
    overview:
      "Information Security Program (33%) is the largest CISM domain. It covers the full lifecycle of building and operating an effective security program — from initial design and control selection through ongoing operations, awareness, and vendor management. This domain tests how a security manager translates strategy and risk decisions into a functioning program.",
    sections: [
      {
        title: "Security Program Design & Maturity",
        points: [
          "The security program operationalizes the security strategy through people, processes, and technology.",
          "Program charter: formally defines the program's scope, authority, accountability, and funding.",
          "Core components: policy framework, asset management, risk management, access control, vulnerability management, IR, BCP, compliance.",
          "Security architecture: the overall blueprint for how controls work together to protect the organization.",
          "Defense in depth: multiple overlapping layers so no single control failure causes total compromise.",
          "Zero trust architecture: 'never trust, always verify' — continuous authentication, least privilege, micro-segmentation.",
          "Maturity models (CMMI, NIST CSF tiers, C2M2): assess current capability on a scale, guide roadmap priorities.",
          "Program maturity progression: Ad hoc → Repeatable → Defined → Managed → Optimizing.",
        ],
      },
      {
        title: "Security Controls Framework",
        points: [
          "Control PURPOSE categories: Preventive (stop incidents), Detective (identify incidents), Corrective (recover), Deterrent (discourage), Compensating (alternative to primary), Directive (mandate behavior).",
          "Control TYPE categories: Administrative (policies, training, procedures), Technical (firewalls, encryption, IDS), Physical (locks, cameras, guards).",
          "A robust program uses ALL three types across ALL purpose categories — see the control matrix diagram.",
          "Control selection must follow risk assessment — the risk drives the control, not the vendor.",
          "Cost-benefit analysis: control cost ≤ expected risk reduction (asset value × likelihood × impact reduction).",
          "NIST SP 800-53: comprehensive control catalogue organized by family (AC, AU, CA, CM, IA, IR, etc.).",
          "ISO 27001 Annex A: 93 controls organized into 4 themes — Organizational, People, Physical, Technological.",
          "Control effectiveness: regularly tested through audits, assessments, and red team exercises.",
        ],
      },
      {
        title: "Security Program Lifecycle",
        points: [
          "The security program is NOT a one-time project — it follows a continuous improvement cycle.",
          "Assess: evaluate current state, conduct gap analysis, review risk register.",
          "Design: develop strategy, select controls, create architecture, plan roadmap.",
          "Implement: deploy controls, build awareness, configure tools.",
          "Operate: run SOC, manage vulnerabilities, handle incidents, enforce policies.",
          "Monitor: track KPIs/KRIs, conduct audits, assess control effectiveness.",
          "Improve: update plans based on lessons learned, new threats, and changed business requirements.",
          "Program reviews: Board updates (quarterly), detailed management reviews (monthly), operational reviews (continuous).",
        ],
      },
      {
        title: "Security Awareness & Training",
        points: [
          "Awareness: creates recognition of security risks in everyday behavior (everyone).",
          "Training: builds job-specific security skills (role-based — developers, finance, executives).",
          "Education: deep conceptual knowledge (security professionals pursuing certifications).",
          "Mandatory annual training for all staff; enhanced training for privileged users and high-risk roles.",
          "Phishing simulations: measure susceptibility; provide immediate teaching moments; track improvement over time.",
          "Effectiveness metrics: phishing click rate (not completion rate), reported suspicious emails, security culture survey scores.",
          "Security culture: the degree to which employees naturally make security-conscious decisions without being told.",
          "Completion rate is a vanity metric — behavior change is the actual goal.",
        ],
      },
      {
        title: "Third-Party & Vendor Risk Management",
        points: [
          "Vendor risk assessment: before engagement, evaluate security controls via questionnaires, audits, certifications (SOC 2, ISO 27001, PCI-DSS).",
          "Inherent vendor risk driven by: data sensitivity shared, level of access granted, criticality of service.",
          "Contractual protections: security requirements in SLAs/MSAs, right-to-audit clauses, breach notification obligations, data destruction on termination.",
          "Ongoing monitoring: annual reassessments, continuous intelligence monitoring, tracking vendor security incidents.",
          "Fourth-party risk: risks introduced by your vendors' own suppliers — often overlooked but significant.",
          "Concentration risk: over-reliance on a single vendor; consider what happens if they experience an incident.",
          "Vendor offboarding: ensure data is returned or securely destroyed; revoke all access immediately.",
          "Cloud shared responsibility: understand exactly where provider responsibilities end and yours begin.",
        ],
      },
    ],
    keyTerms: [
      {
        term: "Defense in Depth",
        definition: "Layered security controls such that no single failure results in a full compromise.",
        detail: "Defense in depth places independent security controls at multiple layers — perimeter, network, host, application, and data — so that an attacker who bypasses one still faces additional barriers. Each layer is designed to detect, delay, or stop threats that penetrate the previous one. The principle recognizes that no control is perfect; overlapping controls compensate for individual weaknesses.",
        example: "An attacker bypasses a web application firewall using a zero-day exploit. Because of defense in depth, they then encounter: application-layer authentication, network segmentation blocking database access, and a SIEM alert on unusual query patterns. The attacker is detected and contained before reaching sensitive data, despite the outer control failing.",
      },
      {
        term: "Zero Trust",
        definition: "Architecture requiring continuous verification of every user and device; no implicit trust from network location.",
        detail: "Zero Trust eliminates the assumption that being inside the corporate network means you should be trusted. Every user, device, and connection must be continuously verified — regardless of location. Core principles: verify explicitly (always authenticate and authorize), use least privilege (minimum necessary access), and assume breach (behave as if an attacker is already inside). Implemented through MFA, IAM, micro-segmentation, device health checks, and encrypted traffic.",
        example: "A company moves from VPN-based access to Zero Trust. Even employees connected from the office must complete MFA, present a compliant device posture, and request access only to specific resources for their current task. An attacker with a stolen password still cannot access anything without the employee's MFA device and a healthy corporate device.",
      },
      {
        term: "Program Charter",
        definition: "Document formally defining the security program's scope, authority, accountability, and funding.",
        detail: "The program charter is the founding governance document that gives the security program its mandate. It establishes: the program's purpose and scope, the CISO's authority to direct and enforce security across the organization, reporting structure, baseline funding, and accountability for compliance. The charter must be signed by senior executive leadership. Without one, the CISO lacks formal authority to enforce policies when business units push back.",
        example: "A newly appointed CISO's first action is drafting a Security Program Charter and getting the CEO to sign it. When the CISO later requires a business unit to complete a risk assessment before launching a new product, the charter provides the formal authority — preventing the unit from simply ignoring the security review.",
      },
      {
        term: "Preventive Control",
        definition: "Control designed to stop an incident from occurring (e.g., firewall, access controls, encryption).",
        detail: "Preventive controls are the first preference in a defense-in-depth strategy because stopping a threat before it causes harm is always cheaper than responding after. They span all control types: Administrative (access control policy, background checks), Technical (firewall, MFA, encryption, DLP), and Physical (badge entry, cable locks, mantrap). Preventive controls are most effective against known threats — novel attack techniques may bypass them.",
        example: "A company implements MFA (technical preventive), a clean desk policy (administrative preventive), and server cabinet locks (physical preventive). When an attacker obtains an employee's password through phishing, the MFA requirement blocks the login attempt — the preventive control stops the incident before any system access occurs.",
      },
      {
        term: "Detective Control",
        definition: "Control designed to identify an incident after it occurs (e.g., SIEM, IDS, audit logs).",
        detail: "Detective controls identify incidents that are in progress or have already occurred. They don't prevent harm directly, but provide the information needed to respond quickly. In a Zero Trust environment where you 'assume breach,' detective controls are essential. Examples: SIEM, IDS/IPS, file integrity monitoring, security cameras, audit log review, anomaly detection. Without them, organizations might not discover a breach for weeks or months.",
        example: "A threat actor establishes persistence and begins slow data exfiltration. Preventive controls didn't stop the initial access. However, the SIEM (detective control) identifies an anomalous 2am outbound transfer, triggers an alert, and the SOC initiates investigation and containment within hours — limiting breach scope because the detective control caught what prevention missed.",
      },
      {
        term: "Corrective Control",
        definition: "Control designed to restore normal operations after an incident (e.g., backup restoration, patch).",
        detail: "Corrective controls restore normal operations after an incident has been identified. They are the third layer of the control triad (Preventive → Detective → Corrective). Examples: backup restoration after ransomware, patch deployment after exploitation, credential reset after compromise, fire suppression after ignition. Critically, corrective controls are only effective if prepared and tested in advance — discovering your backups are corrupted during a ransomware attack is the worst possible time.",
        example: "Ransomware encrypts a company's file servers. Because corrective controls were prepared — immutable offline backups (technical) and a tested recovery runbook (administrative) — the team restores data to the state from 4 hours before the attack. The corrective controls limit RTO to 6 hours and RPO to 4 hours, meeting BCP objectives.",
      },
      {
        term: "Control Effectiveness",
        definition: "Degree to which a security control reduces risk as designed; measured through testing and metrics.",
        detail: "A control can exist on paper and still be ineffective — a firewall with permissive rules, a policy no one reads, a camera pointed at a wall. Control effectiveness measures whether controls are actually working as designed. It is assessed through: automated monitoring, periodic testing (penetration tests, audits, red team exercises), and outcome metrics (are incidents detected and contained within SLA?). Low effectiveness creates dangerous false confidence.",
        example: "During a red team exercise, 15 attack techniques are simulated against the company's IDS. It detects only 4. Control effectiveness is 27% — dangerously low. This finding justifies budget for SIEM tuning and a third-party threat detection service, transforming a paper control that appeared adequate into one that actually works.",
      },
      {
        term: "Fourth-Party Risk",
        definition: "Risk introduced by a vendor's own suppliers or subcontractors.",
        detail: "You have a direct contract with your third-party vendors; you typically have no contract with or visibility into their suppliers. A breach of your vendor's vendor can still expose your data through the supply chain. Fourth-party risk is managed through: contractual flow-down requirements (vendors must impose your security standards on their subcontractors), reviewing their SOC 2 reports, ongoing monitoring, and asking vendors to disclose critical subcontractors.",
        example: "A law firm's cloud document management vendor subcontracts hosting to a smaller provider (fourth party) that suffers a breach. The firm's confidential client data is exposed even though their direct vendor had strong security. The incident triggers a policy requiring all critical vendors to disclose and assess their subcontractors annually.",
      },
      {
        term: "SOC 2",
        definition: "Third-party audit report assessing a service organization's security, availability, and privacy controls.",
        detail: "SOC 2 is an independent audit of a service organization's controls based on the AICPA Trust Services Criteria. Type I reports assess control design at a point in time. Type II reports (strongly preferred) assess design AND operating effectiveness over 6-12 months, providing evidence that controls actually worked — not just that they exist. SOC 2 Type II is the industry standard for third-party vendor assurance.",
        example: "An enterprise cloud storage vendor provides a SOC 2 Type II report covering the past 12 months. The security team reviews it and finds two exceptions: backup restoration was only tested once instead of quarterly. They require the vendor to remediate and provide an updated report at renewal — getting meaningful assurance without the cost of auditing the vendor's data center directly.",
      },
      {
        term: "Security Culture",
        definition: "The degree to which employees make security-conscious decisions naturally as part of their normal work.",
        detail: "Security culture is the goal beyond compliance training. A strong culture means employees report suspicious emails, challenge tailgaters, and ask security questions before starting new projects — not because they're required to, but because it's the natural way they work. Culture is built through leadership modeling, meaningful role-based training, transparent communication about incidents, and rewarding security-positive behavior. Completion rate is a vanity metric; behavior change is the real goal.",
        example: "After years of culture investment, employees report 3x more suspicious emails than 5 years ago. When a targeted phishing campaign hits, 40% of employees report it to the security team within minutes. The SOC uses those reports to block the campaign before any credentials are stolen — security culture functioned as a distributed detection control.",
      },
      {
        term: "Compensating Control",
        definition: "Alternative control providing equivalent protection when the primary control cannot be implemented.",
        detail: "A compensating control is used when the preferred primary control is technically or operationally impossible to implement. To be accepted, it must provide equivalent or better risk reduction. Required documentation: why the primary control can't be implemented, how the compensating control reduces the same risk, and formal approval. PCI DSS formally recognizes compensating controls; NIST and ISO accept them with proper justification.",
        example: "A legacy mainframe cannot support MFA (primary control). As a compensating control, the organization implements privileged access workstations (PAWs) for all mainframe sessions, deploys a PAM solution for session monitoring and recording, and enforces 30-minute session timeouts. The compensating package is documented and accepted as equivalent protection for PCI DSS compliance.",
      },
    ],
    examTips: [
      "Domain 3 is 33% of CISM — the largest domain. Security program design and controls are the core of the exam.",
      "Control selection ALWAYS follows risk assessment — never choose a control first and justify the risk later.",
      "Administrative controls (policies, training) are often the most cost-effective and frequently undervalued.",
      "Awareness ≠ training: awareness changes everyday behavior; training builds job-specific skills.",
      "Phishing click rate, not training completion rate, is the real measure of awareness program effectiveness.",
      "Vendor security clauses must be in the CONTRACT before work begins — not added after an incident.",
      "Fourth-party risk is a high-frequency exam topic — know that your vendor's vendors are your risk too.",
      "Zero trust is the direction of modern architecture — 'never trust, always verify' applies to internal users too.",
    ],
    diagramIds: ["cism-control-matrix", "cism-program-lifecycle"],
  },
  {
    domainId: "cism-d4",
    overview:
      "Incident Management (30%) is the second-largest CISM domain. It covers building and managing the organization's capability to detect, respond to, and recover from security incidents — including IR program design, the response lifecycle, business continuity integration, and communication obligations. CISM focuses on the manager's role in the IR program, not technical forensics.",
    sections: [
      {
        title: "Building the IR Program",
        points: [
          "IR program must be built BEFORE an incident — reactive-only programs always fail.",
          "CSIRT (Computer Security Incident Response Team): dedicated team with defined roles — Incident Commander, Technical Lead, Communications, Legal liaison.",
          "IR plan: scope, objectives, roles & responsibilities, escalation thresholds, communication templates, contact lists.",
          "Playbooks: specific step-by-step procedures for high-probability incident types (ransomware, data breach, DDoS, insider threat).",
          "IR retainer: pre-negotiated contract with external IR firm for surge capacity, specialized skills (forensics, PR), and faster response.",
          "Tabletop exercise: discussion-based test of the plan; no systems affected; good for identifying gaps in plan and roles.",
          "Simulation / full-scale exercise: actual execution of IR procedures; tests tools and team capability.",
          "Exercise frequency: tabletop at minimum annually; more frequent for high-risk sectors.",
          "IR capability maturity: from ad hoc (reactive) to integrated (intelligence-driven, continuous improvement).",
        ],
      },
      {
        title: "Incident Response Lifecycle",
        points: [
          "Phase 1 — Prepare: IR plan, playbooks, team training, tools, retainers, threat intelligence feeds.",
          "Phase 2 — Identify: detect the incident via SIEM/IDS/user report; confirm it's a true positive; classify severity.",
          "Phase 3 — Contain: isolate affected systems; stop lateral movement; preserve evidence (do NOT wipe before imaging).",
          "Phase 4 — Eradicate: remove malware, close the entry vector, patch vulnerability, revoke compromised credentials.",
          "Phase 5 — Recover: restore systems from clean backups; validate functionality; enhance monitoring; declare recovery.",
          "Phase 6 — Review (Lessons Learned): root cause analysis; update playbooks; improve controls; metrics review.",
          "Key principle: CONTAIN before ERADICATE — stopping spread takes priority over cleaning up.",
          "Evidence preservation: capture memory images, system logs, and network captures BEFORE containment actions that might overwrite data.",
          "The review phase feeds back into Prepare — making the lifecycle truly continuous.",
        ],
      },
      {
        title: "Incident Severity Classification",
        points: [
          "Incident classification criteria: data sensitivity, systems affected, regulatory triggers, business impact, attacker persistence.",
          "P1 (Critical): widespread outage, active data breach, regulatory trigger, board notification required within hours.",
          "P2 (High): critical system compromised, suspected breach, key service degraded, executive notification < 1 hour.",
          "P3 (Medium): non-critical system, contained malware, policy violation, manager notification < 4 hours.",
          "P4 (Low): near-miss, suspicious activity, minor policy violation, standard ticket.",
          "Severity classification must be pre-defined — classifying in the heat of an incident delays response.",
          "Classification drives: resource allocation, escalation path, communication obligations, SLA for resolution.",
          "Reclassification is expected — an incident may start as P3 and escalate to P1 as more information emerges.",
        ],
      },
      {
        title: "Business Continuity & Disaster Recovery Integration",
        points: [
          "A severe security incident may trigger BCP/DRP activation — the IR plan must define the threshold.",
          "BIA (Business Impact Analysis) recovery objectives (RTO, RPO, MTD) inform IR prioritization during recovery.",
          "RTO: Recovery Time Objective — maximum acceptable downtime before business suffers unacceptable harm.",
          "RPO: Recovery Point Objective — maximum acceptable data loss measured in time.",
          "Backup integrity is critical for ransomware recovery — offline/immutable backups are the primary defense.",
          "DR site options: hot site (fully operational, near-zero RTO), warm site (hours to days), cold site (days to weeks).",
          "IR and BCP teams must have defined handoff criteria — when does IR hand off to BCP?",
          "Test backups regularly — the worst time to discover backups are corrupted is during a ransomware incident.",
        ],
      },
      {
        title: "Communication, Legal & Forensics",
        points: [
          "Internal notifications: executive team, Board, legal, HR, affected business units — with pre-defined timing by severity.",
          "Regulatory notifications: GDPR supervisory authority within 72 hours; HIPAA breach notification within 60 days; PCI-DSS within 72 hours to payment brands.",
          "Customer/public notification: timing and content often governed by state/national breach notification laws.",
          "Crisis communications: pre-approved messaging templates prevent legally risky or contradictory public statements.",
          "Legal hold: when litigation is reasonably anticipated, preserve all related data — do not delete.",
          "Chain of custody: documented, unbroken record of evidence handling required for legal admissibility.",
          "Forensic evidence: collect in order of volatility (RAM → running processes → disk → logs → external).",
          "Law enforcement coordination: report when required by law; coordinate on evidence to avoid contaminating investigation.",
          "Post-incident metrics: MTTD, MTTR, cost per incident, # incidents by type — used to demonstrate program improvement.",
        ],
      },
    ],
    keyTerms: [
      {
        term: "CSIRT",
        definition: "Computer Security Incident Response Team — dedicated team responsible for managing security incidents.",
        detail: "A CSIRT includes defined roles: Incident Commander (overall coordination), Technical Lead (investigation and containment), Communications Lead (internal and external messaging), and Legal Liaison (regulatory obligations and evidence handling). The CSIRT may be internal, outsourced, or hybrid. Its effectiveness depends entirely on preparation — clear role assignments, documented procedures, and practiced responses. An ad hoc team assembled during a crisis consistently underperforms a prepared one.",
        example: "A pharmaceutical company's CSIRT activates at 11pm when ransomware is detected spreading across the network. Within 15 minutes: the Incident Commander declares P1 and opens the incident bridge, the Technical Lead begins isolation procedures, the Communications Lead notifies the executive team, and the Legal Liaison is on a call with outside counsel reviewing notification obligations — all from the pre-tested IR plan.",
      },
      {
        term: "Playbook",
        definition: "Pre-defined, step-by-step procedure for responding to a specific type of incident.",
        detail: "Playbooks eliminate improvisation under pressure by documenting: detection criteria, initial triage steps, escalation thresholds, containment procedures, evidence preservation steps, communication templates, and recovery criteria. They are written for specific incident types: ransomware, data breach, DDoS, insider threat, phishing campaign. Playbooks are living documents — updated after every exercise and real incident. The CISM exam distinguishes playbooks (tactical, specific) from the IR plan (strategic, overarching).",
        example: "When ransomware is detected on a file server, the SOC analyst opens the ransomware playbook. Step 1: isolate the affected server from the network segment. Step 2: alert the Incident Commander and open the incident bridge. Step 3: identify the infection vector using EDR telemetry. Each step has decision trees and tool references — the analyst executes precisely without needing to improvise under pressure.",
      },
      {
        term: "MTTD",
        definition: "Mean Time to Detect — average time from incident occurrence to its detection.",
        detail: "MTTD measures how long attackers operate undetected — a lower MTTD means less time for lateral movement, data exfiltration, and damage. Industry studies have historically measured MTTD at over 100 days for sophisticated breaches. MTTD is reduced by: comprehensive detection coverage (SIEM, EDR, NDR), tuned alerts, threat hunting, and fast SOC triage. Reducing MTTD is the highest-leverage investment for limiting breach impact.",
        example: "A company's post-breach analysis shows MTTD was 47 days — the attacker had months of undetected access. Investigation reveals no EDR on legacy servers. The CISO uses the MTTD metric to justify deploying EDR across all servers and investing in 24/7 SOC monitoring, targeting a MTTD under 24 hours — turning a damning incident metric into a funded improvement roadmap.",
      },
      {
        term: "MTTR",
        definition: "Mean Time to Respond/Remediate — average time from detection to full resolution.",
        detail: "MTTR measures the efficiency of the entire response lifecycle from detection through containment, eradication, and recovery. It is tracked as a program KPI and reported to the Board as an indicator of program maturity. MTTR is influenced by playbook quality, IR team readiness, backup and recovery capability, and approval bottlenecks. For SLA-governed services, MTTR must meet contractual commitments. Measuring MTTR by incident type reveals where improvements will have the greatest impact.",
        example: "After a phishing-originated account compromise, the CSIRT's MTTR is 18 hours. Post-incident analysis shows 12 of those hours waiting for system owner approval to lock the compromised accounts. Pre-authorizing the CSIRT to lock accounts during confirmed incidents reduces MTTR to under 4 hours in subsequent events — a process change, not a technology investment.",
      },
      {
        term: "Chain of Custody",
        definition: "Documented record of who handled evidence, when, and how — required for legal admissibility.",
        detail: "Chain of custody requires a documented, unbroken record of evidence collection, storage, transfer, and access. Any gap — lost documentation, undocumented access, or evidence modification — can render evidence inadmissible in court or regulatory proceedings. It applies to: disk images, memory captures, log exports, mobile devices, and written records. Hash values are used to prove evidence integrity (the file hasn't changed since collection).",
        example: "During an insider threat investigation, the investigator documents: collection time and location, tools used (FTK Imager), MD5/SHA256 hash values before and after imaging, and a chain of custody form signed by HR and legal at each transfer point. When the case proceeds to employment tribunal, the unbroken chain means digital evidence is admitted — without it, the case would rest on testimony alone.",
      },
      {
        term: "Lessons Learned",
        definition: "Post-incident review documenting what happened, what worked, what failed, and how to improve.",
        detail: "The Lessons Learned review (post-mortem, post-incident review) is conducted after every significant incident. It is not a blame exercise — it is structured analysis of: what happened and when (timeline reconstruction), what worked in the response, what failed or was missing, and concrete improvement actions. Outputs include updated playbooks, identified training needs, control improvements, and risk register updates. CISM frames Lessons Learned as the mechanism that closes the loop between Incident Management and Security Program improvement.",
        example: "After a data breach, Lessons Learned reveals three failures: the SIEM detected the intrusion but the alert was buried in a high-volume queue; there was no playbook for this attack vector; and the PR team was not included in the IR notification list. Each finding is assigned to an owner with a deadline — the incident directly improves the program's readiness for the next one.",
      },
      {
        term: "RTO",
        definition: "Recovery Time Objective — maximum acceptable duration of downtime before business impact becomes unacceptable.",
        detail: "RTO is defined per system during the Business Impact Analysis (BIA), based on business criticality and financial/operational impact of downtime. It drives recovery architecture: an RTO of 15 minutes requires active-active geographic redundancy; an RTO of 72 hours can use a cold site restore. During an IR event, RTO determines recovery prioritization — systems with the tightest RTOs get resources first. RTO and RPO together shape the entire backup and recovery strategy.",
        example: "A bank's core payment processing system has an RTO of 15 minutes. To achieve this, the bank maintains active-active geographic redundancy with automatic failover. During a ransomware incident, the payment system fails over to the secondary data center and recovers in 8 minutes — meeting the RTO. Less critical back-office systems have 48-hour RTOs and use simple backup-restore processes.",
      },
      {
        term: "RPO",
        definition: "Recovery Point Objective — maximum acceptable amount of data loss measured in time.",
        detail: "RPO defines how old the most recent clean backup can be when you restore — how much data the business can afford to re-enter or lose permanently. An RPO of 1 hour means backups must capture data at least every hour. In ransomware incidents, RPO determines how much transactional data must be manually reconstructed after restoration. Achieving low RPO for high-value systems requires frequent incremental backups, often to immutable storage that ransomware cannot encrypt.",
        example: "An e-commerce company has a 4-hour RPO for its order database. During a 3pm ransomware attack, the most recent clean backup is from 11am — exactly 4 hours earlier. After recovery, the team manually re-processes orders using paper records. The RPO was met, but the manual reconstruction work drives future investment in a 1-hour RPO architecture with point-in-time recovery.",
      },
      {
        term: "Tabletop Exercise",
        definition: "Discussion-based IR test where participants verbally walk through a scenario without activating real systems.",
        detail: "Tabletop exercises test the IR plan by having participants (IR team, executives, legal, communications, HR) verbally respond to an unfolding scenario, discussing their decisions and actions at each stage. No actual systems are activated. Tabletops reveal gaps in the plan, unclear roles, missing resources, and coordination failures at low cost and risk. They should run at least annually using realistic, high-probability scenarios. Results directly inform plan updates before a real incident exposes the same gaps.",
        example: "A hospital runs a tabletop exercise simulating ransomware on the EHR system. Three gaps emerge: no documented escalation path for the Chief Medical Officer, a disagreement between CISO and PR on patient notification timing, and no one knows where offsite backup tapes are stored. All three gaps are assigned to owners before a real incident exposes them under actual pressure.",
      },
      {
        term: "Legal Hold",
        definition: "Preservation obligation requiring all potentially relevant data to be retained once litigation is anticipated.",
        detail: "A legal hold arises when the organization reasonably anticipates litigation, regulatory investigation, or legal proceedings. The organization must immediately preserve all potentially relevant data — email, documents, system logs, backups — and suspend any automated deletion or log rotation that would destroy it. Failure to preserve (spoliation) can result in court sanctions, adverse inferences, and regulatory penalties. The CISO must ensure the IR team knows how to pause deletion processes and export archives.",
        example: "An employee files a wrongful termination complaint. The moment legal counsel anticipates litigation, they issue a legal hold covering all emails, documents, and access logs for the past 2 years. The CISO halts log deletion and exports relevant email archives. Six months later, the preserved access logs demonstrate the legitimate business basis for the termination — evidence that would have been automatically deleted under normal log retention.",
      },
      {
        term: "Containment",
        definition: "IR phase where affected systems are isolated to stop further spread, occurring before eradication.",
        detail: "Containment (IR Phase 3) stops an active incident from spreading further while preserving evidence for investigation. CISM exam critical point: Containment comes BEFORE eradication, and evidence must be preserved (memory dumps, forensic images, log exports) BEFORE containment actions like re-imaging that would destroy it. Short-term containment stops the immediate bleeding; long-term containment maintains limited operations while eradication proceeds.",
        example: "During a ransomware incident, the SOC identifies 3 encrypted servers with the attacker still active. Containment: immediately network-segment the infected servers (stops spread), take memory dumps and forensic disk images before remediation (preserves evidence), and block command-and-control IP ranges at the firewall. The attacker is cut off without destroying the attack-chain evidence needed to understand the full incident scope.",
      },
      {
        term: "Eradication",
        definition: "IR phase where the threat is removed — malware deleted, entry vector closed, credentials reset.",
        detail: "Eradication (IR Phase 4) completely removes the threat from the environment after containment. Steps include: deleting malware and all persistence mechanisms, closing the initial entry vector (patching the exploited vulnerability or revoking compromised credentials), rebuilding affected systems from known-good images, and validating the environment is clean across all affected systems. Incomplete eradication is the leading cause of re-breaches — a single missed backdoor allows attackers to re-establish access after recovery.",
        example: "After containing a ransomware outbreak, eradication involves: scanning all servers with EDR to find additional implants (3 more discovered), revoking all service account credentials with access to infected systems, patching the SMB vulnerability used for lateral movement, and rebuilding affected servers from golden images rather than cleaning them. Only after full eradication verification does recovery from backups begin.",
      },
    ],
    examTips: [
      "Incident Management is 30% of CISM — it receives the highest exam weight. Understand the manager's role thoroughly.",
      "CONTAIN before ERADICATE — stopping spread is always the priority before cleaning up.",
      "Lessons Learned is not optional or a courtesy — it is the continuous improvement mechanism for the IR program.",
      "GDPR: 72 hours to notify the supervisory authority. HIPAA: 60 days for breach notification. Both are heavily tested.",
      "Chain of custody: if you can't prove unbroken custody of evidence, it may be inadmissible in court.",
      "Severity classification criteria must be defined BEFORE an incident — you can't think clearly under pressure.",
      "The CISM exam focuses on the MANAGER's role: designing and improving the IR program, not performing forensics.",
      "IR retainers provide pre-negotiated access to expertise — they reduce response time compared to finding a vendor during an incident.",
      "Tabletop vs full exercise: tabletop is discussion only; full exercise tests actual tools and execution with real systems.",
    ],
    diagramIds: ["cism-ir-lifecycle", "cism-incident-severity"],
  },
];
