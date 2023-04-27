import { Controller, Get } from "@nestjs/common";
import { EventsService } from "./events.service";

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  public allEvent() {
     return this.eventsService.getAll()
  }
}
