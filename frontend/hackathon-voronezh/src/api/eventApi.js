import { apiGet, apiPost } from './apiFunction';

export async function fetchGetEvent(params) {
  return apiGet('/events', params);
}

export async function fetchCreateEvent(body, params) {
  return apiPost('/event', body, params);
}

export async function fetchConfirmEvent(params) {
  return apiPost('/confirmEvent', {}, params);
}

export async function fetchAnalyticsEvent(params) {
  return apiPost('/event/analytics', {}, params);
}
