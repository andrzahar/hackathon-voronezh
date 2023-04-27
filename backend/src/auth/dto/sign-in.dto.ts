import { IsEmail, IsNotEmpty } from "class-validator";

export class SignInDto {
  @IsNotEmpty()
  @IsEmail()
  mail: string;
  @IsNotEmpty()
  password: string;
}
