import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsDate, IsPassportNumber, Matches } from "class-validator";
import { EventMemberDocument } from "./eventMember.schema";

export type PassportDocument = Passport & Document;

@Schema()
export class Passport {
  id: Types.ObjectId;
  @Prop({ required: true })
  @IsPassportNumber('RU')
  number: string;
  @Prop({ required: true })
  nameOwner: string;
  @Prop({ required: true })
  companyName: string;
  @Prop({ required: true})
  @Matches(/^(\d{2})-(\d{2})-(\d{4})$/)
  issueDate: string;
  @Prop({required: true})
  @Matches(/^\d{3}-\d{3}$/)
  companyCode: string;
}

export const PassportSchema = SchemaFactory.createForClass(Passport);
