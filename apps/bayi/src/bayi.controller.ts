import { Controller, Get } from '@nestjs/common';
import { BayiService } from './bayi.service';

@Controller()
export class BayiController {
  constructor(private readonly bayiService: BayiService) {}

  @Get()
  getHello(): string {
    return this.bayiService.getHello();
  }
}
