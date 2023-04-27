import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

//TODO: поменять ДТО в зависимости от контракта
export class RegistrationAdministratorFPKDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;
  @IsNotEmpty()
  login: string;
}
