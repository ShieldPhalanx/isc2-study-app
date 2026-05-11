export type KeyTerm = {
  term: string;
  definition: string;
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
      "Information Security Governance (17%) establishes the leadership and accountability framework for information security. It covers how the security program is structured, aligned with business strategy, and measured for effectiveness.",
    sections: [
      {
        title: "Governance Framework",
        points: [
          "Governance = the system by which an organization directs and controls security.",
          "Governance structures: Board risk committee, Executive security steering committee, Security council.",
          "Security must be aligned with and enabling of business objectives — not a separate silo.",
          "Key frameworks: COBIT 2019, ISO 27001, NIST CSF, ISF Standard of Good Practice.",
          "The CISO reports to the CEO or Board (not the CIO) for organizational independence.",
          "Three lines of defense: business operations (1st), risk/compliance functions (2nd), internal audit (3rd).",
        ],
      },
      {
        title: "Security Strategy",
        points: [
          "Security strategy is derived from the business strategy — security exists to protect and enable business.",
          "Gap analysis — current state vs desired state; identifies investment priorities.",
          "Security roadmap — multi-year plan for maturing the security program.",
          "Strategic objectives should be SMART: Specific, Measurable, Achievable, Relevant, Time-bound.",
          "Maturity models (CMMI, C2M2) assess program maturity and guide improvement.",
        ],
      },
      {
        title: "Policies, Standards & Metrics",
        points: [
          "Information security policy — senior management statement of intent; the top of the policy hierarchy.",
          "Standards define mandatory requirements (e.g., password length, encryption algorithm).",
          "Procedures are step-by-step instructions for implementing standards.",
          "Guidelines are optional recommendations.",
          "KPIs (Key Performance Indicators) — measure how well the security program is performing.",
          "KRIs (Key Risk Indicators) — early warning signals of increasing risk.",
          "Balanced scorecard approach: financial, customer, internal process, and learning perspectives.",
        ],
      },
    ],
    keyTerms: [
      { term: "COBIT", definition: "Control Objectives for Information and Related Technologies — IT governance framework." },
      { term: "Three Lines of Defense", definition: "Model separating business operations, risk/compliance, and internal audit for governance." },
      { term: "CISO", definition: "Chief Information Security Officer — executive responsible for the information security program." },
      { term: "Maturity Model", definition: "Framework for assessing the current capability of a security program and guiding improvement." },
      { term: "KPI", definition: "Key Performance Indicator — metric measuring the effectiveness of security program activities." },
    ],
    examTips: [
      "CISM is an ISACA certification — answers often reflect the business management perspective over technical.",
      "The CISO should report to the CEO or Board, not the CIO — independence from IT operations is critical.",
      "Governance provides DIRECTION; management executes. The Board governs; the CISO manages.",
      "Policy hierarchy: Policy → Standards → Procedures → Guidelines — know the order and who owns each.",
      "The primary purpose of an information security strategy is alignment with business objectives.",
    ],
  },
  {
    domainId: "cism-d2",
    overview:
      "Information Security Risk Management (20%) covers identifying, analyzing, evaluating, and treating information security risks in alignment with organizational risk appetite. It is the largest single risk domain across all four CISM domains.",
    sections: [
      {
        title: "Risk Identification",
        points: [
          "Threat landscape analysis — understanding adversaries, their capabilities, and likely targets.",
          "Vulnerability identification — technical (scans), process (audits), human (social engineering assessments).",
          "Asset inventory — you cannot protect what you don't know you have.",
          "Risk scenarios — structured descriptions of how a threat could exploit a vulnerability to harm an asset.",
          "Risk register — living document tracking all identified risks.",
        ],
      },
      {
        title: "Risk Analysis & Evaluation",
        points: [
          "Likelihood × Impact = Risk level (qualitative) or probability × magnitude (quantitative).",
          "Qualitative: risk matrices using scales (e.g., 1-5); fast, subjective, useful for prioritization.",
          "Quantitative: ALE, FAIR — more objective but data-intensive.",
          "Inherent risk — risk before any controls are applied.",
          "Residual risk — risk remaining after controls; must be within risk tolerance.",
          "Risk appetite — overall amount of risk the organization will accept (Board-level decision).",
          "Risk tolerance — operational boundaries around the risk appetite.",
        ],
      },
      {
        title: "Risk Treatment",
        points: [
          "Accept — formally document and accept risks within appetite.",
          "Avoid — eliminate the activity that generates the risk.",
          "Mitigate — implement controls to reduce likelihood or impact.",
          "Transfer/Share — insurance, contracts, outsourcing.",
          "Risk treatment decisions must align with risk appetite and be approved by risk owners.",
          "Control effectiveness must be monitored — controls can become ineffective over time.",
        ],
      },
    ],
    keyTerms: [
      { term: "Inherent Risk", definition: "The level of risk before any controls are applied." },
      { term: "Residual Risk", definition: "Risk remaining after controls have been applied." },
      { term: "Risk Appetite", definition: "The total level of risk an organization is willing to accept in pursuing its objectives." },
      { term: "Risk Tolerance", definition: "The acceptable variation around the risk appetite in operational practice." },
      { term: "Risk Register", definition: "Repository of identified risks with their likelihood, impact, owner, and treatment status." },
      { term: "FAIR", definition: "Factor Analysis of Information Risk — quantitative risk analysis model." },
    ],
    examTips: [
      "Inherent risk ≠ residual risk — this distinction is heavily tested on CISM.",
      "Risk appetite is set by the Board/senior management — the CISO advises, does not set it.",
      "Risk transfer (insurance) does not eliminate risk — liability may remain and reputational risk is always retained.",
      "Risk acceptance without documentation is negligence — it must be formally approved.",
      "The CISM exam expects the manager perspective: prioritize, communicate, and make decisions — not technical fixes.",
    ],
  },
  {
    domainId: "cism-d3",
    overview:
      "Information Security Program (33%) is the largest CISM domain, covering how to design, build, and operate an effective security program — including policies, controls, security architecture, awareness, and vendor management.",
    sections: [
      {
        title: "Security Program Design",
        points: [
          "The security program operationalizes the security strategy through processes, people, and technology.",
          "Program components: policy framework, risk management, asset management, access control, incident response, BCP, compliance.",
          "Security architecture — the overall design of security controls and how they work together.",
          "Defense in depth — multiple layers of controls so that no single failure compromises the organization.",
          "Zero trust architecture — continuous verification; no implicit trust based on network location.",
          "Security program maturity assessed against models like CMMI or NIST CSF tiers.",
        ],
      },
      {
        title: "Security Controls",
        points: [
          "Control categories: Preventive, Detective, Corrective, Compensating, Deterrent, Directive.",
          "Control types: Administrative (policies, training), Technical (software, hardware), Physical (locks, cameras).",
          "Control selection based on risk assessment output — match control to the risk it addresses.",
          "Control effectiveness measured by KPIs and periodic assessments.",
          "Cost-benefit analysis — control cost should be proportionate to the risk it mitigates.",
        ],
      },
      {
        title: "Security Awareness & Training",
        points: [
          "Awareness creates recognition of security risks; training builds skills to respond.",
          "Role-based training — tailored to specific job functions (e.g., developers, finance staff, executives).",
          "Mandatory annual training for all staff; additional training for privileged users.",
          "Phishing simulations measure and improve resistance to social engineering.",
          "Metrics: training completion rate, phishing click rate, reported incidents, security culture surveys.",
        ],
      },
      {
        title: "Third-Party & Vendor Management",
        points: [
          "Vendor risk assessment before engagement — questionnaires, audits, certification review (SOC 2, ISO 27001).",
          "Contractual controls: security requirements in SLAs, right to audit clauses, breach notification obligations.",
          "Ongoing monitoring — annual reassessment, continuous monitoring of vendor security news.",
          "Fourth-party risk — risks introduced by your vendors' vendors.",
          "Termination procedures — ensure data is returned or destroyed when a vendor relationship ends.",
        ],
      },
    ],
    keyTerms: [
      { term: "Defense in Depth", definition: "Layered security controls so no single failure results in a full compromise." },
      { term: "Zero Trust", definition: "Security model requiring continuous verification of every user and device, regardless of network location." },
      { term: "Control Effectiveness", definition: "The degree to which a security control reduces risk as intended." },
      { term: "Fourth-Party Risk", definition: "Risk introduced by a vendor's own third-party suppliers." },
      { term: "SLA", definition: "Service Level Agreement — contractual commitment for service performance including security obligations." },
    ],
    examTips: [
      "Control selection must follow risk assessment — never implement controls before you know the risk.",
      "Administrative controls (policies, training) are often the most cost-effective first line of defense.",
      "Vendor management questions on CISM often test whether you've included security in the contract up front.",
      "Zero trust is the direction of modern architecture — 'never trust, always verify' is the principle.",
      "The security program must be measured to be managed — KPIs and KRIs are essential for demonstrating value.",
    ],
  },
  {
    domainId: "cism-d4",
    overview:
      "Incident Management (30%) is the largest CISM domain by exam weight. It covers developing and managing an incident response capability — from preparation and detection through containment, eradication, recovery, and post-incident review.",
    sections: [
      {
        title: "Incident Response Program",
        points: [
          "IR program establishes the team, processes, and tools before an incident occurs.",
          "CSIRT (Computer Security Incident Response Team) — dedicated team for managing security incidents.",
          "IR plan: objectives, scope, roles, responsibilities, escalation paths, communication templates.",
          "Playbooks — specific procedures for common incident types (ransomware, data breach, DDoS).",
          "Retainers — pre-negotiated contracts with external IR firms for surge capacity.",
          "Tabletop exercises test the plan without disruption; full simulations test execution.",
        ],
      },
      {
        title: "Incident Response Lifecycle",
        points: [
          "Preparation — IR plan, team training, detection tools, communication channels.",
          "Detection & Analysis — identify and confirm the incident; determine scope and severity.",
          "Containment — isolate affected systems; prevent further spread.",
          "Eradication — remove the threat; close the entry vector.",
          "Recovery — restore systems; validate normal operation; enhanced monitoring.",
          "Post-Incident Review (Lessons Learned) — identify improvements; update plans and controls.",
        ],
      },
      {
        title: "Business Continuity Linkage",
        points: [
          "Severe incidents may trigger BCP/DRP activation — the IR plan should define the threshold.",
          "Recovery objectives (RTO, RPO) from the BIA guide recovery prioritization during incidents.",
          "IR and BCP teams must coordinate — different focuses but shared goals.",
          "Data backup integrity is critical for ransomware recovery — backups must be tested and offline copies maintained.",
        ],
      },
      {
        title: "Communication & Reporting",
        points: [
          "Internal notifications: executive team, Board, legal, HR, affected business units.",
          "External notifications: regulators (GDPR: 72h, HIPAA: 60 days), law enforcement, affected customers.",
          "Crisis communications plan — pre-approved messaging to avoid contradictory or legally risky statements.",
          "Evidence preservation — maintain chain of custody for potential legal proceedings.",
          "Post-incident metrics: MTTD, MTTR, number of incidents, cost per incident.",
        ],
      },
    ],
    keyTerms: [
      { term: "CSIRT", definition: "Computer Security Incident Response Team — dedicated team responsible for managing security incidents." },
      { term: "MTTD", definition: "Mean Time to Detect — average time from incident occurrence to detection." },
      { term: "MTTR", definition: "Mean Time to Respond/Remediate — average time from detection to resolution." },
      { term: "Playbook", definition: "Step-by-step incident response procedure for a specific scenario." },
      { term: "Chain of Custody", definition: "Documented record of evidence handling to ensure admissibility in legal proceedings." },
      { term: "Lessons Learned", definition: "Post-incident review to identify improvements to people, process, and technology." },
    ],
    examTips: [
      "Incident Management is 30% of CISM — it is the highest-weighted domain; prioritize it in your preparation.",
      "Containment before eradication — always stop the spread before attempting to clean up.",
      "The CISM exam focuses on the MANAGER's role: designing the program, not performing technical IR.",
      "Lessons learned is not optional — it is the mechanism for continuous improvement of the IR capability.",
      "GDPR 72-hour breach notification to the supervisory authority is a consistently tested timeline.",
    ],
  },
];
