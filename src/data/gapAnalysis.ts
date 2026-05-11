export type GapSeverity = "Critical" | "High" | "Medium" | "Low";
export type GapStatus = "Open" | "In Progress" | "Resolved";

export interface GapEntry {
  id: number;
  criterion: string;
  criterionId: number;
  subCriterion: string;
  issue: string;
  severity: GapSeverity;
  suggestedAction: string;
  owner: string;
  dueDate: string;
  status: GapStatus;
}

export const gapEntries: GapEntry[] = [
  {
    id: 1,
    criterion: "Criterion 3",
    criterionId: 3,
    subCriterion: "CO-PO Mapping",
    issue: "Attainment evidence missing for PO10 and PO12 in three core courses.",
    severity: "Critical",
    suggestedAction: "Upload attainment sheets and approved faculty mapping rationale.",
    owner: "Dr. Priya Sharma",
    dueDate: "15 May 2025",
    status: "Open"
  },
  {
    id: 2,
    criterion: "Criterion 5",
    criterionId: 5,
    subCriterion: "Faculty Cadre Ratio",
    issue: "Professor to Associate Professor ratio is below NBA expectation.",
    severity: "Critical",
    suggestedAction: "Attach recruitment plan and approved workload distribution.",
    owner: "Dr. S. K. Gupta",
    dueDate: "18 May 2025",
    status: "In Progress"
  },
  {
    id: 3,
    criterion: "Criterion 4",
    criterionId: 4,
    subCriterion: "Placement Records",
    issue: "Offer letters for 18 students are not matched with placement register.",
    severity: "Critical",
    suggestedAction: "Reconcile company offer letters with student ERP IDs.",
    owner: "Dr. Neha Singh",
    dueDate: "20 May 2025",
    status: "Open"
  },
  {
    id: 4,
    criterion: "Criterion 6",
    criterionId: 6,
    subCriterion: "Laboratory Maintenance",
    issue: "Calibration records missing for advanced manufacturing lab equipment.",
    severity: "Critical",
    suggestedAction: "Upload calibration certificates and maintenance logs.",
    owner: "Dr. Anil Verma",
    dueDate: "21 May 2025",
    status: "Open"
  },
  {
    id: 5,
    criterion: "Criterion 1",
    criterionId: 1,
    subCriterion: "Stakeholder Surveys",
    issue: "Alumni survey response count is below documented threshold.",
    severity: "High",
    suggestedAction: "Conduct additional alumni survey drive and attach analysis.",
    owner: "Dr. Meera Iyer",
    dueDate: "23 May 2025",
    status: "In Progress"
  },
  {
    id: 6,
    criterion: "Criterion 2",
    criterionId: 2,
    subCriterion: "Teaching Learning Process",
    issue: "Course file review checklist not uploaded for two departments.",
    severity: "High",
    suggestedAction: "Collect signed checklists from CSE and ECE coordinators.",
    owner: "Dr. Rajesh Kumar",
    dueDate: "25 May 2025",
    status: "Open"
  },
  {
    id: 7,
    criterion: "Criterion 7",
    criterionId: 7,
    subCriterion: "Continuous Improvement",
    issue: "Action taken report is not mapped to IQAC meeting minutes.",
    severity: "High",
    suggestedAction: "Link action items with dated IQAC minutes and closure proof.",
    owner: "Dr. Kavita Nair",
    dueDate: "27 May 2025",
    status: "Open"
  },
  {
    id: 8,
    criterion: "Criterion 5",
    criterionId: 5,
    subCriterion: "FDPs / STTPs",
    issue: "Certificates pending for 26 faculty development programs.",
    severity: "High",
    suggestedAction: "Upload signed certificates and event brochures.",
    owner: "Dr. Arjun Reddy",
    dueDate: "29 May 2025",
    status: "In Progress"
  },
  {
    id: 9,
    criterion: "Criterion 6",
    criterionId: 6,
    subCriterion: "Library Resources",
    issue: "Subscription proof for IEEE and Springer access is incomplete.",
    severity: "High",
    suggestedAction: "Attach vendor invoices and access activation letters.",
    owner: "Dr. Vikram Joshi",
    dueDate: "30 May 2025",
    status: "Open"
  },
  {
    id: 10,
    criterion: "Criterion 2",
    criterionId: 2,
    subCriterion: "Academic Calendar",
    issue: "Internal assessment dates differ between calendar and course files.",
    severity: "Medium",
    suggestedAction: "Publish revised calendar addendum approved by HoD.",
    owner: "Dr. Sanjay Patel",
    dueDate: "02 Jun 2025",
    status: "Open"
  },
  {
    id: 11,
    criterion: "Criterion 4",
    criterionId: 4,
    subCriterion: "Higher Studies",
    issue: "Admission letters missing for 9 students reporting higher studies.",
    severity: "Medium",
    suggestedAction: "Upload admission letters or university confirmation emails.",
    owner: "Dr. Neha Singh",
    dueDate: "04 Jun 2025",
    status: "In Progress"
  },
  {
    id: 12,
    criterion: "Criterion 1",
    criterionId: 1,
    subCriterion: "PEO Review",
    issue: "PEO review minutes need signed approval from Board of Studies.",
    severity: "Medium",
    suggestedAction: "Upload signed minutes and attendance sheet.",
    owner: "Dr. Meera Iyer",
    dueDate: "05 Jun 2025",
    status: "Open"
  },
  {
    id: 13,
    criterion: "Criterion 3",
    criterionId: 3,
    subCriterion: "Attainment Analysis",
    issue: "Indirect attainment survey summary lacks sample-size note.",
    severity: "Medium",
    suggestedAction: "Add survey methodology appendix with sample size.",
    owner: "Dr. Priya Sharma",
    dueDate: "07 Jun 2025",
    status: "Resolved"
  },
  {
    id: 14,
    criterion: "Criterion 5",
    criterionId: 5,
    subCriterion: "Research Projects",
    issue: "Industry sponsored project MoUs require finance office validation.",
    severity: "Medium",
    suggestedAction: "Attach validated MoU copies and INR grant receipts.",
    owner: "Dr. S. K. Gupta",
    dueDate: "08 Jun 2025",
    status: "In Progress"
  },
  {
    id: 15,
    criterion: "Criterion 7",
    criterionId: 7,
    subCriterion: "Feedback Closure",
    issue: "Student feedback action closure lacks before-after evidence.",
    severity: "Medium",
    suggestedAction: "Upload photographs, notices, and revised SOP excerpts.",
    owner: "Dr. Kavita Nair",
    dueDate: "10 Jun 2025",
    status: "Open"
  },
  {
    id: 16,
    criterion: "Criterion 6",
    criterionId: 6,
    subCriterion: "ICT Facilities",
    issue: "Wi-Fi access point inventory has two unverified entries.",
    severity: "Medium",
    suggestedAction: "Verify asset tags and update ICT inventory register.",
    owner: "Dr. Vikram Joshi",
    dueDate: "12 Jun 2025",
    status: "Resolved"
  }
];
