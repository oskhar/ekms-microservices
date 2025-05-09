import { Injectable } from '@nestjs/common';

@Injectable()
export class BayiService {
  getHello(): string {
    return 'Hello World!';
  }
}
