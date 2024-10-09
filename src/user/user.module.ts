import { Module, forwardRef } from '@nestjs/common';

import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.provider';
import { BankAccountModule } from 'src/bank-account/bank-account.module';

@Module({
  imports: [DatabaseModule, BankAccountModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})
export class UserModule {}
