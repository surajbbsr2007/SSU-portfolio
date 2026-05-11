import { publications } from "@/data/publications";
import { researchThemes } from "@/data/researchThemes";

export const publicationsByYear = Array.from(
  publications.reduce((map, publication) => {
    map.set(publication.year, (map.get(publication.year) ?? 0) + 1);
    return map;
  }, new Map<number, number>())
)
  .map(([year, count]) => ({ year: String(year), publications: count }))
  .sort((a, b) => Number(a.year) - Number(b.year));

export const themeDistribution = researchThemes.map((theme) => ({
  name: theme.title,
  value: publications.filter((publication) => publication.domain === theme.title).length
}));

export const publicationMix = Array.from(
  publications.reduce((map, publication) => {
    map.set(publication.type, (map.get(publication.type) ?? 0) + 1);
    return map;
  }, new Map<string, number>())
).map(([name, value]) => ({ name, value }));

export const engagementTrend = [
  { year: "2018", engagements: 1 },
  { year: "2019", engagements: 5 },
  { year: "2020", engagements: 6 },
  { year: "2022", engagements: 1 },
  { year: "2025", engagements: 1 }
];

export const collaborationClusters = [
  { name: "Birla Global University", note: "Named in the source extract as a recurring collaboration context." },
  { name: "Sri Sri University", note: "Named in the source extract as a recurring collaboration context." },
  { name: "International conference partners", note: "Documented through conference contexts with EGADE and University of Ljubljana." }
];
