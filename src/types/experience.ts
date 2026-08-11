/** Experience entry for career timeline */
export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  highlights: string[];
  stack: string[];
  companyUrl?: string;
}
