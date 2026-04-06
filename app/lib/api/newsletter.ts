const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  // throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

export type NewsletterPayload = {
  email: string;
};

export async function subscribeNewsletter(data: NewsletterPayload) {
  const res = await fetch(`${API_BASE_URL}/api/v1/subscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err?.message || "Subscription failed");
  }

  return res.json();
}
