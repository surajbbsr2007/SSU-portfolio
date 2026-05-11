export type UserRole = "Admin" | "Coordinator" | "Faculty" | "Auditor";

export const users = [
  { name: "Dr. Admin", email: "admin@institute.ac.in", role: "Admin" as UserRole, department: "Administration", lastActive: "8 min ago", status: "Active" },
  { name: "Dr. Rajesh Kumar", email: "rajesh.kumar@institute.ac.in", role: "Coordinator" as UserRole, department: "CSE", lastActive: "24 min ago", status: "Active" },
  { name: "Dr. Priya Sharma", email: "priya.sharma@institute.ac.in", role: "Coordinator" as UserRole, department: "IT", lastActive: "42 min ago", status: "Active" },
  { name: "Dr. Anil Verma", email: "anil.verma@institute.ac.in", role: "Faculty" as UserRole, department: "ME", lastActive: "2 hrs ago", status: "Active" },
  { name: "Dr. Neha Singh", email: "neha.singh@institute.ac.in", role: "Coordinator" as UserRole, department: "ECE", lastActive: "3 hrs ago", status: "Active" },
  { name: "Dr. S. K. Gupta", email: "sk.gupta@institute.ac.in", role: "Faculty" as UserRole, department: "CSE", lastActive: "5 hrs ago", status: "Active" },
  { name: "Dr. Meera Iyer", email: "meera.iyer@institute.ac.in", role: "Coordinator" as UserRole, department: "AI&DS", lastActive: "Yesterday", status: "Active" },
  { name: "Dr. Arjun Reddy", email: "arjun.reddy@institute.ac.in", role: "Faculty" as UserRole, department: "EEE", lastActive: "Yesterday", status: "Active" },
  { name: "Dr. Kavita Nair", email: "kavita.nair@institute.ac.in", role: "Coordinator" as UserRole, department: "Civil", lastActive: "2 days ago", status: "Active" },
  { name: "Dr. Vikram Joshi", email: "vikram.joshi@institute.ac.in", role: "Faculty" as UserRole, department: "ECE", lastActive: "3 days ago", status: "Invited" },
  { name: "Dr. Sanjay Patel", email: "sanjay.patel@institute.ac.in", role: "Faculty" as UserRole, department: "CE", lastActive: "4 days ago", status: "Active" },
  { name: "Prof. Ritu Malhotra", email: "ritu.malhotra@institute.ac.in", role: "Faculty" as UserRole, department: "IT", lastActive: "5 days ago", status: "Invited" },
  { name: "Mr. Amit Deshmukh", email: "amit.deshmukh@institute.ac.in", role: "Faculty" as UserRole, department: "Training & Placement", lastActive: "6 days ago", status: "Active" },
  { name: "Ms. Farah Khan", email: "farah.khan@institute.ac.in", role: "Auditor" as UserRole, department: "External Review", lastActive: "1 week ago", status: "Active" },
  { name: "Prof. Dinesh Rao", email: "dinesh.rao@institute.ac.in", role: "Auditor" as UserRole, department: "External Review", lastActive: "2 weeks ago", status: "Suspended" }
];

export const activityLog = [
  "Dr. Priya Sharma uploaded CO-PO attainment sheet",
  "Dr. Admin generated draft SAR Report",
  "Dr. Neha Singh verified placement evidence",
  "Dr. S. K. Gupta submitted faculty publication register",
  "Dr. Kavita Nair linked IQAC action taken report",
  "Dr. Rajesh Kumar updated teaching plan checklist",
  "Dr. Anil Verma uploaded lab maintenance evidence",
  "Dr. Meera Iyer edited PEO stakeholder mapping",
  "Dr. Arjun Reddy uploaded FDP certificates",
  "Dr. Vikram Joshi updated ICT asset inventory",
  "Ms. Farah Khan reviewed gap analysis report",
  "Dr. Admin invited Prof. Ritu Malhotra",
  "Dr. Sanjay Patel submitted academic calendar addendum",
  "Mr. Amit Deshmukh reconciled offer letters",
  "Dr. Priya Sharma marked attainment gap in progress",
  "Dr. Rajesh Kumar approved course file evidence",
  "Dr. S. K. Gupta added research project MoU",
  "Dr. Neha Singh uploaded higher studies proof",
  "Dr. Meera Iyer exported Criterion 1 summary",
  "Dr. Admin changed AI run frequency"
];
