import Authorization from "../components/Authorization/Authorization.jsx";
import { ROUTE_AUTH } from "./routes.js";

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
