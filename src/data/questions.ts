export type Question = {
  id: string;
  certId: string;
  domainId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const questions: Question[] = [
  // CISSP – D1: Security and Risk Management
  {
    id: "cissp-d1-001",
    certId: "cissp",
    domainId: "cissp-d1",
    question: "Which of the following best describes the concept of due care?",
    options: [
      "Performing research to understand what standards apply to your organization",
      "Taking reasonable steps to protect assets and reduce risk",
      "Delegating security responsibilities to a third party",
      "Documenting all security policies and procedures",
    ],
    correctIndex: 1,
    explanation:
      "Due care refers to taking reasonable protective measures — actually doing what is necessary. Due diligence is the research phase that identifies what steps are needed.",
  },
  {
    id: "cissp-d1-002",
    certId: "cissp",
    domainId: "cissp-d1",
    question: "A company classifies data as Confidential, Internal, and Public. Which principle drives this practice?",
    options: [
      "Least privilege",
      "Separation of duties",
      "Data classification",
      "Need to know",
    ],
    correctIndex: 2,
    explanation:
      "Data classification organizes information by sensitivity so that appropriate controls can be applied to each tier.",
  },
  {
    id: "cissp-d1-003",
    certId: "cissp",
    domainId: "cissp-d1",
    question: "Which risk response involves purchasing cyber insurance?",
    options: ["Risk avoidance", "Risk mitigation", "Risk transfer", "Risk acceptance"],
    correctIndex: 2,
    explanation:
      "Risk transfer shifts the financial burden of a risk to a third party (e.g., an insurer), without eliminating the underlying risk.",
  },
  // CISSP – D3: Security Architecture and Engineering
  {
    id: "cissp-d3-001",
    certId: "cissp",
    domainId: "cissp-d3",
    question: "Which security model is based on a lattice structure and focuses on data confidentiality?",
    options: [
      "Biba",
      "Clark-Wilson",
      "Bell-LaPadula",
      "Brewer-Nash",
    ],
    correctIndex: 2,
    explanation:
      "Bell-LaPadula enforces confidentiality with 'no read up, no write down' rules using a lattice of security labels.",
  },
  {
    id: "cissp-d3-002",
    certId: "cissp",
    domainId: "cissp-d3",
    question: "What is the primary goal of defense in depth?",
    options: [
      "To reduce the cost of security controls",
      "To ensure a single strong perimeter protects all assets",
      "To layer multiple controls so that failure of one does not compromise the system",
      "To make auditing easier by centralizing logs",
    ],
    correctIndex: 2,
    explanation:
      "Defense in depth uses multiple, overlapping security layers so that an attacker must overcome each one, reducing the chance that a single failure leads to a breach.",
  },
  // CISSP – D5: Identity and Access Management
  {
    id: "cissp-d5-001",
    certId: "cissp",
    domainId: "cissp-d5",
    question: "Which access control model grants permissions based on a user's role within an organization?",
    options: ["DAC", "MAC", "RBAC", "ABAC"],
    correctIndex: 2,
    explanation:
      "Role-Based Access Control (RBAC) assigns permissions to roles, and users inherit those permissions by being assigned to a role.",
  },
  // CGRC – D1: Information Security Risk Management Program
  {
    id: "cgrc-d1-001",
    certId: "cgrc",
    domainId: "cgrc-d1",
    question: "The NIST Risk Management Framework (RMF) is primarily designed to help organizations:",
    options: [
      "Eliminate all information system risk",
      "Integrate security and privacy into the system development lifecycle",
      "Replace the need for security policies",
      "Automate patch management",
    ],
    correctIndex: 1,
    explanation:
      "The NIST RMF provides a structured process for integrating security, privacy, and risk management activities into the SDLC.",
  },
  {
    id: "cgrc-d1-002",
    certId: "cgrc",
    domainId: "cgrc-d1",
    question: "Which document formally authorizes an information system to operate and accepts residual risk?",
    options: [
      "System Security Plan (SSP)",
      "Authority to Operate (ATO)",
      "Plan of Action and Milestones (POA&M)",
      "Security Assessment Report (SAR)",
    ],
    correctIndex: 1,
    explanation:
      "An Authority to Operate (ATO) is the formal decision by an Authorizing Official accepting residual risk and permitting the system to operate.",
  },
  // CGRC – D7: Continuous Monitoring
  {
    id: "cgrc-d7-001",
    certId: "cgrc",
    domainId: "cgrc-d7",
    question: "What is the primary purpose of continuous monitoring in the RMF context?",
    options: [
      "To replace annual security assessments entirely",
      "To maintain ongoing awareness of security and privacy posture over time",
      "To automate all security controls",
      "To eliminate the need for a System Security Plan",
    ],
    correctIndex: 1,
    explanation:
      "Continuous monitoring provides real-time or near-real-time awareness of the security and privacy posture so that the organization can make informed risk decisions.",
  },
  // ISSMP – D1: Leadership and Business Management
  {
    id: "issmp-d1-001",
    certId: "issmp",
    domainId: "issmp-d1",
    question: "When presenting a security business case to the board, which metric is most compelling?",
    options: [
      "Number of vulnerabilities patched",
      "Return on Security Investment (ROSI)",
      "Mean time to detect (MTTD)",
      "Number of security training completions",
    ],
    correctIndex: 1,
    explanation:
      "Executives and boards respond to financial metrics. ROSI translates security investments into business value, making it the most persuasive metric in a business case.",
  },
  {
    id: "issmp-d1-002",
    certId: "issmp",
    domainId: "issmp-d1",
    question: "Which of the following is the CISO's primary responsibility?",
    options: [
      "Writing firewall rules",
      "Aligning security strategy with business objectives",
      "Performing penetration tests",
      "Managing the help desk",
    ],
    correctIndex: 1,
    explanation:
      "The CISO operates at the strategic level, ensuring the security program supports and enables business goals rather than operating technical controls directly.",
  },
  // ISSMP – D3: Risk Management
  {
    id: "issmp-d3-001",
    certId: "issmp",
    domainId: "issmp-d3",
    question: "What does an enterprise risk register primarily track?",
    options: [
      "IT asset inventory",
      "Identified risks, their likelihood, impact, and treatment status",
      "Employee training completion",
      "Security tool licenses",
    ],
    correctIndex: 1,
    explanation:
      "A risk register is the central repository for all identified risks, capturing their assessment scores and the status of mitigation or acceptance decisions.",
  },
  // CISM – D1: Information Security Governance
  {
    id: "cism-d1-001",
    certId: "cism",
    domainId: "cism-d1",
    question: "Which of the following BEST describes information security governance?",
    options: [
      "Deploying firewalls, encryption, and intrusion detection systems",
      "Conducting annual penetration tests and vulnerability scans",
      "The framework of leadership and accountability that directs security",
      "Delivering phishing-awareness training across the workforce",
    ],
    correctIndex: 2,
    explanation:
      "Governance is the leadership and accountability framework — who decides, who is accountable — that directs and oversees security. It is distinct from operational activities like patching, testing, or training, which are management functions carried out under that governance.",
  },
  {
    id: "cism-d1-002",
    certId: "cism",
    domainId: "cism-d1",
    question: "An information security strategy should PRIMARILY be aligned with:",
    options: [
      "The organization's business objectives and strategy",
      "The technology roadmap maintained by IT",
      "The latest published NIST or ISO guidance",
      "The minimum applicable regulatory requirements",
    ],
    correctIndex: 0,
    explanation:
      "Strategy exists to protect and enable the organization's business objectives. Frameworks, IT roadmaps, and compliance requirements are inputs that support alignment — they don't substitute for it.",
  },
  // CISM – D2: Information Security Risk Management
  {
    id: "cism-d2-001",
    certId: "cism",
    domainId: "cism-d2",
    question: "Which term describes the amount of risk an organization is willing to accept in pursuit of its objectives?",
    options: [
      "Risk tolerance",
      "Risk threshold",
      "Risk appetite",
      "Residual risk",
    ],
    correctIndex: 2,
    explanation:
      "Risk appetite is the high-level statement of how much risk the organization will accept. Risk tolerance is the acceptable deviation from that appetite in day-to-day practice, and residual risk is what remains after controls are applied.",
  },
  // CISSP – D2: Asset Security
  {
    id: "cissp-d2-001",
    certId: "cissp",
    domainId: "cissp-d2",
    question: "Who bears ultimate responsibility for classifying data and ensuring appropriate controls are applied?",
    options: ["Data custodian", "Data processor", "Data owner", "Data user"],
    correctIndex: 2,
    explanation:
      "The data owner (typically a business manager) is accountable for classification decisions and ensuring controls match the data's sensitivity. The custodian implements those controls day-to-day.",
  },
  {
    id: "cissp-d2-002",
    certId: "cissp",
    domainId: "cissp-d2",
    question: "Which data-destruction method is MOST appropriate for highly classified data stored on solid-state drives?",
    options: ["Degaussing", "Overwriting with zeros once", "Physical destruction (shredding/incineration)", "Reformatting"],
    correctIndex: 2,
    explanation:
      "SSDs use wear-leveling that makes overwriting unreliable and degaussing ineffective. Physical destruction ensures no residual data can be recovered from flash memory cells.",
  },
  // CISSP – D4: Communication and Network Security
  {
    id: "cissp-d4-001",
    certId: "cissp",
    domainId: "cissp-d4",
    question: "A stateful inspection firewall differs from a packet-filtering firewall primarily because it:",
    options: [
      "Operates at the application layer",
      "Tracks the state of active connections and validates packets in context",
      "Requires user authentication for every session",
      "Inspects encrypted payloads",
    ],
    correctIndex: 1,
    explanation:
      "Stateful inspection maintains a connection table and ensures each packet belongs to an established, legitimate session — blocking packets that don't match tracked state.",
  },
  {
    id: "cissp-d4-002",
    certId: "cissp",
    domainId: "cissp-d4",
    question: "Which protocol provides confidentiality, integrity, and authentication for IP communications at the network layer?",
    options: ["TLS", "SSH", "IPsec", "HTTPS"],
    correctIndex: 2,
    explanation:
      "IPsec operates at Layer 3 and provides authentication (AH) and encryption (ESP) for IP traffic. TLS/SSH operate at higher layers and protect specific application streams.",
  },
  // CISSP – D6: Security Assessment and Testing
  {
    id: "cissp-d6-001",
    certId: "cissp",
    domainId: "cissp-d6",
    question: "A penetration tester has no prior knowledge of the target environment. This approach is called:",
    options: ["White-box testing", "Gray-box testing", "Black-box testing", "Crystal-box testing"],
    correctIndex: 2,
    explanation:
      "Black-box (or blind) testing simulates an external attacker with no insider knowledge. White-box provides full system details; gray-box provides partial information.",
  },
  {
    id: "cissp-d6-002",
    certId: "cissp",
    domainId: "cissp-d6",
    question: "Which metric measures the average time between a vulnerability being exploited and its detection?",
    options: ["Mean Time to Repair (MTTR)", "Mean Time Between Failures (MTBF)", "Mean Time to Detect (MTTD)", "Recovery Time Objective (RTO)"],
    correctIndex: 2,
    explanation:
      "MTTD (Mean Time to Detect) measures the gap between exploitation and discovery. Reducing MTTD is a key goal of security monitoring and threat detection programs.",
  },
  // CISSP – D7: Security Operations
  {
    id: "cissp-d7-001",
    certId: "cissp",
    domainId: "cissp-d7",
    question: "Which concept requires that no single employee can complete a sensitive transaction alone?",
    options: ["Least privilege", "Separation of duties", "Job rotation", "Need to know"],
    correctIndex: 1,
    explanation:
      "Separation of duties splits critical tasks across multiple people so that fraud or error requires collusion. It is a key preventive control for high-risk operations.",
  },
  {
    id: "cissp-d7-002",
    certId: "cissp",
    domainId: "cissp-d7",
    question: "During a forensic investigation, the FIRST action an investigator should take when arriving at a scene with a running computer is to:",
    options: [
      "Power off the system immediately",
      "Capture volatile memory before any other action",
      "Image the hard drive",
      "Disconnect the network cable",
    ],
    correctIndex: 1,
    explanation:
      "Volatile memory (RAM) contains running processes, encryption keys, and network connections that are lost on shutdown. Capturing it first preserves evidence that cannot be recovered from disk.",
  },
  // CISSP – D8: Software Development Security
  {
    id: "cissp-d8-001",
    certId: "cissp",
    domainId: "cissp-d8",
    question: "Which technique involves examining source code without executing it to find security flaws?",
    options: ["Dynamic analysis", "Fuzzing", "Static analysis", "Regression testing"],
    correctIndex: 2,
    explanation:
      "Static analysis (SAST) reviews source or compiled code without running it, identifying vulnerabilities like injection flaws, hard-coded credentials, and unsafe API usage.",
  },
  {
    id: "cissp-d8-002",
    certId: "cissp",
    domainId: "cissp-d8",
    question: "An attacker injects malicious SQL into a login form to bypass authentication. The ROOT CAUSE of this vulnerability is:",
    options: [
      "Weak password policy",
      "Lack of encryption",
      "Insufficient input validation",
      "Missing firewall rules",
    ],
    correctIndex: 2,
    explanation:
      "SQL injection succeeds because user-supplied input is concatenated into queries without validation or parameterization. Prepared statements/parameterized queries are the primary defense.",
  },
  // CGRC – D2: Scope of the Information System
  {
    id: "cgrc-d2-001",
    certId: "cgrc",
    domainId: "cgrc-d2",
    question: "When defining the authorization boundary of an information system, what should the organization consider FIRST?",
    options: [
      "The number of users accessing the system",
      "All components, data flows, and interconnections that fall under a single management authority",
      "The physical location of all servers",
      "The cost of the system",
    ],
    correctIndex: 1,
    explanation:
      "The authorization boundary encompasses everything under a single management authority — hardware, software, data, and interconnections. Defining it correctly determines which controls apply and who the authorizing official is.",
  },
  {
    id: "cgrc-d2-002",
    certId: "cgrc",
    domainId: "cgrc-d2",
    question: "Under FIPS 199, what three factors determine the security categorization of a federal information system?",
    options: [
      "Cost, complexity, and uptime",
      "Confidentiality, integrity, and availability impact levels",
      "Users, data volume, and network exposure",
      "Legal, regulatory, and contractual requirements",
    ],
    correctIndex: 1,
    explanation:
      "FIPS 199 defines security categories based on the potential impact (Low, Moderate, High) to confidentiality, integrity, and availability. The overall category is the highest of the three.",
  },
  // CGRC – D3: Selection and Approval of Security and Privacy Controls
  {
    id: "cgrc-d3-001",
    certId: "cgrc",
    domainId: "cgrc-d3",
    question: "In the NIST RMF, selecting security controls begins with choosing a baseline from:",
    options: ["ISO 27001 Annex A", "NIST SP 800-53 control baselines (Low, Moderate, High)", "COBIT 5 control objectives", "CIS Benchmarks"],
    correctIndex: 1,
    explanation:
      "NIST SP 800-53 provides Low, Moderate, and High baselines matched to FIPS 199 impact categories. Organizations then tailor these baselines by adding, removing, or modifying controls.",
  },
  {
    id: "cgrc-d3-002",
    certId: "cgrc",
    domainId: "cgrc-d3",
    question: "What is the purpose of a privacy threshold analysis (PTA)?",
    options: [
      "To measure network bandwidth consumption",
      "To determine whether a system collects, uses, or maintains personally identifiable information (PII)",
      "To assess physical security of data centers",
      "To calculate the cost of privacy controls",
    ],
    correctIndex: 1,
    explanation:
      "A PTA screens systems to determine if they handle PII. If they do, a Privacy Impact Assessment (PIA) is typically required before the system is authorized.",
  },
  // CGRC – D4: Implementation of Security and Privacy Controls
  {
    id: "cgrc-d4-001",
    certId: "cgrc",
    domainId: "cgrc-d4",
    question: "Which document describes how each selected security control is implemented within a specific information system?",
    options: [
      "Security Assessment Report (SAR)",
      "System Security Plan (SSP)",
      "Plan of Action and Milestones (POA&M)",
      "Authority to Operate (ATO)",
    ],
    correctIndex: 1,
    explanation:
      "The System Security Plan (SSP) documents the security requirements and describes how each control is implemented. It is the central artifact for the authorization package.",
  },
  {
    id: "cgrc-d4-002",
    certId: "cgrc",
    domainId: "cgrc-d4",
    question: "Common Controls differ from System-Specific controls in that they:",
    options: [
      "Are implemented only at the network layer",
      "Are inherited by multiple systems and managed by a central provider",
      "Apply exclusively to cloud environments",
      "Do not require documentation",
    ],
    correctIndex: 1,
    explanation:
      "Common controls (e.g., physical security, incident response) are managed centrally and inherited by individual systems, reducing redundant implementation work across the organization.",
  },
  // CGRC – D5: Assessment/Auditing of Security and Privacy Controls
  {
    id: "cgrc-d5-001",
    certId: "cgrc",
    domainId: "cgrc-d5",
    question: "Which assessment method involves reviewing system documentation to verify control implementation?",
    options: ["Testing", "Interviewing", "Examining", "Penetration testing"],
    correctIndex: 2,
    explanation:
      "Examining (document review) checks policies, procedures, plans, and logs. Interviewing gathers information from personnel. Testing exercises controls to verify they function correctly.",
  },
  {
    id: "cgrc-d5-002",
    certId: "cgrc",
    domainId: "cgrc-d5",
    question: "A Security Assessment Report (SAR) is PRIMARILY used to:",
    options: [
      "Train employees on security controls",
      "Document assessment findings and provide recommendations to the authorizing official",
      "Replace the System Security Plan",
      "Authorize the system to operate",
    ],
    correctIndex: 1,
    explanation:
      "The SAR captures the assessor's findings — which controls are implemented correctly, incorrectly, or not at all — and recommends remediation. It informs the AO's authorization decision.",
  },
  // CGRC – D6: Authorization/Approval of Information System
  {
    id: "cgrc-d6-001",
    certId: "cgrc",
    domainId: "cgrc-d6",
    question: "A Plan of Action and Milestones (POA&M) is created to:",
    options: [
      "Document all approved security controls",
      "Track weaknesses identified during assessment and schedule remediation",
      "Grant temporary system access to contractors",
      "Record all system change requests",
    ],
    correctIndex: 1,
    explanation:
      "The POA&M lists known vulnerabilities and control weaknesses, along with scheduled remediation dates and resources. It shows the authorizing official how residual risks will be addressed over time.",
  },
  {
    id: "cgrc-d6-002",
    certId: "cgrc",
    domainId: "cgrc-d6",
    question: "An Authorization to Operate (ATO) may be denied if:",
    options: [
      "The system has any unresolved findings",
      "Residual risk exceeds the organization's risk tolerance",
      "The system uses commercial off-the-shelf software",
      "The assessment was conducted by internal staff",
    ],
    correctIndex: 1,
    explanation:
      "The authorizing official weighs residual risk (risk remaining after controls are applied) against organizational risk tolerance. If it is unacceptably high, a Denial of Authorization to Operate (DATO) is issued.",
  },
  // ISSMP – D2: Systems Lifecycle Management
  {
    id: "issmp-d2-001",
    certId: "issmp",
    domainId: "issmp-d2",
    question: "Security requirements should FIRST be introduced during which phase of the SDLC?",
    options: ["Testing", "Implementation", "Initiation/Requirements", "Maintenance"],
    correctIndex: 2,
    explanation:
      "Incorporating security during the initiation/requirements phase is far less costly than retrofitting it later. The principle is 'security by design' — not bolted on after development.",
  },
  {
    id: "issmp-d2-002",
    certId: "issmp",
    domainId: "issmp-d2",
    question: "Which practice helps detect unauthorized changes to production code before deployment?",
    options: [
      "Patch management",
      "Change and configuration management with integrity verification",
      "Vulnerability scanning",
      "User acceptance testing",
    ],
    correctIndex: 1,
    explanation:
      "Change management combined with integrity checks (e.g., code signing, file hashes) ensures only authorized, tested changes reach production — detecting tampering or unauthorized modifications.",
  },
  // ISSMP – D4: Threat Intelligence and Incident Management
  {
    id: "issmp-d4-001",
    certId: "issmp",
    domainId: "issmp-d4",
    question: "Strategic threat intelligence is MOST useful for:",
    options: [
      "Blocking individual IP addresses in real time",
      "Informing long-term security investment and risk decisions by senior leadership",
      "Writing SIEM correlation rules",
      "Patching specific CVEs",
    ],
    correctIndex: 1,
    explanation:
      "Strategic intelligence covers threat actor motivations, geopolitical trends, and industry-level risk — informing executive decisions about program investment and risk posture over months or years.",
  },
  {
    id: "issmp-d4-002",
    certId: "issmp",
    domainId: "issmp-d4",
    question: "An Incident Response Plan (IRP) should be tested PRIMARILY through:",
    options: [
      "Reading it annually and updating the document",
      "Tabletop exercises and simulations to validate roles and decision-making",
      "Reviewing past incident logs",
      "Issuing it to all employees",
    ],
    correctIndex: 1,
    explanation:
      "Tabletop exercises walk teams through simulated scenarios to test coordination, decision authority, and communication paths without the pressure of a real incident. Plans that are only read are rarely effective.",
  },
  // ISSMP – D5: Contingency Management
  {
    id: "issmp-d5-001",
    certId: "issmp",
    domainId: "issmp-d5",
    question: "A Business Impact Analysis (BIA) is performed PRIMARILY to:",
    options: [
      "Identify vulnerabilities in network infrastructure",
      "Determine the criticality of business functions and the impact of their disruption",
      "Select disaster recovery technologies",
      "Document employee roles during emergencies",
    ],
    correctIndex: 1,
    explanation:
      "The BIA identifies which functions are mission-critical, quantifies the impact of their loss over time, and establishes RTO/RPO targets that drive recovery strategy and resource allocation.",
  },
  {
    id: "issmp-d5-002",
    certId: "issmp",
    domainId: "issmp-d5",
    question: "What distinguishes a Disaster Recovery Plan (DRP) from a Business Continuity Plan (BCP)?",
    options: [
      "DRPs cover IT systems only; BCPs address broader operational continuity including people, processes, and facilities",
      "BCPs are for natural disasters only; DRPs cover cyber incidents",
      "DRPs require senior management approval; BCPs do not",
      "There is no meaningful distinction between the two",
    ],
    correctIndex: 0,
    explanation:
      "A DRP focuses on restoring IT systems and data after a disruption. A BCP is broader — it addresses how the entire organization maintains or resumes critical functions, including people, facilities, and processes.",
  },
  // ISSMP – D6: Law, Ethics, and Security Compliance Management
  {
    id: "issmp-d6-001",
    certId: "issmp",
    domainId: "issmp-d6",
    question: "Under the ISC² Code of Ethics, members must protect society and the infrastructure ABOVE which other obligation?",
    options: [
      "The interests of employers",
      "Client confidentiality",
      "Personal financial interests",
      "All of the above — society comes first",
    ],
    correctIndex: 3,
    explanation:
      "ISC² Canons are ordered: (1) Protect society; (2) Act honorably; (3) Serve principals; (4) Advance the profession. Society's protection supersedes employer, client, and personal interests.",
  },
  {
    id: "issmp-d6-002",
    certId: "issmp",
    domainId: "issmp-d6",
    question: "The Computer Fraud and Abuse Act (CFAA) primarily regulates:",
    options: [
      "Privacy of healthcare records",
      "Unauthorized access to protected computers and networks",
      "Export controls on cryptographic software",
      "Spam and unsolicited electronic messaging",
    ],
    correctIndex: 1,
    explanation:
      "The CFAA makes unauthorized access to protected computers (including government and financial systems) a federal crime. It is the primary U.S. law used to prosecute computer intrusions and hacking.",
  },
  // CISM – D3: Information Security Program
  {
    id: "cism-d3-001",
    certId: "cism",
    domainId: "cism-d3",
    question: "When building an information security program, the FIRST step should be to:",
    options: [
      "Understand the business context, objectives, and risk tolerance",
      "Begin deploying security technologies across the estate",
      "Bring on additional security staff to begin the work",
      "Commission a penetration test of the key systems first",
    ],
    correctIndex: 0,
    explanation:
      "A security program must be grounded in business context. Without understanding organizational objectives and acceptable risk levels, technology and staffing decisions will be misaligned and difficult to justify.",
  },
  {
    id: "cism-d3-002",
    certId: "cism",
    domainId: "cism-d3",
    question: "Security metrics used to report program effectiveness to senior management should PRIMARILY demonstrate:",
    options: [
      "A running count of technical vulnerabilities found",
      "The total number of security tools now deployed",
      "Business risk reduction aligned to organizational goals",
      "How many security policies are currently in force",
    ],
    correctIndex: 2,
    explanation:
      "Executives care about business outcomes, not technical details. Metrics should translate security activities into business value — reduced risk exposure, avoided losses, and compliance posture — rather than raw activity counts.",
  },
  // CISM – D4: Incident Management
  {
    id: "cism-d4-001",
    certId: "cism",
    domainId: "cism-d4",
    question: "Which phase of incident response focuses on limiting the spread of an attack?",
    options: [
      "Identification",
      "Containment",
      "Eradication",
      "Recovery",
    ],
    correctIndex: 1,
    explanation:
      "Containment stops an incident from spreading to additional systems before eradication (removing the threat) and recovery (restoring services) begin.",
  },
  {
    id: "cism-d4-002",
    certId: "cism",
    domainId: "cism-d4",
    question: "A post-incident review is MOST valuable because it:",
    options: [
      "It documents the attack in detail for law enforcement",
      "It formally assigns blame to the responsible parties",
      "It satisfies a specific regulatory reporting requirement",
      "It identifies lessons learned to improve future response",
    ],
    correctIndex: 3,
    explanation:
      "The primary value of a post-incident review (lessons learned) is continuous improvement of the incident response capability — not assigning blame, satisfying a specific regulator, or building a law-enforcement case, though it may support all three indirectly.",
  },

  // ── Additional questions (round 2) ───────────────────────────────────────

  // CISSP – D1: Security and Risk Management (additional)
  {
    id: "cissp-d1-004",
    certId: "cissp",
    domainId: "cissp-d1",
    question: "Which of the following BEST describes the principle of least privilege?",
    options: [
      "Users receive all permissions needed to complete any possible task",
      "Users are granted only the minimum access required for their specific role",
      "Privileged accounts are shared among administrators for efficiency",
      "Access is granted based on seniority within the organization",
    ],
    correctIndex: 1,
    explanation:
      "Least privilege limits each user, process, or system to only the permissions necessary for their defined function. This minimizes the blast radius of compromised accounts or misconfigured software.",
  },
  {
    id: "cissp-d1-005",
    certId: "cissp",
    domainId: "cissp-d1",
    question: "An organization calculates that a flood has a 10% annual probability and would cause $500,000 in damage. What is the Annual Loss Expectancy (ALE)?",
    options: ["$50,000", "$500,000", "$5,000", "$5,000,000"],
    correctIndex: 0,
    explanation:
      "ALE = SLE × ARO = $500,000 × 0.10 = $50,000. ALE guides how much it is rational to spend annually on a countermeasure — spending more than $50,000/year to prevent this flood would not be cost-effective.",
  },
  {
    id: "cissp-d1-006",
    certId: "cissp",
    domainId: "cissp-d1",
    question: "A Business Continuity Plan (BCP) is primarily activated when:",
    options: [
      "A security patch needs to be applied",
      "A disruption threatens the organization's ability to perform critical business functions",
      "A new employee joins the IT department",
      "The annual penetration test is scheduled",
    ],
    correctIndex: 1,
    explanation:
      "BCP activation is triggered by events that jeopardize continuity of critical operations — not routine IT activities. BCPs define how the organization sustains essential functions during and after a disruption.",
  },

  // CISSP – D2: Asset Security (additional)
  {
    id: "cissp-d2-003",
    certId: "cissp",
    domainId: "cissp-d2",
    question: "Data sovereignty means that:",
    options: [
      "Data is encrypted at all times",
      "Data is subject to the laws and regulations of the country where it physically resides",
      "Data owners have exclusive rights to all stored data",
      "Data must be replicated to at least three geographic locations",
    ],
    correctIndex: 1,
    explanation:
      "Data sovereignty recognizes that data stored in a particular jurisdiction falls under that nation's legal authority. This has major implications for cloud storage — data in a foreign data center is subject to that country's laws.",
  },
  {
    id: "cissp-d2-004",
    certId: "cissp",
    domainId: "cissp-d2",
    question: "Which data state requires encryption to be MOST urgently prioritized for highly sensitive information?",
    options: ["Data at rest", "Data in transit", "Data in use", "All states equally"],
    correctIndex: 3,
    explanation:
      "Best practice requires encryption for data at rest (storage), in transit (networks), and in use (memory/processing for the highest sensitivity). For exam purposes, if forced to choose one, data in transit is classically prioritized as it crosses untrusted networks — but modern frameworks require all three.",
  },
  {
    id: "cissp-d2-005",
    certId: "cissp",
    domainId: "cissp-d2",
    question: "Which technique writes multiple patterns of 1s and 0s over all locations on a magnetic disk to sanitize it?",
    options: ["Degaussing", "Overwriting (multi-pass)", "Physical shredding", "Reformatting"],
    correctIndex: 1,
    explanation:
      "Multi-pass overwriting (e.g., DoD 5220.22-M) writes patterns multiple times to make data unrecoverable on magnetic media. Degaussing disrupts the magnetic field; physical destruction ensures no recovery. Reformatting only removes file system metadata.",
  },

  // CISSP – D3: Security Architecture and Engineering (additional)
  {
    id: "cissp-d3-003",
    certId: "cissp",
    domainId: "cissp-d3",
    question: "The Trusted Computing Base (TCB) is defined as:",
    options: [
      "The set of all hardware, firmware, and software components critical to enforcing a security policy",
      "A list of trusted third-party vendors",
      "The physical data center infrastructure",
      "A framework for evaluating cryptographic algorithms",
    ],
    correctIndex: 0,
    explanation:
      "The TCB includes all elements (hardware, firmware, software) that must function correctly to enforce the security policy. Keeping the TCB small and well-tested reduces its attack surface.",
  },
  {
    id: "cissp-d3-004",
    certId: "cissp",
    domainId: "cissp-d3",
    question: "The Biba integrity model enforces which rules?",
    options: [
      "No read up, no write down (confidentiality-focused)",
      "No write up, no read down (integrity-focused)",
      "All users can read any data but only write to lower-sensitivity objects",
      "Write access requires a security clearance equal to the object's label",
    ],
    correctIndex: 1,
    explanation:
      "Biba protects integrity: subjects cannot write to higher-integrity objects ('no write up') and cannot read from lower-integrity objects ('no read down'). This prevents untrusted data from contaminating trusted processes.",
  },
  {
    id: "cissp-d3-005",
    certId: "cissp",
    domainId: "cissp-d3",
    question: "The principle of FAIL-SAFE defaults means:",
    options: [
      "Systems automatically restart after a failure",
      "Access is denied by default unless explicitly granted",
      "Redundant systems take over when a primary system fails",
      "Errors are logged and suppressed so users are not disrupted",
    ],
    correctIndex: 1,
    explanation:
      "Fail-safe defaults establish that the default state is no access. If a system fails or a rule is missing, access is denied rather than permitted. This limits exposure when errors occur.",
  },

  // CISSP – D4: Communication and Network Security (additional)
  {
    id: "cissp-d4-003",
    certId: "cissp",
    domainId: "cissp-d4",
    question: "Which type of DNS attack redirects users to a malicious IP by poisoning the resolver's cache?",
    options: ["DNS tunneling", "DNS hijacking", "DNS cache poisoning", "DNS amplification"],
    correctIndex: 2,
    explanation:
      "DNS cache poisoning inserts fraudulent DNS records into a resolver's cache so that legitimate domain queries return attacker-controlled IP addresses. DNSSEC was designed to prevent this by digitally signing DNS records.",
  },
  {
    id: "cissp-d4-004",
    certId: "cissp",
    domainId: "cissp-d4",
    question: "In IPsec tunnel mode (vs. transport mode), what is encrypted?",
    options: [
      "Only the payload — the original IP header is unchanged",
      "The entire original IP packet, including the header — a new IP header is added",
      "Only the IP header, not the payload",
      "Nothing — tunnel mode only provides authentication",
    ],
    correctIndex: 1,
    explanation:
      "IPsec tunnel mode encapsulates the entire original packet (header + payload) inside a new IP packet. This hides the original source and destination, making it suitable for VPN gateways between networks.",
  },
  {
    id: "cissp-d4-005",
    certId: "cissp",
    domainId: "cissp-d4",
    question: "A VLAN provides security primarily by:",
    options: [
      "Encrypting all traffic between hosts",
      "Logically segmenting network traffic so hosts in different VLANs cannot communicate without routing through a controlled gateway",
      "Preventing all broadcast traffic",
      "Requiring certificate-based authentication for every device",
    ],
    correctIndex: 1,
    explanation:
      "VLANs create logical network segments at Layer 2. Traffic between VLANs must traverse a Layer 3 device (router or firewall), enabling enforcement of access controls between segments.",
  },

  // CISSP – D5: Identity and Access Management (additional)
  {
    id: "cissp-d5-002",
    certId: "cissp",
    domainId: "cissp-d5",
    question: "Which authentication factor category does a fingerprint scan belong to?",
    options: ["Something you know", "Something you have", "Something you are", "Somewhere you are"],
    correctIndex: 2,
    explanation:
      "Biometrics (fingerprints, retina scans, facial recognition) are 'something you are' factors. Multi-factor authentication requires factors from at least two different categories.",
  },
  {
    id: "cissp-d5-003",
    certId: "cissp",
    domainId: "cissp-d5",
    question: "Single Sign-On (SSO) improves security primarily because it:",
    options: [
      "Eliminates the need for any authentication",
      "Reduces password fatigue and associated weak/reused passwords across systems",
      "Grants users access to all systems automatically",
      "Replaces multi-factor authentication requirements",
    ],
    correctIndex: 1,
    explanation:
      "SSO reduces the number of credentials users must manage. Fewer passwords means less temptation to reuse weak passwords. The tradeoff is that compromising the SSO identity provider affects all connected systems.",
  },
  {
    id: "cissp-d5-004",
    certId: "cissp",
    domainId: "cissp-d5",
    question: "Attribute-Based Access Control (ABAC) differs from RBAC in that it:",
    options: [
      "Only works with cloud applications",
      "Grants access based on combinations of user attributes, resource attributes, and environmental conditions",
      "Assigns permissions directly to individual users rather than roles",
      "Requires a centralized directory service",
    ],
    correctIndex: 1,
    explanation:
      "ABAC evaluates multiple attributes simultaneously (e.g., user's department AND clearance level AND time of day AND resource classification) to make dynamic, fine-grained access decisions — more flexible than RBAC.",
  },
  {
    id: "cissp-d5-005",
    certId: "cissp",
    domainId: "cissp-d5",
    question: "Kerberos authentication uses which cryptographic mechanism to prevent replay attacks?",
    options: [
      "Digital certificates",
      "Time-stamped tickets with short validity windows",
      "Public key infrastructure",
      "One-time passwords",
    ],
    correctIndex: 1,
    explanation:
      "Kerberos tickets contain timestamps. Clients and servers must be time-synchronized (typically within 5 minutes). Tickets expire quickly, so intercepted tickets cannot be replayed after the validity window closes.",
  },

  // CISSP – D6: Security Assessment and Testing (additional)
  {
    id: "cissp-d6-003",
    certId: "cissp",
    domainId: "cissp-d6",
    question: "A false positive in security scanning occurs when:",
    options: [
      "A real vulnerability is not detected",
      "A clean item is incorrectly flagged as a threat",
      "A test fails to run due to configuration error",
      "An attacker evades detection",
    ],
    correctIndex: 1,
    explanation:
      "False positives waste analyst time investigating non-issues. False negatives (missed real threats) are more dangerous but harder to measure. High false-positive rates can cause alert fatigue, causing teams to ignore real alerts.",
  },
  {
    id: "cissp-d6-004",
    certId: "cissp",
    domainId: "cissp-d6",
    question: "What does a vulnerability assessment do that a penetration test does NOT necessarily do?",
    options: [
      "Identify vulnerabilities in a system",
      "Attempt to actively exploit discovered vulnerabilities to demonstrate real-world impact",
      "Provide a comprehensive list of all weaknesses",
      "Test physical security controls",
    ],
    correctIndex: 1,
    explanation:
      "A vulnerability assessment identifies and categorizes weaknesses but typically stops short of exploitation. A penetration test goes further — it actively attempts to exploit vulnerabilities to determine true impact and attack feasibility.",
  },
  {
    id: "cissp-d6-005",
    certId: "cissp",
    domainId: "cissp-d6",
    question: "Which code review practice involves developers examining each other's code for defects?",
    options: ["Unit testing", "Regression testing", "Peer/code review", "Dynamic analysis"],
    correctIndex: 2,
    explanation:
      "Peer code review (also called code inspection) has developers examine code written by colleagues. It catches logic errors, security flaws, and style issues early in development — before code reaches testing stages.",
  },

  // CISSP – D7: Security Operations (additional)
  {
    id: "cissp-d7-003",
    certId: "cissp",
    domainId: "cissp-d7",
    question: "A Security Information and Event Management (SIEM) system primarily provides:",
    options: [
      "Firewall policy management",
      "Real-time aggregation, correlation, and alerting of security events from multiple sources",
      "Endpoint antivirus protection",
      "Automated patch deployment",
    ],
    correctIndex: 1,
    explanation:
      "A SIEM collects logs and events from across the environment, applies correlation rules to detect suspicious patterns, and generates alerts. It gives security teams a centralized view of the organization's security posture.",
  },
  {
    id: "cissp-d7-004",
    certId: "cissp",
    domainId: "cissp-d7",
    question: "Chain of custody in digital forensics ensures that:",
    options: [
      "Evidence is encrypted before storage",
      "The integrity and handling of evidence is documented from collection through court presentation",
      "Investigators have the fastest access to evidence",
      "Evidence is stored in a cloud environment",
    ],
    correctIndex: 1,
    explanation:
      "Chain of custody documents who collected, handled, and stored evidence and when. Without it, evidence may be ruled inadmissible in court because its integrity cannot be guaranteed.",
  },
  {
    id: "cissp-d7-005",
    certId: "cissp",
    domainId: "cissp-d7",
    question: "Job rotation in a security operations context is PRIMARILY used to:",
    options: [
      "Give employees career development opportunities",
      "Reduce the risk of fraud and detect concealed wrongdoing by disrupting long-term control over a single process",
      "Ensure backup coverage during vacations",
      "Improve team productivity through skill cross-training",
    ],
    correctIndex: 1,
    explanation:
      "Job rotation is a detective and preventive control. Rotating employees out of sensitive roles disrupts schemes that rely on long-term, unchecked access — and the incoming employee may discover previous misconduct.",
  },

  // CISSP – D8: Software Development Security (additional)
  {
    id: "cissp-d8-003",
    certId: "cissp",
    domainId: "cissp-d8",
    question: "Which SDLC activity is MOST effective at reducing the cost of fixing security flaws?",
    options: [
      "Penetration testing in production",
      "Threat modeling during the design phase",
      "Security training for developers after deployment",
      "Vulnerability scanning post-release",
    ],
    correctIndex: 1,
    explanation:
      "The 'rule of 10' shows that fixing a flaw in design costs ~10x less than fixing it in coding, which costs 10x less than fixing it post-release. Threat modeling in design is the highest-ROI security activity.",
  },
  {
    id: "cissp-d8-004",
    certId: "cissp",
    domainId: "cissp-d8",
    question: "Cross-Site Scripting (XSS) is primarily prevented by:",
    options: [
      "Input validation and output encoding",
      "Using HTTPS for all connections",
      "Implementing a Web Application Firewall only",
      "Requiring user authentication",
    ],
    correctIndex: 0,
    explanation:
      "XSS injects malicious scripts into pages viewed by other users. Defense requires validating and sanitizing all user input and encoding all output so the browser does not interpret user data as executable script.",
  },
  {
    id: "cissp-d8-005",
    certId: "cissp",
    domainId: "cissp-d8",
    question: "What is the purpose of a software bill of materials (SBOM)?",
    options: [
      "To document software licensing costs",
      "To provide a formal inventory of all components and dependencies in a software product",
      "To track developer productivity metrics",
      "To automate deployment pipelines",
    ],
    correctIndex: 1,
    explanation:
      "An SBOM lists every library, dependency, and component in a software product. It enables rapid identification of whether a product is affected by a newly disclosed vulnerability in any of its components — critical for supply chain security.",
  },

  // CGRC – D1: Information Security Risk Management Program (additional)
  {
    id: "cgrc-d1-003",
    certId: "cgrc",
    domainId: "cgrc-d1",
    question: "Which NIST publication provides the detailed catalog of security and privacy controls for federal information systems?",
    options: ["NIST SP 800-37", "NIST SP 800-53", "FIPS 199", "NIST SP 800-30"],
    correctIndex: 1,
    explanation:
      "NIST SP 800-53 is the control catalog. SP 800-37 describes the RMF process. FIPS 199 covers categorization. SP 800-30 provides risk assessment guidance.",
  },
  {
    id: "cgrc-d1-004",
    certId: "cgrc",
    domainId: "cgrc-d1",
    question: "The six steps of the NIST RMF in correct order are:",
    options: [
      "Categorize → Select → Implement → Assess → Authorize → Monitor",
      "Select → Categorize → Implement → Assess → Monitor → Authorize",
      "Authorize → Categorize → Select → Implement → Assess → Monitor",
      "Implement → Select → Categorize → Authorize → Assess → Monitor",
    ],
    correctIndex: 0,
    explanation:
      "The RMF follows: (1) Categorize — determine impact levels; (2) Select — choose controls; (3) Implement — apply controls; (4) Assess — verify controls work; (5) Authorize — accept residual risk; (6) Monitor — ongoing awareness.",
  },

  // CGRC – D2: Scope of the Information System (additional)
  {
    id: "cgrc-d2-003",
    certId: "cgrc",
    domainId: "cgrc-d2",
    question: "An interconnection security agreement (ISA) is required when:",
    options: [
      "A system is deployed in a cloud environment",
      "Two organizations connect their information systems and share data across a boundary",
      "A system undergoes a major upgrade",
      "Employees work remotely",
    ],
    correctIndex: 1,
    explanation:
      "An ISA documents the security requirements and responsibilities when two organizations interconnect systems. It defines technical controls, data flows, and the agreement between the two authorizing officials.",
  },
  {
    id: "cgrc-d2-004",
    certId: "cgrc",
    domainId: "cgrc-d2",
    question: "What is the purpose of a system data flow diagram in an authorization package?",
    options: [
      "To document the physical location of servers",
      "To show how data moves between system components, external interfaces, and users",
      "To list all software licenses",
      "To define the system's recovery time objective",
    ],
    correctIndex: 1,
    explanation:
      "Data flow diagrams visualize where PII and sensitive data travel within and between systems. They help identify trust boundaries, potential exposure points, and where specific controls (e.g., encryption in transit) must be applied.",
  },

  // CGRC – D3: Selection and Approval of Security and Privacy Controls (additional)
  {
    id: "cgrc-d3-003",
    certId: "cgrc",
    domainId: "cgrc-d3",
    question: "Tailoring a control baseline means:",
    options: [
      "Adopting the baseline exactly as published without modification",
      "Adjusting the baseline by adding, removing, or modifying controls to fit the organization's specific environment and risk",
      "Reducing controls to the minimum to save cost",
      "Replacing NIST controls with ISO 27001 controls",
    ],
    correctIndex: 1,
    explanation:
      "Tailoring adapts the NIST baseline to the specific system context. Organizations can add controls for unique threats, scoping out controls that don't apply, or parameterizing controls with environment-specific values.",
  },

  // CGRC – D4: Implementation of Security and Privacy Controls (additional)
  {
    id: "cgrc-d4-003",
    certId: "cgrc",
    domainId: "cgrc-d4",
    question: "A hybrid control is one that:",
    options: [
      "Combines technical and administrative controls",
      "Has both system-specific and common (inherited) components",
      "Is implemented across cloud and on-premises environments",
      "Satisfies both security and privacy requirements simultaneously",
    ],
    correctIndex: 1,
    explanation:
      "Hybrid controls have portions implemented at the system level and portions inherited from a common control provider. The SSP must document both the system-specific implementation and the inherited component.",
  },

  // CGRC – D5: Assessment/Auditing of Security and Privacy Controls (additional)
  {
    id: "cgrc-d5-003",
    certId: "cgrc",
    domainId: "cgrc-d5",
    question: "An assessor determines a control is 'Other Than Satisfied' (OTS). This means:",
    options: [
      "The control is fully implemented and working as intended",
      "The control is not implemented, partially implemented, or implemented incorrectly",
      "The control is not applicable to this system",
      "The control requires additional documentation",
    ],
    correctIndex: 1,
    explanation:
      "OTS (or 'Not Satisfied') indicates a control deficiency — the control is absent, incomplete, or malfunctioning. OTS findings must be captured in the POA&M and resolved or accepted before or after authorization.",
  },

  // CGRC – D6: Authorization/Approval of Information System (additional)
  {
    id: "cgrc-d6-003",
    certId: "cgrc",
    domainId: "cgrc-d6",
    question: "Ongoing authorization (vs. point-in-time authorization) means:",
    options: [
      "The ATO never expires and requires no review",
      "Authorization is maintained through continuous monitoring that replaces periodic reassessment",
      "Authorization decisions are delegated to system owners",
      "Any change to the system automatically revokes the ATO",
    ],
    correctIndex: 1,
    explanation:
      "Ongoing authorization shifts from periodic snapshots to a continuous risk management posture. Real-time monitoring data allows the authorizing official to maintain awareness of the current risk state and make dynamic authorization decisions.",
  },

  // CGRC – D7: Continuous Monitoring (additional)
  {
    id: "cgrc-d7-002",
    certId: "cgrc",
    domainId: "cgrc-d7",
    question: "A key output of a continuous monitoring strategy is:",
    options: [
      "A one-time penetration test report",
      "An ongoing stream of security status information that keeps the AO informed of current risk",
      "An annual audit report for compliance",
      "A list of approved vendors",
    ],
    correctIndex: 1,
    explanation:
      "The ISCM strategy defines what to monitor, how often, and how to report results. Its purpose is to provide the authorizing official with timely, relevant security status data to support ongoing authorization decisions.",
  },
  {
    id: "cgrc-d7-003",
    certId: "cgrc",
    domainId: "cgrc-d7",
    question: "Configuration management baselines in a continuous monitoring program help detect:",
    options: [
      "Network latency issues",
      "Unauthorized changes to system components that may introduce new vulnerabilities",
      "Employee login patterns",
      "Software license expirations",
    ],
    correctIndex: 1,
    explanation:
      "Configuration baselines document the approved state of a system. Automated tools compare the current state against the baseline and alert on deviations — catching unauthorized changes before they become exploitable vulnerabilities.",
  },

  // ISSMP – D1: Leadership and Business Management (additional)
  {
    id: "issmp-d1-003",
    certId: "issmp",
    domainId: "issmp-d1",
    question: "To whom should the CISO ideally report to maximize security program independence and executive support?",
    options: ["The CIO", "The CFO", "The CEO, COO, or Board", "The Head of IT Operations"],
    correctIndex: 2,
    explanation:
      "Reporting to the CEO, COO, or Board gives the CISO independence from IT (avoiding conflicts of interest with operational speed vs. security) and ensures direct access to executive decision-makers for resource and risk escalation.",
  },
  {
    id: "issmp-d1-004",
    certId: "issmp",
    domainId: "issmp-d1",
    question: "Which document establishes the authority and scope of the security program across the organization?",
    options: [
      "The security architecture diagram",
      "The Information Security Policy (ISP)",
      "The system security plan",
      "The incident response playbook",
    ],
    correctIndex: 1,
    explanation:
      "The Information Security Policy is the foundational governance document — signed by executive leadership — that establishes the program's authority, scope, objectives, roles, and accountability. All other security documents flow from it.",
  },

  // ISSMP – D2: Systems Lifecycle Management (additional)
  {
    id: "issmp-d2-003",
    certId: "issmp",
    domainId: "issmp-d2",
    question: "DevSecOps differs from traditional DevOps primarily by:",
    options: [
      "Using different programming languages",
      "Integrating security practices and testing continuously throughout the entire development pipeline",
      "Requiring separate security teams to approve each release",
      "Slowing deployment frequency to allow security review",
    ],
    correctIndex: 1,
    explanation:
      "DevSecOps embeds security as a shared responsibility across development and operations — automated security testing in CI/CD pipelines, security training for developers, and security requirements as code ('shift-left').",
  },
  {
    id: "issmp-d2-004",
    certId: "issmp",
    domainId: "issmp-d2",
    question: "A software escrow arrangement protects customers because it:",
    options: [
      "Prevents software from being copied",
      "Ensures access to source code if the vendor ceases operations or cannot fulfil maintenance obligations",
      "Guarantees the software is free of vulnerabilities",
      "Provides a financial refund if the software fails",
    ],
    correctIndex: 1,
    explanation:
      "Software escrow stores the source code with a neutral third party. If the vendor goes out of business or defaults on maintenance, the customer can access the source to maintain or modify the software independently.",
  },

  // ISSMP – D3: Risk Management (additional)
  {
    id: "issmp-d3-002",
    certId: "issmp",
    domainId: "issmp-d3",
    question: "Enterprise Risk Management (ERM) integrates security risk with organizational risk by:",
    options: [
      "Replacing all departmental risk processes with a single IT-managed system",
      "Providing a holistic framework that aligns security risk alongside financial, operational, and strategic risks for executive decision-making",
      "Requiring all risk decisions to be made by the CISO",
      "Eliminating residual risk through comprehensive controls",
    ],
    correctIndex: 1,
    explanation:
      "ERM elevates security risk to the same level as other enterprise risks, allowing leadership to make informed trade-offs across the full risk portfolio rather than treating security as an isolated IT concern.",
  },
  {
    id: "issmp-d3-003",
    certId: "issmp",
    domainId: "issmp-d3",
    question: "A Key Risk Indicator (KRI) differs from a Key Performance Indicator (KPI) in that it:",
    options: [
      "Measures past performance",
      "Provides early warning signals of increasing risk exposure before a risk event occurs",
      "Tracks compliance with regulatory requirements",
      "Measures the cost of security controls",
    ],
    correctIndex: 1,
    explanation:
      "KRIs are forward-looking — they signal that risk is rising before an incident occurs (e.g., increasing failed login attempts signal credential-stuffing risk). KPIs measure how well controls are performing.",
  },

  // ISSMP – D4: Threat Intelligence and Incident Management (additional)
  {
    id: "issmp-d4-003",
    certId: "issmp",
    domainId: "issmp-d4",
    question: "The MITRE ATT&CK framework is PRIMARILY used to:",
    options: [
      "Calculate financial risk exposure",
      "Document adversary tactics, techniques, and procedures (TTPs) to improve detection and response",
      "Manage software vulnerabilities and patches",
      "Assess regulatory compliance gaps",
    ],
    correctIndex: 1,
    explanation:
      "ATT&CK provides a structured knowledge base of real-world adversary behavior. Security teams use it to map detections to adversary TTPs, identify gaps in coverage, and build threat-informed defenses.",
  },

  // ISSMP – D5: Contingency Management (additional)
  {
    id: "issmp-d5-003",
    certId: "issmp",
    domainId: "issmp-d5",
    question: "Which type of disaster recovery test fully activates the alternate site and cuts over production operations?",
    options: ["Tabletop exercise", "Parallel test", "Full interruption test", "Walkthrough"],
    correctIndex: 2,
    explanation:
      "A full interruption test completely shuts down the primary site and runs operations from the alternate site — the most realistic but also highest-risk test. Parallel tests run both sites simultaneously; tabletops are discussion-only.",
  },
  {
    id: "issmp-d5-004",
    certId: "issmp",
    domainId: "issmp-d5",
    question: "A Recovery Time Objective (RTO) defines:",
    options: [
      "The maximum tolerable data loss, expressed as a time period",
      "The maximum acceptable downtime before a business function must be restored",
      "The time required to complete a full backup",
      "The frequency of disaster recovery tests",
    ],
    correctIndex: 1,
    explanation:
      "RTO is the maximum time a business can tolerate being offline. RPO defines the maximum acceptable data loss. Together they drive technology choices: a 1-hour RTO requires very different infrastructure than a 24-hour RTO.",
  },

  // ISSMP – D6: Law, Ethics, and Security Compliance Management (additional)
  {
    id: "issmp-d6-003",
    certId: "issmp",
    domainId: "issmp-d6",
    question: "GDPR's 'right to erasure' (right to be forgotten) requires organizations to:",
    options: [
      "Delete all user data immediately upon request in all circumstances",
      "Delete personal data upon request when the data is no longer necessary or processing lacks lawful basis, subject to specific exceptions",
      "Encrypt personal data so it cannot be read",
      "Anonymize data within 30 days of collection",
    ],
    correctIndex: 1,
    explanation:
      "The right to erasure allows individuals to request deletion of their personal data. It is not absolute — exceptions apply for legal obligations, public interest, and other grounds. Organizations must evaluate each request on its merits.",
  },
  {
    id: "issmp-d6-004",
    certId: "issmp",
    domainId: "issmp-d6",
    question: "Which legal principle requires that evidence be obtained through lawful means to be admissible in court?",
    options: [
      "Chain of custody",
      "The exclusionary rule",
      "Due process",
      "Reasonable expectation of privacy",
    ],
    correctIndex: 1,
    explanation:
      "The exclusionary rule bars evidence obtained in violation of constitutional protections (e.g., illegal search and seizure) from being used in court. This is why proper legal authority (warrants, consent) is essential before conducting forensic investigations.",
  },

  // CISM – D1: Information Security Governance (additional)
  {
    id: "cism-d1-003",
    certId: "cism",
    domainId: "cism-d1",
    question: "Which governance framework provides a control objectives model specifically designed for IT management and governance?",
    options: [
      "NIST CSF",
      "ISO 27001",
      "ITIL",
      "COBIT",
    ],
    correctIndex: 3,
    explanation:
      "COBIT (Control Objectives for Information and Related Technologies) provides a framework of governance and management objectives purpose-built for IT. NIST CSF is a risk-based cybersecurity framework, ISO 27001 is an ISMS certification standard, and ITIL covers IT service management — none is a dedicated IT governance control-objectives model.",
  },
  {
    id: "cism-d1-004",
    certId: "cism",
    domainId: "cism-d1",
    question: "An information security steering committee's PRIMARY purpose is to:",
    options: [
      "Perform hands-on technical reviews of production systems",
      "Directly manage day-to-day security operations center activities",
      "Give cross-functional oversight that aligns security with strategy",
      "Deliver security-awareness training to the workforce",
    ],
    correctIndex: 2,
    explanation:
      "The steering committee is a governance body — it sets direction and priorities across business units. Day-to-day technical work such as system reviews, SOC operations, or training delivery is management's job, carried out under that direction.",
  },
  {
    id: "cism-d1-005",
    certId: "cism",
    domainId: "cism-d1",
    question: "A security policy that is not enforced is MOST likely to result in:",
    options: [
      "A false sense of security while real risk goes unmanaged",
      "Smoother operations due to fewer enforcement checks",
      "Stronger regulatory standing since the policy exists",
      "Lower administrative cost from reduced oversight",
    ],
    correctIndex: 0,
    explanation:
      "An unenforced policy creates a gap between documented intent and actual practice. Employees may assume protections are in place, and auditors may see a policy on paper, while real risk goes unmanaged. Enforcement is what converts a written policy into actual risk reduction.",
  },

  // CISM – D2: Information Security Risk Management (additional)
  {
    id: "cism-d2-002",
    certId: "cism",
    domainId: "cism-d2",
    question: "Inherent risk is best defined as:",
    options: [
      "The level of risk in place before any controls are applied",
      "Risk that remains in place after all controls are applied",
      "Risk that cannot be mitigated under any circumstances at all",
      "Risk that has been shifted to a third party via insurance",
    ],
    correctIndex: 0,
    explanation:
      "Inherent risk is the raw, uncontrolled risk level before treatment. Residual risk is what remains after controls are applied. Understanding inherent risk helps prioritize where controls provide the most value.",
  },
  {
    id: "cism-d2-003",
    certId: "cism",
    domainId: "cism-d2",
    question: "Which risk treatment option involves completely discontinuing a risky activity?",
    options: [
      "Risk mitigation",
      "Risk acceptance",
      "Risk transfer",
      "Risk avoidance",
    ],
    correctIndex: 3,
    explanation:
      "Risk avoidance eliminates the activity or condition that creates the risk entirely — for example, deciding not to collect certain categories of sensitive data. It removes the risk but also the associated business opportunity.",
  },
  {
    id: "cism-d2-004",
    certId: "cism",
    domainId: "cism-d2",
    question: "Risk tolerance and risk appetite differ in that:",
    options: [
      "Executives set risk tolerance while the board sets risk appetite",
      "Appetite governs financial risk only; tolerance governs operational risk",
      "Appetite is the strategic risk-acceptance level; tolerance is the practical variance",
      "The two terms are interchangeable with no meaningful distinction",
    ],
    correctIndex: 2,
    explanation:
      "Risk appetite is the overall amount and type of risk an organization is willing to accept in pursuit of its objectives. Risk tolerance is the acceptable variance from that appetite at the operational level — the practical day-to-day limits.",
  },
  {
    id: "cism-d2-005",
    certId: "cism",
    domainId: "cism-d2",
    question: "A threat vector is BEST described as:",
    options: [
      "The path an attacker uses to reach and access a system",
      "The financial impact resulting from a security incident",
      "The full list of threats an organization has identified",
      "The probability that a vulnerability will be exploited",
    ],
    correctIndex: 0,
    explanation:
      "A threat vector is the attack path — how an adversary delivers a payload or reaches a target, such as a phishing email, an exposed RDP port, or a supply-chain compromise. Understanding vectors helps prioritize defensive controls.",
  },

  // CISM – D3: Information Security Program (additional)
  {
    id: "cism-d3-003",
    certId: "cism",
    domainId: "cism-d3",
    question: "Security awareness training is MOST effective when it:",
    options: [
      "Role-specific, refreshed regularly, with simulated phishing drills",
      "Delivered a single time during new-employee onboarding",
      "Covering every security policy in one long annual session",
      "Delivered exclusively to the IT department's staff",
    ],
    correctIndex: 0,
    explanation:
      "Effective awareness programs are continuous, targeted to specific roles and risks, and reinforced through practical exercises. Simulated phishing, for example, measures real behavior change rather than just knowledge retention.",
  },
  {
    id: "cism-d3-004",
    certId: "cism",
    domainId: "cism-d3",
    question: "Which element is MOST important when establishing a security program's resource requirements?",
    options: [
      "The number of certifications held by the security team",
      "A direct benchmark against competitor security budgets",
      "The age and complexity of the tools already deployed",
      "Requests aligned with identified, quantified business risk",
    ],
    correctIndex: 3,
    explanation:
      "Resource requests grounded in risk data are far more persuasive to business leaders. Quantifying risk exposure in financial terms where possible directly ties security investment to business outcomes, rather than to team credentials, peer spending, or tool inventory.",
  },
  {
    id: "cism-d3-005",
    certId: "cism",
    domainId: "cism-d3",
    question: "A third-party security assessment of a vendor is MOST critical when:",
    options: [
      "The vendor supplies office stationery and supplies",
      "The vendor can access or process sensitive company data",
      "The vendor happens to be based in another country",
      "The vendor is a large, publicly traded company",
    ],
    correctIndex: 1,
    explanation:
      "Third-party risk management focuses on vendors who touch sensitive data or critical systems. A vendor with access to customer PII or integrated into core infrastructure creates significant risk exposure that must be assessed and managed.",
  },

  // CISM – D4: Incident Management (additional)
  {
    id: "cism-d4-003",
    certId: "cism",
    domainId: "cism-d4",
    question: "During an incident, the decision to notify customers about a data breach is PRIMARILY governed by:",
    options: [
      "Legal and regulatory thresholds for breach notification",
      "Whatever the CISO personally judges to be right",
      "The marketing department's public communications plan",
      "Guidance issued by the organization's insurance carrier",
    ],
    correctIndex: 0,
    explanation:
      "Breach notification obligations are defined by laws such as GDPR (72 hours to the regulator), US state laws, and HIPAA — triggered by specific data types and thresholds, not by any one department's judgment or preference.",
  },
  {
    id: "cism-d4-004",
    certId: "cism",
    domainId: "cism-d4",
    question: "An incident response retainer with a third-party firm is MOST valuable because it:",
    options: [
      "It removes any need to keep an internal security team",
      "It guarantees resolution within a fixed, set timeframe",
      "It pre-agrees terms so expert help is available immediately",
      "It shifts all legal liability onto the retained firm",
    ],
    correctIndex: 2,
    explanation:
      "During a breach, every hour matters. A retainer avoids contract negotiations under pressure and ensures legal and investigative terms are pre-agreed, so expert help is available immediately — it doesn't replace an internal team, guarantee an outcome, or transfer liability.",
  },
  {
    id: "cism-d4-005",
    certId: "cism",
    domainId: "cism-d4",
    question: "Which incident response phase involves rebuilding systems, removing malware, and revoking compromised credentials?",
    options: [
      "Identification",
      "Eradication",
      "Containment",
      "Recovery",
    ],
    correctIndex: 1,
    explanation:
      "Eradication removes all traces of the threat — malware, backdoors, unauthorized accounts. It must be thorough before recovery begins, or attackers may regain access through remnants left on restored systems.",
  },

  // ── Additional questions (round 3) ───────────────────────────────────────

  // CISSP – D1 additional
  {
    id: "cissp-d1-007",
    certId: "cissp",
    domainId: "cissp-d1",
    question: "The NIST Cybersecurity Framework (CSF) organizes security activities into five functions. Which function focuses on developing and implementing appropriate safeguards to ensure delivery of critical services?",
    options: ["Identify", "Protect", "Detect", "Respond"],
    correctIndex: 1,
    explanation:
      "The Protect function covers access control, awareness training, data security, and protective technology — all aimed at limiting or containing the impact of a potential security event.",
  },
  {
    id: "cissp-d1-008",
    certId: "cissp",
    domainId: "cissp-d1",
    question: "Which type of security policy defines acceptable use of organizational resources and is signed by employees?",
    options: ["Issue-specific policy", "System-specific policy", "Organizational policy", "Acceptable Use Policy (AUP)"],
    correctIndex: 3,
    explanation:
      "An AUP defines what users may and may not do with organizational systems and data. It is typically signed at onboarding and creates a legally acknowledged agreement between the employee and the organization.",
  },
  {
    id: "cissp-d1-009",
    certId: "cissp",
    domainId: "cissp-d1",
    question: "A qualitative risk analysis differs from a quantitative analysis in that it:",
    options: [
      "Produces exact dollar-value estimates of risk",
      "Uses expert judgment and descriptive scales (High/Medium/Low) rather than precise numerical calculations",
      "Requires more time and data to complete",
      "Can only be performed by external auditors",
    ],
    correctIndex: 1,
    explanation:
      "Qualitative analysis uses subjective ratings and is faster and less data-intensive. Quantitative analysis uses formulas (ALE = SLE × ARO) to produce dollar values — more precise but requires accurate threat frequency and asset-value data.",
  },

  // CISSP – D2 additional
  {
    id: "cissp-d2-006",
    certId: "cissp",
    domainId: "cissp-d2",
    question: "Under GDPR, a 'data controller' is BEST described as:",
    options: [
      "A technical system that manages database access",
      "The entity that determines the purposes and means of processing personal data",
      "The person responsible for physical security of data centers",
      "The individual whose personal data is being processed",
    ],
    correctIndex: 1,
    explanation:
      "The data controller decides WHY and HOW personal data is processed. The data processor acts on behalf of the controller. The data subject is the individual whose data is collected. Understanding this distinction is critical for GDPR compliance.",
  },
  {
    id: "cissp-d2-007",
    certId: "cissp",
    domainId: "cissp-d2",
    question: "A data retention policy primarily serves to:",
    options: [
      "Encrypt data at rest for the period it is stored",
      "Define how long data is kept and when it must be securely destroyed",
      "Ensure data is replicated across multiple geographic locations",
      "Restrict access to sensitive data to authorized users only",
    ],
    correctIndex: 1,
    explanation:
      "Retention policies balance legal hold requirements (keeping data long enough for litigation) against privacy obligations (deleting data when no longer needed). Keeping data longer than necessary increases both storage costs and breach exposure.",
  },
  {
    id: "cissp-d2-008",
    certId: "cissp",
    domainId: "cissp-d2",
    question: "Which concept requires that information be labeled and handled according to its level of sensitivity?",
    options: ["Data minimization", "Data classification", "Data lineage", "Data normalization"],
    correctIndex: 1,
    explanation:
      "Data classification assigns sensitivity labels (e.g., Public/Internal/Confidential/Restricted) that drive handling requirements — who can access data, how it must be stored, transmitted, and eventually destroyed.",
  },

  // CISSP – D3 additional
  {
    id: "cissp-d3-006",
    certId: "cissp",
    domainId: "cissp-d3",
    question: "AES-256 is classified as which type of cryptographic algorithm?",
    options: ["Asymmetric (public key)", "Hash function", "Symmetric (secret key)", "Stream cipher"],
    correctIndex: 2,
    explanation:
      "AES (Advanced Encryption Standard) is a symmetric block cipher — the same key encrypts and decrypts data. RSA and ECC are asymmetric. SHA-256 is a hash. RC4 is a stream cipher. AES-256 uses a 256-bit key and is the current standard for bulk data encryption.",
  },
  {
    id: "cissp-d3-007",
    certId: "cissp",
    domainId: "cissp-d3",
    question: "In a public key infrastructure (PKI), a Certificate Authority (CA) is trusted because it:",
    options: [
      "Uses the most advanced encryption algorithm available",
      "Digitally signs certificates, binding a public key to a verified identity",
      "Stores all private keys for recovery purposes",
      "Issues certificates at no charge to any requestor",
    ],
    correctIndex: 1,
    explanation:
      "The CA's digital signature on a certificate is the root of trust — it asserts that the CA has verified the certificate holder's identity. Browser and OS trust stores contain CA root certificates that enable this chain of trust.",
  },
  {
    id: "cissp-d3-008",
    certId: "cissp",
    domainId: "cissp-d3",
    question: "Software as a Service (SaaS) differs from Infrastructure as a Service (IaaS) in that the customer:",
    options: [
      "Manages the operating system and runtime in SaaS",
      "Has no responsibility for the application layer in IaaS",
      "Only manages data and user access in SaaS; the provider manages everything else",
      "Owns the underlying hardware in SaaS",
    ],
    correctIndex: 2,
    explanation:
      "In SaaS, the provider manages infrastructure, OS, platform, and application — the customer only configures the application and manages users and data. In IaaS, the customer manages OS upward, giving more control but more responsibility.",
  },

  // CISSP – D4 additional
  {
    id: "cissp-d4-006",
    certId: "cissp",
    domainId: "cissp-d4",
    question: "WPA3 improves on WPA2 for wireless security primarily by:",
    options: [
      "Using a longer SSID",
      "Replacing PSK with Simultaneous Authentication of Equals (SAE), preventing offline dictionary attacks",
      "Eliminating the need for passwords entirely",
      "Reducing transmission power to limit coverage area",
    ],
    correctIndex: 1,
    explanation:
      "SAE (also called Dragonfly handshake) makes offline brute-force attacks against captured handshakes infeasible. WPA2 PSK was vulnerable to offline dictionary attacks if a weak passphrase was used.",
  },
  {
    id: "cissp-d4-007",
    certId: "cissp",
    domainId: "cissp-d4",
    question: "A man-in-the-middle (MitM) attack is BEST mitigated by:",
    options: [
      "Using longer passwords",
      "Mutual authentication and encrypted communication channels (e.g., TLS with certificate validation)",
      "Deploying an intrusion detection system",
      "Segmenting the network with VLANs",
    ],
    correctIndex: 1,
    explanation:
      "MitM requires either impersonating one endpoint or intercepting traffic. Mutual authentication ensures both parties verify each other's identity; encryption prevents the attacker from reading or modifying the intercepted data.",
  },
  {
    id: "cissp-d4-008",
    certId: "cissp",
    domainId: "cissp-d4",
    question: "The primary purpose of network segmentation in a security architecture is to:",
    options: [
      "Improve network throughput",
      "Limit lateral movement by attackers and contain the blast radius of a compromise",
      "Reduce hardware costs by consolidating switches",
      "Simplify network management",
    ],
    correctIndex: 1,
    explanation:
      "Segmentation creates security zones. If an attacker compromises a device in one segment, they cannot freely reach devices in other segments — they must traverse a controlled gateway, creating additional detection and blocking opportunities.",
  },

  // CISSP – D5 additional
  {
    id: "cissp-d5-006",
    certId: "cissp",
    domainId: "cissp-d5",
    question: "Zero Trust Architecture (ZTA) is based on the principle of:",
    options: [
      "Trusting all traffic within the internal network perimeter",
      "Never trust, always verify — no implicit trust based on network location",
      "Granting temporary elevated access based on user requests",
      "Eliminating all passwords in favor of biometric authentication",
    ],
    correctIndex: 1,
    explanation:
      "ZTA assumes breach and verifies every access request regardless of network origin. Users inside the corporate network receive the same scrutiny as external users. Controls include identity verification, device health checks, and least-privilege access.",
  },
  {
    id: "cissp-d5-007",
    certId: "cissp",
    domainId: "cissp-d5",
    question: "Privileged Access Management (PAM) reduces risk primarily by:",
    options: [
      "Requiring admin accounts to use longer passwords",
      "Controlling, monitoring, and recording use of privileged credentials to limit their exposure and detect abuse",
      "Granting all users temporary admin access for efficiency",
      "Blocking all administrative access from remote locations",
    ],
    correctIndex: 1,
    explanation:
      "PAM vaults privileged credentials, requires just-in-time access approval, records sessions, and alerts on anomalous behavior. Compromised admin accounts are a top attack vector — PAM dramatically limits what an attacker can do with them.",
  },
  {
    id: "cissp-d5-008",
    certId: "cissp",
    domainId: "cissp-d5",
    question: "OAuth 2.0 is primarily used for:",
    options: [
      "Encrypting passwords in storage",
      "Delegated authorization — allowing an application to access resources on behalf of a user without sharing credentials",
      "Authenticating users with username/password",
      "Generating one-time passwords for MFA",
    ],
    correctIndex: 1,
    explanation:
      "OAuth 2.0 is an authorization framework (not authentication). It allows a user to grant a third-party application limited access to their resources without giving it their password. OpenID Connect (OIDC) builds on OAuth to add authentication.",
  },

  // CISSP – D6 additional
  {
    id: "cissp-d6-006",
    certId: "cissp",
    domainId: "cissp-d6",
    question: "The Common Vulnerability Scoring System (CVSS) provides a standardized way to:",
    options: [
      "Track the financial cost of a vulnerability",
      "Assign a numeric severity score to vulnerabilities to help prioritize remediation",
      "Certify security products against a baseline",
      "Document the history of security incidents",
    ],
    correctIndex: 1,
    explanation:
      "CVSS scores range from 0.0 to 10.0 (Critical). They consider base metrics (attack vector, complexity, impact) as well as temporal and environmental factors. Organizations use CVSS to prioritize patching — critical scores typically require faster remediation.",
  },
  {
    id: "cissp-d6-007",
    certId: "cissp",
    domainId: "cissp-d6",
    question: "A compliance audit differs from a security assessment in that it:",
    options: [
      "Looks for unknown vulnerabilities through active testing",
      "Verifies that specific controls required by a standard or regulation are in place",
      "Focuses exclusively on technical controls",
      "Is always conducted by external third parties",
    ],
    correctIndex: 1,
    explanation:
      "Compliance audits check adherence to defined standards (PCI DSS, HIPAA, SOC 2). Security assessments may go beyond defined controls to identify undocumented risks. Both are valuable — compliance ensures a minimum baseline; assessments reveal the true risk posture.",
  },
  {
    id: "cissp-d6-008",
    certId: "cissp",
    domainId: "cissp-d6",
    question: "Which testing methodology involves providing the tester with full knowledge of the system's architecture and source code?",
    options: ["Black-box", "Gray-box", "White-box", "Red team"],
    correctIndex: 2,
    explanation:
      "White-box testing gives the tester complete visibility — architecture diagrams, source code, credentials. It is the most thorough method and finds the most vulnerabilities, but doesn't simulate a realistic external attacker as well as black-box testing.",
  },

  // CISSP – D7 additional
  {
    id: "cissp-d7-006",
    certId: "cissp",
    domainId: "cissp-d7",
    question: "Data Loss Prevention (DLP) tools are PRIMARILY designed to:",
    options: [
      "Encrypt sensitive data at rest",
      "Detect and prevent unauthorized exfiltration or transmission of sensitive data",
      "Back up critical data to prevent loss from hardware failure",
      "Block malware from executing on endpoints",
    ],
    correctIndex: 1,
    explanation:
      "DLP monitors data in use, in motion, and at rest — alerting or blocking when sensitive data (PII, IP, financial data) is detected moving to unauthorized destinations such as personal email, USB drives, or cloud storage.",
  },
  {
    id: "cissp-d7-007",
    certId: "cissp",
    domainId: "cissp-d7",
    question: "Threat hunting is BEST described as:",
    options: [
      "Waiting for security alerts to trigger investigation",
      "Proactively searching for hidden threats or adversary activity that evaded automated detection",
      "Performing regularly scheduled vulnerability scans",
      "Reviewing firewall logs for known malware signatures",
    ],
    correctIndex: 1,
    explanation:
      "Threat hunting is hypothesis-driven and proactive — analysts actively search for indicators of compromise or attacker behavior that didn't trigger alerts. It's particularly valuable against advanced persistent threats (APTs) that operate stealthily.",
  },
  {
    id: "cissp-d7-008",
    certId: "cissp",
    domainId: "cissp-d7",
    question: "Which principle ensures that an employee on vacation cannot single-handedly cause financial fraud?",
    options: ["Need to know", "Mandatory vacation", "Separation of duties", "Least privilege"],
    correctIndex: 2,
    explanation:
      "Separation of duties prevents any one individual from controlling an entire sensitive process. Mandatory vacation policies (a related control) force someone else to cover duties, potentially exposing hidden fraud. Together they are key fraud-prevention controls.",
  },

  // CISSP – D8 additional
  {
    id: "cissp-d8-006",
    certId: "cissp",
    domainId: "cissp-d8",
    question: "A race condition vulnerability occurs when:",
    options: [
      "Code executes faster than the CPU can process it",
      "A program's behavior depends on the timing or ordering of uncontrolled events, allowing an attacker to manipulate the outcome",
      "Multiple users attempt to log in simultaneously",
      "An application uses deprecated cryptographic algorithms",
    ],
    correctIndex: 1,
    explanation:
      "Race conditions (time-of-check/time-of-use — TOCTOU) occur when security checks and the actions they protect are not atomic. An attacker can change the state between check and use, bypassing the check.",
  },
  {
    id: "cissp-d8-007",
    certId: "cissp",
    domainId: "cissp-d8",
    question: "The OWASP Top 10 is MOST useful as:",
    options: [
      "A certification standard for web developers",
      "A regularly updated awareness document highlighting the most critical web application security risks",
      "A legally binding standard for web application security",
      "A set of automated testing rules for SAST tools",
    ],
    correctIndex: 1,
    explanation:
      "The OWASP Top 10 is a community-driven awareness document, not a standard or certification. It names the most prevalent and impactful categories of web vulnerabilities (injection, broken auth, XSS, etc.) and drives developer education and tool development.",
  },
  {
    id: "cissp-d8-008",
    certId: "cissp",
    domainId: "cissp-d8",
    question: "Fuzz testing (fuzzing) is used to:",
    options: [
      "Verify that code meets functional requirements",
      "Detect memory corruption, crashes, and unexpected behavior by feeding random or malformed inputs to an application",
      "Review source code for coding style violations",
      "Test application performance under load",
    ],
    correctIndex: 1,
    explanation:
      "Fuzzing automatically generates invalid, unexpected, or random data as program inputs. It excels at finding input-handling bugs like buffer overflows, format string errors, and unhandled exceptions — vulnerabilities that manual code review often misses.",
  },

  // CISM – D1 additional
  {
    id: "cism-d1-006",
    certId: "cism",
    domainId: "cism-d1",
    question: "The PRIMARY purpose of an information security charter is to:",
    options: [
      "Catalog technical configurations applied across security tools",
      "Establish the program's authority and scope with executive backing",
      "Itemize security tools currently deployed and their costs",
      "Assign specific security duties to individual staff members",
    ],
    correctIndex: 1,
    explanation:
      "A charter is the founding governance document — signed by executive leadership — that grants the security program its authority, scope, and mandate. Without it, the program lacks standing to enforce policy or hold business units accountable. Cataloging tools, configurations, or individual duties are operational outputs, not the charter's purpose.",
  },
  {
    id: "cism-d1-007",
    certId: "cism",
    domainId: "cism-d1",
    question: "When implementing ISO 27001, the Statement of Applicability (SoA) is used to:",
    options: [
      "Catalog every known technical vulnerability across the organization's systems",
      "Describe the complete IT asset inventory and ownership records",
      "Define the scope and content of the awareness training program",
      "Record which Annex A controls apply, are implemented, or are excluded",
    ],
    correctIndex: 3,
    explanation:
      "The SoA is the mandatory ISO 27001 document that justifies control selection — addressing all Annex A controls with a rationale for inclusion or exclusion. It is distinct from a vulnerability list, an asset inventory, or a training curriculum, though it may reference all three as supporting evidence.",
  },

  // CISM – D2 additional
  {
    id: "cism-d2-006",
    certId: "cism",
    domainId: "cism-d2",
    question: "Which risk response is most appropriate when a risk's cost to mitigate exceeds the value of the asset being protected?",
    options: [
      "Risk mitigation",
      "Risk avoidance",
      "Risk acceptance",
      "Risk transfer",
    ],
    correctIndex: 2,
    explanation:
      "When mitigation cost exceeds asset value or potential loss, accepting the risk is the economically rational decision. The acceptance must be formally documented and reviewed periodically in case circumstances change.",
  },
  {
    id: "cism-d2-007",
    certId: "cism",
    domainId: "cism-d2",
    question: "A vulnerability assessment reveals that 200 systems have a critical patch missing. The FIRST action the information security manager should take is:",
    options: [
      "Patch all 200 systems immediately without further analysis",
      "Report the finding to regulators before any internal review",
      "Take the affected systems offline pending a patch",
      "Weigh exploitability, criticality, and compensating controls first",
    ],
    correctIndex: 3,
    explanation:
      "Not all critical vulnerabilities carry equal risk in context. Before acting, the manager should evaluate whether the vulnerability is exploitable from the current threat landscape, whether compensating controls reduce impact, and whether all 200 systems are equally critical. Prioritization avoids wasted effort.",
  },

  // CISM – D3 additional
  {
    id: "cism-d3-006",
    certId: "cism",
    domainId: "cism-d3",
    question: "An information security program MOST effectively demonstrates value to the business by:",
    options: [
      "Reducing risk exposure while enabling the business securely",
      "Maximizing the number of security tools in use",
      "Reaching zero reported security incidents in a year",
      "Completing every planned security project on schedule",
    ],
    correctIndex: 0,
    explanation:
      "Zero incidents could reflect luck rather than effective security, and tool counts are meaningless without outcomes. Real value is demonstrated by reduced risk, quantified where possible, and by enabling the business to operate securely rather than blocking it.",
  },
  {
    id: "cism-d3-007",
    certId: "cism",
    domainId: "cism-d3",
    question: "When selecting security technologies for a program, the MOST important criterion is:",
    options: [
      "Being highly rated in analyst industry reports",
      "Having the single lowest total cost of ownership",
      "Support for the newest published industry standards",
      "Alignment with risk and fit with existing architecture",
    ],
    correctIndex: 3,
    explanation:
      "Technology should address specific, identified risks. An expensive tool that solves a low-priority risk is a poor investment, and the right tool also needs to fit the environment — poor integration reduces effectiveness and increases operational complexity.",
  },

  // CISM – D4 additional
  {
    id: "cism-d4-006",
    certId: "cism",
    domainId: "cism-d4",
    question: "During a major incident, the information security manager's PRIMARY role is to:",
    options: [
      "Coordinate the response and keep leadership informed",
      "Personally carry out the technical forensic analysis",
      "Negotiate face-to-face with the threat actor directly",
      "Immediately notify every single customer affected",
    ],
    correctIndex: 0,
    explanation:
      "The manager's role is coordination and escalation, not hands-on technical response. They ensure teams have authority and resources, manage communications, and brief executives on status and decisions needed.",
  },
  {
    id: "cism-d4-007",
    certId: "cism",
    domainId: "cism-d4",
    question: "Business continuity differs from disaster recovery in that business continuity:",
    options: [
      "It applies only to disasters of a natural origin",
      "It is limited strictly to recovering IT systems alone",
      "It can proceed without needing executive sponsorship",
      "It keeps critical operations running through any disruption",
    ],
    correctIndex: 3,
    explanation:
      "Business continuity is the broader, people-and-process-focused discipline that keeps critical operations running during any disruption, natural or otherwise. Disaster recovery is the narrower subset focused on restoring IT systems and data.",
  },

  // ── CGRC additional questions (round 4) ────────────────────────────────────
  {
    id: "cgrc-d1-005",
    certId: "cgrc",
    domainId: "cgrc-d1",
    question: "Which NIST RMF step is responsible for determining a system's security categorization?",
    options: [
      "Select",
      "Categorize",
      "Implement",
      "Assess",
    ],
    correctIndex: 1,
    explanation:
      "The Categorize step (Task C-1 in SP 800-60) uses FIPS 199 criteria to assign impact levels (Low/Moderate/High) for confidentiality, integrity, and availability. This categorization drives all downstream control selection and authorization decisions.",
  },
  {
    id: "cgrc-d1-006",
    certId: "cgrc",
    domainId: "cgrc-d1",
    question: "The Information System Owner (ISO) is primarily responsible for:",
    options: [
      "Signing the authorization to operate",
      "Conducting security control assessments",
      "Ensuring the system is operated, maintained, and disposed of in accordance with security requirements",
      "Developing the organizational risk management strategy",
    ],
    correctIndex: 2,
    explanation:
      "The ISO owns the mission/business process supported by the system and is responsible for its security throughout its life cycle. The AO signs the authorization to operate; the assessor conducts assessments; the CISO/risk executive develops the organizational strategy.",
  },
  {
    id: "cgrc-d2-005",
    certId: "cgrc",
    domainId: "cgrc-d2",
    question: "A System Security Plan (SSP) primarily serves to:",
    options: [
      "Document the results of penetration testing",
      "Provide an overview of security requirements and describe how controls are implemented",
      "List all known vulnerabilities and their remediation status",
      "Define the disaster recovery procedures for the system",
    ],
    correctIndex: 1,
    explanation:
      "Per NIST SP 800-18, the SSP describes the system environment, categorization, applicable controls, and how each control is implemented or planned. It is the central authoritative document for the authorization package — not a vulnerability list or pentest report.",
  },
  {
    id: "cgrc-d2-006",
    certId: "cgrc",
    domainId: "cgrc-d2",
    question: "When defining the authorization boundary of a system, what is the primary consideration?",
    options: [
      "The physical location of all servers",
      "The set of resources under the direct control of the authorizing official",
      "All systems that share the same network segment",
      "All commercial cloud services used by the organization",
    ],
    correctIndex: 1,
    explanation:
      "The authorization boundary defines what is included in and excluded from the ATO. It encompasses the system components—hardware, software, firmware, data, and services—that are under the control of and the responsibility of a specific authorizing official.",
  },
  {
    id: "cgrc-d3-004",
    certId: "cgrc",
    domainId: "cgrc-d3",
    question: "Tailoring controls in NIST SP 800-53 allows organizations to:",
    options: [
      "Remove all controls that are not mandated by law",
      "Add, modify, or remove controls based on operational and environmental factors",
      "Replace NIST controls with vendor-recommended defaults",
      "Apply only the minimum baseline without any customization",
    ],
    correctIndex: 1,
    explanation:
      "Tailoring includes applying scoping guidance, substituting equivalent controls, compensating for technically infeasible controls, and adding supplemental controls. Tailoring is documented in the SSP and must be approved by the AO — it does not mean simply removing controls.",
  },
  {
    id: "cgrc-d3-005",
    certId: "cgrc",
    domainId: "cgrc-d3",
    question: "Which NIST publication provides the control catalog used in federal information system authorizations?",
    options: [
      "NIST SP 800-37",
      "NIST SP 800-53",
      "NIST SP 800-60",
      "FIPS 199",
    ],
    correctIndex: 1,
    explanation:
      "NIST SP 800-53 (Security and Privacy Controls for Information Systems and Organizations) is the control catalog. SP 800-37 is the RMF guide, SP 800-60 maps information types to impact levels, and FIPS 199 defines the categorization standards.",
  },
  {
    id: "cgrc-d4-004",
    certId: "cgrc",
    domainId: "cgrc-d4",
    question: "Supply Chain Risk Management (SCRM) in the RMF context is primarily addressed in which control family?",
    options: [
      "Access Control (AC)",
      "Supply Chain Risk Management (SR)",
      "Program Management (PM)",
      "System and Services Acquisition (SA)",
    ],
    correctIndex: 1,
    explanation:
      "NIST SP 800-53 Rev 5 introduced the SR (Supply Chain Risk Management) control family specifically to address risks from suppliers, developers, and external service providers. SA controls address acquisition requirements but SR is the primary SCRM family.",
  },
  {
    id: "cgrc-d4-005",
    certId: "cgrc",
    domainId: "cgrc-d4",
    question: "Configuration management in the RMF ensures that:",
    options: [
      "Only approved and documented changes are made to an authorized system",
      "Users can install any software needed for their work",
      "Systems are backed up after every change",
      "Security controls are tested annually",
    ],
    correctIndex: 0,
    explanation:
      "Configuration management (CM controls in SP 800-53) maintains the security posture of an authorized system by controlling changes through a formal process — baseline configuration, change control board review, security impact analysis, and documentation. Unauthorized changes can invalidate the ATO.",
  },
  {
    id: "cgrc-d5-004",
    certId: "cgrc",
    domainId: "cgrc-d5",
    question: "A Plan of Action and Milestones (POA&M) documents:",
    options: [
      "The overall security architecture of the information system",
      "Known weaknesses and the planned corrective actions with target dates",
      "The results of penetration testing only",
      "Approved exceptions to security policy",
    ],
    correctIndex: 1,
    explanation:
      "A POA&M (per NIST SP 800-37 and OMB M-02-01) tracks security weaknesses identified during assessments, the resources required, milestones and completion dates, and responsible individuals. It is a living document maintained throughout the system life cycle.",
  },
  {
    id: "cgrc-d5-005",
    certId: "cgrc",
    domainId: "cgrc-d5",
    question: "During a security assessment, the assessor discovers an undocumented compensating control that effectively mitigates a HIGH-rated finding. The assessor should:",
    options: [
      "Ignore it since it is not in the SSP",
      "Document the compensating control and its effectiveness in the Security Assessment Report",
      "Immediately report it to law enforcement",
      "Treat the weakness as fully unmitigated",
    ],
    correctIndex: 1,
    explanation:
      "Assessors document the actual implementation state, including compensating controls, in the SAR. If a compensating control adequately addresses a weakness, that finding should reflect the reduced residual risk. The ISO then decides whether to formally add the compensating control to the SSP.",
  },
  {
    id: "cgrc-d6-004",
    certId: "cgrc",
    domainId: "cgrc-d6",
    question: "An Authorization to Operate (ATO) represents:",
    options: [
      "A guarantee that the system has no vulnerabilities",
      "An official management decision to accept the residual risk of operating a system",
      "Approval to develop a new information system",
      "A security clearance for system operators",
    ],
    correctIndex: 1,
    explanation:
      "An ATO is the authorizing official's explicit acceptance of the residual risk associated with operating the system under specified conditions. It is not a certification that the system is perfectly secure — risk always remains; the ATO documents that it has been reviewed and accepted.",
  },
  {
    id: "cgrc-d6-005",
    certId: "cgrc",
    domainId: "cgrc-d6",
    question: "Which authorization decision allows a system to operate despite outstanding security issues, provided they are actively tracked?",
    options: [
      "Authorization to Operate (ATO)",
      "Authorization to Operate under Conditions (ATOC)",
      "Denial of Authorization to Operate (DATO)",
      "Common Control Authorization",
    ],
    correctIndex: 1,
    explanation:
      "An ATOC (ATO with conditions) permits operation while requiring the ISO to remediate specified weaknesses by a defined date. If conditions are not met, the AO may rescind the authorization. A DATO denies operation entirely. A standard ATO has no outstanding conditions.",
  },
  {
    id: "cgrc-d7-004",
    certId: "cgrc",
    domainId: "cgrc-d7",
    question: "Continuous monitoring in the ISCM program primarily enables:",
    options: [
      "Replacing all periodic assessments",
      "Near real-time situational awareness of organizational security posture",
      "Automated remediation of all vulnerabilities",
      "Elimination of the need for an annual ATO review",
    ],
    correctIndex: 1,
    explanation:
      "The goal of Information Security Continuous Monitoring (ISCM), per NIST SP 800-137, is to maintain ongoing awareness of information security, vulnerabilities, and threats to support organizational risk management decisions. It complements — but does not replace — periodic formal assessments.",
  },
  {
    id: "cgrc-d7-005",
    certId: "cgrc",
    domainId: "cgrc-d7",
    question: "Security status reporting in ISCM should primarily be directed to:",
    options: [
      "Only the security operations center",
      "Authorizing officials and senior leadership to support risk decisions",
      "The system development team for remediation tracking",
      "External auditors on a quarterly basis",
    ],
    correctIndex: 1,
    explanation:
      "ISCM reports must reach decision-makers — AOs and senior leaders — so they can make informed risk acceptance or escalation decisions. Operational teams also receive reports, but the key audience for ISCM status is organizational leadership because they hold risk acceptance authority.",
  },

  // ── ISSMP additional questions (round 4) ───────────────────────────────────
  {
    id: "issmp-d1-005",
    certId: "issmp",
    domainId: "issmp-d1",
    question: "A security leader presenting to the board of directors should emphasize:",
    options: [
      "Technical vulnerability counts and patch levels",
      "Risk to business objectives expressed in business terms",
      "Detailed firewall rule changes from the past quarter",
      "Staff certification and training completion rates",
    ],
    correctIndex: 1,
    explanation:
      "Board-level communication must connect security to mission, strategy, and financial risk. Boards govern; they need risk exposure in dollar terms, regulatory exposure, and trend lines — not technical metrics. Patch counts and rule changes belong in operational reports.",
  },
  {
    id: "issmp-d1-006",
    certId: "issmp",
    domainId: "issmp-d1",
    question: "An information security steering committee's primary governance function is to:",
    options: [
      "Conduct daily security operations reviews",
      "Approve security policies, prioritize investments, and resolve cross-functional security issues",
      "Perform hands-on incident response",
      "Manage vendor security certifications",
    ],
    correctIndex: 1,
    explanation:
      "A steering committee is a governance body that provides strategic direction — approving policies, adjudicating resource conflicts, prioritizing security roadmap investments, and ensuring security aligns with business objectives. Day-to-day operations and incident response remain with the security operations function.",
  },
  {
    id: "issmp-d2-005",
    certId: "issmp",
    domainId: "issmp-d2",
    question: "Security requirements should ideally be incorporated into the SDLC:",
    options: [
      "Only during the testing phase",
      "Starting from the requirements and design phases",
      "After the system has gone into production",
      "Only when handling sensitive data",
    ],
    correctIndex: 1,
    explanation:
      "Shifting security left — integrating requirements, threat modeling, and security design during the requirements and design phases — is far cheaper than retrofitting controls in testing or post-production. ISSMP candidates must understand that 'bolt-on' security is both costly and less effective.",
  },
  {
    id: "issmp-d2-006",
    certId: "issmp",
    domainId: "issmp-d2",
    question: "Third-party software acquisition security practices should include:",
    options: [
      "Trusting vendor security assurances without independent verification",
      "Reviewing SBOMs, conducting security due diligence, and including security requirements in contracts",
      "Evaluating only price and feature set",
      "Requiring source code escrow for all commercial products",
    ],
    correctIndex: 1,
    explanation:
      "Due diligence for third-party software includes reviewing Software Bills of Materials (SBOMs), evaluating the vendor's security posture, contractually requiring security requirements, and reviewing vulnerability disclosure programs. Relying solely on vendor assurances creates unmanaged supply chain risk.",
  },
  {
    id: "issmp-d3-004",
    certId: "issmp",
    domainId: "issmp-d3",
    question: "Enterprise Risk Management (ERM) integrates information security risk by:",
    options: [
      "Treating IT risk as separate from business risk",
      "Expressing security risk in business terms within the organization's overall risk portfolio",
      "Delegating all risk decisions to the CISO",
      "Focusing exclusively on financial and compliance risks",
    ],
    correctIndex: 1,
    explanation:
      "ERM views risk holistically across the enterprise. Information security risk must be expressed in business impact terms — revenue loss, regulatory fines, reputational damage — so it can be compared and prioritized against operational, strategic, and financial risks in a unified risk register.",
  },
  {
    id: "issmp-d3-005",
    certId: "issmp",
    domainId: "issmp-d3",
    question: "When a risk treatment option of 'transfer' is chosen, the organization:",
    options: [
      "Eliminates the risk entirely",
      "Accepts the risk with no mitigating action",
      "Shifts the financial impact to a third party, such as through cyber insurance",
      "Reduces the risk to an acceptable level through controls",
    ],
    correctIndex: 2,
    explanation:
      "Risk transfer (or sharing) moves the financial consequence to another party — typically through insurance or contractual agreements. It does not eliminate the technical risk or the likelihood of an incident; it only changes who bears the financial burden if the risk materializes.",
  },
  {
    id: "issmp-d4-004",
    certId: "issmp",
    domainId: "issmp-d4",
    question: "Strategic threat intelligence is most useful for:",
    options: [
      "Blocking specific malicious IP addresses in real time",
      "Informing long-term security investment and capability decisions",
      "Automating firewall rule updates",
      "Identifying individual malware samples",
    ],
    correctIndex: 1,
    explanation:
      "Strategic intelligence covers actor intent, geopolitical context, and industry-wide trends. It helps executives and security leaders understand emerging threats to prioritize security programs and investments. Tactical/operational intelligence handles IOCs, IPs, and malware signatures.",
  },
  {
    id: "issmp-d4-005",
    certId: "issmp",
    domainId: "issmp-d4",
    question: "The primary purpose of a post-incident lessons-learned review is to:",
    options: [
      "Assign blame and disciplinary action to responsible parties",
      "Identify process gaps and improve detection, response, and recovery capabilities",
      "Create an official record for legal proceedings",
      "Satisfy regulatory mandatory reporting requirements",
    ],
    correctIndex: 1,
    explanation:
      "Post-incident reviews (also called after-action reviews) are blameless analyses focused on improving the organization's capabilities. The output is actionable improvements to playbooks, tools, training, and processes — not a blame assignment exercise.",
  },
  {
    id: "issmp-d5-005",
    certId: "issmp",
    domainId: "issmp-d5",
    question: "A Business Impact Analysis (BIA) produces which key outputs used in BC/DR planning?",
    options: [
      "Firewall rules and network diagrams",
      "Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) for critical processes",
      "Vendor contract terms and SLA details",
      "Employee emergency contact lists",
    ],
    correctIndex: 1,
    explanation:
      "The BIA quantifies the impact of disruptions over time and determines the maximum tolerable downtime for each critical process. RTOs and RPOs flow directly from BIA results and become the primary design targets for BC/DR strategies, alternate site selection, and backup frequency.",
  },
  {
    id: "issmp-d5-006",
    certId: "issmp",
    domainId: "issmp-d5",
    question: "Which BC/DR test provides the highest confidence that recovery procedures work in a real disaster?",
    options: [
      "Checklist review",
      "Tabletop exercise",
      "Parallel test",
      "Full interruption test",
    ],
    correctIndex: 3,
    explanation:
      "A full interruption test actually shuts down the primary environment and requires recovery from the alternate site — it is the most realistic and highest-confidence test. Its high risk and cost mean it is rarely performed; parallel and tabletop tests are more common in practice.",
  },
  {
    id: "issmp-d6-005",
    certId: "issmp",
    domainId: "issmp-d6",
    question: "Under the EU General Data Protection Regulation (GDPR), a personal data breach must be notified to the supervisory authority within:",
    options: [
      "7 days",
      "30 days",
      "72 hours",
      "14 business days",
    ],
    correctIndex: 2,
    explanation:
      "Article 33 of GDPR requires controllers to notify the competent supervisory authority within 72 hours of becoming aware of a personal data breach, where feasible. If notification cannot be made within 72 hours, the reasons for the delay must be provided alongside the notification.",
  },
  {
    id: "issmp-d6-006",
    certId: "issmp",
    domainId: "issmp-d6",
    question: "The (ISC)² Code of Ethics canon that takes highest precedence requires professionals to:",
    options: [
      "Always prioritize the employer's financial interests",
      "Protect society, the common good, necessary public trust and confidence, and the infrastructure",
      "Never disclose security vulnerabilities to competitors",
      "Follow only the laws of the jurisdiction where the employer is located",
    ],
    correctIndex: 1,
    explanation:
      "The first canon of the (ISC)² Code of Ethics — 'Protect society, the common good, necessary public trust and confidence, and the infrastructure' — takes precedence over all other canons. When employer interests conflict with public safety, professionals must prioritize the public interest.",
  },

  // ── CGRC additional questions (round 5) ────────────────────────────────────
  {
    id: "cgrc-d1-007",
    certId: "cgrc",
    domainId: "cgrc-d1",
    question: "The Prepare step added to NIST SP 800-37 Rev 2 is intended to:",
    options: [
      "Replace the Categorize and Select steps",
      "Establish the context and priorities for managing security and privacy risk organization-wide before system-level activities",
      "Document lessons learned after authorization",
      "Conduct the initial security control assessment",
    ],
    correctIndex: 1,
    explanation:
      "SP 800-37 Rev 2 added Prepare as a precursor to the traditional six RMF steps. Its purpose is to establish organizational roles, risk management strategy, mission priorities, and enterprise architecture context — ensuring organizations are ready to execute the RMF consistently across systems.",
  },
  {
    id: "cgrc-d2-007",
    certId: "cgrc",
    domainId: "cgrc-d2",
    question: "An Interconnection Security Agreement (ISA) is required when:",
    options: [
      "An organization purchases commercial off-the-shelf software",
      "Two organizations connect their IT systems to share data",
      "A system is classified at the Moderate impact level",
      "An ATO is granted for more than three years",
    ],
    correctIndex: 1,
    explanation:
      "An ISA documents the technical and security requirements for a connection between two organizations' IT systems. It defines data flows, security controls, responsibilities, and acceptable use. ISAs are distinct from Memoranda of Understanding (MOUs) and are required for federal system interconnections under OMB and FISMA guidance.",
  },
  {
    id: "cgrc-d3-006",
    certId: "cgrc",
    domainId: "cgrc-d3",
    question: "Control parameter values (assignment values) in NIST SP 800-53 are:",
    options: [
      "Fixed government-wide defaults that cannot be changed",
      "Organization- or system-defined values that complete a control's specification",
      "Values set by the control assessor during testing",
      "Automatically populated by security scanning tools",
    ],
    correctIndex: 1,
    explanation:
      "Many SP 800-53 controls include parameters that organizations must specify — for example, 'the organization reviews account activity every [Assignment: organization-defined time period].' Organizations define these values based on risk, mission needs, and regulations. Defined parameter values must be documented in the SSP.",
  },
  {
    id: "cgrc-d3-007",
    certId: "cgrc",
    domainId: "cgrc-d3",
    question: "Which baseline in NIST SP 800-53B corresponds to systems where the loss of confidentiality, integrity, or availability would have a severe or catastrophic effect on operations?",
    options: [
      "Low baseline",
      "Moderate baseline",
      "High baseline",
      "Critical baseline",
    ],
    correctIndex: 2,
    explanation:
      "The High impact baseline applies to systems where a breach would cause severe or catastrophic adverse effects on organizational operations, assets, individuals, or national security. High baseline includes the most controls and the most stringent parameter values. Low baseline is for limited adverse effects; Moderate for serious adverse effects.",
  },
  {
    id: "cgrc-d4-006",
    certId: "cgrc",
    domainId: "cgrc-d4",
    question: "A security baseline configuration establishes:",
    options: [
      "The minimum number of users allowed on a system",
      "A documented, approved set of settings that defines the secure state of a system",
      "The maximum classification level of data stored on a system",
      "The vendor's default factory settings",
    ],
    correctIndex: 1,
    explanation:
      "A security baseline configuration (or secure baseline) documents the approved, secure settings for an information system or device — hardened OS, disabled services, patching state, etc. It becomes the reference point for configuration management. Deviations from the baseline must go through the change control process.",
  },
  {
    id: "cgrc-d4-007",
    certId: "cgrc",
    domainId: "cgrc-d4",
    question: "When a security incident occurs on an authorized system, the ISO should first:",
    options: [
      "Immediately revoke the ATO",
      "Notify the AO and follow the incident response plan while assessing the impact on the authorization",
      "Shut down the system without notifying the AO",
      "Wait for the annual assessment to evaluate the impact",
    ],
    correctIndex: 1,
    explanation:
      "Incidents must be handled per the IR plan, and the AO must be notified because the incident may affect the residual risk accepted in the ATO. Depending on severity, the AO may impose conditions, require immediate remediation, or revoke the authorization — but the AO makes that determination, not the ISO unilaterally.",
  },
  {
    id: "cgrc-d5-006",
    certId: "cgrc",
    domainId: "cgrc-d5",
    question: "Ongoing assessments in an ISCM program differ from initial authorization assessments in that they:",
    options: [
      "Require a full retest of all security controls annually",
      "Focus on a subset of controls based on risk, volatility, and ISCM strategy rather than the entire control set",
      "Are conducted by the AO rather than an independent assessor",
      "Only apply to HIGH-impact systems",
    ],
    correctIndex: 1,
    explanation:
      "Ongoing assessments take a risk-based, continuous approach: high-volatility controls (patch status, account management, configurations) are checked frequently while more stable architectural controls may be assessed less often. This contrasts with an initial comprehensive assessment of all controls required for an authorization decision.",
  },
  {
    id: "cgrc-d5-007",
    certId: "cgrc",
    domainId: "cgrc-d5",
    question: "Vulnerability scanning as part of ISCM primarily serves to:",
    options: [
      "Replace the need for penetration testing",
      "Provide automated, ongoing identification of known vulnerabilities across system components",
      "Generate the final Security Assessment Report",
      "Validate that all SP 800-53 controls are implemented",
    ],
    correctIndex: 1,
    explanation:
      "Vulnerability scanning tools continuously identify known weaknesses (missing patches, misconfigurations, default credentials) in an automated, repeatable way. Scan results feed the POA&M and ISCM dashboard. They do not replace manual pen testing or formal assessments, which check broader control effectiveness.",
  },
  {
    id: "cgrc-d6-006",
    certId: "cgrc",
    domainId: "cgrc-d6",
    question: "An authorization package submitted to the AO must include at minimum:",
    options: [
      "SSP, SAR, and POA&M",
      "Only the SSP and penetration test report",
      "Risk Executive (Function) approval memo and POA&M only",
      "Vulnerability scan results and signed NDA",
    ],
    correctIndex: 0,
    explanation:
      "Per NIST SP 800-37, the core authorization package consists of: the System Security Plan (SSP), the Security Assessment Report (SAR), and the Plan of Action and Milestones (POA&M). The AO reviews these to make an authorization decision. Additional documents (e.g., privacy impact assessment) may be required depending on system type.",
  },
  {
    id: "cgrc-d6-007",
    certId: "cgrc",
    domainId: "cgrc-d6",
    question: "The primary purpose of risk acceptance in the authorization process is to:",
    options: [
      "Document that the system is free of vulnerabilities",
      "Formally acknowledge that identified residual risks are acceptable given the mission need",
      "Transfer liability for security incidents to the ISO",
      "Prove compliance with all applicable regulations",
    ],
    correctIndex: 1,
    explanation:
      "Authorization is a risk management decision, not a guarantee of security. The AO's signature on the ATO formally acknowledges the residual risk remaining after controls are applied, and accepts that risk on behalf of the organization for the stated period under the stated conditions. Risk never reaches zero; it is accepted at a tolerable level.",
  },
  {
    id: "cgrc-d7-006",
    certId: "cgrc",
    domainId: "cgrc-d7",
    question: "Key performance indicators (KPIs) in an ISCM program measure:",
    options: [
      "Only the number of incidents per quarter",
      "The effectiveness of security controls and the health of the security posture over time",
      "Employee satisfaction with security policies",
      "The total cost of the security program",
    ],
    correctIndex: 1,
    explanation:
      "ISCM KPIs quantify security posture health — e.g., % of systems with current patches, % of controls meeting defined thresholds, mean time to remediate high vulnerabilities. They enable trend analysis and inform risk decisions. NIST SP 800-137 emphasizes that metrics must be actionable and tied to organizational risk tolerance.",
  },
  {
    id: "cgrc-d7-007",
    certId: "cgrc",
    domainId: "cgrc-d7",
    question: "The frequency of security status reporting in an ISCM program should be based on:",
    options: [
      "A fixed government-wide standard of quarterly reports",
      "The volatility of the control, the risk tolerance of the AO, and organizational mission needs",
      "Whatever schedule the security assessor recommends",
      "Annual calendar aligned with the fiscal year",
    ],
    correctIndex: 1,
    explanation:
      "NIST SP 800-137 establishes that reporting frequency is risk-based: more volatile controls (e.g., patch status, account management) need higher-frequency reporting; architectural controls may require less frequent review. The ISCM strategy aligns frequency with what AOs and senior leaders need to make timely risk decisions.",
  },

  // ── ISSMP additional questions (round 5) ───────────────────────────────────
  {
    id: "issmp-d1-007",
    certId: "issmp",
    domainId: "issmp-d1",
    question: "The CISO's primary role in enterprise governance is to:",
    options: [
      "Own all security decisions and personally approve all firewall changes",
      "Advise senior leadership on security risk, align security strategy with business objectives, and ensure accountability",
      "Conduct hands-on incident response for all critical incidents",
      "Manage the help desk and end-user security training",
    ],
    correctIndex: 1,
    explanation:
      "The CISO is a strategic advisor and governance leader, not an operational manager for every security function. Their role is to translate security risk into business terms, influence investment priorities, and ensure the organization has accountable, well-governed security capabilities — delegating operational execution to security managers and analysts.",
  },
  {
    id: "issmp-d2-007",
    certId: "issmp",
    domainId: "issmp-d2",
    question: "When a software system reaches end-of-life (EOL), the security-driven response is to:",
    options: [
      "Continue using it indefinitely since vulnerabilities are unlikely",
      "Document the risk and plan an orderly migration to a supported alternative",
      "Immediately shut down the system without a migration plan",
      "Request the vendor to restart support for free",
    ],
    correctIndex: 1,
    explanation:
      "EOL software no longer receives security patches, creating unmitigated vulnerability exposure. Best practice is to: document the residual risk (POA&M or risk register), accept it as a time-limited exception, and execute a migration or replacement project within a defined timeline. Immediate shutdown without a migration plan disrupts business operations.",
  },
  {
    id: "issmp-d3-006",
    certId: "issmp",
    domainId: "issmp-d3",
    question: "Quantitative risk assessment differs from qualitative risk assessment in that quantitative analysis:",
    options: [
      "Relies entirely on expert opinion and subjective ratings",
      "Uses numerical values and financial figures to express risk in monetary terms",
      "Is faster and cheaper to perform",
      "Is only appropriate for low-impact systems",
    ],
    correctIndex: 1,
    explanation:
      "Quantitative risk analysis assigns numeric values — annual loss expectancy (ALE = ARO × SLE), asset value, and threat probability — to express risk in financial terms. This enables direct cost-benefit comparison of controls. Qualitative analysis uses relative scales (High/Medium/Low) and is faster but less precise for ROI decisions.",
  },
  {
    id: "issmp-d3-007",
    certId: "issmp",
    domainId: "issmp-d3",
    question: "Single Loss Expectancy (SLE) is calculated as:",
    options: [
      "Asset Value × Annual Rate of Occurrence",
      "Asset Value × Exposure Factor",
      "Annualized Loss Expectancy ÷ Annual Rate of Occurrence",
      "Threat Probability × Control Effectiveness",
    ],
    correctIndex: 1,
    explanation:
      "SLE = Asset Value (AV) × Exposure Factor (EF), where EF is the percentage of asset value lost in a single incident. For example, if a $1M server has a 40% EF for a specific threat, SLE = $400K. Annual Loss Expectancy (ALE) = SLE × Annual Rate of Occurrence (ARO).",
  },
  {
    id: "issmp-d4-006",
    certId: "issmp",
    domainId: "issmp-d4",
    question: "Chain of custody in digital forensics is critical because:",
    options: [
      "It speeds up the investigation timeline",
      "It ensures evidence integrity and admissibility by documenting who handled evidence, when, and how",
      "It allows investigators to modify evidence to make it more readable",
      "It replaces the need for technical analysis",
    ],
    correctIndex: 1,
    explanation:
      "Chain of custody documents every person who has handled a piece of evidence, the time and date of transfers, and the storage conditions. Breaks in chain of custody can render digital evidence inadmissible in court proceedings and undermine the credibility of the investigation. Maintaining it is a foundational forensic discipline.",
  },
  {
    id: "issmp-d4-007",
    certId: "issmp",
    domainId: "issmp-d4",
    question: "When responding to a suspected insider threat incident, what principle should guide evidence collection?",
    options: [
      "Collect all evidence as quickly as possible without authorization",
      "Follow legal authorization, preserve original evidence, and maintain chain of custody",
      "Only preserve evidence that definitively proves guilt",
      "Destroy potential evidence to protect the organization from liability",
    ],
    correctIndex: 1,
    explanation:
      "Even for internal investigations, legal authorization (employment agreements, policies, warrants if needed), proper evidence preservation (bit-for-bit copies, hashing), and chain of custody documentation are required. Improperly collected evidence may be inadmissible and could expose the organization to legal liability.",
  },
  {
    id: "issmp-d5-007",
    certId: "issmp",
    domainId: "issmp-d5",
    question: "Maximum Tolerable Downtime (MTD) defines:",
    options: [
      "The desired backup frequency for critical data",
      "The longest a business process can be disrupted before causing unacceptable harm to the organization",
      "The time required to restore from backup",
      "The financial cost of one hour of downtime",
    ],
    correctIndex: 1,
    explanation:
      "MTD (also called Maximum Tolerable Period of Disruption) is the threshold beyond which downtime causes irreversible harm — lost customers, regulatory violation, mission failure. The RTO (Recovery Time Objective) must be less than the MTD. If recovery takes longer than the MTD, the organization may not survive the disruption.",
  },
  {
    id: "issmp-d6-007",
    certId: "issmp",
    domainId: "issmp-d6",
    question: "The Computer Fraud and Abuse Act (CFAA) primarily addresses:",
    options: [
      "Physical theft of computer hardware",
      "Unauthorized access to protected computers and computer fraud",
      "Software licensing violations",
      "Employment disputes involving technology workers",
    ],
    correctIndex: 1,
    explanation:
      "The CFAA (18 U.S.C. § 1030) is the primary US federal law against computer crime. It criminalizes unauthorized access or exceeding authorized access to protected computers, accessing government computers without authorization, fraud using computers, and introducing malicious code. It applies to both external attackers and malicious insiders who exceed their access.",
  },

  // ── CISM additional questions (round 2) ────────────────────────────────────
  {
    id: "cism-d1-008",
    certId: "cism",
    domainId: "cism-d1",
    question: "Which of the following BEST demonstrates alignment between information security and business objectives?",
    options: [
      "Security risk metrics are mapped to business-impact indicators for leadership",
      "The security team selects controls using technical best practice alone",
      "The organization passes its scheduled annual compliance audit",
      "The CISO is included as an attendee at every IT project meeting",
    ],
    correctIndex: 0,
    explanation:
      "Alignment is demonstrated when security communicates in the business's own language — mapping risk to business-impact indicators for leadership decision-making. Selecting controls on technical merit alone, attending meetings, or passing a compliance audit can all happen without alignment ever being demonstrated.",
  },
  {
    id: "cism-d1-009",
    certId: "cism",
    domainId: "cism-d1",
    question: "A security manager discovers that a key business unit has deployed a cloud service without IT or security review. The BEST first action is to:",
    options: [
      "Shut the cloud service down immediately to stop unmanaged risk",
      "Escalate the business unit to senior management as a violation",
      "Assess the risk and engage the unit to understand its business need",
      "Leave it running since it is already in production use",
    ],
    correctIndex: 2,
    explanation:
      "Shadow IT usually reflects an unmet business need. The CISM approach assesses actual risk and partners with the business unit to address the underlying need. Shutting the service down disrupts operations and damages trust, escalating punitively before understanding context misses the root cause, and ignoring it leaves risk unmanaged.",
  },
  {
    id: "cism-d2-008",
    certId: "cism",
    domainId: "cism-d2",
    question: "Which statement BEST describes the relationship between threats, vulnerabilities, and risk?",
    options: [
      "Risk exists only once a threat is confirmed to be actively exploiting",
      "Risk arises when a threat could exploit a vulnerability, causing impact",
      "A vulnerability alone is risk, whether or not a threat exists",
      "Threats and vulnerabilities are simply interchangeable terms",
    ],
    correctIndex: 1,
    explanation:
      "Risk is the intersection of threat (the agent or event that could cause harm), vulnerability (a weakness that can be exploited), and impact (the consequence). A vulnerability without a plausible threat, or vice versa, typically yields lower risk. CISM candidates must understand this relationship to prioritize risk treatment effectively.",
  },
  {
    id: "cism-d2-009",
    certId: "cism",
    domainId: "cism-d2",
    question: "The PRIMARY purpose of a risk register in an information security program is to:",
    options: [
      "Store audit findings on behalf of the external auditor",
      "Centrally record identified risks, ratings, owners, and treatment",
      "Replace the need to ever perform a risk assessment",
      "Document completed security projects for the archive",
    ],
    correctIndex: 1,
    explanation:
      "A risk register is the authoritative record of an organization's identified information risks. It tracks descriptions, likelihood and impact ratings, risk owners, treatment decisions, and control status. It is a living document used by leadership for ongoing risk decision-making.",
  },
  {
    id: "cism-d3-008",
    certId: "cism",
    domainId: "cism-d3",
    question: "A newly appointed CISM is building an information security program from scratch. The BEST starting point is to:",
    options: [
      "Purchase a SIEM right away to start detecting threats",
      "Run a current-state assessment of risk profile and controls",
      "Hire additional security staff before any planning",
      "Pursue full ISO 27001 certification within year one",
    ],
    correctIndex: 1,
    explanation:
      "A current-state assessment (gap analysis) establishes a baseline: what assets exist, what risks are present, what controls are in place, and what gaps remain. Without this understanding, investments in tools or certifications may not address the highest-priority risks.",
  },
  {
    id: "cism-d3-009",
    certId: "cism",
    domainId: "cism-d3",
    question: "A security manager wants to demonstrate ROI on a new security control. The MOST credible approach is to:",
    options: [
      "Compare loss reduced by the control against its cost",
      "Point out that the control satisfies a compliance box",
      "Cite industry-average security spend as a share of IT budget",
      "Count how many alerts the control produces each month",
    ],
    correctIndex: 0,
    explanation:
      "Demonstrating ROI uses quantitative risk analysis: compare the annualized loss expectancy before the control versus after, and weigh that against the total cost of ownership. Compliance satisfaction and alert counts don't express financial value to business decision-makers.",
  },
  {
    id: "cism-d4-008",
    certId: "cism",
    domainId: "cism-d4",
    question: "The PRIMARY objective of an incident containment strategy is to:",
    options: [
      "Pin down the root cause the moment it's discovered",
      "Remove the attacker from every system straight away",
      "Limit spread while preserving evidence and operations",
      "Notify every affected customer as the very first step",
    ],
    correctIndex: 2,
    explanation:
      "Containment stops the incident from spreading further and limits damage, while preserving evidence for investigation. It is the phase after identification — eradication, full attacker removal, and customer notification all follow once the situation is contained.",
  },
  {
    id: "cism-d4-009",
    certId: "cism",
    domainId: "cism-d4",
    question: "Which metric BEST measures the effectiveness of an incident response program over time?",
    options: [
      "How many security tools the team has deployed",
      "Trends in Mean Time to Detect and Mean Time to Respond",
      "The total number of incidents reported that year",
      "The current headcount of the incident response team",
    ],
    correctIndex: 1,
    explanation:
      "MTTD and MTTR are the gold-standard incident response KPIs: falling MTTD means threats are caught faster, and falling MTTR means the organization responds more efficiently. Incident counts, tool counts, and team size are inputs or byproducts, not outcome measures.",
  },

  // ── CGRC additional questions (round 6) ────────────────────────────────────
  {
    id: "cgrc-d1-008",
    certId: "cgrc",
    domainId: "cgrc-d1",
    question: "The Risk Executive (Function) in NIST SP 800-37 is responsible for:",
    options: [
      "Conducting all security assessments personally",
      "Providing an organization-wide perspective on risk to help ensure consistent risk decisions across systems",
      "Signing each individual system's Authorization to Operate",
      "Maintaining the SSP for all organizational systems",
    ],
    correctIndex: 1,
    explanation:
      "The Risk Executive (Function) — often the CISO or a risk management board — views risk across the entire organization, not just individual systems. They ensure that risk decisions made by individual AOs are consistent with organizational risk tolerance and strategy. This prevents one system's acceptance of high risk from undermining the overall security posture.",
  },
  {
    id: "cgrc-d2-008",
    certId: "cgrc",
    domainId: "cgrc-d2",
    question: "Common controls in the RMF are security controls that:",
    options: [
      "Must be implemented identically on every information system",
      "Are inherited by multiple systems from a shared provider, reducing per-system implementation burden",
      "Are selected only for Moderate-impact systems",
      "Require a separate ATO for each organizational component",
    ],
    correctIndex: 1,
    explanation:
      "Common controls (e.g., physical security, incident response program, personnel security) are implemented once and inherited by multiple systems, reducing cost and duplication. The common control provider maintains its own authorization; inheriting systems reference the provider's controls in their SSP rather than implementing them independently.",
  },
  {
    id: "cgrc-d3-008",
    certId: "cgrc",
    domainId: "cgrc-d3",
    question: "Overlays in NIST SP 800-53 are used to:",
    options: [
      "Override all baseline controls for a specific system type",
      "Provide tailored guidance for specific technologies, environments, or communities of interest",
      "Replace the need for a security categorization",
      "Document deviations approved by the AO",
    ],
    correctIndex: 1,
    explanation:
      "Overlays extend or tailor SP 800-53 baselines for specific contexts — such as cloud computing, industrial control systems, mobile devices, or privacy programs. They add, remove, or modify controls and parameter values appropriate for that context. Overlays do not override categorization; they refine control selection after categorization.",
  },
  {
    id: "cgrc-d4-008",
    certId: "cgrc",
    domainId: "cgrc-d4",
    question: "A security impact analysis (SIA) is conducted when:",
    options: [
      "A new employee joins the organization",
      "A proposed change to an authorized system could affect its security posture",
      "The ATO is about to expire",
      "A vulnerability scanner identifies new findings",
    ],
    correctIndex: 1,
    explanation:
      "Before implementing any change to an authorized system, a security impact analysis (CM-4 in SP 800-53) determines whether the change could introduce new risks or affect existing controls. If the SIA reveals significant impact, the change may require AO notification, SSP updates, or even a re-authorization decision.",
  },
  {
    id: "cgrc-d5-008",
    certId: "cgrc",
    domainId: "cgrc-d5",
    question: "Which of the following BEST describes the purpose of an independent assessor in the RMF?",
    options: [
      "To approve the ATO on behalf of the AO",
      "To provide an objective evaluation of control implementation and effectiveness without conflicts of interest",
      "To write the SSP with the system owner",
      "To conduct penetration testing on behalf of the ISO",
    ],
    correctIndex: 1,
    explanation:
      "Independence is critical to a credible assessment. An independent assessor has no direct involvement in system development or operation, reducing bias. They evaluate whether controls are implemented correctly and operating as intended, producing a SAR the AO can rely on for the authorization decision. The AO — not the assessor — makes the authorization decision.",
  },
  {
    id: "cgrc-d6-008",
    certId: "cgrc",
    domainId: "cgrc-d6",
    question: "An Ongoing Authorization approach differs from a traditional periodic authorization in that:",
    options: [
      "It requires more frequent full assessments of all controls",
      "It uses continuous monitoring data to maintain an up-to-date risk picture, enabling faster authorization decisions",
      "It eliminates the need for an AO",
      "It can only be used for Low-impact systems",
    ],
    correctIndex: 1,
    explanation:
      "Ongoing Authorization (OA) leverages the ISCM program's real-time monitoring data to keep the AO continuously informed of the system's security posture. Instead of waiting for a fixed-period re-authorization, the AO reviews monitoring dashboards and only triggers a formal re-authorization when risk exceeds acceptable thresholds — making the authorization process more agile.",
  },
  {
    id: "cgrc-d7-008",
    certId: "cgrc",
    domainId: "cgrc-d7",
    question: "The ISCM strategy for an organization should be based on:",
    options: [
      "The most aggressive monitoring frequency technically achievable",
      "Organizational risk tolerance, mission priorities, and the cost-benefit of monitoring activities",
      "The vendor's default monitoring configuration",
      "A single government-wide monitoring standard applicable to all systems",
    ],
    correctIndex: 1,
    explanation:
      "An effective ISCM strategy is risk-based and mission-driven. SP 800-137 directs organizations to define monitoring frequencies, metrics, and reporting based on what is needed to maintain situational awareness aligned with organizational risk tolerance — not to monitor everything maximally, which is cost-prohibitive, but to monitor what matters most.",
  },

  // ── ISSMP additional questions (round 6) ───────────────────────────────────
  {
    id: "issmp-d1-008",
    certId: "issmp",
    domainId: "issmp-d1",
    question: "Effective security metrics reported to senior leadership should be:",
    options: [
      "As technically detailed as possible to demonstrate expertise",
      "Tied to business risk, actionable, and trended over time",
      "Focused on the number of vulnerabilities identified each month",
      "Limited to compliance pass/fail status",
    ],
    correctIndex: 1,
    explanation:
      "Leadership metrics must answer 'What is the risk to the business?' not 'What tools are running?' Good security metrics are business-relevant (revenue at risk, regulatory exposure), actionable (decision support), and trended (improving or worsening). Raw vulnerability counts without business context are operational data, not leadership metrics.",
  },
  {
    id: "issmp-d2-008",
    certId: "issmp",
    domainId: "issmp-d2",
    question: "DevSecOps integrates security into the software development pipeline by:",
    options: [
      "Requiring a separate security team to approve all releases",
      "Embedding security activities (SAST, DAST, dependency scanning) into CI/CD automation throughout development",
      "Conducting a single security review at the end of each sprint",
      "Replacing traditional code review with automated deployment",
    ],
    correctIndex: 1,
    explanation:
      "DevSecOps shifts security left by automating security testing within the CI/CD pipeline — Static Application Security Testing (SAST) on code check-in, Software Composition Analysis (SCA) on dependencies, Dynamic Application Security Testing (DAST) on deployed builds. Developers receive immediate feedback, catching vulnerabilities early when they are cheapest to fix.",
  },
  {
    id: "issmp-d3-008",
    certId: "issmp",
    domainId: "issmp-d3",
    question: "A risk that has been accepted with no compensating controls should be:",
    options: [
      "Removed from the risk register after acceptance",
      "Documented in the risk register with the acceptance rationale and monitored for changes in likelihood or impact",
      "Escalated to the board immediately",
      "Automatically escalated to a higher risk level in the next assessment",
    ],
    correctIndex: 1,
    explanation:
      "Accepted risks do not disappear — they remain on the risk register with documentation of who accepted them, why, and when the decision should be re-evaluated. Threat landscapes and business contexts change; a risk acceptable today may become unacceptable if the likelihood increases or the potential impact grows. Regular review of accepted risks is a best practice.",
  },
  {
    id: "issmp-d4-008",
    certId: "issmp",
    domainId: "issmp-d4",
    question: "Cyber threat intelligence sharing between organizations is primarily governed by:",
    options: [
      "Mandatory government regulations in all sectors",
      "Information Sharing and Analysis Centers (ISACs) and formal sharing agreements like TLP or MOU",
      "Social media platforms dedicated to security professionals",
      "Individual company security policies without external frameworks",
    ],
    correctIndex: 1,
    explanation:
      "ISACs (Financial Services ISAC, Health-ISAC, etc.) are sector-specific bodies that facilitate structured threat intelligence sharing. The Traffic Light Protocol (TLP) provides a standard classification for sharing sensitivity (TLP:RED = recipient only, TLP:GREEN = community, etc.). Formal agreements establish trust, liability protections, and handling requirements for shared intelligence.",
  },
  {
    id: "issmp-d5-008",
    certId: "issmp",
    domainId: "issmp-d5",
    question: "A warm site in a BC/DR context provides:",
    options: [
      "A fully operational duplicate environment ready to switch over immediately",
      "A partially equipped facility that requires some setup time before becoming operational",
      "Only power and network connectivity with no pre-installed systems",
      "Remote cloud access only, with no physical presence",
    ],
    correctIndex: 1,
    explanation:
      "A warm site has infrastructure and systems pre-installed but not fully operational — data may need to be restored and applications started. Recovery time is measured in hours to days. Hot sites are fully operational with near-zero RTO; cold sites (empty shell) require days to weeks of setup. Warm sites balance cost (cheaper than hot) with recovery speed (faster than cold).",
  },
  {
    id: "issmp-d6-008",
    certId: "issmp",
    domainId: "issmp-d6",
    question: "The principle of due care in information security means that:",
    options: [
      "Organizations must implement perfect security to avoid liability",
      "Organizations must take reasonable precautions expected of a prudent person to protect information assets",
      "Only regulated industries have security obligations",
      "Security is solely the responsibility of the technical team",
    ],
    correctIndex: 1,
    explanation:
      "Due care is the legal and ethical standard requiring organizations to exercise reasonable, prudent precautions to protect assets and reduce risk to stakeholders. It is not a standard of perfection — it asks what a reasonable, prudent organization would do. Failure to exercise due care can result in negligence liability if harm occurs.",
  },
  // ── CISM additional questions ────────────────────────────────────────────
  {
    id: "cism-d1-010",
    certId: "cism",
    domainId: "cism-d1",
    question: "A CISM is preparing a security budget request for the board. The MOST effective approach is to:",
    options: [
      "List every planned security tool alongside its cost",
      "Present technical vulnerability counts and threat statistics",
      "Compare the proposed budget to competitor security spending",
      "Frame the request around business risk reduced and loss avoided",
    ],
    correctIndex: 3,
    explanation:
      "Boards fund what they understand: risk reduced and loss avoided, expressed in business terms. Tool lists, vulnerability counts, and peer comparisons lack that business framing and are far less persuasive in a budget conversation with non-technical executives.",
  },
  {
    id: "cism-d1-011",
    certId: "cism",
    domainId: "cism-d1",
    question: "An employee requests a policy exception to use a personal cloud storage service for work files. The security manager should FIRST:",
    options: [
      "Deny the request outright since policy violations are never tolerated",
      "Assess the risk and document compensating controls if it is approved",
      "Approve the request right away to avoid slowing the employee down",
      "Refer the decision to legal counsel before doing anything else",
    ],
    correctIndex: 1,
    explanation:
      "Policy exceptions are a normal governance mechanism, not a binary allow/deny decision. The correct process assesses the risk introduced, applies compensating controls if the exception is approved, secures appropriate sign-off, and documents a review date. Flat denial impedes the business, and blanket approval undermines governance.",
  },
  {
    id: "cism-d1-012",
    certId: "cism",
    domainId: "cism-d1",
    question: "Separation of duties in information security governance PRIMARILY serves to:",
    options: [
      "Provide redundancy so operations continue if staff leave",
      "Distribute workload so approvals move through faster",
      "Prevent one individual from both committing and hiding fraud",
      "Satisfy regulatory checklists irrespective of actual risk",
    ],
    correctIndex: 2,
    explanation:
      "Separation of duties requires two or more people to complete a sensitive transaction so no single person can both commit and conceal fraud or error — for example, the person who approves access should not be the one who grants it. Redundancy, faster approvals, and checklist compliance may be side effects, but they are not the control's purpose.",
  },
  {
    id: "cism-d2-010",
    certId: "cism",
    domainId: "cism-d2",
    question: "Risk scenarios are MOST useful in information security risk management because they:",
    options: [
      "They give narrative context so leaders grasp how a risk could unfold",
      "They eliminate the need for any quantitative risk calculation",
      "They eliminate all subjectivity from the risk assessment process",
      "They are a document mandated specifically by ISO 27001",
    ],
    correctIndex: 0,
    explanation:
      "Risk scenarios translate abstract threats into concrete stories — for example, a ransomware attack encrypting the ERP system and halting order processing for days. This narrative approach helps non-technical executives grasp consequences and make informed decisions. Scenarios complement rather than replace quantitative analysis.",
  },
  {
    id: "cism-d2-011",
    certId: "cism",
    domainId: "cism-d2",
    question: "Control effectiveness testing is BEST described as:",
    options: [
      "Confirming controls are merely documented in policy text",
      "Determining how much a control costs to implement",
      "Confirming controls operate as designed and actually reduce risk",
      "Comparing a control to industry benchmark practices",
    ],
    correctIndex: 2,
    explanation:
      "A control can exist on paper but fail in practice. Effectiveness testing verifies that controls are functioning as intended — for example, confirming access reviews complete on schedule or patches are applied within SLA. Design adequacy and operating effectiveness are distinct, and both necessary, audit concepts.",
  },
  {
    id: "cism-d2-012",
    certId: "cism",
    domainId: "cism-d2",
    question: "An organization has formally accepted a risk. The security manager's ongoing responsibility is to:",
    options: [
      "Nothing further — acceptance closes out the risk permanently",
      "Keep monitoring and reassess if conditions materially change",
      "Transfer the risk to an insurer as soon as possible",
      "Add further controls regardless of any added cost",
    ],
    correctIndex: 1,
    explanation:
      "Risk acceptance is not permanent. The security manager must monitor accepted risks and reassess when conditions change — new threat actors, regulatory changes, increased asset value, or near-miss incidents may push a previously acceptable risk above tolerance. Accepted risks should carry review dates in the risk register.",
  },
  {
    id: "cism-d3-010",
    certId: "cism",
    domainId: "cism-d3",
    question: "A Capability Maturity Model (CMM) is used in information security programs to:",
    options: [
      "Calculating the financial return on a security investment",
      "Certifying the competence of individual professionals",
      "Determining exactly how many security staff are needed",
      "Assessing current process maturity to guide improvement",
    ],
    correctIndex: 3,
    explanation:
      "CMM-based models evaluate process maturity on a scale, typically Initial through Optimizing. They help organizations understand current security program capability, identify gaps, and build improvement roadmaps used in strategy and resource planning discussions.",
  },
  {
    id: "cism-d3-011",
    certId: "cism",
    domainId: "cism-d3",
    question: "When is the BEST time to integrate security requirements into a new application?",
    options: [
      "During acceptance testing, right before deployment",
      "Only after deployment, through a penetration test",
      "During the requirements and design phases of the SDLC",
      "Only once the first related security incident occurs",
    ],
    correctIndex: 2,
    explanation:
      "The 'shift-left' principle holds that security requirements identified during design cost a fraction of those found in testing or after release. This is the foundation of Secure SDLC and DevSecOps.",
  },
  {
    id: "cism-d3-012",
    certId: "cism",
    domainId: "cism-d3",
    question: "An organization's security awareness program shows high training completion rates, yet phishing incidents continue at the same rate. The MOST likely explanation is:",
    options: [
      "The attacks are simply too sophisticated to ever prevent",
      "The training isn't translating into real behavior change",
      "Employees are completing the training modules dishonestly",
      "Awareness programs can't meaningfully reduce phishing rates",
    ],
    correctIndex: 1,
    explanation:
      "Completion rates measure activity, not behavior change. A program with high completion but no reduction in phishing click rates has failed its purpose. Completion rate is a vanity metric; click rate, report rate, and incident trends are the real KPIs.",
  },
  {
    id: "cism-d4-010",
    certId: "cism",
    domainId: "cism-d4",
    question: "During a major data breach, the decision to publicly notify affected customers is PRIMARILY driven by:",
    options: [
      "The security manager's personal read on reputational risk",
      "Whatever the marketing team's communications plan says",
      "Legal and regulatory breach-notification requirements",
      "Whether the breach has already surfaced in media reports",
    ],
    correctIndex: 2,
    explanation:
      "Notification timelines and triggers are defined by law — GDPR requires supervisory-authority notification within 72 hours, and US state breach laws mandate notification on their own schedules. The security manager coordinates with legal counsel rather than leaving the call to marketing or reputational instinct.",
  },
  {
    id: "cism-d4-011",
    certId: "cism",
    domainId: "cism-d4",
    question: "Preserving forensic evidence during an incident investigation is MOST important for:",
    options: [
      "Keeping evidence admissible and supporting root-cause analysis",
      "Speeding up how quickly eradication can be completed",
      "Lowering the organization's cyber insurance premiums",
      "Meeting documentation requirements for the incident log",
    ],
    correctIndex: 0,
    explanation:
      "Forensic evidence preservation — chain of custody, write-blocked storage, cryptographic hashing — ensures integrity and admissibility in legal proceedings and supports thorough root-cause analysis, beyond any effect on insurance premiums or routine logging.",
  },
  {
    id: "cism-d4-012",
    certId: "cism",
    domainId: "cism-d4",
    question: "Which criterion is MOST important when classifying the severity of a security incident?",
    options: [
      "How technically sophisticated the attack appears to be",
      "How expensive the attacker's tooling happens to be",
      "Whether the actor was an insider or external party",
      "The actual or potential business impact and scope",
    ],
    correctIndex: 3,
    explanation:
      "Incident severity should be based on business impact — data sensitivity, systems and users affected, regulatory implications, and operational disruption. Technical sophistication, attacker tooling cost, and insider-versus-external origin are secondary factors.",
  },
  // ── CISSP additional questions ───────────────────────────────────────────
  {
    id: "cissp-d1-010",
    certId: "cissp",
    domainId: "cissp-d1",
    question: "A Privacy Impact Assessment (PIA) is MOST valuable because it:",
    options: [
      "Replaces the need for a risk assessment",
      "Identifies privacy risks before a system or process is implemented, when changes are least costly",
      "Is required by all global privacy regulations",
      "Documents post-implementation compliance",
    ],
    correctIndex: 1,
    explanation:
      "A PIA proactively identifies privacy risks associated with new systems or processes before deployment, when design changes cost far less than post-launch remediation. While many regulations encourage or require PIAs (GDPR calls them DPIAs), the primary value is the shift-left principle: find and fix privacy issues early.",
  },
  {
    id: "cissp-d1-011",
    certId: "cissp",
    domainId: "cissp-d1",
    question: "Security awareness training differs from security education in that training:",
    options: [
      "Prepares individuals for security certifications",
      "Focuses on changing day-to-day behavior for a specific audience",
      "Provides deep theoretical knowledge of security principles",
      "Is only required for technical staff",
    ],
    correctIndex: 1,
    explanation:
      "The NIST framework distinguishes training (skill-building for a role), education (deep conceptual understanding), and awareness (changing everyday behavior). Awareness programs target all users with role-appropriate behavioral nudges — e.g., 'don't click phishing links.' Training equips practitioners with job-specific skills. Education produces security professionals.",
  },
  {
    id: "cissp-d2-009",
    certId: "cissp",
    domainId: "cissp-d2",
    question: "A database view is used as a security control primarily to:",
    options: [
      "Speed up query performance",
      "Restrict access to specific rows or columns of a table, implementing need-to-know",
      "Encrypt sensitive data at rest",
      "Log all database queries for audit purposes",
    ],
    correctIndex: 1,
    explanation:
      "A database view presents a customized subset of the underlying data — specific columns, filtered rows, or computed values — without exposing the full table. This enforces need-to-know and least privilege at the data layer: a customer service rep might see order status but not credit card numbers, even though both reside in the same table.",
  },
  {
    id: "cissp-d3-009",
    certId: "cissp",
    domainId: "cissp-d3",
    question: "The reference monitor concept in security architecture ensures that:",
    options: [
      "All subject-to-object access requests are mediated, tamperproof, and auditable",
      "Subjects can communicate with each other without object access",
      "All network traffic passes through a single inspection point",
      "The operating system kernel is isolated from applications",
    ],
    correctIndex: 0,
    explanation:
      "A reference monitor is an abstract security model requiring that: (1) all access requests are mediated — no path exists that bypasses the monitor; (2) it is tamperproof — cannot be altered by unauthorized means; (3) it is small enough to be verified. The Security Kernel is the concrete implementation. It underpins mandatory access control in secure systems.",
  },
  {
    id: "cissp-d4-009",
    certId: "cissp",
    domainId: "cissp-d4",
    question: "Network Address Translation (NAT) provides limited security because it:",
    options: [
      "Encrypts all outbound traffic",
      "Hides internal IP addresses from the internet, reducing direct external exposure",
      "Prevents all inbound connection attempts",
      "Replaces the need for a firewall",
    ],
    correctIndex: 1,
    explanation:
      "NAT translates private internal addresses to one or more public IPs, incidentally hiding the internal topology from external observers. This is not real security — an attacker who exploits an outbound connection can still reach internal hosts. NAT does not replace firewalls, IDS/IPS, or other controls; it is a byproduct of IPv4 address conservation.",
  },
  {
    id: "cissp-d5-009",
    certId: "cissp",
    domainId: "cissp-d5",
    question: "Access recertification (access reviews) is PRIMARILY performed to:",
    options: [
      "Speed up the provisioning process",
      "Ensure users retain only the access they currently need, removing accumulated excess permissions",
      "Prevent password sharing between employees",
      "Satisfy multi-factor authentication requirements",
    ],
    correctIndex: 1,
    explanation:
      "Over time, users accumulate access through role changes, temporary projects, or poorly deprovisioned accounts — a phenomenon called privilege creep. Access recertification (periodic manager or owner review of who has access to what) identifies and removes excess permissions. It is a detective/corrective control for the IAM lifecycle.",
  },
  {
    id: "cissp-d6-009",
    certId: "cissp",
    domainId: "cissp-d6",
    question: "STRIDE is used in threat modeling to:",
    options: [
      "Categorize vulnerabilities by CVSS severity score",
      "Systematically identify potential threats to a system by type: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege",
      "Assign risk scores to assets",
      "Document the kill chain for known attack patterns",
    ],
    correctIndex: 1,
    explanation:
      "STRIDE (developed at Microsoft) is a threat taxonomy used during security design reviews. Each letter represents a threat category: Spoofing (authentication), Tampering (integrity), Repudiation (non-repudiation), Information Disclosure (confidentiality), Denial of Service (availability), Elevation of Privilege (authorization). Applying STRIDE to data flow diagrams helps surface security requirements early in the SDLC.",
  },
  {
    id: "cissp-d7-009",
    certId: "cissp",
    domainId: "cissp-d7",
    question: "A Security Orchestration, Automation and Response (SOAR) platform differs from a SIEM primarily because it:",
    options: [
      "Collects and correlates log data from multiple sources",
      "Automates response actions and orchestrates workflows across security tools",
      "Provides real-time threat intelligence feeds",
      "Replaces the need for human analysts",
    ],
    correctIndex: 1,
    explanation:
      "SIEM aggregates, correlates, and alerts on log data. SOAR adds automation: when a SIEM fires an alert, SOAR can automatically enrich it (threat intel lookup), contain it (block an IP), and route the case to analysts with a pre-populated playbook. SOAR reduces mean time to respond (MTTR) and analyst fatigue. The two tools are complementary, not interchangeable.",
  },
  {
    id: "cissp-d7-010",
    certId: "cissp",
    domainId: "cissp-d7",
    question: "In a cloud shared responsibility model, the cloud provider is ALWAYS responsible for:",
    options: [
      "Customer data encryption at rest",
      "Patching the underlying physical infrastructure and hypervisor",
      "User access management and identity configuration",
      "Application-level security controls",
    ],
    correctIndex: 1,
    explanation:
      "In all cloud service models (IaaS, PaaS, SaaS), the provider owns the physical infrastructure, data centers, network hardware, and hypervisor. Customer responsibilities shift depending on the model: IaaS customers manage OS and above; PaaS customers manage applications and data; SaaS customers manage only data and access configuration. Identity and encryption configuration are typically customer responsibilities in IaaS/PaaS.",
  },
  {
    id: "cissp-d8-009",
    certId: "cissp",
    domainId: "cissp-d8",
    question: "Input validation is the PRIMARY defense against injection attacks because it:",
    options: [
      "Encrypts user input before processing",
      "Ensures only expected, properly structured data reaches application logic and prevents malicious payloads from executing",
      "Logs all user input for forensic analysis",
      "Limits the number of requests a user can make",
    ],
    correctIndex: 1,
    explanation:
      "Injection attacks (SQL, command, LDAP) succeed when untrusted data is sent to an interpreter as part of a command. Input validation — accepting only expected formats, rejecting or encoding special characters — prevents malicious input from reaching interpreters. Parameterized queries (prepared statements) are the gold standard for SQL injection; combined with allowlist validation, they address the root cause rather than symptoms.",
  },
  // ── ISSMP additional questions ───────────────────────────────────────────
  {
    id: "issmp-d1-009",
    certId: "issmp",
    domainId: "issmp-d1",
    question: "A security leader presenting to the board should frame security investments PRIMARILY in terms of:",
    options: [
      "Technical severity scores and CVE counts",
      "Headcount required for the security team",
      "Business risk, regulatory exposure, and value protection",
      "Comparison to peer organizations' security budgets",
    ],
    correctIndex: 2,
    explanation:
      "Boards govern risk, not technology. Effective security leaders translate technical realities into business language: expected loss, regulatory penalties, reputational impact, and strategic risk. CVE counts and technical metrics lack the context boards need to make resource allocation decisions. Risk-based framing builds credibility and secures appropriate investment.",
  },
  {
    id: "issmp-d2-009",
    certId: "issmp",
    domainId: "issmp-d2",
    question: "Security by design in the SDLC primarily means:",
    options: [
      "Performing a penetration test before each release",
      "Incorporating security requirements, threat modeling, and security controls from the earliest stages of development",
      "Hiring security engineers to review code after it is written",
      "Using only open-source, community-audited frameworks",
    ],
    correctIndex: 1,
    explanation:
      "Security by design (shift-left security) integrates security activities throughout the SDLC: threat modeling in design, security requirements in specifications, secure coding standards in development, SAST/DAST in testing, and hardening in deployment. Fixing security issues early is orders of magnitude cheaper than post-release remediation and forms the basis of DevSecOps.",
  },
  {
    id: "issmp-d3-009",
    certId: "issmp",
    domainId: "issmp-d3",
    question: "A gap analysis in the context of security compliance management MOST directly helps an organization:",
    options: [
      "Identify specific differences between the current security posture and the requirements of a standard or regulation",
      "Calculate the ROI on security controls",
      "Prioritize threats based on likelihood",
      "Audit third-party suppliers",
    ],
    correctIndex: 0,
    explanation:
      "A gap analysis compares the current state against a target standard (ISO 27001, NIST CSF, PCI-DSS) to identify missing or insufficient controls. The output — a gap register with prioritized remediation actions — drives the compliance roadmap. It is a foundational activity before undertaking any compliance or certification effort.",
  },
  {
    id: "issmp-d4-009",
    certId: "issmp",
    domainId: "issmp-d4",
    question: "The PRIMARY difference between a tabletop exercise and a full interruption test is that:",
    options: [
      "A tabletop exercise is mandatory; a full interruption test is optional",
      "A tabletop exercise discusses plans verbally without activating systems, while a full interruption test actually switches operations to the recovery site",
      "Full interruption tests are only for IT systems",
      "Tabletop exercises require executive sponsorship; full interruption tests do not",
    ],
    correctIndex: 1,
    explanation:
      "BC/DR testing progresses from low-risk to high-risk: tabletop (discussion), walkthrough/desk check, simulation, parallel test (both sites active), full interruption (production cut over to DR). Full interruption testing is the most rigorous and carries real risk of service disruption if the DR site fails — it should be planned carefully and often reserved for critical infrastructure.",
  },
  {
    id: "issmp-d5-009",
    certId: "issmp",
    domainId: "issmp-d5",
    question: "The Computer Fraud and Abuse Act (CFAA) is significant for security professionals primarily because it:",
    options: [
      "Defines privacy rights for social media users",
      "Criminalizes unauthorized access to computers and is used to prosecute both external attackers and insider threats",
      "Requires mandatory breach notification within 72 hours",
      "Establishes minimum security standards for federal contractors",
    ],
    correctIndex: 1,
    explanation:
      "The CFAA (1986, amended multiple times) is the primary US federal law governing computer crimes. It criminalizes unauthorized access, exceeding authorized access, and related offenses. Practitioners need to understand CFAA when authorizing penetration tests (written authorization is critical), investigating insider threats, and cooperating with law enforcement. The 'exceeding authorized access' language has been debated in employee misuse cases.",
  },
  {
    id: "issmp-d6-009",
    certId: "issmp",
    domainId: "issmp-d6",
    question: "An information security program's strategic objectives should be PRIMARILY derived from:",
    options: [
      "The latest threat intelligence reports",
      "The organization's business strategy, risk appetite, and regulatory obligations",
      "Industry benchmark security spending percentages",
      "The CISO's personal security philosophy",
    ],
    correctIndex: 1,
    explanation:
      "Security programs exist to enable business objectives safely. Strategic objectives must be grounded in the organization's mission, business goals, risk tolerance, and compliance obligations — not just reactive threat response or external benchmarks. Alignment with business strategy ensures security investments protect what matters and security controls don't unnecessarily obstruct value creation.",
  },
  // ── CISM D1 additional (013–018) ─────────────────────────────────────────
  {
    id: "cism-d1-013",
    certId: "cism",
    domainId: "cism-d1",
    question: "Which statement BEST describes the difference between information security governance and information security management?",
    options: [
      "Governance sits with the security team; management sits with executives",
      "Governance directs and oversees; management executes that direction",
      "Governance concerns technical matters; management concerns administrative ones",
      "The two terms describe the same activity with no real distinction",
    ],
    correctIndex: 1,
    explanation:
      "Governance and management are complementary but distinct: governance (the Board and senior leadership) sets direction, approves risk appetite, and holds management accountable; management (the CISO and team) executes that direction through programs and controls. The split isn't about which team is involved or whether the work is 'technical,' and the two terms are never interchangeable — always ask whether an activity is directing or doing.",
  },
  {
    id: "cism-d1-014",
    certId: "cism",
    domainId: "cism-d1",
    question: "An organization's internal audit function identifies a significant control weakness in the security program. Who should internal audit report this finding to FIRST?",
    options: [
      "The CISO, so the security team can begin remediation right away",
      "The Board Audit Committee, to preserve independence from what's audited",
      "The CIO, because the weakness relates to IT systems overall",
      "The security steering committee, at its next scheduled meeting",
    ],
    correctIndex: 1,
    explanation:
      "Internal audit (the 3rd line of defense) must preserve independence to give objective assurance. Reporting straight to the CISO or CIO — the 2nd line functions being audited — undermines that independence; significant findings on the security program go to the Board Audit Committee or an equivalent independent governing body.",
  },
  {
    id: "cism-d1-015",
    certId: "cism",
    domainId: "cism-d1",
    question: "A KRI that measures the number of critical vulnerabilities unpatched beyond the SLA is MOST useful because it:",
    options: [
      "It tallies how many vulnerabilities were discovered this year",
      "It demonstrates compliance with PCI-DSS patching requirements",
      "It reflects how heavy the security team's current workload is",
      "It warns early that patch management may be failing before an incident",
    ],
    correctIndex: 3,
    explanation:
      "KRIs are forward-looking: a rising count of overdue critical patches signals that the patch-management control is degrading before it results in an incident, letting management intervene proactively. A simple vulnerability count, a compliance checkbox, or a workload measure are backward-looking and don't warn of anything.",
  },
  {
    id: "cism-d1-016",
    certId: "cism",
    domainId: "cism-d1",
    question: "The information security steering committee should PRIMARILY include which members?",
    options: [
      "The CISO and the immediate security team, exclusively",
      "Cross-functional leaders: CISO, legal, compliance, business units",
      "Only C-suite executives such as the CEO, CFO, and CTO",
      "The Board of Directors together with external auditors",
    ],
    correctIndex: 1,
    explanation:
      "The steering committee is a governance body ensuring security decisions reflect priorities from across the organization — CISO, legal, compliance, and business-unit leaders, not just the security team, only the C-suite, or the Board/audit function, which sit at a different governance level.",
  },
  {
    id: "cism-d1-017",
    certId: "cism",
    domainId: "cism-d1",
    question: "Which governance framework would be MOST appropriate for an organization seeking to align IT and security governance with enterprise governance objectives?",
    options: [
      "COBIT 2019 — it explicitly links IT governance to enterprise governance",
      "NIST SP 800-53 — it offers the most comprehensive control catalogue",
      "ISO 27001 — it carries international certification recognition",
      "PCI-DSS — it sets clear, specific compliance requirements",
    ],
    correctIndex: 0,
    explanation:
      "COBIT 2019, developed by ISACA, is purpose-built to link IT governance and management objectives to enterprise governance and business goals. NIST 800-53 is a control catalogue, ISO 27001 an ISMS certification standard, and PCI-DSS a payment-data compliance framework — each valuable, but none designed specifically as an enterprise-to-IT governance bridge.",
  },
  {
    id: "cism-d1-018",
    certId: "cism",
    domainId: "cism-d1",
    question: "When is a security policy considered effective from a governance perspective?",
    options: [
      "Once it has been drafted and formally approved by the CISO",
      "Once it satisfies whatever an external auditor asks for",
      "Once it is communicated, understood, enforced, and reviewed regularly",
      "Once it broadly matches the security policies of industry peers",
    ],
    correctIndex: 2,
    explanation:
      "A policy is effective only when it moves beyond paper approval: communicated to everyone who must comply, genuinely understood, enforced with real consequences, and periodically reviewed. Matching peer policies, an auditor's checklist, or CISO sign-off alone can all be true while the policy still has zero real-world effect.",
  },
  // ── CISM D2 additional (013–018) ─────────────────────────────────────────
  {
    id: "cism-d2-013",
    certId: "cism",
    domainId: "cism-d2",
    question: "An information security manager wants to communicate a newly identified risk to senior leadership. The MOST effective approach is to:",
    options: [
      "Present it as a business scenario with cost estimate and options",
      "Send over the raw technical vulnerability scan report",
      "Request an immediate budget increase for all findings",
      "Hold off escalating until the risk actually materializes",
    ],
    correctIndex: 0,
    explanation:
      "Senior leaders make decisions based on business impact, not technical severity scores. Risk scenarios translate technical risk into business language — estimated probability, financial exposure, and recommended treatment options — empowering leadership to make informed decisions. Raw scan reports don't provide the business context executives need.",
  },
  {
    id: "cism-d2-014",
    certId: "cism",
    domainId: "cism-d2",
    question: "A risk register is MOST valuable when it:",
    options: [
      "It contains every risk ever logged, regardless of status",
      "It was completed once during the first assessment and filed",
      "It stays a living document with current owners and status",
      "It is used only by the security team to track technical items",
    ],
    correctIndex: 2,
    explanation:
      "A risk register is only valuable if it reflects the current state of the organization's risk posture — actively maintained as risks are added, retired, reclassified, and updated. Each risk should have a named business owner, not a security-team owner. A stale register gives a false sense of control and misleads governance decisions.",
  },
  {
    id: "cism-d2-015",
    certId: "cism",
    domainId: "cism-d2",
    question: "Risk aggregation refers to the practice of:",
    options: [
      "Adding every risk score together for one total figure",
      "Seeing how acceptable risks can combine into one that isn't",
      "Transferring several risks under one insurance policy",
      "Grouping alike risks to simplify the risk register",
    ],
    correctIndex: 1,
    explanation:
      "Risk aggregation addresses the fact that multiple individually acceptable risks may combine into an unacceptable total exposure. For example, five systems each with a 'Low' breach risk may collectively represent a 'High' portfolio risk if they share the same vulnerability. Viewing risks both individually and in aggregate avoids blind spots created by silo-based assessment.",
  },
  {
    id: "cism-d2-016",
    certId: "cism",
    domainId: "cism-d2",
    question: "Before implementing a new security control, a security manager should FIRST:",
    options: [
      "Research the available vendors and compare pricing",
      "Check whether competitor firms use a similar control",
      "Implement it first and measure effectiveness afterward",
      "Confirm the control addresses a real risk at proportionate cost",
    ],
    correctIndex: 3,
    explanation:
      "Controls must be justified by risk assessment: identify the risk, quantify likelihood and impact, determine treatment, then select controls that address the risk at a cost proportionate to the reduction achieved. Implementing controls without a clear risk linkage wastes resources and may not address the most important risks.",
  },
  {
    id: "cism-d2-017",
    certId: "cism",
    domainId: "cism-d2",
    question: "An information security manager identifies a high-severity risk that exceeds the organization's risk tolerance. After mitigation, the residual risk is still above tolerance. The BEST next step is to:",
    options: [
      "Accept the leftover risk since controls were already applied",
      "Escalate to management for a decision — accept, avoid, or transfer",
      "Keep adding controls without regard to their cost",
      "Reclassify the risk as medium so it fits within tolerance",
    ],
    correctIndex: 1,
    explanation:
      "When residual risk exceeds tolerance after mitigation, the security manager cannot unilaterally accept it — that decision belongs to senior management or the Board. The manager's role is to escalate with a clear recommendation, documenting the residual risk, the options available, and their costs, so management can make an informed decision.",
  },
  {
    id: "cism-d2-018",
    certId: "cism",
    domainId: "cism-d2",
    question: "Which is MOST important when selecting a risk assessment methodology for an organization?",
    options: [
      "Whichever produces the most detailed technical report",
      "Whichever methodology the largest industry player uses",
      "The most complex quantitative model that's available",
      "One that fits the organization's appetite, culture, and needs",
    ],
    correctIndex: 3,
    explanation:
      "No single risk assessment methodology is universally best. An organization with mature financial modeling capability may benefit from a quantitative model like FAIR; a smaller organization may find qualitative heat-map approaches more practical. The key criterion is whether the methodology produces actionable outputs supporting the organization's risk decisions and governance needs.",
  },
  // ── CISM D3 additional (013–018) ─────────────────────────────────────────
  {
    id: "cism-d3-013",
    certId: "cism",
    domainId: "cism-d3",
    question: "A security manager is building a new information security program. After completing the risk assessment, the NEXT logical step is to:",
    options: [
      "Build a roadmap that sequences controls by risk priority",
      "Buy the latest security technology stack right away",
      "Hire extra security staff to manage the identified risks",
      "Brief the board and wait for sign-off on every action",
    ],
    correctIndex: 0,
    explanation:
      "After risk assessment, the next step is a roadmap — a multi-year plan sequencing control implementation from highest to lowest risk, balancing quick wins with long-term improvements. Technology purchases and staffing should flow from the roadmap, not precede it.",
  },
  {
    id: "cism-d3-014",
    certId: "cism",
    domainId: "cism-d3",
    question: "Which of the following BEST demonstrates a security program's value to the business?",
    options: [
      "The sheer number of security tools currently deployed",
      "The count of vulnerabilities that were found and closed",
      "Lower risk exposure, tied to metrics leadership cares about",
      "Full compliance with every applicable regulation in force",
    ],
    correctIndex: 2,
    explanation:
      "Security value is demonstrated through business outcomes, not activity metrics. The most compelling demonstration is reduced risk exposure and business-relevant metrics. Vulnerability counts and tool inventories are inputs; compliance is a floor, not a ceiling.",
  },
  {
    id: "cism-d3-015",
    certId: "cism",
    domainId: "cism-d3",
    question: "The PRIMARY purpose of a security architecture review in the SDLC is to:",
    options: [
      "Run a penetration test right before production release",
      "Confirm the development team finished its security training",
      "Check that the system meets the minimum compliance bar",
      "Fold security requirements into the design before coding starts",
    ],
    correctIndex: 3,
    explanation:
      "Security architecture reviews occur during the design phase of the SDLC, before code is written, to identify security requirements and design flaws while changes are cheapest to make. Finding the same issue post-deployment may require fundamental re-engineering.",
  },
  {
    id: "cism-d3-016",
    certId: "cism",
    domainId: "cism-d3",
    question: "An organization has a compensating control in place for a PCI-DSS requirement it cannot directly satisfy. To remain compliant, the organization MUST:",
    options: [
      "Simply remove that requirement from the assessment scope",
      "Document the control, show equivalence, and get it assessed by a QSA",
      "Request a formal waiver directly from the PCI Security Council",
      "Accept non-compliance for just that one requirement",
    ],
    correctIndex: 1,
    explanation:
      "PCI-DSS allows compensating controls when a legitimate constraint prevents direct implementation of a requirement. The compensating control must meet the intent of the original requirement, provide a similar level of defense, and be documented and validated by a Qualified Security Assessor.",
  },
  {
    id: "cism-d3-017",
    certId: "cism",
    domainId: "cism-d3",
    question: "Which action BEST reduces the risk of shadow IT (unauthorized technology use) in an organization?",
    options: [
      "Deploy DLP tooling to block unsanctioned cloud services",
      "Publish a list of approved and prohibited applications",
      "Learn business units' needs and offer secure alternatives",
      "Discipline employees found using unauthorized services",
    ],
    correctIndex: 2,
    explanation:
      "Shadow IT typically emerges when approved tools don't meet business needs. Technical blocking and punitive measures treat symptoms without addressing the root cause. Engaging business units and offering secure, functional alternatives builds a culture of partnership and reduces the motivation to circumvent controls.",
  },
  {
    id: "cism-d3-018",
    certId: "cism",
    domainId: "cism-d3",
    question: "A security manager is evaluating a new cloud service provider. After reviewing the vendor's SOC 2 Type II report, the MOST important next step is to:",
    options: [
      "Treat the report as complete assurance and move forward",
      "Ask for an ISO 27001 certificate as a substitute instead",
      "Run a full penetration test of the vendor's infrastructure",
      "Check the report's scope, exceptions, and fit to our concerns",
    ],
    correctIndex: 3,
    explanation:
      "A SOC 2 Type II report is valuable but not a blanket assurance. The security manager must verify the report period, the system boundaries covered, any exceptions noted by the auditor, and whether the tested controls address the organization's specific risk concerns.",
  },
  // ── CISM D4 additional (013–018) ─────────────────────────────────────────
  {
    id: "cism-d4-013",
    certId: "cism",
    domainId: "cism-d4",
    question: "During a ransomware incident, the FIRST action the incident response team should take after confirming the infection is to:",
    options: [
      "Wipe and rebuild the affected systems immediately",
      "Isolate the systems from the network, preserving evidence",
      "Pay the ransom to keep business disruption minimal",
      "Notify every customer immediately about the incident",
    ],
    correctIndex: 1,
    explanation:
      "Containment is the first active response priority: isolating affected systems prevents ransomware from encrypting additional files or spreading to backups, while preserving evidence for later analysis. Wiping systems first destroys that evidence, and ransom or notification decisions come later.",
  },
  {
    id: "cism-d4-014",
    certId: "cism",
    domainId: "cism-d4",
    question: "The incident response team composition should PRIMARILY include:",
    options: [
      "Cross-functional staff: technical, legal, comms, management",
      "Only security engineers and dedicated threat analysts",
      "External IR consultants only, to stay fully objective",
      "IT operations staff, since incidents are always technical",
    ],
    correctIndex: 0,
    explanation:
      "Incident response requires more than technical expertise. A mature IR team includes technical leads, legal counsel, communications, and management representation for escalation decisions — major incidents are business crises, not just technical events.",
  },
  {
    id: "cism-d4-015",
    certId: "cism",
    domainId: "cism-d4",
    question: "A tabletop exercise is MOST valuable for testing:",
    options: [
      "Whether backups actually restore correctly under load",
      "The technical capability of the security operations center",
      "How complete the plan is and how clear roles and comms are",
      "Whether staff actually follow security policy in real time",
    ],
    correctIndex: 2,
    explanation:
      "A tabletop exercise is a discussion-based simulation that excels at identifying gaps in the IR plan — missing roles, unclear escalation paths, untested communication channels — without the cost or risk of a full exercise. It does not test actual system recovery or technical capability; that requires a full-scale simulation.",
  },
  {
    id: "cism-d4-016",
    certId: "cism",
    domainId: "cism-d4",
    question: "When an incident requires law enforcement involvement, the security manager should FIRST:",
    options: [
      "Contact law enforcement right away and hand over evidence",
      "Wipe the systems to limit the organization's liability",
      "Hold off law enforcement until the internal probe concludes",
      "Consult legal counsel on obligations and evidence handling",
    ],
    correctIndex: 3,
    explanation:
      "Law enforcement involvement carries legal and operational implications. Legal counsel must be consulted first to clarify reporting obligations, ensure evidence is handled in a way that preserves admissibility, and protect privilege — premature evidence sharing can compromise the investigation.",
  },
  {
    id: "cism-d4-017",
    certId: "cism",
    domainId: "cism-d4",
    question: "The PRIMARY purpose of a post-incident review (lessons learned) is to:",
    options: [
      "Formally assign blame to those found responsible",
      "Find improvements to people, process, and technology",
      "Satisfy a specific regulatory audit requirement fully",
      "Provide supporting evidence for an insurance claim",
    ],
    correctIndex: 1,
    explanation:
      "Lessons learned is the mechanism for continuous improvement of the IR capability — a blameless process that identifies concrete improvements to people, process, and technology. Regulatory audits and insurance claims may consume its output, but they are not its purpose.",
  },
  {
    id: "cism-d4-018",
    certId: "cism",
    domainId: "cism-d4",
    question: "An organization experiences a data breach affecting 50,000 EU residents' personal data. Under GDPR, the FIRST notification obligation is to:",
    options: [
      "Notify all 50,000 individuals directly within 72 hours",
      "Notify the authority only if real financial harm results",
      "Notify the supervisory authority within 72 hours of awareness",
      "Notify both the authority and individuals at the same time",
    ],
    correctIndex: 2,
    explanation:
      "GDPR Article 33 requires notification to the supervisory authority within 72 hours of the controller becoming aware of a breach. Notification to affected individuals (Article 34) is required only when the breach is likely to result in high risk to their rights — not automatically or simultaneously in every case.",
  },
];
