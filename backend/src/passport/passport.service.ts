import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Passport, PassportDocument } from "../schemas/passport.schema";
import { Model, Types } from "mongoose";
import { PassportCreateDto } from "./dto/passport-create.dto";
import { validateOrReject } from "class-validator";
import { plainToClass } from "class-transformer";
import { PassportUpdateDto } from "./dto/passport-update.dto";

@Injectable()
export class PassportService {
  constructor(@InjectModel(Passport.name) private readonly passportModel: Model<PassportDocument>) {}

  public async create(dto: PassportCreateDto) {
    await validateOrReject(dto)

    const passport = plainToClass(this.passportModel, dto)

    return await passport.save()
  }

  public async update(dto: PassportUpdateDto) {
    await validateOrReject(dto)

    const passport = plainToClass(this.passportModel, dto)
    const passportId = new Types.ObjectId(passport.id)


    return this.passportModel.findByIdAndUpdate(passportId, passport)
  }
}
