import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type RepresentativeDocument = Representative & Document;

@Schema()
export class Representative {
  id: Types.ObjectId;
  @Prop({required: true})
  region: string;

}

export const RepresentativeSchema = SchemaFactory.createForClass(Representative);
