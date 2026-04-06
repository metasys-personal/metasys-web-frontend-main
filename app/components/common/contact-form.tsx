'use client';

import { useState } from 'react';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

/* ---------------- MOCK CMS CONFIG ---------------- */
const CMS_SUCCESS_MESSAGE =
  'Thank you for contacting Metasys. Our team will respond shortly.';

/* ---------------- TYPES ---------------- */
interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  message: string;
  website: string; // honeypot
}

/* ---------------- COMPONENT ---------------- */
export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: '',
    website: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  /* ---------------- HELPERS ---------------- */
  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValid =
    form.name &&
    form.email &&
    isValidEmail(form.email) &&
    form.message;

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam protection
    if (form.website) return;

    if (!isValid) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields correctly.');
      return;
    }

    try {
      setLoading(true);
      setStatus('idle');

      // Mock API delay (rate limiting & backend simulation)
      await new Promise((res) => setTimeout(res, 1500));

      // Random error simulation
      const success = Math.random() > 0.15;
      if (!success) throw new Error('Mock failure');

      setStatus('success');

      // Reset form
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        message: '',
        website: '',
      });
    } catch {
      setStatus('error');
      setErrorMessage(
        'Something went wrong. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <>
      {/* SUCCESS / ERROR MESSAGE */}
      {status !== 'idle' && (
        <div
          className={`mb-6 flex items-center gap-3 p-4 rounded-md border ${
            status === 'success'
              ? 'border-green-500/40 bg-green-500/10 text-green-300'
              : 'border-red-500/40 bg-red-500/10 text-red-300'
          }`}
        >
          {status === 'success' ? (
            <CheckCircle size={18} />
          ) : (
            <XCircle size={18} />
          )}
          <span>
            {status === 'success'
              ? CMS_SUCCESS_MESSAGE
              : errorMessage}
          </span>
        </div>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field */}
        <input
          type="text"
          className="hidden"
          value={form.website}
          onChange={(e) => updateField('website', e.target.value)}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Name"
            required
            value={form.name}
            onChange={(v) => updateField('name', v)}
          />

          <Input
            label="Email"
            type="email"
            required
            value={form.email}
            onChange={(v) => updateField('email', v)}
          />

          <Input
            label="Phone"
            value={form.phone}
            onChange={(v) => updateField('phone', v)}
          />

          <Input
            label="Company"
            value={form.company}
            onChange={(v) => updateField('company', v)}
          />

          <Input
            label="Role"
            value={form.role}
            onChange={(v) => updateField('role', v)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            rows={6}
            value={form.message}
            onChange={(e) => updateField('message', e.target.value)}
            placeholder="How can we help you?"
            className="w-full border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/50 resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading && <Loader2 size={18} className="animate-spin" />}
          {loading ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </>
  );
}

/* ---------------- REUSABLE INPUT ---------------- */

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
        className="w-full border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/50"
      />
    </div>
  );
}
