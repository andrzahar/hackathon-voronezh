import { IsDate, IsNotEmpty, IsPhoneNumber } from "class-validator";
import { Role, Sex } from "../../schemas/user.schema";
import { Passport } from "../../schemas/passport.schema";
import { OMS } from "../../schemas/OMS.schema"

//TODO: поменять ДТО в зависимости от контракта
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
  role : Role;
  @IsNotEmpty()
  mail: string;
  @IsNotEmpty()
  isCompany: boolean;
  @IsNotEmpty()
  sex: Sex;
  @IsDate()
  @IsNotEmpty()
  birthday: string
  @IsNotEmpty()
  passport: Passport;
  @IsNotEmpty()
  OMS: OMS;
}
