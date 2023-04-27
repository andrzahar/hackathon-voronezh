import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../schemas/user.schema';
import { Model, Types } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import {
  UserErrorFoundException,
  UserErrorLoginException,
  UserErrorPhoneException
} from "../error/user-error.exception";
import { validateOrReject } from "class-validator";
import { plainToClass } from "class-transformer";
import { UserDeleteDto } from "./dto/user-delete.dto";
import { RegistrationDto } from "../registration/dto/registration.dto";
import { UserUpdateDto } from "./dto/user-update.dto";
import { PassportService } from "../passport/passport.service";
import { PassportCreateDto } from "../passport/dto/passport-create.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
    private readonly passportService : PassportService
  ) {}

  public async findOneByMail(mail: string): Promise<UserDocument> {
    const user = await this.usersModel.findOne({ mail: mail }).exec();
    if (!user) {
      throw new UserErrorFoundException();
    }
    return user;
  }

  //TODO: добавить два модуля отвечающих за паспорт и за ОМС
  public async create(dto: RegistrationDto): Promise<UserDocument> {
    await validateOrReject(dto);
    const user = plainToClass(this.usersModel, dto);

    const [existing, existingLogin, existingPhone] = await Promise.all([
      this.usersModel.findOne({
        login: dto.login,
        name: dto.name,
        phone: dto.phone
      }).populate('passport', 'oms'),
      this.usersModel.findOne({ login: dto.login }),
      this.usersModel.findOne({ phone: dto.phone }),
    ]);

    const passportDTO = plainToClass(PassportCreateDto, RegistrationDto)
    const passport = await this.passportService.create(passportDTO)
    const passportId = new Types.ObjectId(passport.id)

    if (existingLogin) {
      throw new UserErrorLoginException();
    }

    if (existingPhone) {
      throw new UserErrorPhoneException();
    }

    if (existing) {
      return existing;
    }

    user.passport = passportId



    return user.save();
  }

  public async delete(dto: UserDeleteDto) {
    const user = plainToClass(this.usersModel, dto)

    user.id = new Types.ObjectId(user.id);

    return this.usersModel.findByIdAndDelete(user.id);
  }

  public async update(dto: UserUpdateDto) {
    const user = plainToClass(this.usersModel, dto)

    user.id = new Types.ObjectId(user.id);

    return this.usersModel.findByIdAndUpdate(user.id, user, {new: true});
  }

}
