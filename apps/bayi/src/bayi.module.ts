import { Module } from '@nestjs/common';
import { BayiController } from './bayi.controller';
import { BayiService } from './bayi.service';

@Module({
  imports: [],
  controllers: [BayiController],
  providers: [BayiService],
})
export class BayiModule {}
