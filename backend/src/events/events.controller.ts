import { Body, Controller, Get, MethodNotAllowedException, Post, UseGuards } from "@nestjs/common";
import { EventsService } from "./events.service";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { EventAddDto } from "./dto/event-add.dto";

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  public async allEvent() {
     return this.eventsService.getAll()
  }

  @Post()
  @Roles('representative', 'partner')
  @UseGuards(RolesGuard)
  public async createEvent(@Body() dto: EventAddDto) {
     try {
       return await this.eventsService.create(dto)
     } catch {
       throw new MethodNotAllowedException()
     }
  }
}
