import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TransactionProviders } from './transaction.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [TransactionController],
  providers: [TransactionService, ...TransactionProviders],
  exports: [TransactionService],
})
export class TransactionModule {}
