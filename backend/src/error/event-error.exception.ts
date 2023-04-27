import { HttpException, HttpStatus } from '@nestjs/common';

export class EventMethodNotAllowed extends HttpException {
  constructor() {
    super('не удалось выполнить: "Событие"', HttpStatus.METHOD_NOT_ALLOWED);
  }
}