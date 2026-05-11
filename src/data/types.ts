export type SourceLabel =
  | "LinkedIn extract"
  | "SSU data"
  | "ResearchGate extract"
  | "Portfolio research extract";

export type ResearchDomain =
  | "Human Resource Management"
  | "Healthcare Systems"
  | "Sustainability and Climate"
  | "Digital Behavior and Technology"
  | "Science Communication";

export type PublicationType = "Article" | "Book" | "Book chapter" | "Conference paper" | "Volume entry" | "Science writing";

export interface Metric {
  label: string;
  value: number;
  suffix?: string;
  display?: string;
  description: string;
  source: SourceLabel;
}

export interface ProfileLink {
  label: string;
  href: string;
  source: SourceLabel;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
  source: SourceLabel;
}

export interface ExperienceRole {
  title: string;
  institution: string;
  location?: string;
  period: string;
  sortYear: number;
  summary: string;
  source: SourceLabel;
}

export interface Publication {
  title: string;
  venue: string;
  year: number;
  month?: string;
  type: PublicationType;
  domain: ResearchDomain;
  publisher?: string;
  doi?: string;
  link?: string;
  note?: string;
  source: SourceLabel;
}

export interface BookEntry {
  title: string;
  publisher: string;
  year: number;
  role: "Author" | "Co-author" | "Chapter contributor" | "Volume entry";
  isbn?: string;
  chapterTitle?: string;
  description: string;
  source: SourceLabel;
  link?: string;
}

export interface ResearchTheme {
  title: ResearchDomain;
  shortTitle: string;
  problem: string;
  approach: string;
  practice: string;
  source: SourceLabel;
}

export interface Award {
  name: string;
  year: string;
  context: string;
  significance: string;
  source: SourceLabel;
}

export interface Engagement {
  title: string;
  organizer: string;
  date: string;
  year?: number;
  category: "Conference presentation" | "FDP" | "Workshop" | "Talk or seminar";
  description: string;
  source: SourceLabel;
  link?: string;
}

export interface ScienceArticle {
  title: string;
  issueDate: string;
  year: number;
  topic: string;
  publicValue: string;
  source: SourceLabel;
}

export interface GalleryItem {
  title: string;
  caption: string;
  context: string;
  reference: string;
  domain: ResearchDomain;
  source: SourceLabel;
}
