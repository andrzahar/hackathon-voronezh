async function apiFetch(method, url, body) {
    return fetch(url, {
        method,
        headers: {
            ...(body ? { 'Content-Type': 'application/json' } : {}),
        },
        body: JSON.stringify(body),
});
}

export async function apiGet(url) {
    return fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function apiPost(url, body,) {
    return apiFetch('POST', url, body );
}

export async function apiPatch(url, body) {
    return apiFetch('PATCH', url, body);
}

export async function apiPut(url, body,) {
    return apiFetch('PUT', url, body);
}

export async function apiDelete(url, body) {
    return apiFetch('DELETE', url, body);
}
