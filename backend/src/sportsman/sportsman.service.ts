import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
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

  public async info(userId:Types.ObjectId) {
    if(userId===null) {
      throw new SportsmanErrorExceptionInfoNotFound()
    }
    return this.sportsmanModel.find({user: new Types.ObjectId(userId)}).populate('passport').exec()
  }

  public async create(dto: SportsmanCreateDto) {

    const existing = this.info(dto.user)

    if(existing) {
       return this.update(dto)
    }

    const passportDTO = plainToClass(PassportCreateDto, dto);
    const passport = await this.passportService.create(passportDTO);
    const passportId = new Types.ObjectId(passport.id);

    console.table(passportDTO)

    const sportsman = plainToClass(this.sportsmanModel, dto)
    sportsman.user = new Types.ObjectId(dto.user)
    sportsman.passport = new Types.ObjectId(passportId)

    console.table(sportsman)

    return await sportsman.save()
  }

  private async update(dto: SportsmanUpdateDto) {
    const updateSportsman = await this.sportsmanModel.updateOne({_id: dto.userId}, {$set: dto});

    console.table(updateSportsman)

    return this.sportsmanModel.findById(dto.userId)
  }
}
