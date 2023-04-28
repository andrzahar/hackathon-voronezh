import { IsNotEmpty } from "class-validator";
import { Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Status } from "../../schemas/event.schema";
import { Optional } from "@nestjs/common";

export class EventAddDto {
  time_end: string;
  @IsNotEmpty()
  name:string;
  @Optional()
  shortName?:string;
  @IsNotEmpty()
  description:string;
  time_start: string;
  @Prop({ required: false, ref: 'User' })
  members: Types.ObjectId[];
  @Prop({ required: true, ref: 'User' })
  creator: Types.ObjectId;
  @Prop({required : true, enum : Status, default: Status.Upcoming})
  status: Status;
  @Optional()
  criterions?: string[];
}