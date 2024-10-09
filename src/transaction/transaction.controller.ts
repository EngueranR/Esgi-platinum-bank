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
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.entity';
import { ITransaction } from './transaction.interface';
import { AuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll(): Promise<Transaction[]> {
    return await this.transactionService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: number): Promise<Transaction> {
    return await this.transactionService.findOne(id);
  }

  @Post()
  async create(@Body() transaction: ITransaction): Promise<Transaction> {
    return await this.transactionService.create(transaction);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: number,
    @Body() transaction: ITransaction,
  ): Promise<Transaction> {
    return await this.transactionService.update(id, transaction);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: number): Promise<number> {
    return await this.transactionService.remove(id);
  }
}
