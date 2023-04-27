import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { SportsmanService } from "./sportsman.service";
import {
  SportsmanErrorExceptionInfoMethodNotAllowed,
  SportsmanErrorExceptionUpdate
} from "../error/sportsman-error.exception";
import { SportsmanUpdateDto } from "./dto/sportsman-update.dto";
import { SportsmanCreateDto } from "./dto/sportsman-create.dto";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles-auth.decorator";

@Controller('sportsman')
export class SportsmanController {
  constructor(private readonly sportsmanService:SportsmanService) {}

  @Get('/info')
  public async info(@Request() req) {
     try {
       return await this.sportsmanService.info(req.user.id)
     } catch {
       throw new SportsmanErrorExceptionInfoMethodNotAllowed()
     }
  }

  @Post()
  @UseGuards(RolesGuard)
  @Roles('Представитель региональной Фередрации')
  public async create(@Request() req, @Body() dto: SportsmanCreateDto) {
    try {
      return await this.sportsmanService.create(req.user.id, dto)
    } catch {
      throw new SportsmanErrorExceptionUpdate()
    }
  }
}
