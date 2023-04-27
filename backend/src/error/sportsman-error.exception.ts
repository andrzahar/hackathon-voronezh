import { HttpException, HttpStatus } from '@nestjs/common';

export class SportsmanErrorExceptionInfoMethodNotAllowed extends HttpException {
  constructor() {
    super('не удалось выполнить: "Спортсмен" получение информации', HttpStatus.METHOD_NOT_ALLOWED);
  }
}

export class SportsmanErrorExceptionInfoNotFound extends HttpException {
  constructor() {
    super('не удалось выполнить: "Спортсмен" получение информации "не найдено"', HttpStatus.NOT_FOUND);
  }
}

export class SportsmanErrorExceptionUpdate extends HttpException {
  constructor() {
    super('не удалось выполнить: "Спортсмен" обновление информации', HttpStatus.METHOD_NOT_ALLOWED);
  }
}