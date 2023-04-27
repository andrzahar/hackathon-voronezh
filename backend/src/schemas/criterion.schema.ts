import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { UserDocument } from "./user.schema";

export type CriterionDocument = Criterion & Document;
@Schema()
export class Criterion {
  id: Types.ObjectId;
  @Prop({required: true})
  criterions: string[];
  @Prop({required: true, ref: 'event'})
  event: Types.ObjectId;
}

export const CriterionSchema = SchemaFactory.createForClass(Criterion);
