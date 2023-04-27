import { HttpException, HttpStatus } from '@nestjs/common';

export class RegistrationMethodNotAllow extends HttpException {
  constructor() {
    super('не удалось выполнить: "Регистрация", пользователь не зарегестрирован', HttpStatus.METHOD_NOT_ALLOWED);
  }
}