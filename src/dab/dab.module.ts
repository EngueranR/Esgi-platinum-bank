import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { dabProviders } from './dab.provider';
import { DABService } from './dab.service';
import { DABController } from './dab.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [DABController],
  providers: [DABService, ...dabProviders],
  exports: [DABService],
})
export class DABModule {}
