import { IsNotEmpty } from "class-validator";
import { Role } from "../../schemas/user.schema";

export class RolesAddDto {
  @IsNotEmpty()
  userId: string
  @IsNotEmpty()
  role: Role
}