export interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  budget: string;
  projectType: string;
  description: string;
  timeline: string;
  website: string; // honeypot
}

export const budgetOptions = [
  '$5k – $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k+',
];

export const projectTypes = [
  'Consulting',
  'Custom Software Development',
  'Cloud Migration',
  'Security Assessment',
  'System Integration',
];

export const timelines = [
  'Immediately',
  '1–3 months',
  '3–6 months',
  '6+ months',
];