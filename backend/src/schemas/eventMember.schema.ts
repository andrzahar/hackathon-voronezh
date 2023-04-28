import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type EventMemberDocument = EventMember & Document;
@Schema()
export class EventMember {
  id: Types.ObjectId;
  mail: string;
  @Prop({required: true, type: Number})
  position: number;
  @Prop({required: true, ref: 'User'})
  user: Types.ObjectId;
}

export const EventMemberSchema = SchemaFactory.createForClass(EventMember);
