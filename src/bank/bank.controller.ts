import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BankService } from './bank.service';
import { Bank } from './bank.entity';
import { IBank } from './bank.interface';

@Controller('bank')
export class BankController {
  constructor(private bankService: BankService) {}

  @Get()
  async findAll(): Promise<Bank[]> {
    return await this.bankService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Bank> {
    return await this.bankService.findOne(id);
  }

  @Post()
  async create(@Body() bank: IBank): Promise<Bank> {
    return await this.bankService.create(bank);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() bank: IBank): Promise<Bank> {
    return await this.bankService.update(id, bank);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<number> {
    return await this.bankService.remove(id);
  }
}
