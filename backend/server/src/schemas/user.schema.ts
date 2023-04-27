import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

export enum Role {
  //TODO: добавить роли по openai
  Nothing = 'nothing'
}

@Schema()
export class User {
  id: Types.ObjectId;
  @Prop({ required: true, ref: 'Members' })
  member: Types.ObjectId;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  login: string;
  @Prop({enum: Role, default: Role.Nothing})
  role : Role
}

export const UserSchema = SchemaFactory.createForClass(User);
