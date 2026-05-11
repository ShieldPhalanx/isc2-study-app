export type Certification = {
  id: string;
  name: string;
  fullName: string;
  org: "ISC2" | "ISACA";
  color: string;
  domains: Domain[];
};

export type Domain = {
  id: string;
  name: string;
  weight: number; // exam weight percentage
};

export const certifications: Certification[] = [
  {
    id: "cissp",
    name: "CISSP",
    fullName: "Certified Information Systems Security Professional",
    org: "ISC2",
    color: "blue",
    domains: [
      { id: "cissp-d1", name: "Security and Risk Management", weight: 16 },
      { id: "cissp-d2", name: "Asset Security", weight: 10 },
      { id: "cissp-d3", name: "Security Architecture and Engineering", weight: 13 },
      { id: "cissp-d4", name: "Communication and Network Security", weight: 13 },
      { id: "cissp-d5", name: "Identity and Access Management (IAM)", weight: 13 },
      { id: "cissp-d6", name: "Security Assessment and Testing", weight: 12 },
      { id: "cissp-d7", name: "Security Operations", weight: 13 },
      { id: "cissp-d8", name: "Software Development Security", weight: 10 },
    ],
  },
  {
    id: "cgrc",
    name: "CGRC",
    fullName: "Certified in Governance, Risk and Compliance",
    org: "ISC2",
    color: "green",
    domains: [
      { id: "cgrc-d1", name: "Information Security Risk Management Program", weight: 16 },
      { id: "cgrc-d2", name: "Scope of the Information System", weight: 11 },
      { id: "cgrc-d3", name: "Selection and Approval of Security and Privacy Controls", weight: 15 },
      { id: "cgrc-d4", name: "Implementation of Security and Privacy Controls", weight: 16 },
      { id: "cgrc-d5", name: "Assessment/Auditing of Security and Privacy Controls", weight: 15 },
      { id: "cgrc-d6", name: "Authorization/Approval of Information System", weight: 10 },
      { id: "cgrc-d7", name: "Continuous Monitoring", weight: 17 },
    ],
  },
  {
    id: "issmp",
    name: "ISSMP",
    fullName: "Information Systems Security Management Professional",
    org: "ISC2",
    color: "purple",
    domains: [
      { id: "issmp-d1", name: "Leadership and Business Management", weight: 22 },
      { id: "issmp-d2", name: "Systems Lifecycle Management", weight: 19 },
      { id: "issmp-d3", name: "Risk Management", weight: 18 },
      { id: "issmp-d4", name: "Threat Intelligence and Incident Management", weight: 17 },
      { id: "issmp-d5", name: "Contingency Management", weight: 14 },
      { id: "issmp-d6", name: "Law, Ethics, and Security Compliance Management", weight: 10 },
    ],
  },
  {
    id: "cism",
    name: "CISM",
    fullName: "Certified Information Security Manager",
    org: "ISACA",
    color: "orange",
    domains: [
      { id: "cism-d1", name: "Information Security Governance", weight: 17 },
      { id: "cism-d2", name: "Information Security Risk Management", weight: 20 },
      { id: "cism-d3", name: "Information Security Program", weight: 33 },
      { id: "cism-d4", name: "Incident Management", weight: 30 },
    ],
  },
];
