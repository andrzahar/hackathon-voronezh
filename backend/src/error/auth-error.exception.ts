import { HttpException, HttpStatus } from '@nestjs/common';

export class AuthMethodNotAllowed extends HttpException {
  constructor() {
    super('не удалось выполнить: "Авторизация"', HttpStatus.METHOD_NOT_ALLOWED);
  }
}