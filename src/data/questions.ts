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
      "Implementing firewalls and intrusion detection systems",
      "The system by which an organization directs and controls information security",
      "Conducting annual penetration tests",
      "Training employees on phishing awareness",
    ],
    correctIndex: 1,
    explanation:
      "Information security governance is the overarching framework of leadership, accountability, and decision-making that ensures security supports business objectives.",
  },
  {
    id: "cism-d1-002",
    certId: "cism",
    domainId: "cism-d1",
    question: "An information security strategy should PRIMARILY be aligned with:",
    options: [
      "The latest NIST publications",
      "The IT department's roadmap",
      "Organizational business objectives",
      "Regulatory requirements only",
    ],
    correctIndex: 2,
    explanation:
      "Security strategy must enable and protect business objectives first; compliance and technology choices flow from that alignment.",
  },
  // CISM – D2: Information Security Risk Management
  {
    id: "cism-d2-001",
    certId: "cism",
    domainId: "cism-d2",
    question: "Which term describes the amount of risk an organization is willing to accept in pursuit of its objectives?",
    options: ["Risk threshold", "Risk appetite", "Risk tolerance", "Residual risk"],
    correctIndex: 1,
    explanation:
      "Risk appetite is the high-level statement of how much risk the organization will accept. Risk tolerance is the acceptable deviation from that appetite in practice.",
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
      "Select and deploy security technologies",
      "Hire additional security staff",
      "Understand the business context, objectives, and risk tolerance",
      "Conduct a penetration test",
    ],
    correctIndex: 2,
    explanation:
      "A security program must be grounded in business context. Without understanding organizational objectives and acceptable risk levels, technology and staffing decisions will be misaligned and difficult to justify.",
  },
  {
    id: "cism-d3-002",
    certId: "cism",
    domainId: "cism-d3",
    question: "Security metrics used to report program effectiveness to senior management should PRIMARILY demonstrate:",
    options: [
      "Technical vulnerability counts",
      "Number of security tools deployed",
      "Business risk reduction and alignment with organizational objectives",
      "Number of security policies in force",
    ],
    correctIndex: 2,
    explanation:
      "Executives care about business outcomes, not technical details. Metrics should translate security activities into business value — reduced risk exposure, avoided losses, and compliance posture.",
  },
  // CISM – D4: Incident Management
  {
    id: "cism-d4-001",
    certId: "cism",
    domainId: "cism-d4",
    question: "Which phase of incident response focuses on limiting the spread of an attack?",
    options: ["Identification", "Containment", "Eradication", "Recovery"],
    correctIndex: 1,
    explanation:
      "Containment stops an incident from spreading to additional systems before eradication (removal of the threat) and recovery (restoring services) begin.",
  },
  {
    id: "cism-d4-002",
    certId: "cism",
    domainId: "cism-d4",
    question: "A post-incident review is MOST valuable because it:",
    options: [
      "Assigns blame to responsible parties",
      "Satisfies regulatory requirements",
      "Identifies lessons learned to improve future response",
      "Documents the attack for law enforcement",
    ],
    correctIndex: 2,
    explanation:
      "The primary value of a post-incident review (lessons learned) is continuous improvement of the incident response capability.",
  },
];
