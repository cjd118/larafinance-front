import { API_URL } from '@helpers/settings.ts';
import { apiFetch } from '@helpers/fetch.ts';

export async function getCsrfCookie() {
  await fetch(`${API_URL}/sanctum/csrf-cookie`, {
    credentials: 'include',
  });
}

export async function login(email: string, password: string) {
  return apiFetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function logout() {
  return apiFetch('/api/logout', {
    method: 'POST',
  });
}

export function getCsrfToken() {
  return getCookie('XSRF-TOKEN');
}

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookiePart = parts.pop();
    const cookieValue = cookiePart ? cookiePart.split(';').shift() : null;
    return cookieValue ? decodeURIComponent(cookieValue) : null;
  }
  return null;
}