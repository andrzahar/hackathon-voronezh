async function apiFetch({ method, url = 'GET', body, params }) {
    return fetch(url, {
        method,
        headers: {
            ...(body ? { 'Content-Type': 'application/json', ...params } : {...params}),
        },
        body: JSON.stringify(body),
});
}

export async function apiGet(url, params) {
    return fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', ...params },
    });
}

export async function apiPost(url, body, params) {
    return apiFetch('POST', url, body, params);
}

export async function apiPatch(url, body, params) {
    return apiFetch('PATCH', url, body, params);
}

export async function apiPut(url, body, params) {
    return apiFetch('PUT', url, body, params);
}

export async function apiDelete(url, body, params) {
    return apiFetch('DELETE', url, body, params);
}
