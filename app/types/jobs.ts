export interface Job {
  id: string;
  title: string;
  location: string;
  jobType: string;
  level: string;
  description: string;
  areaOfInterest: string;

  skillsRequired?: string;
  designation?: string;
  qualifications?: string;
  experienceRange?: string;
  aboutCompany?: string;
  responsibilities?: string;
  additionalInformation?: string;
}

export interface AreaOfInterest {
  name: string;
  count: number;
}

export type FiltersState = {
  // location: string;
  jobTypes: string[];
  levels: string[];
  areas: string[];
};
