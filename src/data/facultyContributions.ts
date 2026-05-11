export const publicationBreakdown = [
  { name: "Scopus", value: 156, percent: "50.0%" },
  { name: "Web of Science", value: 82, percent: "26.3%" },
  { name: "UGC Care", value: 48, percent: "15.4%" },
  { name: "Other Indexed", value: 26, percent: "8.3%" }
];

export const publicationTrend = [
  { year: "2020-21", scopus: 98, wos: 46, ugc: 38, other: 20 },
  { year: "2021-22", scopus: 112, wos: 54, ugc: 41, other: 22 },
  { year: "2022-23", scopus: 124, wos: 63, ugc: 44, other: 23 },
  { year: "2023-24", scopus: 132, wos: 70, ugc: 46, other: 24 },
  { year: "2024-25", scopus: 156, wos: 82, ugc: 48, other: 26 }
];

export const researchProjects = [
  { name: "Government", value: 8, percent: "44.4%" },
  { name: "Industry Sponsored", value: 6, percent: "33.3%" },
  { name: "Institutional", value: 3, percent: "16.7%" },
  { name: "Consultancy", value: 1, percent: "5.6%" }
];

export const fdpSummary = [
  { name: "FDPs", value: 136, percent: "55.3%" },
  { name: "STTPs", value: 72, percent: "29.3%" },
  { name: "Workshops", value: 38, percent: "15.4%" }
];

export const topFaculty = [
  { name: "Dr. Rajesh Kumar", department: "CSE", publications: "18 / 9 / 4", projects: "2 / 1 / 0", fdps: 8, hIndex: 28 },
  { name: "Dr. Priya Sharma", department: "IT", publications: "16 / 8 / 3", projects: "1 / 2 / 0", fdps: 7, hIndex: 24 },
  { name: "Dr. S. K. Gupta", department: "CSE", publications: "14 / 7 / 5", projects: "2 / 1 / 1", fdps: 6, hIndex: 31 },
  { name: "Dr. Meera Iyer", department: "AI&DS", publications: "12 / 6 / 4", projects: "1 / 1 / 1", fdps: 5, hIndex: 22 },
  { name: "Dr. Arjun Reddy", department: "EEE", publications: "10 / 5 / 3", projects: "1 / 1 / 0", fdps: 5, hIndex: 19 }
];

export const facultyInsights = [
  "Scopus publications increased by 18% compared to last year.",
  "8 faculty members have h-index greater than 20.",
  "6 new industry sponsored projects initiated this year.",
  "Average FDPs attended per faculty is 3.6 this year."
];

export const criterionMetrics = {
  1: [
    ["Vision Reviews", "4", "Target"],
    ["Mission Alignment", "92%", "BadgeCheck"],
    ["PEO Statements", "6", "FileText"],
    ["Survey Responses", "486", "Users"],
    ["BOS Approvals", "3", "CheckCircle2"],
    ["Pending Evidence", "2", "Clock"]
  ],
  2: [
    ["Courses Reviewed", "126", "BookOpen"],
    ["Academic Flexibility", "68%", "Shuffle"],
    ["Teaching Plans", "94", "ClipboardCheck"],
    ["Course Files", "312", "FolderOpen"],
    ["Attainment Records", "87%", "TrendingUp"],
    ["Pending Checklists", "4", "Clock"]
  ],
  3: [
    ["Courses Mapped", "118", "GitBranch"],
    ["Average Attainment", "82%", "Activity"],
    ["PO Coverage", "12/12", "Target"],
    ["Weak Mappings", "9", "AlertTriangle"],
    ["Direct Attainment", "86%", "LineChart"],
    ["Indirect Surveys", "1,240", "Users"]
  ],
  4: [
    ["Total Students", "1240", "Users"],
    ["Pass Percentage", "92%", "GraduationCap"],
    ["Placement Percentage", "78%", "BriefcaseBusiness"],
    ["Higher Studies", "18%", "Landmark"],
    ["Average CGPA", "7.8", "BarChart3"],
    ["Companies Visited", "84", "Building2"]
  ],
  5: [
    ["Total Faculty", "68", "Users"],
    ["Faculty with Ph.D.", "52 (76.47%)", "GraduationCap"],
    ["Total Publications", "312", "FileText"],
    ["Scopus Publications", "156", "Database"],
    ["Research Projects", "18", "FlaskConical"],
    ["FDPs / STTPs", "246", "Award"]
  ],
  6: [
    ["Laboratories", "42", "FlaskConical"],
    ["Equipment Value", "₹18.4 Cr", "IndianRupee"],
    ["Library Titles", "48,620", "BookOpen"],
    ["ICT Nodes", "1,284", "Network"],
    ["Technical Staff", "36", "Users"],
    ["Maintenance Closure", "91%", "BadgeCheck"]
  ],
  7: [
    ["Feedback Cycles", "8", "RefreshCw"],
    ["Action Items", "64", "ListChecks"],
    ["Closed Actions", "51", "CheckCircle2"],
    ["IQAC Reviews", "12", "ClipboardCheck"],
    ["Improvement Plans", "18", "TrendingUp"],
    ["Pending Closure", "4", "Clock"]
  ]
} as const;
