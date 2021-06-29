import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// "@types/jest": "^26.0.22", retirei essa bosta

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
