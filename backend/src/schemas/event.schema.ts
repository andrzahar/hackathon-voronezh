import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type EventDocument = Event & Document;

export enum Status {
  Upcoming = 'предстоящий',
  Now = 'текущий',
  Completed = 'прошедший'
}

@Schema()
export class Event {
  id: Types.ObjectId;
  @Prop({required:true})
  name:string;
  @Prop({required:false})
  shortName:string;
  @Prop({required:true})
  description:string;
  @Prop({ required: false, type: Date })
  time_end: string;
  @Prop({ required: false, type: Date})
  time_start: string;
  @Prop({required: false})
  criterions: string[];
  @Prop({ required: false, ref: 'User' })
  members: Types.ObjectId[];
  @Prop({ required: true, ref: 'User' })
  creator: Types.ObjectId;
  @Prop({required : true, enum : Status, default: Status.Upcoming})
  status: Status;
  @Prop({required: true, default: false})
  verified: boolean;
}

export const EventSchema = SchemaFactory.createForClass(Event);
