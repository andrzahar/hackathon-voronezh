import { fetchLogin, fetchRegister } from '../../api/authApi';
import {fetchUserInfo, fetchUserRole} from '../../api/userApi';
import {fetchCreateEvent, fetchGetEvent} from '../../api/eventApi';

export async function authLogin(credentials) {
  try {
    const response = await fetchLogin(credentials);

    if (response.ok) {
      const data = await response.json();

      return `Bearer ${data.jwt_token}`;
    }
  } catch (e) {
    // TODO: доделать обработку ошибок
  }
}

export async function authRegistration(credentials) {
  try {
    const response = await fetchRegister(credentials);
    const { userKey } = response;

    return userKey;
  } catch (e) {
    // TODO: доделать обработку ошибок
  }
}

export async function getUserInfo(params) {
  try {
    const response = await fetchUserInfo(params);

    if (response.ok) {
      const data = await response.json();

      return data;
    }
  } catch (e) {
    // TODO: доделать обработку ошибок
  }
}

export async function getEvents(params) {
  try {
    const response = await fetchGetEvent(params);

    if (response.ok) {
      const data = await response.json();

      return data;
    }
  } catch (e) {
    // TODO: доделать обработку ошибок
  }
}

export async function createEvents(body, params) {
  try {
    const response = await fetchCreateEvent(body, params);

    if (response.ok) {
      const data = await response.json();

      return data;
    }
  } catch (e) {
    // TODO: доделать обработку ошибок
  }
}

export async function updateRole( params) {
  try {
    const response = await fetchUserRole(params);

    if (response.ok) {
      const data = await response.json();

      return data;
    }
  } catch (e) {
    // TODO: доделать обработку ошибок
  }
}
