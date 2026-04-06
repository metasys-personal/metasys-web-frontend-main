'use client';

import NavbarNew from "@/app/components/navbar/navbar";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";

import { useState } from 'react';
import { applyForCareer } from '@/app/lib/api/careers';
import toast from "react-hot-toast";

type CareerRole =
  | "frontend"
  | "backend"
  | "uiux"
  | "devops"
  | "cybersecurity"
  | "ai engineer"
  | "data engineer"
  | "product manager";


export default function ApplyPage() {
  const [form, setForm] = useState<{
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    linkedinProfile?: string;
    portfolioWebsite?: string;
    role: CareerRole | '';
    otherLinks?: string;
    yearOfExperience: string;
  }>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    linkedinProfile: '',
    portfolioWebsite: '',
    role: '',
    otherLinks: '',
    yearOfExperience: '',
  });



  const [files, setFiles] = useState<{
    resume?: File;
    coverLetter?: File;
    otherFiles?: File;
  }>({});

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!files.resume) {
    toast.error('Resume is required.');
    return;
  }

  if (!form.role) {
    toast.error('Please select a role.');
    return;
  }

  try {
    setLoading(true);

    await applyForCareer({
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      linkedinProfile: form.linkedinProfile || undefined,
      portfolioWebsite: form.portfolioWebsite || undefined,
      role: form.role,
      otherLinks: form.otherLinks || undefined,
      yearOfExperience: form.yearOfExperience,
      resume: files.resume,
      coverLetter: files.coverLetter,
      otherFiles: files.otherFiles,
    });

    toast.success('Application submitted successfully.');

    // Reset form & files
    setForm({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      linkedinProfile: '',
      portfolioWebsite: '',
      role: '',
      otherLinks: '',
      yearOfExperience: '',
    });
    setFiles({});
  } catch {
    toast.error('Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
 };




  return (
    <>
      <NavbarNew />
      <main className="min-h-screen bg-[#191919] text-white px-2 lg:px-16 pt-30 pb-16">
        <Breadcrumb
          overrideSegments={[
            { name: "Careers", href: "/careers/search" },
            { name: "Apply", href: "/careers/apply" },
          ]}
        />
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3">
            Apply for this role
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Submit your application below. Our team will review and get back to you
            if there’s a fit.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto border border-white/10 rounded-lg p-4 lg:p-10 ">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                label="First name"
                placeholder="John"
                value={form.firstName}
                onChange={(v) => setForm({ ...form, firstName: v })}
              />

              <TextInput
                label="Last name"
                placeholder="Doe"
                value={form.lastName}
                onChange={(v) => setForm({ ...form, lastName: v })}
              />

            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                label="Phone number"
                placeholder="+234 801 234 5678"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
              />

              <TextInput
                label="Email address"
                placeholder="you@example.com"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                label="LinkedIn profile"
                placeholder="https://linkedin.com/in/..."
                value={form.linkedinProfile || ''}
                onChange={(v) => setForm({ ...form, linkedinProfile: v })}
              />

              <TextInput
                label="Portfolio / Website"
                placeholder="https://yourportfolio.com"
                value={form.portfolioWebsite || ''}
                onChange={(v) => setForm({ ...form, portfolioWebsite: v })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                label="Other Links"
                placeholder="https://github.com..."
                value={form.otherLinks || ''}
                onChange={(v) => setForm({ ...form, otherLinks: v })}
              />

              <TextInput
                label="Years of Experience"
                placeholder="2-4yrs"
                value={form.yearOfExperience}
                onChange={(v) => setForm({ ...form, yearOfExperience: v })}
              />
            </div>

            {/* Job Title */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Role applying for
              </label>
              <select
                value={form.role}
                onChange={(e) =>
                  setForm({ ...form, role: e.target.value as CareerRole })
                }
                className="input border w-full py-4 px-2 bg-[#191919] text-white rounded-sm border-white/20"
              >
                <option value="">Select role</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="uiux">UI/UX Designer</option>
                <option value="devops">DevOps</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="ai engineer">AI Engineer</option>
                <option value="data engineer">Data Engineer</option>
                <option value="product manager">Product Manager</option>
              </select>

            </div>

            {/* Files */}

            <FileInput
              label="Resume (required)"
              onChange={(file) => setFiles({ ...files, resume: file })}
            />

            <FileInput
              label="Cover letter (optional)"
              onChange={(file) => setFiles({ ...files, coverLetter: file })}
            />

            <FileInput
              label="Other files (optional)"
              onChange={(file) => setFiles({ ...files, otherFiles: file })}
            />

            {/* Submit */}
            <div className="pt-8">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-10 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting…' : 'Submit application'}
              </button>

            </div>
          </form>
        </div>
      </main>
    </>
  );
}

/* ---------- Reusable Inputs ---------- */

function TextInput({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm text-gray-300">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border border-white/20 w-full py-4 px-2 rounded-sm bg-[#191919]"
      />
    </div>
  );
}


function FileInput({
  label,
  onChange,
}: {
  label: string;
  onChange: (file: File) => void;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm text-gray-300">{label}</label>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            onChange(e.target.files[0]);
          }
        }}
        className="block w-full text-sm text-gray-400 border border-white/20 py-4 px-2 rounded-sm"
      />
    </div>
  );
}
