import Authorization from "../components/Authorization/Authorization";
import { ROUTE_AUTH } from "./routes";

export const BASE_ROUTES = [
  // {
  //   path: ROUTE_MAIN_CONTAINER,
  //   name: "Главное меню",
  //   Element: MainContainer,
  // },
];

export const AUTH_ROUTES = [
  {
    path: ROUTE_AUTH,
    name: "Авторизация",
    Element: Authorization,
  },
];
