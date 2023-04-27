import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsDate } from 'class-validator';
import { EventMemberDocument } from "./eventMember.schema";

export type EventDocument = Event & Document;

export enum Status {
  Upcoming = 'предстоящий',
  Going = 'текущий',
  Past = 'прошедший'
}

@Schema()
export class Event {
  id: Types.ObjectId;
  @Prop({ required: true, type: Date })
  @IsDate()
  time_end: Date;
  @Prop({ required: true, type: Date })
  @IsDate()
  time_start: Date;
  @Prop({ required: true, ref: 'User' })
  members: Types.ObjectId[];
  @Prop({ required: true, ref: 'User' })
  creator: Types.ObjectId;
  @Prop({required : true, enum : Status, default: Status.Upcoming})
  status: Status;
}

export const EventSchema = SchemaFactory.createForClass(Event);
