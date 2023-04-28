import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  MethodNotAllowedException,
  Headers,
  Post, Put,
  UseGuards
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserUpdateDto } from "./dto/user-update.dto";
import { UserDeleteDto } from "./dto/user-delete.dto";
import { RegistrationDto } from "../registration/dto/registration.dto";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles-auth.decorator";
import { Role } from "../schemas/user.schema";
import { JwtService } from "@nestjs/jwt";

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  @Get()
  public async getInfo(@Headers() headers) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1]

    const user = this.jwtService.verify(token);
    return await this.usersService.findOneById(user.id)
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
  @Roles(Role.ADMINISTRATOR_FSP, Role.REPRESENTATIVE)
  @Post('/role')
  public async addRole(@Headers() header) {
     try {
       const role = header['role']
       const userId = header['user-id']
       return this.usersService.roles({role: role, userId: userId})
     } catch {
        throw new MethodNotAllowedException()
     }
  }
}
