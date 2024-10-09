import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.entity';
import { ITransaction } from './transaction.interface';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get()
  async findAll(): Promise<Transaction[]> {
    return await this.transactionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Transaction> {
    return await this.transactionService.findOne(id);
  }

  @Post()
  async create(@Body() transaction: ITransaction): Promise<Transaction> {
    return await this.transactionService.create(transaction);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() transaction: ITransaction,
  ): Promise<Transaction> {
    return await this.transactionService.update(id, transaction);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<number> {
    return await this.transactionService.remove(id);
  }
}
