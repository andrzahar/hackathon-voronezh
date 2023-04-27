import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { UserDocument } from './user.schema';
import { IsDate } from 'class-validator';

export type CompetitionDocument = Competition & Document;

export enum Status {
  Upcoming = 'предстоит',
  Going = 'идёт',
  Past = 'прошёл'
}

@Schema()
export class Competition {
  id: Types.ObjectId;
  @Prop({ required: true })
  time: string;
  @Prop({ required: true, type: Date })
  @IsDate()
  date_of_event: Date;
  @Prop({ required: true })
  users: UserDocument[];
  @Prop({ required: true })
  creator: UserDocument;
  @Prop({required : true, enum : Status, default: Status.Upcoming})
  status: Status
}

export const CompetitionSchema = SchemaFactory.createForClass(Competition);
