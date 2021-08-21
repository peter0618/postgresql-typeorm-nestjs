import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = app.get<Logger, Logger>(Logger);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  const port = process.env.APP_PORT || 3000;

  await app.listen(port, () => {
    logger.setContext('APP');
    logger.log(`Server is listening on : ${port}`);
  });
}

bootstrap();
