import { IsNotEmpty } from "class-validator";
export class RegistrationDto {
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  mail: string;
}
