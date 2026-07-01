import { ComponentType } from "react";
import CismThreeLinesOfDefense from "./CismThreeLinesOfDefense";
import CismPolicyHierarchy from "./CismPolicyHierarchy";
import CismRiskHeatMap from "./CismRiskHeatMap";
import CismRiskTreatment from "./CismRiskTreatment";
import CismControlMatrix from "./CismControlMatrix";
import CismProgramLifecycle from "./CismProgramLifecycle";
import CismIRLifecycle from "./CismIRLifecycle";
import CismIncidentSeverity from "./CismIncidentSeverity";

export const diagramRegistry: Record<string, ComponentType> = {
  "cism-three-lines-of-defense": CismThreeLinesOfDefense,
  "cism-policy-hierarchy": CismPolicyHierarchy,
  "cism-risk-heatmap": CismRiskHeatMap,
  "cism-risk-treatment": CismRiskTreatment,
  "cism-control-matrix": CismControlMatrix,
  "cism-program-lifecycle": CismProgramLifecycle,
  "cism-ir-lifecycle": CismIRLifecycle,
  "cism-incident-severity": CismIncidentSeverity,
};
