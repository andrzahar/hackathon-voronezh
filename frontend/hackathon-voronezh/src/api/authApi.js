import { apiPost } from './apiFunction';

export async function fetchLogin(credentials) {
  return apiPost('/auth', credentials);
}

export async function fetchRegister(credentials) {
  return apiPost('/registration', credentials);
}
