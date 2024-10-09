import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreditCardController } from './credit-card.controller';
import { CreditCardProviders } from './credit-card.provider';
import { CreditCardService } from './credit-card.service';
import { BankAccountModule } from 'src/bank-account/bank-account.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [forwardRef(() => AuthModule), DatabaseModule, BankAccountModule],
  controllers: [CreditCardController],
  providers: [CreditCardService, ...CreditCardProviders],
  exports: [CreditCardService],
})
export class CreditCardModule {}
