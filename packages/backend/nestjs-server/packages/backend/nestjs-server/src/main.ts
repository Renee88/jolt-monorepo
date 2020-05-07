import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SessionsModule } from './sessions/sessions.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: "http://localhost:4000"});
  await app.listen(3000);
}

async function graphql() {
  const app = await NestFactory.create(SessionsModule)
  app.enableCors({origin: "http://localhost:4000"});
  await app.listen(5000)
}

graphql();
bootstrap();
