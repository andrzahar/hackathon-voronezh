import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type RepresentativeDocument = Representative & Document;

@Schema()
export class Representative {
  id: Types.ObjectId;
  @Prop({required: true})
  region: string;
  @Prop({required: true, ref: 'User'})
  user: Types.ObjectId

}

export const RepresentativeSchema = SchemaFactory.createForClass(Representative);
