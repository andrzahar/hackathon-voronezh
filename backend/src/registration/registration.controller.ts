import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationSportsmanDto } from './dto/registration-sportsman.dto';
import { Public } from '../auth/auth.guard';
import { validateOrReject } from 'class-validator';
import { RegistrationMethodNotAllow } from "../error/registration-error.exception";

@Controller('api/registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post()
  async signOn(@Body() registrationDTO: RegistrationSportsmanDto) {
    try {
      await validateOrReject(registrationDTO);
      console.table(registrationDTO);
      return this.registrationService.signOn(registrationDTO);
    } catch (error) {
      throw new RegistrationMethodNotAllow()
    }
  }
}
