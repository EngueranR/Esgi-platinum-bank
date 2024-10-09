import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DAB } from './dab.entity';
import { IDAB } from './dab.interface';
import { DABService } from './dab.service';

@Controller('dab')
export class DABController {
  constructor(private dabService: DABService) {}

  @Get()
  async findAll(): Promise<DAB[]> {
    return await this.dabService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<DAB> {
    return await this.dabService.findOne(id);
  }

  @Post()
  async create(@Body() dab: IDAB): Promise<DAB> {
    return await this.dabService.create(dab);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dab: IDAB): Promise<DAB> {
    return await this.dabService.update(id, dab);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<number> {
    return await this.dabService.remove(id);
  }
}
