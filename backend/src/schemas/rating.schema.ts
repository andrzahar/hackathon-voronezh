import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { UserDocument } from "./user.schema";

export type RatingDocument = Rating & Document;
@Schema()
export class Rating {
  id: Types.ObjectId;
  @Prop({required: true})
  criterions: string[];
  @Prop({required: true, ref: 'event'})
  event: Types.ObjectId;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
