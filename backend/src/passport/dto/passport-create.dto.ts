import { IsNotEmpty, IsPassportNumber, Matches } from "class-validator";

export class PassportCreateDto {
  @IsPassportNumber('RU')
  number: string;
  @IsNotEmpty()
  nameOwner: string;
  @IsNotEmpty()
  companyName: string;
  @IsNotEmpty()
  @Matches(/^(\d{2})-(\d{2})-(\d{4})$/)
  issueDate: string;
  @IsNotEmpty()
  @Matches(/^\d{3}-\d{3}$/)
  companyCode: string;
  @IsNotEmpty()
  birthplace:string
}