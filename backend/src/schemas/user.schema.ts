import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {IsPhoneNumber} from "class-validator";

export type UserDocument = User & Document;

export enum Role {
  Administrator_FSP = 'Администратор ФСП',
  Sportsman = 'Спортсмен',
  Representative = 'Представитель региональной Фередрации',
  Partner = 'Партнёр',
}

export enum Sex {
  Male = "m",
  Female = "f",
}

@Schema()
export class User {
  id: Types.ObjectId;
  @Prop({required: true})
  password: string;
  @Prop({required: true})
  login: string;
  @Prop({required: true})
  name: string;
  @Prop({required: true})
  @IsPhoneNumber()
  phone: string;
  @Prop({enum: Role, default: null})
  role : Role;
  @Prop({required: true})
  mail: string;
  @Prop({required: true})
  isCompany: boolean;
  @Prop({enum: Sex, default: Sex.Male})
  sex: Sex;
  @Prop({required: false, type: Date.now()})
  birthday: string
  @Prop({required: true, ref: 'Passport'})
  passport: Types.ObjectId;
  @Prop({required: true, ref: 'OMS'})
  OMS: Types.ObjectId;

}

export const UserSchema = SchemaFactory.createForClass(User);
