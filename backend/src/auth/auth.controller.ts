import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post, Redirect
} from "@nestjs/common";
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from './auth.guard';
import { AuthMethodNotAllowed } from "../error/auth-error.exception";

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  @Public()
  @Redirect('api/user/info')
  async signIn(@Body() dto: SignInDto) {
    try {
      console.table(dto)
      return await this.authService.signIn(dto);
    } catch (error) {
      throw new AuthMethodNotAllowed();
    }
  }
}
