import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  MethodNotAllowedException,
  Patch,
  Post,
  Request
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserUpdateDto } from "./dto/user-update.dto";
import { UserDeleteDto } from "./dto/user-delete.dto";
import { RegistrationDto } from "../registration/dto/registration.dto";

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getInfo(@Request() req) {
    return await this.usersService.findOneByMail(req.user.mail)
  }

  @Post('/create')
  public async createUser(@Body() dto: RegistrationDto) {
    return this.usersService.create(dto)
  }

  @Patch('/update')
  public async updateUser(@Body() dto: UserUpdateDto) {
    return null
  }

  @Delete('/delete')
  public async deleteUser(@Body() dto: UserDeleteDto) {
    return await this.usersService.delete(dto)
  }

  @HttpCode(200)
  @Post('/role')
  public async addRole(@Request() req) {
     try {
       return this.usersService.roles({role: req.user.role, userId: req.user.id})
     } catch {
        throw new MethodNotAllowedException()
     }
  }
}
