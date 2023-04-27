import { Injectable } from "@nestjs/common";
import { Role, User, UserDocument } from "../schemas/user.schema";
import { Model, Types } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import {
  UserErrorFoundException,
  UserErrorLoginException,
  UserErrorPhoneException, UserErrorRoleException
} from "../error/user-error.exception";
import { validateOrReject } from "class-validator";
import { plainToClass } from "class-transformer";
import { UserDeleteDto } from "./dto/user-delete.dto";
import { RegistrationDto } from "../registration/dto/registration.dto";
import { UserUpdateDto } from "./dto/user-update.dto";
import { RolesAddDto } from "./dto/roles-add.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  public async findOneByMail(mail: string): Promise<UserDocument> {
    const user = await this.usersModel.findOne({ mail: mail }).exec();
    if (!user) {
      throw new UserErrorFoundException();
    }
    return user;
  }

  public async create(dto: RegistrationDto): Promise<UserDocument> {
    await validateOrReject(dto);
    const user = plainToClass(this.usersModel, dto);

    const [existing, existingLogin, existingPhone] = await Promise.all([
      this.usersModel.findOne({
        login: dto.login,
        name: dto.name,
        phone: dto.phone
      }),
      this.usersModel.findOne({ login: dto.login }),
      this.usersModel.findOne({ phone: dto.phone }),
    ]);


    if (existingLogin) {
      throw new UserErrorLoginException();
    }

    if (existingPhone) {
      throw new UserErrorPhoneException();
    }

    if (existing) {
      return existing;
    }

    return user.save();
  }

  public async delete(dto: UserDeleteDto) {
    const user = plainToClass(this.usersModel, dto)

    user.id = new Types.ObjectId(user.id);

    return this.usersModel.findByIdAndDelete(user.id);
  }

  public async update(dto: UserUpdateDto) {
    const user = plainToClass(this.usersModel, dto)

    const userId = new Types.ObjectId(user.id);

    return this.usersModel.findByIdAndUpdate(userId, user, {new: true});
  }

  public async roles(dto: RolesAddDto) {
    const user = await this.findById(new Types.ObjectId(dto.userId))

    if(!user) {
      throw new UserErrorRoleException()
    }

    user.role = dto.role
    return this.usersModel.findByIdAndUpdate(new Types.ObjectId(dto.userId), user);
  }

  private async findById(id: Types.ObjectId): Promise<UserDocument> {
    return this.usersModel.findById(id).exec();
  }

}
