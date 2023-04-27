import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegistrationSportsmanDto } from './dto/registration-sportsman.dto';
import { UserDocument } from "../schemas/user.schema";

@Injectable()
export class RegistrationService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async signOn(registrationDTO: RegistrationSportsmanDto) {
    const user = await this.usersService.create(registrationDTO);
    return await this.jwtService.signAsync(this.createPayload(user));
  }

  //TODO: поменять payload и в авторизации и в регистрации
  private createPayload(user: UserDocument) {
    return {
      login: user.login,
      sub: user.id,
      pass: user.password,
      phone: user.phone,
      role: user.role,
      isCompany: user.isCompany,
      sex: user.sex
    }
  }
}
