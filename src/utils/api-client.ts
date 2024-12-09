'use client';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

/**
 * API Client to make requests to the CoinGecko API.
 * @param endpoint - The endpoint to make the request to.
 * @param options - The options to pass to the fetch request.
 * @returns The response from the API.
 */
export const apiClient = async (endpoint: string, options?: RequestInit) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'x-cg-demo-api-key': apiKey || '', // Corrected header name
      ...(options?.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};
