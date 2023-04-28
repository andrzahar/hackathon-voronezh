import { USER_ROLE } from '../../core/UserRoleEnum';

export const getUserRole = role => {
  switch (role) {
    case USER_ROLE.REPRESENTATIVE:
      return 'Представитель';
    case USER_ROLE.SPORTSMAN:
      return 'Спортсмен';
    case USER_ROLE.PARTNER:
      return 'Партнер';
    case USER_ROLE.ADMINISTRATOR:
      return 'Администратор';
    default:
      return 'Не определена';
  }
};
