import { IsNotEmpty, IsPhoneNumber } from "class-validator";
import { Role } from "../../schemas/user.schema";
import { Optional } from "@nestjs/common";

export class UserUpdateDto {
  @Optional()
  userId:string;
  @Optional()
  password?: string;
  @Optional()
  login?: string;
  @Optional()
  name?: string;
  @IsPhoneNumber()
  @Optional()
  phone?: string;
  @Optional()
  role?: Role;
  @Optional()
  mail?: string;
  @Optional()
  telegram: string;
}
