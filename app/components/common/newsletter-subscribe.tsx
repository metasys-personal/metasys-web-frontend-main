'use client';

import { useState, ChangeEvent, JSX } from 'react';
import { Loader2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { subscribeNewsletter } from '@/app/lib/api/newsletter';

type ApiError = {
  message?: string;
};

function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error
  );
}


function getErrorMessage(error: unknown): string {
  if (isApiError(error)) return error.message || 'Something went wrong';
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return 'Something went wrong';
}

export default function NewsletterSubscribe(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const isValidEmail = (value: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubscribe = async (): Promise<void> => {
    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      await subscribeNewsletter({ email });

      toast.success('You’ve been subscribed successfully!');
      setEmail('');
    } catch (err: unknown) { 
      const message = getErrorMessage(err);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <div className="w-full max-w-md">
      <Toaster position="top-right" />

      <p className="text-sm text-gray-400 mb-3">
        Get insights, updates, and perspectives from Metasys.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          aria-label="Email address"
          className="flex-1 bg-black border border-white/20 px-4 py-3 rounded-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/50"
        />

        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="px-6 py-3 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors disabled:opacity-60 flex items-center justify-center"
        >
          {loading ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            'Subscribe'
          )}
        </button>
      </div>
    </div>
  );
}