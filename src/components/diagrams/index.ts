import { ComponentType } from "react";
import CismThreeLinesOfDefense from "./CismThreeLinesOfDefense";
import CismPolicyHierarchy from "./CismPolicyHierarchy";
import CismRiskHeatMap from "./CismRiskHeatMap";
import CismRiskTreatment from "./CismRiskTreatment";
import CismControlMatrix from "./CismControlMatrix";
import CismProgramLifecycle from "./CismProgramLifecycle";
import CismIRLifecycle from "./CismIRLifecycle";
import CismIncidentSeverity from "./CismIncidentSeverity";
import CisspBcpTimeline from "./CisspBcpTimeline";
import CisspDataClassification from "./CisspDataClassification";
import CisspSecurityModels from "./CisspSecurityModels";
import CisspOsiModel from "./CisspOsiModel";
import CisspAccessControlModels from "./CisspAccessControlModels";
import CisspPentestLifecycle from "./CisspPentestLifecycle";
import CisspIncidentResponse from "./CisspIncidentResponse";
import CisspSecureSdlc from "./CisspSecureSdlc";

export const diagramRegistry: Record<string, ComponentType> = {
  "cism-three-lines-of-defense": CismThreeLinesOfDefense,
  "cism-policy-hierarchy": CismPolicyHierarchy,
  "cism-risk-heatmap": CismRiskHeatMap,
  "cism-risk-treatment": CismRiskTreatment,
  "cism-control-matrix": CismControlMatrix,
  "cism-program-lifecycle": CismProgramLifecycle,
  "cism-ir-lifecycle": CismIRLifecycle,
  "cism-incident-severity": CismIncidentSeverity,
  "cissp-bcp-timeline": CisspBcpTimeline,
  "cissp-data-classification": CisspDataClassification,
  "cissp-security-models": CisspSecurityModels,
  "cissp-osi-model": CisspOsiModel,
  "cissp-access-control-models": CisspAccessControlModels,
  "cissp-pentest-lifecycle": CisspPentestLifecycle,
  "cissp-incident-response": CisspIncidentResponse,
  "cissp-secure-sdlc": CisspSecureSdlc,
};
