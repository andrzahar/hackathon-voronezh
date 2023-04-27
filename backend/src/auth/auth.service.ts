import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import {SignInDto} from './dto/signIn.dto';
import {validateOrReject} from 'class-validator';
import {UserDocument} from "../schemas/user.schema";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signingDTO: SignInDto): Promise<string> {
    await validateOrReject(signingDTO);
    const user = await this.usersService.findOneByLogin(signingDTO.login);
    if (user?.password !== signingDTO.password) {
      throw new UnauthorizedException();
    }
    return await this.jwtService.signAsync(this.createPayload(user));
  }

  private createPayload(user: UserDocument) {
    return {
      login: user.login,
      sub: user.id,
      pass: user.password,
      phone: user.telephone,
    }
  }
}
