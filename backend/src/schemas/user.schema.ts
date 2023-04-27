import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {IsPhoneNumber} from "class-validator";

export type UserDocument = User & Document;

export enum Role {
  Administrator_FSP = 'Администратор ФСП',
  Sportsman = 'Спортсмен',
  Representative = 'Представитель региональной Фередрации',
  Partner = 'Партнёр',
  None = 'none',
}

@Schema()
export class User {
  id: Types.ObjectId;
  @Prop({required: true})
  password: string;
  @Prop({required: true})
  login: string;
  @Prop({required: true})
  firstname: string;
  @Prop({required: true})
  surname: string;
  @Prop({required: true})
  patronymic: string;
  @Prop({required: true})
  @IsPhoneNumber()
  phone: string;
  @Prop({enum: Role, default: Role.None})
  role : Role;
  @Prop({required: true})
  mail: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
