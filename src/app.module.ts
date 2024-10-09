import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { BankModule } from './bank/bank.module';
import { CreditCardModule } from './credit-card/credit-card.module';
import { DABModule } from './dab/dab.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    DatabaseModule,
    BankAccountModule,
    BankModule,
    CreditCardModule,
    DABModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
