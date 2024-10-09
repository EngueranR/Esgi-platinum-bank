import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';
import { bankProviders } from './bank.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [BankController],
  providers: [BankService, ...bankProviders],
  exports: [BankService],
})
export class BankModule {}
