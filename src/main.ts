import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppConfigService } from './core'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  const configService = app.get(AppConfigService)
  await app.listen(configService.portNumber)
}
bootstrap()
