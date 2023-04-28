import { actions } from './actions';

export const setUserToken = token => actions('SET_TOKEN', { token });
export const setUserInfo = (token, info) => actions('SET_USER_INFO', { token, info });
