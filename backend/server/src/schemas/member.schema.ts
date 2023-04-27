import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type MemberDocument = Member & Document;
@Schema()
export class Member {
  id: Types.ObjectId;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  telephone: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
