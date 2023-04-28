import { Body, Controller, Get, MethodNotAllowedException, Post, Put, UseGuards } from "@nestjs/common";
import { EventsService } from "./events.service";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { EventAddDto } from "./dto/event-add.dto";
import { EventUpdateDto } from "./dto/event-update.dto";
import { Public } from "../auth/auth.guard";

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Public()
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

  @Put()
  @Roles('representative', 'partner')
  @UseGuards(RolesGuard)
  public async updateEvent(@Body() dto: EventUpdateDto) {
    try {
      return await this.eventsService.update(dto);
    } catch {
      throw new MethodNotAllowedException()
    }
  }
}
