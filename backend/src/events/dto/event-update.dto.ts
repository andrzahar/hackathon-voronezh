import { IsNotEmpty, IsString } from "class-validator";
import { Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Status } from "../../schemas/event.schema";
import { Optional } from "@nestjs/common";

export class EventUpdateDto {
  @IsString()
  @IsNotEmpty()
  id: string
  @IsNotEmpty()
  name?:string;
  @Optional()
  shortName?:string;
  @IsNotEmpty()
  description?:string;
  time_end?: string
  time_start?: string;
  @Prop({ required: true, ref: 'User' })
  members: Types.ObjectId[];
  @Prop({ required: true, ref: 'User' })
  creator: Types.ObjectId;
  @Prop({required : true, enum : Status, default: Status.Upcoming})
  status: Status;
  @Optional()
  criterions?: string[];
}