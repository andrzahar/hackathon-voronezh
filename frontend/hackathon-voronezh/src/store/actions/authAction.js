import { action } from 'typesafe-actions';

export const setUserToken = token => action('SET_TOKEN', { token });
export const setUserInfo = (token, info) => action('SET_USER_INFO', { token, info });
