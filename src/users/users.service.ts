import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserErrorFoundException } from '../error/user-error.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  public async findOneByLogin(login): Promise<UserDocument> {
    const user = await this.usersModel.findOne({ login: login }).exec();
    if (!user) {
      throw new UserErrorFoundException();
    }
    return user;
  }
}
