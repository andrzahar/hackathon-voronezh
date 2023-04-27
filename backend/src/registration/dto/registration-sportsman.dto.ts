import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

//TODO: поменять ДТО в зависимости от контракта
export class RegistrationSportsmanDto {
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
