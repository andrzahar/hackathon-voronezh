import { IsNotEmpty, IsPhoneNumber } from "class-validator";
import { Role } from "../../schemas/user.schema";

export class UserUpdateDto {
  @IsNotEmpty()
  userId:string;
  @IsNotEmpty()
  password?: string;
  @IsNotEmpty()
  login?: string;
  @IsNotEmpty()
  name?: string;
  @IsPhoneNumber()
  @IsNotEmpty()
  phone?: string;
  @IsNotEmpty()
  role?: Role;
  @IsNotEmpty()
  mail?: string;
}
