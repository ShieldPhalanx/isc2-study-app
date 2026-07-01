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
    options: ["NIST CSF", "COBIT", "ISO 27001", "ITIL"],
    correctIndex: 1,
    explanation:
      "COBIT (Control Objectives for IT) provides a framework for IT governance and management, aligning IT activities with business objectives. ISO 27001 is an information security management standard; ITIL covers IT service management.",
  },
  {
    id: "cism-d1-004",
    certId: "cism",
    domainId: "cism-d1",
    question: "An information security steering committee's PRIMARY purpose is to:",
    options: [
      "Perform technical security reviews of systems",
      "Provide cross-functional oversight, prioritize security investments, and ensure security aligns with business strategy",
      "Manage the security operations center",
      "Conduct employee security awareness training",
    ],
    correctIndex: 1,
    explanation:
      "The steering committee brings together business leaders, IT, legal, and security to govern the security program — making strategic investment decisions, reviewing risk posture, and championing security as a business enabler.",
  },
  {
    id: "cism-d1-005",
    certId: "cism",
    domainId: "cism-d1",
    question: "A security policy that is not enforced is MOST likely to result in:",
    options: [
      "Increased efficiency in operations",
      "A false sense of security and uncontrolled risk exposure",
      "Regulatory compliance",
      "Reduced administrative overhead",
    ],
    correctIndex: 1,
    explanation:
      "Unenforced policies create a gap between documented intent and actual practice. Employees may believe they are protected by policies that are not followed, while real vulnerabilities go unaddressed. Enforcement is what gives a policy security value.",
  },

  // CISM – D2: Information Security Risk Management (additional)
  {
    id: "cism-d2-002",
    certId: "cism",
    domainId: "cism-d2",
    question: "Inherent risk is best defined as:",
    options: [
      "Risk remaining after all controls are applied",
      "The level of risk that exists before any controls are implemented",
      "Risk that cannot be mitigated under any circumstances",
      "Risk transferred to a third party through insurance",
    ],
    correctIndex: 1,
    explanation:
      "Inherent risk is the raw, uncontrolled risk level. Residual risk is what remains after controls are applied. Understanding inherent risk helps prioritize where controls provide the most value.",
  },
  {
    id: "cism-d2-003",
    certId: "cism",
    domainId: "cism-d2",
    question: "Which risk treatment option involves completely discontinuing a risky activity?",
    options: ["Risk transfer", "Risk acceptance", "Risk avoidance", "Risk mitigation"],
    correctIndex: 2,
    explanation:
      "Risk avoidance eliminates the activity or condition that creates the risk entirely (e.g., deciding not to collect certain categories of sensitive data). It eliminates the risk but also eliminates the associated business opportunity.",
  },
  {
    id: "cism-d2-004",
    certId: "cism",
    domainId: "cism-d2",
    question: "Risk tolerance and risk appetite differ in that:",
    options: [
      "Risk appetite is the high-level strategic willingness to accept risk; risk tolerance is the acceptable deviation from that appetite in practice",
      "Risk tolerance is set by executives; risk appetite is set by the board",
      "Risk appetite applies to financial risk; risk tolerance applies to operational risk",
      "They are interchangeable terms with no meaningful distinction",
    ],
    correctIndex: 0,
    explanation:
      "Risk appetite is the overall amount and type of risk an organization is willing to accept in pursuit of its objectives. Risk tolerance is the acceptable variance from that appetite at the operational level — the practical limits.",
  },
  {
    id: "cism-d2-005",
    certId: "cism",
    domainId: "cism-d2",
    question: "A threat vector is BEST described as:",
    options: [
      "The financial impact of a security incident",
      "The path or method an attacker uses to gain unauthorized access to a system",
      "The probability that a vulnerability will be exploited",
      "The list of identified threats facing an organization",
    ],
    correctIndex: 1,
    explanation:
      "A threat vector is the attack path — how an adversary delivers a payload or reaches a target (e.g., phishing email, exposed RDP port, supply chain compromise). Understanding vectors helps prioritize defensive controls.",
  },

  // CISM – D3: Information Security Program (additional)
  {
    id: "cism-d3-003",
    certId: "cism",
    domainId: "cism-d3",
    question: "Security awareness training is MOST effective when it:",
    options: [
      "Is delivered once during employee onboarding",
      "Is role-specific, regularly updated, and includes practical exercises such as simulated phishing",
      "Covers all security policies in a single annual session",
      "Is delivered only to IT staff",
    ],
    correctIndex: 1,
    explanation:
      "Effective awareness programs are continuous, targeted to specific roles and risks, and reinforced through practical exercises. Simulated phishing, for example, measures real behavior change rather than just knowledge retention.",
  },
  {
    id: "cism-d3-004",
    certId: "cism",
    domainId: "cism-d3",
    question: "Which element is MOST important when establishing a security program's resource requirements?",
    options: [
      "The number of security certifications held by the team",
      "Alignment of resource requests with identified and quantified business risks",
      "Benchmarking against competitor security budgets",
      "The age and complexity of existing security tools",
    ],
    correctIndex: 1,
    explanation:
      "Resource requests grounded in risk data are far more persuasive to business leaders. Quantifying risk exposure (in financial terms where possible) directly ties security investment to business outcomes.",
  },
  {
    id: "cism-d3-005",
    certId: "cism",
    domainId: "cism-d3",
    question: "A third-party security assessment of a vendor is MOST critical when:",
    options: [
      "The vendor provides office supplies",
      "The vendor has access to or processes the organization's sensitive data",
      "The vendor is located in a different country",
      "The vendor is a public company",
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
      "The CISO's personal judgement",
      "Legal and regulatory breach notification requirements, typically triggered by defined thresholds",
      "The marketing department's communications strategy",
      "The organization's insurance carrier",
    ],
    correctIndex: 1,
    explanation:
      "Breach notification obligations are defined by laws such as GDPR (72 hours to regulator), US state laws, HIPAA, and others — triggered by specific data types and thresholds. Failing to comply can result in significant fines.",
  },
  {
    id: "cism-d4-004",
    certId: "cism",
    domainId: "cism-d4",
    question: "An incident response retainer with a third-party firm is MOST valuable because it:",
    options: [
      "Eliminates the need for an internal security team",
      "Pre-establishes a relationship and contract terms so expert help is immediately available during a crisis",
      "Guarantees the incident will be resolved within a defined timeframe",
      "Transfers all legal liability to the third party",
    ],
    correctIndex: 1,
    explanation:
      "During a breach, every hour matters. A retainer avoids contract negotiations under pressure and ensures legal/investigative terms are pre-agreed. The firm also gains familiarity with the organization's environment in advance.",
  },
  {
    id: "cism-d4-005",
    certId: "cism",
    domainId: "cism-d4",
    question: "Which incident response phase involves rebuilding systems, removing malware, and revoking compromised credentials?",
    options: ["Identification", "Containment", "Eradication", "Recovery"],
    correctIndex: 2,
    explanation:
      "Eradication removes all traces of the threat — malware, backdoors, unauthorized accounts. It must be thorough before recovery begins, or attackers may regain access through remnants left on restored systems.",
  },
];
