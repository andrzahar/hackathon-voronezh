import { AUTH_ROUTES, BASE_ROUTES } from '../baseRoutes';

export const getRoutesByAuth = user => {
  console.log('user.token', user);
  if (user.token) {
    return BASE_ROUTES;
  }

  return AUTH_ROUTES;
};
