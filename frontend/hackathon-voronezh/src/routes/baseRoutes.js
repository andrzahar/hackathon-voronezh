import {
  ROUTE_ACCOUNT,
  ROUTE_ACHIEVEMENTS,
  ROUTE_AUTH,
  ROUTE_MAIN_CONTAINER,
} from "./routes";
import Calendar from "../components/Calendar/Calendar";
import WelcomePage from "../components/WelcomePage/WelcomePage";
import PersonalCabinet from "../components/PersonalCabinet/PersonalCabinet";
import Achievements from "../components/Achievements/Achievements";

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
  {
    path: ROUTE_ACHIEVEMENTS,
    name: "Личный кабинет",
    Element: Achievements,
  },
];

export const AUTH_ROUTES = [
  {
    path: ROUTE_AUTH,
    name: "Авторизация",
    Element: WelcomePage,
  },
];
