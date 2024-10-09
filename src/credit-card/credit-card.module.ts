import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreditCardController } from './credit-card.controller';
import { CreditCardProviders } from './credit-card.provider';
import { CreditCardService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CreditCardController],
  providers: [CreditCardService, ...CreditCardProviders],
  exports: [CreditCardService],
})
export class CreditCardModule {}
