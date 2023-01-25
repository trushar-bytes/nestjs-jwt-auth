import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet'
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(helmet())
    app.enableCors()
    // Swagger document 
    const config = new DocumentBuilder()
        .setTitle('Nestjs Auth Demo')
        .setDescription('APIs of jwt auth')
        .setVersion('1.0')
        .addTag('Jwt Auth')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(4000);
}
bootstrap();
