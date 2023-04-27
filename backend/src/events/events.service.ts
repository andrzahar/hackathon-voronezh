import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Event, EventDocument } from "../schemas/event.schema";
import { Model, Types } from "mongoose";
import { validateOrReject } from "class-validator";
import { EventAddDto } from "./dto/event-add.dto";
import { plainToClass } from "class-transformer";
import { EventUpdateDto } from "./dto/event-update.dto";

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private readonly eventModel: Model<EventDocument> ) {}

  public async getAll() {
    return this.eventModel.find().
    populate(['eventMember']).
    exec()
  }

  public async create(dto: EventAddDto) {
    await validateOrReject(dto);

    const event = plainToClass(this.eventModel, dto)
    return event.save()
  }

  public async update(dto: EventUpdateDto) {
    await validateOrReject(dto)

    const updateEvent = plainToClass(this.eventModel, dto)

    return this.eventModel.findByIdAndUpdate(new Types.ObjectId(dto.id), updateEvent)
  }

}
