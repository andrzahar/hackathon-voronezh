import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {IsPhoneNumber} from "class-validator";

export type UserDocument = User & Document;

export enum Role {
  ADMINISTRATOR_FSP = 'administrator',
  SPORTSMAN = 'sportsman',
  REPRESENTATIVE = 'representative',
  PARTNER = 'partner',
  NONE = 'none',
}

@Schema()
export class User {
  id: Types.ObjectId;
  @Prop({required: true})
  password: string;
  @Prop({required: true, default: 'null'})
  firstname: string;
  @Prop({required: true, default: 'null'})
  surname: string;
  @Prop({required: true, default: 'null'})
  patronymic: string;
  @Prop({required: true, default: 'null'})
  @IsPhoneNumber()
  phone: string;
  @Prop({enum: Role, default: Role.NONE})
  role : Role;
  @Prop({required: true})
  mail: string;
  @Prop({required: true, default: 'null'})
  telegram: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
