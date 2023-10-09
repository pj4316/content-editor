import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AllExceptionsFilter } from './filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,  new FastifyAdapter({ logger: true }));
  app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));
  // If you're using Fastify as your server in NestJS instead of the default express server, you'll need to modify the server to listed on 0.0.0.0.
  // https://www.tomray.dev/nestjs-docker-production
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
