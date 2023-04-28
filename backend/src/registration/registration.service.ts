import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegistrationDto } from './dto/registration.dto';
import { UserDocument } from "../schemas/user.schema";

@Injectable()
export class RegistrationService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async signOn(registrationDTO: RegistrationDto) {
    const user = await this.usersService.create(registrationDTO);
    const payload = this.jwtService.signAsync(this.createPayload(user))
    return {
      jwt_token: this.jwtService.signAsync(payload)
    };
  }

  private createPayload(user: UserDocument) {
    console.table(user)
    return {
      id: user.id,
      pass: user.password,
      mail: user.mail,
      roles: user.role,
    }
  }
}
