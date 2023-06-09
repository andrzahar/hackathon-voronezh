import { HttpException, HttpStatus } from '@nestjs/common';

export class UserErrorMailException extends HttpException {
  constructor() {
    super('This mail is already taken, field: user', HttpStatus.CONFLICT);
  }
}

export class UserErrorLoginException extends HttpException {
  constructor() {
    super('This login is already taken, field: user', HttpStatus.CONFLICT);
  }
}

export class UserErrorPhoneException extends HttpException {
  constructor() {
    super('Such a phone is already in use, field: user', HttpStatus.CONFLICT);
  }
}

export class UserErrorFoundException extends HttpException {
  constructor() {
    super('User not found, field: user', HttpStatus.NOT_FOUND);
  }
}

export class UserErrorRoleException extends HttpException {
  constructor() {
    super('Ошибка в обновлении роли пользователя', HttpStatus.CONFLICT);
  }
}
