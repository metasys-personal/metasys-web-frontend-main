const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  // throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined');
}

export type CareerFormPayload = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  linkedinProfile?: string;
  portfolioWebsite?: string;
  role:
    | "frontend"
    | "backend"
    | "uiux"
    | "devops"
    | "cybersecurity"
    | "ai engineer"
    | "data engineer"
    | "product manager";
  otherLinks?: string;
  yearOfExperience: string;
  resume: File;
  coverLetter?: File;
  otherFiles?: File;
};


export async function applyForCareer(data: CareerFormPayload) {
  const formData = new FormData();

  formData.append('firstName', data.firstName);
  formData.append('lastName', data.lastName);
  formData.append('email', data.email);
  formData.append('phone', data.phone);
  formData.append('role', data.role);
  formData.append('yearOfExperience', data.yearOfExperience);
  if (data.linkedinProfile) {
  formData.append('linkedinProfile', data.linkedinProfile);
}

  if (data.portfolioWebsite) {
  formData.append('portfolioWebsite', data.portfolioWebsite);
  }

  if (data.otherLinks) {
    formData.append('otherLinks', data.otherLinks);
  }

  formData.append('resume', data.resume);

  if (data.coverLetter) {
    formData.append('coverLetter', data.coverLetter);
  }

  if (data.otherFiles) {
    formData.append('otherFiles', data.otherFiles);
  }

  const res = await fetch(`${API_BASE_URL}/api/v1/careers/apply`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || 'Application failed');
  }

  return res.json();
}
