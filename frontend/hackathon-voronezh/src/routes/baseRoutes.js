import {ROUTE_ACCOUNT, ROUTE_ACHIEVEMENTS, ROUTE_APPROVE, ROUTE_AUTH, ROUTE_MAIN_CONTAINER} from './routes';
import Calendar from '../components/Calendar/Calendar';
import WelcomePage from '../components/WelcomePage/WelcomePage';
import PersonalCabinet from '../components/PersonalCabinet/PersonalCabinet';
import Achievements from '../components/Achievements/Achievements';
import Approve from "../components/Approve/Approve";

export const BASE_ROUTES = [
  {
    path: ROUTE_MAIN_CONTAINER,
    name: 'Главное меню',
    Element: Calendar,
  },
  {
    path: ROUTE_ACCOUNT,
    name: 'Личный кабинет',
    Element: PersonalCabinet,
  },
  {
    path: ROUTE_ACHIEVEMENTS,
    name: 'Достижения',
    Element: Achievements,
  },
  {
    path: ROUTE_APPROVE,
    name: 'Добавление участника',
    Element: Approve,
  },
];

export const AUTH_ROUTES = [
  {
    path: ROUTE_AUTH,
    name: 'Авторизация',
    Element: WelcomePage,
  },
];
