import { Body, Controller, Get, Headers, MethodNotAllowedException, Post, Put, UseGuards } from "@nestjs/common";
import { EventsService } from "./events.service";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { EventAddDto } from "./dto/event-add.dto";
import { EventUpdateDto } from "./dto/event-update.dto";
import { Public } from "../auth/auth.guard";
import { JwtService } from "@nestjs/jwt";

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService, private jwtService: JwtService) {}

  @Public()
  @Get()
  public async allEvent() {
     return this.eventsService.getAll()
  }

  @Get('/creator')
  public async getEventByCreator(@Headers() headers) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1]

    const user = this.jwtService.verify(token);
    return this.eventsService.getForUser(user.id)
  }

  @Post()
  @Roles('representative', 'partner', 'administrator')
  @UseGuards(RolesGuard)
  public async createEvent(@Body() dto: EventAddDto) {
     try {
       return await this.eventsService.create(dto)
     } catch {
       throw new MethodNotAllowedException()
     }
  }

  @Put()
  @Roles('representative', 'partner', 'administrator')
  @UseGuards(RolesGuard)
  public async updateEvent(@Body() dto: EventUpdateDto) {
    try {
      return await this.eventsService.update(dto);
    } catch {
      throw new MethodNotAllowedException()
    }
  }
}
