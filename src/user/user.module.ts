import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from './../auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.provider';

@Module({
  imports: [forwardRef(() => AuthModule), DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})
export class UserModule {}
