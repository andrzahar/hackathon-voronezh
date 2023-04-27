import Authorization from "../components/Authorization/Authorization";
import {ROUTE_AUTH, ROUTE_MAIN_CONTAINER} from "./routes";
import Calendar from "../components/Calendar/Calendar";

export const BASE_ROUTES = [
  {
    path: ROUTE_MAIN_CONTAINER,
    name: "Главное меню",
    Element: Calendar,
  },
];

export const AUTH_ROUTES = [
  {
    path: ROUTE_AUTH,
    name: "Авторизация",
    Element: Authorization,
  },
];
