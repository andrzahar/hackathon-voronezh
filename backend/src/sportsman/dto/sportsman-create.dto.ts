import { Types } from "mongoose";
import { Prop } from "@nestjs/mongoose";
import { IsDate, IsNotEmpty, Matches } from "class-validator";
import { Sex } from "../../schemas/sportsman.dto";
import { Passport } from "../../schemas/passport.schema";

export class SportsmanCreateDto {
  @IsNotEmpty()
  userId: string;
  @IsNotEmpty()
  sex: Sex;
  @IsNotEmpty()
  @IsDate()
  birthday: string
  @IsNotEmpty()
  passport: Passport;
  @Prop({required: true})
  @Matches(/^\d{3}-\d{3}-\d{3}-\d{4}$/)
  OMS: string;
  @Prop({required:true, ref: 'User'})
  user: Types.ObjectId
}