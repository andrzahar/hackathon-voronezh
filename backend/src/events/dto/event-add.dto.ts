import { IsNotEmpty } from "class-validator";
import { Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Status } from "../../schemas/event.schema";

export class EventAddDto {
  time_end: string;
  @IsNotEmpty()
  name:string;
  @IsNotEmpty()
  shortName:string;
  @IsNotEmpty()
  description:string;
  time_start: string;
  @Prop({ required: true, ref: 'User' })
  members: Types.ObjectId[];
  @Prop({ required: true, ref: 'User' })
  creator: Types.ObjectId;
  @Prop({required : true, enum : Status, default: Status.Upcoming})
  status: Status;
  @IsNotEmpty()
  criterions: string[];
}