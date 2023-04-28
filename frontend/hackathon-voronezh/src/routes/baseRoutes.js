import {
  ROUTE_ACCOUNT,
  ROUTE_ACHIEVEMENTS,
  ROUTE_ACHIEVEMENTS_ITEM,
  ROUTE_APPROVE,
  ROUTE_AUTH, ROUTE_FAQ,
  ROUTE_MAIN_CONTAINER
} from './routes';
import Calendar from '../components/Calendar/Calendar';
import WelcomePage from '../components/WelcomePage/WelcomePage';
import PersonalCabinet from '../components/PersonalCabinet/PersonalCabinet';
import AchievementsListPage from '../components/Achievements/AchievementsListPage';
import Approve from "../components/Approve/Approve";
import AchievementsPage from "../components/Achievements/AchievementsPage";
import FAQ from "../components/FAQ/FAQ";

export const BASE_ROUTES = [
  {
    path: ROUTE_MAIN_CONTAINER,
    name: 'Главное меню',
    Element: Calendar,
  },
  {
    path: ROUTE_FAQ,
    name: 'Личный кабинет',
    Element: FAQ,
  },
  {
    path: ROUTE_ACCOUNT,
    name: 'Личный кабинет',
    Element: PersonalCabinet,
  },
  {
    path: ROUTE_ACHIEVEMENTS,
    name: 'Лист достижения',
    Element: AchievementsListPage,
  },
  {
    path: ROUTE_FAQ,
    name: 'Q&A',
    Element: FAQ,
  },
  {
    path: ROUTE_ACHIEVEMENTS_ITEM,
    name: 'Достижение',
    Element: AchievementsPage,
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
