import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type RatingDocument = Rating & Document;
@Schema()
export class Rating {
  id: Types.ObjectId;
  @Prop({required: true, ref: 'Event'})
  event: Types.ObjectId;
  @Prop({required: true, ref: 'RatingPosition'})
  rating: Types.ObjectId
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
