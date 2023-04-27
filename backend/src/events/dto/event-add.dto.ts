import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Status } from "../../schemas/event.schema";
import { Transform } from "class-transformer";

export class EventAddDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsDate()
  @Transform(({ value }) => value instanceof Date ? value.toISOString() : value)
  time_end: Date;
  @IsDate()
  @Transform(({ value }) => value instanceof Date ? value.toISOString() : value)
  time_start: Date;
  @Prop({ required: true, ref: 'User' })
  members?: Types.ObjectId[];
  @Prop({ required: true, ref: 'User' })
  creator: Types.ObjectId;
  @Prop({required : true, enum : Status, default: Status.Upcoming})
  status: Status;
}