import { apiGet, apiPost } from './apiFunction';

export async function fetchUserInfo(params) {
    return apiGet('/user', params);
}


export async function fetchUserRole(params) {
    return apiPost('/user/role', {}, params);
}
