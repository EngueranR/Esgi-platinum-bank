import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { CreditCardController } from './credit-card.controller';
import { CreditCardProviders } from './credit-card.provider';
import { CreditCardService } from './user.service';

@Module({
  imports: [forwardRef(() => AuthModule), DatabaseModule],
  controllers: [CreditCardController],
  providers: [CreditCardService, ...CreditCardProviders],
  exports: [CreditCardService],
})
export class CreditCardModule {}
