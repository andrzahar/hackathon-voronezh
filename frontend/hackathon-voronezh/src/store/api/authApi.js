import {apiPost} from "./apiFunction";

export async function fetchLogin(credentials) {
    return apiPost('/api/auth/login', credentials);
}