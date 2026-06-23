export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type LeadPayload = {
  fullName: string;
  email: string;
  phone?: string;
  city?: string;
  propertyType?: string;
  rooms?: string;
  message?: string;
  source: 'estimate-form' | 'contact-form';
  website?: string;
};

export async function submitLead(payload: LeadPayload) {
  if (!API_URL) {
    throw new Error('NEXT_PUBLIC_API_URL is missing');
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${API_URL.replace(/\/$/, '')}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
  } finally {
    window.clearTimeout(timeout);
  }
}

export function clean(value: string) {
  return value.trim();
}
