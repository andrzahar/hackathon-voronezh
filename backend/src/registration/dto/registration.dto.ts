import { IsNotEmpty, IsPhoneNumber } from "class-validator";
export class RegistrationDto {
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  login: string;
  @IsNotEmpty()
  name: string;
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  mail: string;
}
