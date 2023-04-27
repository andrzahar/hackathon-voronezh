import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Passport } from "../schemas/passport.schema";
import { Model, Types } from "mongoose";
import { Sportsman, SportsmanDocument } from "../schemas/sportsman.dto";
import { SportsmanErrorExceptionInfoNotFound } from "../error/sportsman-error.exception";
import { SportsmanCreateDto } from "./dto/sportsman-create.dto";
import { plainToClass } from "class-transformer";
import { PassportCreateDto } from "../passport/dto/passport-create.dto";
import { RegistrationDto } from "../registration/dto/registration.dto";
import { PassportService } from "../passport/passport.service";
import { SportsmanUpdateDto } from "./dto/sportsman-update.dto";

@Injectable()
export class SportsmanService {
  constructor(
    @InjectModel(Sportsman.name) private readonly sportsmanModel: Model<SportsmanDocument>,
    private readonly passportService: PassportService,
    ) {}

  public async info(userId:string) {
    if(userId===null) {
      throw new SportsmanErrorExceptionInfoNotFound()
    }
    return this.sportsmanModel.find({user: new Types.ObjectId(userId)}).exec()
  }

  public async create(userId:string, dto: SportsmanCreateDto) {

    const existing = this.info(userId)

    if(existing) {
      return existing
    }

    const passportDTO = plainToClass(PassportCreateDto, RegistrationDto);
    const passport = await this.passportService.create(passportDTO);
    const passportId = new Types.ObjectId(passport.id);

    const sportsman = plainToClass(this.sportsmanModel, dto)
    sportsman.user = new Types.ObjectId(userId)
    sportsman.passport = new Types.ObjectId(passportId)

    return await sportsman.save()
  }

  public async update(userId:string, dto: SportsmanUpdateDto) {
     const updateSportsman = plainToClass(this.sportsmanModel, dto)

     return this.sportsmanModel.findByIdAndUpdate(new Types.ObjectId(userId), updateSportsman)
  }
}
