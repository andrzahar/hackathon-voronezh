import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  MethodNotAllowedException,
  Patch,
  Post, Put,
  Request, UseGuards
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserUpdateDto } from "./dto/user-update.dto";
import { UserDeleteDto } from "./dto/user-delete.dto";
import { RegistrationDto } from "../registration/dto/registration.dto";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles-auth.decorator";

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getInfo(@Request() req) {
    return await this.usersService.findOneByMail(req.user.mail)
  }

  @HttpCode(200)
  @Post()
  public async createUser(@Body() dto: RegistrationDto) {
    try {
      return this.usersService.create(dto)
    } catch {
      throw new MethodNotAllowedException()
    }
  }

  @HttpCode(200)
  @Put()
  public async updateUser(@Body() dto: UserUpdateDto) {
    try {
      return await this.usersService.update(dto)
    } catch {
      throw new MethodNotAllowedException()
    }
  }

  @Delete()
  public async deleteUser(@Body() dto: UserDeleteDto) {
    try {
      return this.usersService.delete(dto)
    } catch {
      throw new MethodNotAllowedException()
    }
  }

  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles('Администратор ФСП')
  @Post('/role')
  public async addRole(@Request() req) {
     try {
       return this.usersService.roles({role: req.user.role, userId: req.user.id})
     } catch {
        throw new MethodNotAllowedException()
     }
  }
}
