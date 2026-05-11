import type { Metric, ProfileLink } from "@/data/types";

export const profile = {
  name: "Dr. Sharanika Dhal",
  initials: "SD",
  designation: "Assistant Professor in HR",
  faculty: "Faculty of Management Studies",
  institution: "Sri Sri University",
  location: "Bhubaneswar, Odisha, India",
  formerIdentity: ["Former Research Scholar at Birla Global University", "Former Assistant Professor at Marwadi University"],
  positioning:
    "An academician connecting human resource systems, healthcare performance, sustainability, digital commerce, and emerging technology.",
  heroStatement:
    "Her work studies how human competence, organizational systems, and evidence-based development shape institutions in healthcare, sustainability, and digital markets.",
  closingStatement:
    "Across academic, healthcare, and public science contexts, her scholarship remains grounded in human development, evidence, and public relevance.",
  lastUpdated: "May 5, 2026"
} as const;

export const verifiedLinks: ProfileLink[] = [
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Sharanika-Dhal-2",
    source: "Portfolio research extract"
  },
  {
    label: "Sri Sri University faculty page",
    href: "https://srisriuniversity.edu.in/sharanika-dhal/",
    source: "Portfolio research extract"
  }
];

export const heroMetrics: Metric[] = [
  {
    label: "ResearchGate reads",
    value: 4800,
    suffix: "+",
    display: "Nearly 5,000",
    description: "ResearchGate engagement is listed as over 4,800 reads and nearly 5,000 reads.",
    source: "ResearchGate extract"
  },
  {
    label: "Book and volume contributions",
    value: 5,
    description: "Verified author, co-author, and chapter or volume contributions from the source extracts.",
    source: "Portfolio research extract"
  },
  {
    label: "Conference presentations",
    value: 8,
    description: "Conference and seminar paper presentations listed in the SSU data extract.",
    source: "SSU data"
  },
  {
    label: "FDPs and workshops",
    value: 5,
    description: "Faculty development and workshop participation listed in the SSU data extract.",
    source: "SSU data"
  }
];
