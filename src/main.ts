import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  const config = new DocumentBuilder()
      .setTitle('glory')
      .setDescription('Something desc')
      .setVersion('кусок говна')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
