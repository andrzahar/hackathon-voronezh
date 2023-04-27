import Authorization from "../components/Authorization/Authorization";
import {ROUTE_ACCOUNT, ROUTE_AUTH, ROUTE_MAIN_CONTAINER} from "./routes";
import Calendar from "../components/Calendar/Calendar";
import WelcomePage from "../components/WelcomePage/WelcomePage";
import PersonalCabinet from "../components/PersonalCabinet/PersonalCabinet";

export const BASE_ROUTES = [
  {
    path: ROUTE_MAIN_CONTAINER,
    name: "Главное меню",
    Element: Calendar,
  },
  {
    path: ROUTE_ACCOUNT,
    name: "Личный кабинет",
    Element: PersonalCabinet,
  },
];

export const AUTH_ROUTES = [
  {
    path: ROUTE_AUTH,
    name: "Авторизация",
    Element: WelcomePage,
  }

];
