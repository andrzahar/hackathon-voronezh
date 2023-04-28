import { Injectable } from "@nestjs/common";
import { User, UserDocument } from "../schemas/user.schema";
import { Model, Types } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UserErrorFoundException, UserErrorRoleException } from "../error/user-error.exception";
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

  public async findOneById(id: string): Promise<UserDocument> {
    const user = await this.usersModel.findById(id).exec();
    if (!user) {
      throw new UserErrorFoundException();
    }
    return user;
  }

  public async create(dto: RegistrationDto): Promise<UserDocument> {
    await validateOrReject(dto);
    const user = plainToClass(this.usersModel, dto);


    const existing: UserDocument = await this.usersModel.findOne({ mail: dto.mail, });


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

    const updateUser = await this.usersModel.updateOne({_id: dto.userId}, {$set: dto});

    console.table(updateUser);

    return this.usersModel.findById(dto.userId)
  }

  public async roles(dto: RolesAddDto) {
    const updateUser = await this.usersModel.updateOne({_id: dto.userId}, {$set: dto});

    if(!updateUser) {
      throw new UserErrorRoleException()
    }

    return this.usersModel.findById(dto.userId)
  }

  private async findById(id: Types.ObjectId): Promise<UserDocument> {
    return this.usersModel.findById(id).exec();
  }

}
