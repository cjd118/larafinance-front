import { API_URL } from '@helpers/settings.ts';
import { getCsrfToken } from '@helpers/auth';
import { ValidationError } from '@errors/ValidationError.ts';

export async function apiFetch(url: string, options: RequestInit = {}) {
    console.log(url);

    const csrfToken = getCsrfToken();

    const defaultOptions = {
      credentials: 'include' as RequestCredentials,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(csrfToken ? { 'X-XSRF-TOKEN': csrfToken } : {}),
        ...options.headers,
      },
      ...options,
    };
  
    const res = await fetch(`${API_URL}${url}`, defaultOptions);
  
    //check if we're getting a 401 - this is where server side session has expired but local storage still exists
    //don't redirect if we're on the login page
    //todo: this is sort of duplicated in AuthContext
    if(res.status === 401 && window.location.pathname !== '/auth/login') {
      localStorage.removeItem('user');
      window.location.href = '/auth/login';
    }

    if(res.status === 422) {
      const errorData = await res.json();
      throw new ValidationError(errorData.errors);
    }

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Something went wrong');
    }
  
    //slightly complicated parsing as deletions return a 200 response code with no body
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  }