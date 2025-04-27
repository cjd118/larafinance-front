import { API_URL } from '@helpers/settings.ts';
import { getCsrfToken } from '@helpers/auth';

export async function apiFetch(url, options = {}) {
    console.log(url);

    
    const defaultOptions = {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(getCsrfToken() && { 'X-XSRF-TOKEN': getCsrfToken() }),
        ...options.headers,
      },
      ...options,
    };
  
    const res = await fetch(`${API_URL}${url}`, defaultOptions);
  
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.log('errorData', errorData);
      throw new Error(errorData.message || 'Something went wrong');
    }
  
    return res.json();
  }