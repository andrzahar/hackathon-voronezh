import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {IsPhoneNumber} from "class-validator";

export type UserDocument = User & Document;

export enum Role {
  ADMINISTRATOR_FSP = 'Администратор ФСП',
  SPORTSMAN = 'Спортсмен',
  REPRESENTATIVE = 'Представитель региональной Фередрации',
  PARTNER = 'Партнёр',
  NONE = 'none',
}

@Schema()
export class User {
  id: Types.ObjectId;
  @Prop({required: true})
  password: string;
  @Prop({required: false})
  firstname: string;
  @Prop({required: false})
  surname: string;
  @Prop({required: false})
  patronymic: string;
  @Prop({required: false})
  @IsPhoneNumber()
  phone: string;
  @Prop({enum: Role, default: Role.NONE})
  role : Role;
  @Prop({required: true})
  mail: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
