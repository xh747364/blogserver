import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import * as mongoose from 'mongodb';
async function bootstrap() {
  // mongoose.connect('mongodb://localhost:27017/nest-blog-api', {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nestjs博客api')
    .setDescription('第一个nestjs项目')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(2664);
}
bootstrap();
