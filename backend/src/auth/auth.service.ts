import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import {SignInDto} from './dto/sign-in.dto';
import { validateOrReject } from "class-validator";
import { UserDocument } from "../schemas/user.schema";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(dto: SignInDto) {
    await validateOrReject(dto);
    const user = await this.usersService.findOneByMail(dto.mail);
    if (user?.password !== dto.password) {
      throw new UnauthorizedException();
    }
    const payload = this.jwtService.signAsync(this.createPayload(user))

    return {
      jwt_token: this.jwtService.signAsync(payload)
    };
  }

  private createPayload(user: UserDocument) {
    return {
      id: user.id,
      pass: user.password,
      phone: user.phone,
      roles: user.role,
    }
  }
}