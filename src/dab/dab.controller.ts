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
import { DAB } from './dab.entity';
import { IDAB } from './dab.interface';
import { DABService } from './dab.service';
import { AuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('dab')
export class DABController {
  constructor(private dabService: DABService) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll(): Promise<DAB[]> {
    return await this.dabService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: number): Promise<DAB> {
    return await this.dabService.findOne(id);
  }

  @Post()
  async create(@Body() dab: IDAB): Promise<DAB> {
    return await this.dabService.create(dab);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: number, @Body() dab: IDAB): Promise<DAB> {
    return await this.dabService.update(id, dab);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: number): Promise<number> {
    return await this.dabService.remove(id);
  }
}
