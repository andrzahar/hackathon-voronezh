import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Event, EventDocument } from "../schemas/event.schema";
import { Model } from "mongoose";

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private readonly eventModel: Model<EventDocument> ) {}

  public async getAll() {
    return this.eventModel.find().
    populate(['eventMember']).
    exec()
  }
}
