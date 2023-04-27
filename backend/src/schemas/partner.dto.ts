import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type PartnerDocument = Partner & Document;

@Schema()
export class Partner {
  id: Types.ObjectId;
  @Prop({required: true})
  companyName: string;
  @Prop({required:true, ref: 'User'})
  user: Types.ObjectId;

}

export const PartnerSchema = SchemaFactory.createForClass(Partner);
