import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Status } from "../../schemas/event.schema";

export class EventUpdateDto {
  @IsString()
  @IsNotEmpty()
  id: string
  @IsDate()
  time_end?: Date
  @IsDate()
  time_start?: Date;
  @Prop({ required: true, ref: 'User' })
  members: Types.ObjectId[];
  @Prop({ required: true, ref: 'User' })
  creator: Types.ObjectId;
  @Prop({required : true, enum : Status, default: Status.Upcoming})
  status: Status;
}