import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Matches } from "class-validator";

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
  @Prop({required: true, type: Date.now()})
  birthday: string
  @Prop({required: true, ref: 'Passport'})
  passport: Types.ObjectId;
  @Prop({required: true})
  @Matches(/^\d{3}-\d{3}-\d{3}-\d{4}$/)
  OMS: string;

}

export const SportsmanSchema = SchemaFactory.createForClass(Sportsman);
