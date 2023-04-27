import { apiPost } from './apiFunction';

export async function fetchAuth(credentials) {
    return apiPost('/auth', credentials);
}

export async function fetchRegister(data) {
    return apiPost('/registration', data);
}

export async function fetchUserInfo(data) {
    return apiPost('/user', data);
}