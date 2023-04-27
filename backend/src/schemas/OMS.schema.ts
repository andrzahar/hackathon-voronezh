import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { UserDocument } from "./user.schema";
import { Matches } from "class-validator";

export type OMSDocument = OMS & Document;
@Schema()
export class OMS {
  id: Types.ObjectId;
  @Prop({required: true})
  @Matches(/^\d{3}-\d{3}-\d{3}-\d{4}$/)
  omsPolicyCode: string;
}

export const OMSSchema = SchemaFactory.createForClass(OMS);
