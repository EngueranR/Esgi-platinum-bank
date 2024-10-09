import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccount } from './bank-account.entity';
import { IBankAccount } from './bank-account.interface';

@Controller('bank-account')
export class BankAccountController {
  constructor(private BankAccountService: BankAccountService) {}

  @Get()
  async findAll(): Promise<BankAccount[]> {
    return await this.BankAccountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<BankAccount> {
    return await this.BankAccountService.findOne(id);
  }

  @Post()
  async create(@Body() bankAccount: IBankAccount): Promise<BankAccount> {
    return await this.BankAccountService.create(bankAccount);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() bankAccount: IBankAccount,
  ): Promise<BankAccount> {
    return await this.BankAccountService.update(id, bankAccount);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<number> {
    return await this.BankAccountService.remove(id);
  }
}
