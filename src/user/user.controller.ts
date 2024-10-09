import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { IUser } from './user.interface';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll(): Promise<User[]> {
    return await this.UserService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.UserService.findOne(id);
  }

  @Post()
  async create(@Body() user: IUser): Promise<User> {
    return await this.UserService.create(user);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: number, @Body() user: IUser): Promise<User> {
    return await this.UserService.update(id, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: number): Promise<number> {
    return await this.UserService.remove(id);
  }
}
