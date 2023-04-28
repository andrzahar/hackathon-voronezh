import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Matches } from "class-validator";
import { Transform } from "class-transformer";

export type SportsmanDocument = Sportsman & Document;

export enum Sex {
  Male = "m",
  Female = "f",
}

@Schema()
export class Sportsman {
  id: Types.ObjectId;
  @Prop({enum: Sex, default: Sex.Male})
  sex: Sex;
  birthday: string
  @Prop({required: true, ref: 'Passport'})
  passport: Types.ObjectId;
  @Prop({required: true})
  @Matches(/^\d{3}-\d{3}-\d{3}-\d{4}$/)
  OMS: string;
  @Prop({required:true, ref: 'User'})
  user: Types.ObjectId

}

export const SportsmanSchema = SchemaFactory.createForClass(Sportsman);
