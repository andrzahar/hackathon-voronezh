import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { UserDocument } from "./user.schema";

export type RatingPositionDocument = RatingPosition & Document;
@Schema()
export class RatingPosition {
  id: Types.ObjectId;
  @Prop({required: true})
  name: string;
  @Prop({required: true})
  points: number;
  @Prop({required: true})
  whatLiked: string;
  @Prop({required: true})
  whatUnliked: string;
  @Prop({required: true, ref: 'Event'})
  event: Types.ObjectId;
}

export const RatingPositionSchema = SchemaFactory.createForClass(RatingPosition);
