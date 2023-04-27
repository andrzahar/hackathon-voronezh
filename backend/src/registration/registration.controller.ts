import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationDto } from './dto/registration.dto';
import { Public } from '../auth/auth.guard';
import { validateOrReject } from 'class-validator';
import { RegistrationMethodNotAllow } from "../error/registration-error.exception";

@Controller('api/registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post()
  async signOn(@Body() registrationDTO: RegistrationDto) {
    try {
      await validateOrReject(registrationDTO);
      console.table(registrationDTO);
      return this.registrationService.signOn(registrationDTO);
    } catch (error) {
      throw new RegistrationMethodNotAllow()
    }
  }
}