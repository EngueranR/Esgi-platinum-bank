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
import { BankService } from './bank.service';
import { Bank } from './bank.entity';
import { IBank } from './bank.interface';
import { AuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('bank')
export class BankController {
  constructor(private bankService: BankService) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll(): Promise<Bank[]> {
    return await this.bankService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: number): Promise<Bank> {
    return await this.bankService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() bank: IBank): Promise<Bank> {
    return await this.bankService.create(bank);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: number, @Body() bank: IBank): Promise<Bank> {
    return await this.bankService.update(id, bank);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: number): Promise<number> {
    return await this.bankService.remove(id);
  }
}
