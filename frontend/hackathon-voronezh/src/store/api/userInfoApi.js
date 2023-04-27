import { apiGet, apiPost } from './apiFunction';

export async function fetchGetSportsmanInfo(params) {
    return apiGet('/sportsman/info', params);
}

export async function fetchSportsmanInfo(body, params) {
    return apiPost('/sportsman/info', body, params);
}

export async function fetchRepresentativeInfo(params) {
    return apiGet('/representative/info', params);
}

export async function fetchPartnerInfo(params) {
    return apiGet('/partner/info', params);
}
