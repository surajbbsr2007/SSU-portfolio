export type DocumentStatus = "Verified" | "Under Review" | "Pending";

export interface EvidenceDocument {
  id: number;
  fileName: string;
  criterion: string;
  criterionId: number;
  type: "PDF" | "XLSX" | "DOCX" | "ZIP" | "PNG";
  size: string;
  uploadedBy: string;
  date: string;
  status: DocumentStatus;
  version: string;
}

export const documents: EvidenceDocument[] = [
  { id: 1, fileName: "Vision_Mission_PEO_Approval_Minutes.pdf", criterion: "Criterion 1", criterionId: 1, type: "PDF", size: "2.4 MB", uploadedBy: "Dr. Meera Iyer", date: "10 May 2025", status: "Verified", version: "v3" },
  { id: 2, fileName: "Curriculum_Gap_Analysis_2024_25.xlsx", criterion: "Criterion 2", criterionId: 2, type: "XLSX", size: "860 KB", uploadedBy: "Dr. Rajesh Kumar", date: "09 May 2025", status: "Under Review", version: "v2" },
  { id: 3, fileName: "CO_PO_Attainment_CSE_Core_Courses.xlsx", criterion: "Criterion 3", criterionId: 3, type: "XLSX", size: "1.6 MB", uploadedBy: "Dr. Priya Sharma", date: "08 May 2025", status: "Pending", version: "v1" },
  { id: 4, fileName: "Placement_Offer_Letters_2024_25.zip", criterion: "Criterion 4", criterionId: 4, type: "ZIP", size: "88 MB", uploadedBy: "Dr. Neha Singh", date: "07 May 2025", status: "Under Review", version: "v4" },
  { id: 5, fileName: "Faculty_Publications_Scopus_Indexed.pdf", criterion: "Criterion 5", criterionId: 5, type: "PDF", size: "4.8 MB", uploadedBy: "Dr. S. K. Gupta", date: "06 May 2025", status: "Verified", version: "v2" },
  { id: 6, fileName: "Laboratory_Calibration_Certificates.pdf", criterion: "Criterion 6", criterionId: 6, type: "PDF", size: "7.3 MB", uploadedBy: "Dr. Anil Verma", date: "05 May 2025", status: "Pending", version: "v1" },
  { id: 7, fileName: "IQAC_Action_Taken_Report.docx", criterion: "Criterion 7", criterionId: 7, type: "DOCX", size: "540 KB", uploadedBy: "Dr. Kavita Nair", date: "04 May 2025", status: "Under Review", version: "v2" },
  { id: 8, fileName: "Stakeholder_Survey_Analysis.pdf", criterion: "Criterion 1", criterionId: 1, type: "PDF", size: "3.2 MB", uploadedBy: "Dr. Meera Iyer", date: "03 May 2025", status: "Verified", version: "v2" },
  { id: 9, fileName: "Course_File_Review_Checklists.zip", criterion: "Criterion 2", criterionId: 2, type: "ZIP", size: "24 MB", uploadedBy: "Dr. Rajesh Kumar", date: "02 May 2025", status: "Pending", version: "v1" },
  { id: 10, fileName: "PO_Attainment_Heatmap.png", criterion: "Criterion 3", criterionId: 3, type: "PNG", size: "1.1 MB", uploadedBy: "Dr. Priya Sharma", date: "01 May 2025", status: "Verified", version: "v5" },
  { id: 11, fileName: "Higher_Studies_Admission_Proofs.zip", criterion: "Criterion 4", criterionId: 4, type: "ZIP", size: "35 MB", uploadedBy: "Dr. Neha Singh", date: "30 Apr 2025", status: "Pending", version: "v1" },
  { id: 12, fileName: "FDP_STTP_Certificates_2024_25.zip", criterion: "Criterion 5", criterionId: 5, type: "ZIP", size: "76 MB", uploadedBy: "Dr. Arjun Reddy", date: "29 Apr 2025", status: "Under Review", version: "v2" },
  { id: 13, fileName: "Library_E_Resources_Subscriptions.pdf", criterion: "Criterion 6", criterionId: 6, type: "PDF", size: "2.7 MB", uploadedBy: "Dr. Vikram Joshi", date: "28 Apr 2025", status: "Verified", version: "v3" },
  { id: 14, fileName: "Continuous_Improvement_Register.xlsx", criterion: "Criterion 7", criterionId: 7, type: "XLSX", size: "900 KB", uploadedBy: "Dr. Kavita Nair", date: "27 Apr 2025", status: "Verified", version: "v3" },
  { id: 15, fileName: "PEO_Mapping_Board_Of_Studies.pdf", criterion: "Criterion 1", criterionId: 1, type: "PDF", size: "1.9 MB", uploadedBy: "Dr. Meera Iyer", date: "26 Apr 2025", status: "Under Review", version: "v1" },
  { id: 16, fileName: "Academic_Calendar_Addendum.docx", criterion: "Criterion 2", criterionId: 2, type: "DOCX", size: "430 KB", uploadedBy: "Dr. Sanjay Patel", date: "25 Apr 2025", status: "Pending", version: "v1" },
  { id: 17, fileName: "Student_Result_Analysis_5_Years.xlsx", criterion: "Criterion 4", criterionId: 4, type: "XLSX", size: "1.4 MB", uploadedBy: "Dr. Neha Singh", date: "24 Apr 2025", status: "Verified", version: "v4" },
  { id: 18, fileName: "Research_Project_MoUs.pdf", criterion: "Criterion 5", criterionId: 5, type: "PDF", size: "5.6 MB", uploadedBy: "Dr. S. K. Gupta", date: "23 Apr 2025", status: "Under Review", version: "v2" },
  { id: 19, fileName: "ICT_Asset_Inventory.xlsx", criterion: "Criterion 6", criterionId: 6, type: "XLSX", size: "1.0 MB", uploadedBy: "Dr. Vikram Joshi", date: "22 Apr 2025", status: "Pending", version: "v1" },
  { id: 20, fileName: "NBA_SAR_Draft_2024_25.docx", criterion: "All Criteria", criterionId: 0, type: "DOCX", size: "12.8 MB", uploadedBy: "Dr. Admin", date: "21 Apr 2025", status: "Under Review", version: "v6" }
];
