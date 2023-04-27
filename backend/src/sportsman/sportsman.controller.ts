import { Body, Controller, Get, Post, Request } from "@nestjs/common";
import { SportsmanService } from "./sportsman.service";
import {
  SportsmanErrorExceptionInfoMethodNotAllowed,
  SportsmanErrorExceptionUpdate
} from "../error/sportsman-error.exception";
import { SportsmanUpdateDto } from "./dto/sportsman-update.dto";

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

  @Post('/update')
  public async update(@Request() req, @Body() dto: SportsmanUpdateDto) {
    try {
      return await this.sportsmanService.update(req.user.id, dto)
    } catch {
      throw new SportsmanErrorExceptionUpdate()
    }
  }
}
