export interface Criterion {
  id: number;
  name: string;
  shortName: string;
  description: string;
  completion: number;
  status: "Excellent" | "Good" | "In Progress" | "Needs Improvement" | "Poor";
  color: "blue" | "orange" | "emerald" | "violet" | "rose" | "teal" | "amber";
  icon: string;
  subCriteria: number;
  documents: number;
  pending: number;
}

export const criteria: Criterion[] = [
  {
    id: 1,
    name: "Vision, Mission & PEOs",
    shortName: "Vision & Mission",
    description: "Defines the institute's vision, mission and program educational objectives.",
    completion: 80,
    status: "Good",
    color: "blue",
    icon: "Target",
    subCriteria: 4,
    documents: 8,
    pending: 2
  },
  {
    id: 2,
    name: "Curriculum & Teaching Learning Process",
    shortName: "Curriculum",
    description: "Curriculum design, academic flexibility and teaching learning process.",
    completion: 65,
    status: "In Progress",
    color: "orange",
    icon: "BookOpen",
    subCriteria: 6,
    documents: 12,
    pending: 4
  },
  {
    id: 3,
    name: "Course Outcomes & Program Outcomes (CO-PO Mapping)",
    shortName: "CO-PO Mapping",
    description: "Establishes the mapping between course outcomes and program outcomes.",
    completion: 90,
    status: "Excellent",
    color: "emerald",
    icon: "GitBranch",
    subCriteria: 5,
    documents: 14,
    pending: 1
  },
  {
    id: 4,
    name: "Students' Performance",
    shortName: "Students' Performance",
    description: "Performance indicators related to students and their achievements.",
    completion: 70,
    status: "Good",
    color: "violet",
    icon: "TrendingUp",
    subCriteria: 6,
    documents: 10,
    pending: 3
  },
  {
    id: 5,
    name: "Faculty Contributions",
    shortName: "Faculty",
    description: "Faculty qualifications, publications, projects, FDPs and contributions.",
    completion: 60,
    status: "In Progress",
    color: "rose",
    icon: "Users",
    subCriteria: 6,
    documents: 9,
    pending: 5
  },
  {
    id: 6,
    name: "Facilities & Technical Support",
    shortName: "Facilities",
    description: "Infrastructure, laboratory facilities, library, ICT and other support services.",
    completion: 75,
    status: "Good",
    color: "teal",
    icon: "Building2",
    subCriteria: 5,
    documents: 16,
    pending: 2
  },
  {
    id: 7,
    name: "Continuous Improvement",
    shortName: "Continuous Improvement",
    description: "Continuous monitoring, feedback, action taken reports and improvements.",
    completion: 50,
    status: "In Progress",
    color: "amber",
    icon: "RefreshCw",
    subCriteria: 4,
    documents: 6,
    pending: 4
  }
];

export const criterionTabs: Record<number, string[]> = {
  1: ["Overview", "Vision Statement", "Mission Statement", "PEOs", "Stakeholder Surveys", "Documents", "History"],
  2: ["Overview", "Curriculum Structure", "Teaching Process", "Academic Calendar", "Assessment", "Documents", "History"],
  3: ["Overview", "CO Definition", "PO Mapping", "Attainment Analysis", "Heatmap", "Documents", "History"],
  4: ["Overview", "Result Analysis", "Placement", "Higher Studies", "Student Achievements", "Documents", "History"],
  5: [
    "Overview",
    "Faculty Profile",
    "Publications",
    "Research Projects",
    "FDPs / STTPs",
    "Consultancy",
    "Awards & Recognition",
    "Other Activities",
    "Documents",
    "History"
  ],
  6: ["Overview", "Laboratories", "Library", "ICT Facilities", "Technical Staff", "Documents", "History"],
  7: ["Overview", "Feedback Analysis", "Action Taken", "IQAC Reviews", "Improvement Plans", "Documents", "History"]
};
