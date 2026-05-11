export const shapFeatures = [
  { feature: "Placement Rate", impact: 20 },
  { feature: "Faculty Publications", impact: 15 },
  { feature: "Infrastructure Quality", impact: 10 },
  { feature: "Industry Sponsored Projects", impact: 8 },
  { feature: "Data Quality", impact: 6 },
  { feature: "Student Performance", impact: -5 },
  { feature: "CO-PO Mapping Quality", impact: -10 },
  { feature: "Faculty Cadre Ratio", impact: -7 },
  { feature: "Stakeholder Feedback Closure", impact: -4 }
];

export const limeExplanation = [
  "The model predicts a Good accreditation outcome because the institute has strong placement performance, improving pass percentage, and a healthy document verification rate across five criteria.",
  "Faculty contribution signals are positive, particularly Scopus-indexed publications and active research projects. These factors offset moderate gaps in FDP evidence and faculty cadre documentation.",
  "The largest negative contribution comes from CO-PO mapping quality, where a few courses still show incomplete attainment evidence and weak mapping justification for PO8, PO10, and PO12.",
  "If placement increases by 5 percentage points and the pending faculty evidence is verified, the predicted score moves into the Excellent band with higher confidence."
];

export const whatIfCoefficients = {
  placement: 0.3,
  publications: 0.25,
  infrastructure: 0.2,
  performance: 0.25
};

export const aiRecommendations = [
  {
    priority: "P1",
    title: "Complete CO-PO evidence for low-attainment courses",
    description: "Upload attainment sheets and faculty justification notes for courses with weak mapping against PO8, PO10, and PO12.",
    impact: "+4.2 score points"
  },
  {
    priority: "P1",
    title: "Verify placement records for final-year students",
    description: "Reconcile offer letters from TCS, Infosys, Capgemini, and Persistent Systems with the central placement register.",
    impact: "+3.6 score points"
  },
  {
    priority: "P2",
    title: "Close faculty FDP evidence gaps",
    description: "Attach certificates for FDPs, STTPs, and workshops completed by CSE, ECE, and AI&DS faculty during 2024-25.",
    impact: "+2.4 score points"
  },
  {
    priority: "P2",
    title: "Update laboratory utilization logs",
    description: "Add weekly utilization summaries and maintenance records for high-value laboratories under Criterion 6.",
    impact: "+1.8 score points"
  },
  {
    priority: "P3",
    title: "Standardize stakeholder feedback closure notes",
    description: "Map action taken reports to IQAC meeting minutes and publish closure evidence for Criterion 7.",
    impact: "+1.3 score points"
  }
];
