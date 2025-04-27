import {apiFetch} from '@helpers/fetch';
import { get } from 'http';

async function getCategories() {
  return apiFetch('/api/account-categories', {
    method: 'GET'
  });
}

export function categoriesLoader() {
    return getCategories();
  }