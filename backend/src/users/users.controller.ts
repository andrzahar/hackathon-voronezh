import { Body, Controller, Delete, Get, Patch, Post, Request } from "@nestjs/common";
import { UsersService } from "./users.service";
import { RegistrationDto } from "../registration/dto/registration.dto";
import { UserUpdateDto } from "./dto/user-update.dto";
import { UserDeleteDto } from "./dto/user-delete.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/info')
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
}
