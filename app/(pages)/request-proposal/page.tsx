'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Breadcrumb from '@/app/components/ui/breadcrumb/breadcrumb';
import { FormState, projectTypes } from '@/app/types/proposal-form';
import NavbarNew from '@/app/components/navbar/navbar';

import { submitProposal } from '@/app/lib/api/proposal';
import toast from 'react-hot-toast';


/* ---------------- PAGE ---------------- */
export default function RequestProposalPage() {
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        budget: '',
        projectType: '',
        description: '',
        timeline: '',
        website: '',
    });

    const [loading, setLoading] = useState(false);

    /* ---------------- HELPERS ---------------- */
    const updateField = (field: keyof FormState, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const isValid =
        form.name &&
        form.email &&
        form.phone &&
        form.company &&
        form.industry &&
        form.projectType &&
        form.description;

    /* ---------------- SUBMIT ---------------- */
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();

    //     // Honeypot spam protection
    //     if (form.website) return;

    //     if (!isValid) {
    //         setToast({
    //             type: 'error',
    //             message: 'Please fill in all required fields.',
    //         });
    //         return;
    //     }

    //     try {
    //         setLoading(true);
    //         setToast(null);

    //         // Mock API delay
    //         await new Promise((res) => setTimeout(res, 1500));

    //         // Random success / error simulation
    //         const success = Math.random() > 0.2;

    //         if (!success) throw new Error('Mock failure');

    //         setToast({
    //             type: 'success',
    //             message: 'Your proposal request has been sent successfully.',
    //         });

    //         // Reset form
    //         setForm({
    //             name: '',
    //             email: '',
    //             phone: '',
    //             company: '',
    //             industry: '',
    //             budget: '',
    //             projectType: '',
    //             description: '',
    //             timeline: '',
    //             website: '',
    //         });
    //     } catch {
    //         setToast({
    //             type: 'error',
    //             message: 'Something went wrong. Please try again.',
    //         });
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.website) return; // honeypot

    if (!isValid) {
        toast.error('Please fill in all required fields.');
        return;
    }

    try {
        setLoading(true);

        await submitProposal(form);

        toast.success('Your proposal request has been sent successfully.');

        // Reset form
        setForm({
            name: '',
            email: '',
            phone: '',
            company: '',
            industry: '',
            budget: '',
            projectType: '',
            description: '',
            timeline: '',
            website: '',
        });
    } catch {
        toast.error('Something went wrong. Please try again.');
    } finally {
        setLoading(false);
    }
  };


    /* ---------------- UI ---------------- */
    return (
        <>
            <NavbarNew />
            <main className="min-h-screen bg-[#191919] text-white pt-28 pb-20 px-16">
                <Breadcrumb
                    overrideSegments={[

                        { name: "Request a Proposal", href: "/request-proposal" },
                    ]}
                />

                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">
                        Request a Proposal
                    </h1>
                    <p className="text-gray-400 mb-10 text-center">
                        Tell us about your project and we’ll get back to you shortly.
                    </p>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Honeypot */}
                        <input
                            type="text"
                            className="hidden"
                            value={form.website}
                            onChange={(e) => updateField('website', e.target.value)}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                            <Input label="Name" required value={form.name} onChange={(v) => updateField('name', v)} />
                            <Input label="Email" type="email" required value={form.email} onChange={(v) => updateField('email', v)} />
                            <Input label="Phone" required value={form.phone} onChange={(v) => updateField('phone', v)} />
                            <Input label="Company" required value={form.company} onChange={(v) => updateField('company', v)} />
                            <Input label="Industry" required value={form.industry} onChange={(v) => updateField('industry', v)} />

                            <Select
                                label="Project Type"
                                required
                                value={form.projectType}
                                onChange={(v) => updateField('projectType', v)}
                                options={projectTypes}
                            />
                            
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Project Description <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                rows={8}
                                value={form.description}
                                onChange={(e) => updateField('description', e.target.value)}
                                placeholder="Describe your project in detail (supports long submissions)"
                                className="w-full bg-[#191919] border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/50 resize-y"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading && <Loader2 className="animate-spin" size={18} />}
                            {loading ? 'Sending…' : 'Submit Request'}
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}

/* ---------------- REUSABLE INPUTS ---------------- */

function Input({
    label,
    value,
    onChange,
    type = 'text',
    required = false,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    type?: string;
    required?: boolean;
}) {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-[#191919] border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/50"
            />
        </div>
    );
}

function Select({
    label,
    value,
    onChange,
    options,
    required = false,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    options: string[];
    required?: boolean;
}) {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-[#191919] border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/50"
            >
                <option value="">Select an option</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
}