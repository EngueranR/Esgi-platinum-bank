import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BankAccountController } from './bank-account.controller';
import { BankAccountService } from './bank-account.service';
import { bankAccountProviders } from './bank-account.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [BankAccountController],
  providers: [BankAccountService, ...bankAccountProviders],
  exports: [BankAccountService],
})
export class BankAccountModule {}
