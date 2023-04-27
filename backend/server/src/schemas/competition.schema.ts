import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { UserDocument } from './user.schema';
import { IsDate } from 'class-validator';

export type CompetitionDocument = Competition & Document;

@Schema()
export class Competition {
  id: Types.ObjectId;
  @Prop({ required: true })
  time: string;
  @Prop({ required: true })
  @IsDate()
  date_of_event: Date;
  @Prop({ required: true })
  users: UserDocument[];
  @Prop({ required: true })
  creator: UserDocument;
}

export const CompetitionSchema = SchemaFactory.createForClass(Competition);
