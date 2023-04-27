import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
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


  //TODO: поменять роли на соответствующие
  @Post('/create')
  @Roles('Администратор ФСП', 'Спортсмен')
  @UseGuards(RolesGuard)
  public async createEvent(@Body() dto: EventAddDto) {
     return await this.eventsService.create(dto)
  }
}
