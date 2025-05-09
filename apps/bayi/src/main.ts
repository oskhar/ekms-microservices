import { NestFactory } from '@nestjs/core';
import { BayiModule } from './bayi.module';

async function bootstrap() {
  const app = await NestFactory.create(BayiModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
