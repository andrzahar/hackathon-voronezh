import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsDate } from 'class-validator';
import { EventMemberDocument } from "./eventMember.schema";

export type EventDocument = Event & Document;

export enum Status {
  Upcoming = 'предстоящий',
  Now = 'текущий',
  Completed = 'прошедший'
}

@Schema()
export class Event {
  id: Types.ObjectId;
  @Prop({ required: true, type: Date.now() })
  @IsDate()
  time_end: string;
  @Prop({ required: true, type: Date.now() })
  @IsDate()
  time_start: string;
  @Prop({required: true})
  criterions: string[];
  @Prop({ required: true, ref: 'User' })
  members: Types.ObjectId[];
  @Prop({ required: true, ref: 'User' })
  creator: Types.ObjectId;
  @Prop({required : true, enum : Status, default: Status.Upcoming})
  status: Status;
  @Prop({required: true, default: false})
  verified: boolean;
}

export const EventSchema = SchemaFactory.createForClass(Event);
