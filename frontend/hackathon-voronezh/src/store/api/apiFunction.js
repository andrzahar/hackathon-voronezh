async function apiFetch({ method, url , body, params }) {
    console.log('params', params)
    return fetch(`http://91.142.72.178:5000${url}`, {
        method,
        headers: {'Content-Type': 'application/json', ...params},
        body: JSON.stringify(body),
});
}

export async function apiGet(url, params) {
    return fetch(`http://91.142.72.178:5000${url}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', ...params },
    });
}

export async function apiPost(url, body, params) {
    return apiFetch({method: 'POST', url, body, params});
}

export async function apiPatch(url, body, params) {
    return apiFetch({method: 'PATCH', url, body, params});
}

export async function apiPut(url, body, params) {
    return apiFetch({method: 'PUT', url, body, params});
}

export async function apiDelete(url, body, params) {
    return apiFetch({method: 'DELETE', url, body, params});
}
