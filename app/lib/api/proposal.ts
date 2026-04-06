import { apiFetch } from './client';
import { FormState } from '@/app/types/proposal-form';

type ProposalPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  projectType: string;
  projectDescription: string;
  budgetRange?: string;
};

export function submitProposal(form: FormState) {
  // required fields guard (extra safety)
  if (
    !form.name ||
    !form.email ||
    !form.phone ||
    !form.company ||
    !form.industry ||
    !form.projectType ||
    !form.description
  ) {
    throw new Error('Missing required fields');
  }

  const payload: ProposalPayload = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    company: form.company,
    industry: form.industry,
    projectType: form.projectType,
    projectDescription: form.description,
  };

  if (form.budget) {
    payload.budgetRange = form.budget;
  }

  return apiFetch('/api/v1/request-proposal', {
    method: 'POST',
    body: payload,
  });
}
